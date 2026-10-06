import { Link } from 'react-router';
import { playAnimalSound } from '../lib/animalSounds';

type Z00PageProps = {
  title: string;
  children: React.ReactNode;
  showHeading?: boolean;
  variant?: 'default' | 'manifesto';
};

export default function Z00Page({ title, children, showHeading = true, variant = 'default' }: Z00PageProps) {
  return (
    <main className={`z00-page z00-page--${variant}${showHeading ? '' : ' z00-page--without-heading'}`}>
      {variant !== 'manifesto' && <Link className="z00-page__back" to="/" onClick={() => playAnimalSound('duck')} aria-label="Back to z00 desktop">← desktop</Link>}
      <section className="z00-page__content">
        {showHeading && <>
          <p className="z00-page__eyebrow">z00 / {title}</p>
          <h1>{title}</h1>
        </>}
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
    font-family: "Poppins", Arial, sans-serif;
  }

  .z00-page__back, .z00-page a { color: inherit; }
  .z00-page__back { font-size: 0.9rem; }
  .z00-page__content { max-width: 44rem; margin: clamp(6rem, 18vh, 12rem) auto 0; }
  .z00-page--without-heading .z00-page__content { margin-top: clamp(4rem, 12vh, 7rem); }
  .z00-page__eyebrow { margin: 0 0 1.5rem; font-size: 0.8rem; letter-spacing: 0.08em; }
  .z00-page h1 { margin: 0 0 2rem; font-size: clamp(2rem, 8vw, 5rem); font-weight: 400; letter-spacing: -0.07em; }
  .z00-page p { max-width: 38rem; font-size: clamp(1rem, 2.3vw, 1.25rem); line-height: 1.55; }
  .z00-page__support { margin-top: 3.5rem; }
  .z00-page .z00-page__merch-link { color: #145bd7; font-weight: 400; text-underline-offset: 0.2em; }

  .z00-page--manifesto {
    min-height: 100dvh;
    padding: clamp(1.15rem, 1.25vw, 1.75rem);
    background: #202020;
    color: #dedede;
  }

  .z00-page--manifesto .z00-page__content,
  .z00-page--manifesto.z00-page--without-heading .z00-page__content {
    max-width: none;
    margin: 0;
  }

  .z00-page--manifesto p {
    max-width: none;
    margin: 0;
    font-size: clamp(1.15rem, 1.45vw, 1.65rem);
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.015em;
  }

  .z00-page--manifesto p + p { margin-top: clamp(1.25rem, 1.3vw, 1.6rem); }
  .z00-page--manifesto .z00-page__support { margin-top: clamp(2.1rem, 2.2vw, 2.7rem); }
  .z00-page--manifesto .z00-page__support + p { margin-top: 0; }
  .z00-page--manifesto .z00-page__emphasis {
    font-size: 1.12em;
    text-decoration-thickness: 0.075em;
    text-underline-offset: 0.08em;
  }
  .z00-page--manifesto .z00-page__merch-link {
    color: inherit;
    font-size: 1.12em;
    font-weight: 400;
    text-decoration-thickness: 0.075em;
    text-underline-offset: 0.08em;
  }

  @media (max-width: 640px) {
    .z00-page--manifesto { padding: 1.15rem; }
    .z00-page--manifesto p { font-size: clamp(1.1rem, 5vw, 1.3rem); line-height: 1.42; }
    .z00-page--manifesto p + p { margin-top: 1.6rem; }
    .z00-page--manifesto .z00-page__support { margin-top: 2.5rem; }
  }
`;
