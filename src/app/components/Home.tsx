import { Link } from 'react-router';
import { playAnimalSound, type AnimalSound } from '../lib/animalSounds';

const folders = [
  { label: 'buy-merch.exe', to: '/merch', position: 'merch', sound: 'dog' as AnimalSound },
  { label: 'why-z00.read', to: '/about', position: 'about', sound: 'cat' as AnimalSound },
];

export default function Home() {
  return (
    <main className="z00-desktop" aria-label="z00 desktop">
      {folders.map(({ label, to, position, sound }) => (
        <Link className={`z00-folder z00-folder--${position}`} to={to} onClick={() => playAnimalSound(sound)} key={label}>
          <FolderIcon />
          <span>{label}</span>
        </Link>
      ))}

      <a
        className="z00-folder z00-folder--playlist"
        href="https://www.youtube.com/results?search_query=z00+playlist"
        target="_blank"
        rel="noreferrer"
        onClick={() => playAnimalSound('duck')}
      >
        <FolderIcon />
        <span>listen-playlist.mp3</span>
      </a>

      <style>{styles}</style>
    </main>
  );
}

function FolderIcon() {
  return (
    <span className="z00-folder-icon" aria-hidden="true">
      <img src="/assets/folder-icon.png" alt="" />
    </span>
  );
}

const styles = `
  html, body, #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    overflow: hidden;
    background: #f8f8f8;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  .z00-desktop {
    position: fixed;
    inset: 0;
    box-sizing: border-box;
    overflow: hidden;
    border-right: 4px solid #222;
    border-bottom: 4px solid #222;
    background: #f8f8f8;
    color: #171717;
    font-family: "Poppins", Arial, sans-serif;
  }

  .z00-folder {
    position: absolute;
    display: flex;
    width: max-content;
    max-width: calc(100vw - 2rem);
    flex-direction: column;
    align-items: center;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    outline-offset: 0.45rem;
    -webkit-tap-highlight-color: transparent;
  }

  .z00-folder:focus-visible {
    outline: 2px solid #171717;
  }

  .z00-folder-icon {
    position: relative;
    display: block;
    width: clamp(4.25rem, 8vw, 5rem);
    aspect-ratio: 1.12;
    overflow: hidden;
  }

  .z00-folder-icon img {
    position: absolute;
    width: 218%;
    max-width: none;
    height: auto;
    left: -58%;
    top: -61%;
    image-rendering: pixelated;
  }

  .z00-folder span:last-child {
    display: block;
    margin-top: 0.4rem;
    font-size: clamp(0.58rem, 1.7vw, 0.8rem);
    letter-spacing: 0.04em;
    line-height: 1;
    white-space: nowrap;
  }

  .z00-folder--merch { left: 15.5%; top: 19%; }
  .z00-folder--about { left: 68.5%; top: 49%; }
  .z00-folder--playlist { left: 3.5%; top: 74%; }

  @media (max-width: 640px) {
    .z00-desktop {
      border-right-width: 3px;
      border-bottom-width: 3px;
    }

    .z00-folder-icon {
      width: clamp(3.6rem, 17vw, 4.5rem);
    }

    .z00-folder span:last-child {
      margin-top: 0.3rem;
      font-size: clamp(0.5rem, 2.3vw, 0.6rem);
    }

    .z00-folder--merch { left: 12%; top: 17%; }
    .z00-folder--about { left: 52%; top: 45%; }
    .z00-folder--playlist { left: 8%; top: 72%; }
  }
`;
