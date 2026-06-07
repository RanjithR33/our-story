import { Hero } from '../components/Hero/Hero';
import { Timeline } from '../components/Timeline/Timeline';
import { Gallery } from '../components/Gallery/Gallery';
import { LoveReasons } from '../components/LoveReasons/LoveReasons';
import { LoveLetter } from '../components/LoveLetter/LoveLetter';
import { FuturePlans } from '../components/FuturePlans/FuturePlans';
import { FinalSection } from '../components/FinalSection/FinalSection';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Gallery />
      <LoveReasons />
      <LoveLetter />
      <FuturePlans />
      <FinalSection />
    </main>
  );
}
