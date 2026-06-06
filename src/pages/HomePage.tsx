import { Hero } from '../components/Hero/Hero';
import { Timeline } from '../components/Timeline/Timeline';
import { Gallery } from '../components/Gallery/Gallery';
import { Wrapped } from '../components/Wrapped/Wrapped';
import { LoveReasons } from '../components/LoveReasons/LoveReasons';
import { LoveLetter } from '../components/LoveLetter/LoveLetter';
import { FuturePlans } from '../components/FuturePlans/FuturePlans';
import { MemoryMap } from '../components/MemoryMap/MemoryMap';
import { Statistics } from '../components/Statistics/Statistics';
import { FinalSection } from '../components/FinalSection/FinalSection';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Gallery />
      <Wrapped />
      <LoveReasons />
      <LoveLetter />
      <FuturePlans />
      <MemoryMap />
      <Statistics />
      <FinalSection />
    </main>
  );
}
