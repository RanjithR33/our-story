import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import Confetti from 'react-confetti';
import { useInView } from '../../hooks/useInView';

const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 3,
}));

export function FinalSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="final"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-dark px-4"
      aria-label="Final section"
    >
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          colors={['#FF6B9D', '#F8BBD0', '#C8A2C8', '#FFFFFF']}
        />
      )}

      <div className="absolute inset-0" aria-hidden="true">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          className="font-hero text-3xl md:text-5xl lg:text-6xl text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          If I Had To Choose Again...
        </motion.p>

        <motion.p
          className="mt-8 font-hero text-4xl md:text-6xl lg:text-7xl font-bold text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          onAnimationComplete={() => setShowConfetti(true)}
        >
          I Would Still Choose You{' '}
          <Heart className="inline h-10 w-10 md:h-14 md:w-14 fill-primary text-primary" aria-hidden="true" />
        </motion.p>

        <motion.button
          onClick={scrollToTop}
          className="mt-16 flex items-center gap-2 mx-auto rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
          Back to the Beginning
        </motion.button>
      </div>
    </section>
  );
}
