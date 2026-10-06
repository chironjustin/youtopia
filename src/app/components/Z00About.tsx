import { Link } from 'react-router';
import { playAnimalSound } from '../lib/animalSounds';
import Z00Page from './Z00Page';

export default function Z00About() {
  return (
    <Z00Page title="why z00" showHeading={false} variant="manifesto">
      <p>we love animals. but what is more important is that we learn to understand that we are also animals, just with the ability to control ourselves and, ideally, <span className="z00-page__emphasis">respond</span> rather than react.</p>

      <p>we all have lust and frustration stored within our system (which is natural), and we must find an outlet to express this. otherwise, it will make us unhappy and cause an even greater <span className="z00-page__emphasis">desire to break free</span> because we suppress the true nature of our being… this is where crime and unrighteousness happen, btw.</p>

      <p>that’s why, at z00, we take dance and movement as a catalyst to calm our inner beast. we believe every human should do the same in a way that is most aligned with their own passion.</p>

      <p className="z00-page__support">support our mission:</p>
      <p>
        30% of all proceeds go to animal wildlife foundations -&gt;{' '}<br />
        <Link className="z00-page__merch-link" to="/merch" onClick={() => playAnimalSound('dog')}>buy-merch.exe</Link>
      </p>
    </Z00Page>
  );
}
