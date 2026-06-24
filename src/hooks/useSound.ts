import { useCallback } from "react";

// سياق صوتي مشترك واحد (الآيفون يمنع إنشاء سياقات متعددة ويبدأها معلّقة)
let _sharedAC: AudioContext | null = null;

function ctx(): AudioContext | null {
  try {
    if (!_sharedAC) {
      _sharedAC = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // الآيفون يبدأ السياق "معلّقاً" — نستأنفه (يعمل لأنه يُستدعى بعد لمسة المستخدم)
    if (_sharedAC.state === "suspended") {
      _sharedAC.resume().catch(() => {});
    }
    return _sharedAC;
  } catch {
    return null;
  }
}

// فتح/استئناف الصوت عند أول تفاعل (يُستدعى مرة واحدة من التطبيق)
export function unlockAudio() {
  try {
    const ac = ctx();
    if (ac && ac.state === "suspended") ac.resume().catch(() => {});
  } catch { /* ignore */ }
}

/**
 * Bell/chime tone — sounds like a soft glockenspiel or marimba bar.
 * Uses exponential decay (natural bell physics) + harmonics layering.
 */
function bell(
  ac: AudioContext,
  freq: number,
  start: number,
  vol = 0.10,
  decay = 0.55
) {
  // Fundamental (sine — pure, warm)
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(vol, start + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + decay);
  osc.start(start);
  osc.stop(start + decay + 0.01);

  // 2nd harmonic — adds "metallic" brightness, very soft
  const osc2 = ac.createOscillator();
  const gain2 = ac.createGain();
  osc2.connect(gain2);
  gain2.connect(ac.destination);
  osc2.type = "sine";
  osc2.frequency.value = freq * 2.756; // slightly inharmonic like real bells
  gain2.gain.setValueAtTime(0, start);
  gain2.gain.linearRampToValueAtTime(vol * 0.28, start + 0.003);
  gain2.gain.exponentialRampToValueAtTime(0.0001, start + decay * 0.55);
  osc2.start(start);
  osc2.stop(start + decay * 0.55 + 0.01);
}

/**
 * Soft pad note — warm sine with slow attack/release, like a muffled keyboard.
 */
function pad(
  ac: AudioContext,
  freq: number,
  start: number,
  dur: number,
  vol = 0.055
) {
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(vol, start + 0.04);
  gain.gain.setValueAtTime(vol, start + dur - 0.08);
  gain.gain.linearRampToValueAtTime(0, start + dur);
  osc.start(start);
  osc.stop(start + dur + 0.01);
}

export function useSound() {

  /**
   * ✅ CORRECT — three soft ascending glockenspiel bells (C5→E5→G5)
   * backed by a warm major-chord pad. Feels like a gentle reward chime.
   */
  const playCorrect = useCallback(() => {
    const ac = ctx();
    if (!ac) return;
    const t = ac.currentTime;

    // Three rising bell notes (C5, E5, G5) — like a wind chime
    bell(ac, 523.25, t,        0.10, 0.60); // C5
    bell(ac, 659.25, t + 0.11, 0.09, 0.55); // E5
    bell(ac, 783.99, t + 0.22, 0.10, 0.65); // G5

    // Warm pad underneath — major chord (C4 + E4 + G4)
    pad(ac, 261.63, t, 0.55, 0.045); // C4
    pad(ac, 329.63, t, 0.55, 0.035); // E4
    pad(ac, 392.00, t, 0.55, 0.030); // G4

    
  }, []);

  /**
   * ❌ WRONG — two soft descending muted bells (G4→E4), very gentle.
   * No harshness — empathetic, like a forgiving "hmm, not quite".
   */
  const playWrong = useCallback(() => {
    const ac = ctx();
    if (!ac) return;
    const t = ac.currentTime;

    // Two descending soft bells — quiet and forgiving
    bell(ac, 392.00, t,        0.08, 0.45); // G4
    bell(ac, 329.63, t + 0.12, 0.07, 0.40); // E4

    // Very soft low pad to fill space
    pad(ac, 196.00, t, 0.45, 0.035); // G3

    
  }, []);

  /**
   * 🔥 COMBO — bright upward cascade of four bells, energetic but not harsh.
   * Like coins falling in an arcade game.
   */
  const playCombo = useCallback(() => {
    const ac = ctx();
    if (!ac) return;
    const t = ac.currentTime;

    // Rapid ascending bells — C5 E5 G5 C6
    bell(ac, 523.25, t,        0.11, 0.40); // C5
    bell(ac, 659.25, t + 0.07, 0.11, 0.38); // E5
    bell(ac, 783.99, t + 0.14, 0.12, 0.38); // G5
    bell(ac, 1046.5, t + 0.21, 0.13, 0.50); // C6

    // Warm pad punch on beat
    pad(ac, 261.63, t, 0.30, 0.05);
    pad(ac, 392.00, t, 0.30, 0.04);

    
  }, []);

  /**
   * 🎉 COMPLETE — triumphant fanfare using a 6-note ascending melody,
   * all bells + warm chord support. Celebratory but not overwhelming.
   */
  const playComplete = useCallback(() => {
    const ac = ctx();
    if (!ac) return;
    const t = ac.currentTime;

    // Ascending fanfare: C5 D5 E5 G5 C6 (with pause) → final G6 shimmer
    const melody: [number, number][] = [
      [523.25, 0],    // C5
      [587.33, 0.13], // D5
      [659.25, 0.24], // E5
      [783.99, 0.35], // G5
      [1046.5, 0.48], // C6
    ];
    melody.forEach(([f, off]) => bell(ac, f, t + off, 0.11, 0.55));

    // Final high shimmer — two bells together
    bell(ac, 1318.51, t + 0.68, 0.08, 0.70); // E6
    bell(ac, 1567.98, t + 0.72, 0.07, 0.65); // G6

    // Full warm chord pad underneath
    pad(ac, 261.63, t, 0.85, 0.055); // C4
    pad(ac, 329.63, t, 0.85, 0.045); // E4
    pad(ac, 392.00, t, 0.85, 0.040); // G4
    pad(ac, 523.25, t + 0.45, 0.45, 0.035); // C5

    
  }, []);

  /**
   * 🌟 STREAK — quick three-note rising sparkle (G5→B5→D6)
   */
  const playStreak = useCallback(() => {
    const ac = ctx();
    if (!ac) return;
    const t = ac.currentTime;
    bell(ac, 783.99,  t,        0.09, 0.35); // G5
    bell(ac, 987.77,  t + 0.09, 0.09, 0.33); // B5
    bell(ac, 1174.66, t + 0.18, 0.10, 0.38); // D6
    
  }, []);

  return { playCorrect, playWrong, playCombo, playComplete, playStreak };
}
