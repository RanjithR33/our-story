import { useState, useEffect, lazy, Suspense } from 'react';
import { LoadingScreen } from './components/common/LoadingScreen';
import { ScrollProgress } from './components/common/ScrollProgress';

const MusicPlayer = lazy(() =>
  import('./components/common/MusicPlayer').then((m) => ({ default: m.MusicPlayer }))
);
const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />

      <Suspense fallback={null}>
        <HomePage />
        <MusicPlayer />
      </Suspense>
    </>
  );
}
