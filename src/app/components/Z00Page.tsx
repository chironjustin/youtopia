import { Link } from 'react-router';
import { playAnimalSound } from '../lib/animalSounds';

type Z00PageProps = {
  title: string;
  children: React.ReactNode;
};

export default function Z00Page({ title, children }: Z00PageProps) {
  return (
    <main className="z00-page">
      <Link className="z00-page__back" to="/" onClick={() => playAnimalSound('elephant')} aria-label="Back to z00 desktop">← desktop</Link>
      <section className="z00-page__content">
        <p className="z00-page__eyebrow">z00 / {title}</p>
        <h1>{title}</h1>
        <div>{children}</div>
      </section>
      <style>{styles}</style>
    </main>
  );
}

const styles = `
  html, body, #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    background: #f8f8f8;
  }

  .z00-page {
    box-sizing: border-box;
    min-height: 100dvh;
    padding: clamp(1.5rem, 5vw, 4rem);
    background: #f8f8f8;
    color: #171717;
    font-family: "Share Tech Mono", "Courier New", monospace;
  }

  .z00-page__back, .z00-page a { color: inherit; }
  .z00-page__back { font-size: 0.9rem; }
  .z00-page__content { max-width: 44rem; margin: clamp(6rem, 18vh, 12rem) auto 0; }
  .z00-page__eyebrow { margin: 0 0 1.5rem; font-size: 0.8rem; letter-spacing: 0.08em; }
  .z00-page h1 { margin: 0 0 2rem; font-size: clamp(2rem, 8vw, 5rem); font-weight: 400; letter-spacing: -0.07em; }
  .z00-page p { max-width: 38rem; font-size: clamp(1rem, 2.3vw, 1.25rem); line-height: 1.55; }
  .z00-page__support { margin-top: 3.5rem; }
  .z00-page .z00-page__merch-link { color: #145bd7; font-weight: 400; text-underline-offset: 0.2em; }
`;
