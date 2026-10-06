export type AnimalSound = 'cat' | 'dog' | 'duck';

const animalSoundFiles: Record<AnimalSound, string> = {
  dog: '/assets/sounds/dog.mp3',
  duck: '/assets/sounds/duck.mp3',
  cat: '/assets/sounds/cat.mp3',
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
