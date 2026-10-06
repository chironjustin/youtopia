export type AnimalSound = 'cat' | 'dog' | 'elephant';

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;

  audioContext ??= new window.AudioContext();
  return audioContext;
}

function voice(
  context: AudioContext,
  type: OscillatorType,
  start: number,
  frequency: number,
  endFrequency: number,
  duration: number,
  peak: number,
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(endFrequency, 1), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peak, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

export function playAnimalSound(animal: AnimalSound) {
  const context = getAudioContext();
  if (!context) return;

  void context.resume();
  const start = context.currentTime + 0.01;

  if (animal === 'cat') {
    voice(context, 'sine', start, 680, 360, 0.42, 0.12);
    voice(context, 'triangle', start + 0.16, 430, 780, 0.28, 0.075);
    return;
  }

  if (animal === 'dog') {
    voice(context, 'square', start, 180, 92, 0.13, 0.09);
    voice(context, 'square', start + 0.16, 155, 76, 0.18, 0.1);
    return;
  }

  voice(context, 'sawtooth', start, 120, 510, 0.46, 0.065);
  voice(context, 'sine', start, 88, 230, 0.5, 0.1);
}
