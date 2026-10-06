export type AnimalSound = 'cat' | 'dog' | 'elephant';

const animalSoundFiles: Record<AnimalSound, string> = {
  elephant: '/assets/sounds/elephant.m4a',
  dog: '/assets/sounds/dog.m4a',
  cat: '/assets/sounds/cat.m4a',
};

export function playAnimalSound(animal: AnimalSound) {
  if (typeof Audio === 'undefined') return;

  const sound = new Audio(animalSoundFiles[animal]);
  sound.preload = 'auto';
  sound.volume = 0.85;
  void sound.play().catch(() => {
    // Browsers only allow audio after a user interaction; every call site is a click handler.
  });
}
