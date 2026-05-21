"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AudioSynth() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  
  // Node references for cleanup
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneOsc2Ref = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  const melodyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const melodyActiveRef = useRef(false);

  const toggleSynth = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  const startDrone = () => {
    try {
      // 1. Create AudioContext (resume if suspended)
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // 2. Master Gain (soft volume to be polite and gorgeous)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 3. Stereo Space Delay & Reverb simulator
      const delayNode = ctx.createDelay();
      delayNode.delayTime.value = 0.6; // beautiful slow echo
      const feedbackNode = ctx.createGain();
      feedbackNode.gain.value = 0.45; // infinite fading space tail

      delayNode.connect(feedbackNode);
      feedbackNode.connect(delayNode);
      delayNode.connect(masterGain);

      // 4. Low-pass Filter for that warm retro tape wave
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.Q.setValueAtTime(5, ctx.currentTime);
      filter.connect(masterGain);
      filter.connect(delayNode);
      filterRef.current = filter;

      // 5. LFO to sweep filter frequency for movement
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.08; // extremely slow sweep (8 seconds per wave)
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 250; // modulate filter between 200Hz and 700Hz
      
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      lfoRef.current = lfo;

      // 6. Deep Base Drone Oscillator 1 (Warm Triangle Low C, ~65.4Hz)
      const osc1 = ctx.createOscillator();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(65.41, ctx.currentTime); // C2
      
      // Detuned oscillator 2 for that iconic chorused stereo width
      const osc2 = ctx.createOscillator();
      osc2.type = "sawtooth";
      osc2.frequency.setValueAtTime(65.71, ctx.currentTime); // slightly detuned
      
      // Separate gains to blend oscillators
      const osc1Gain = ctx.createGain();
      osc1Gain.gain.value = 0.7;
      const osc2Gain = ctx.createGain();
      osc2Gain.gain.value = 0.15; // low sawtooth blend avoids harshness

      osc1.connect(osc1Gain);
      osc2.connect(osc2Gain);
      
      osc1Gain.connect(filter);
      osc2Gain.connect(filter);

      osc1.start();
      osc2.start();

      droneOscRef.current = osc1;
      droneOsc2Ref.current = osc2;

      // 7. Soft Ambient Pentatonic Sequencer
      melodyActiveRef.current = true;
      playMelody(ctx, filter);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Failed to initialize Web Audio Synth:", e);
    }
  };

  // Pentatonic melodies (C-Major pentatonic: C, D, E, G, A)
  const notes = [130.81, 146.83, 164.81, 196.00, 220.00, 261.63, 293.66, 329.63, 392.00, 440.00]; // C3 -> A4

  const playMelody = (ctx: AudioContext, destination: AudioNode) => {
    if (!melodyActiveRef.current) return;

    try {
      const playNote = () => {
        if (!melodyActiveRef.current || ctx.state === "suspended") return;

        // Choose random pentatonic note
        const noteFreq = notes[Math.floor(Math.random() * notes.length)];
        
        // Triangle wave for smooth chiptune/retro bell sound
        const osc = ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0, ctx.currentTime);
        // Soft envelope: attack and decay
        oscGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.1);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0);

        osc.connect(oscGain);
        oscGain.connect(destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 3.2);

        // Schedule next note with a beautiful random delay (2.5 - 5 seconds)
        const nextTime = Math.random() * 2500 + 2500;
        melodyTimeoutRef.current = setTimeout(playNote, nextTime);
      };

      // Trigger first note
      playNote();
    } catch (error) {
      console.warn("Melody sequencer encountered an error", error);
    }
  };

  const stopDrone = () => {
    melodyActiveRef.current = false;
    if (melodyTimeoutRef.current) clearTimeout(melodyTimeoutRef.current);
    
    try {
      if (droneOscRef.current) {
        droneOscRef.current.stop();
        droneOscRef.current.disconnect();
      }
      if (droneOsc2Ref.current) {
        droneOsc2Ref.current.stop();
        droneOsc2Ref.current.disconnect();
      }
      if (lfoRef.current) {
        lfoRef.current.stop();
        lfoRef.current.disconnect();
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    } catch (e) {
      // Ignored if already cleaned
    }

    droneOscRef.current = null;
    droneOsc2Ref.current = null;
    lfoRef.current = null;
    audioCtxRef.current = null;
    setIsPlaying(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      melodyActiveRef.current = false;
      if (melodyTimeoutRef.current) clearTimeout(melodyTimeoutRef.current);
      if (droneOscRef.current) {
        try {
          droneOscRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSynth}
      aria-label="Toggle Synthwave Ambience"
      className="relative group flex items-center justify-center p-2 rounded-full border border-current text-xs md:text-sm font-bold tracking-wider hover:bg-white/10 active:scale-95 transition-all gap-2 interactive-cursor bg-black/20"
      style={{
        borderColor: isPlaying ? "#00f5d4" : "currentColor",
        color: isPlaying ? "#00f5d4" : "currentColor",
        boxShadow: isPlaying ? "0 0 10px rgba(0,245,212,0.3)" : "none"
      }}
    >
      {isPlaying ? (
        <>
          <div className="flex gap-0.5 items-end h-3 w-4">
            <span className="w-0.5 bg-[#00f5d4] animate-[bounce_0.8s_infinite] h-full" />
            <span className="w-0.5 bg-[#00f5d4] animate-[bounce_0.6s_infinite_0.2s] h-3/4" />
            <span className="w-0.5 bg-[#00f5d4] animate-[bounce_0.7s_infinite_0.1s] h-1/2" />
            <span className="w-0.5 bg-[#00f5d4] animate-[bounce_0.9s_infinite_0.3s] h-3/4" />
          </div>
          <span className="text-[10px] hidden md:inline text-neon-teal">AMBENCE ACTIVE</span>
        </>
      ) : (
        <>
          <Music size={14} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[10px] hidden md:inline text-muted">PLAY AMBIENCE</span>
        </>
      )}
    </button>
  );
}
