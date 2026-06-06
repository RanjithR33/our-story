import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { FloatingHearts } from '../common/FloatingHearts';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden gradient-hero"
      aria-label="Hero section"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-light/50 dark:to-bg-dark/50" />
      </motion.div>

      <FloatingHearts />

      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container-app relative z-10 flex flex-col items-center text-center"
        style={{ opacity }}
      >
        <motion.div
          className="mb-8 h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-white/50 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/cover_pic.jpeg"
            alt="Front cover photo"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>

        <motion.p
          className="mb-4 font-accent text-lg md:text-xl italic text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Our Story ❤️
        </motion.p>

        <motion.h1
          className="font-hero text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-primary dark:text-white max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Every Love Story Is Beautiful, But Ours Is My Favorite
        </motion.h1>

        <motion.button
          onClick={scrollToTimeline}
          className="mt-10 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Begin Our Journey
        </motion.button>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-primary/60" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
