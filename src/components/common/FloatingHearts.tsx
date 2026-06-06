import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 6 + Math.random() * 4,
  size: 12 + Math.random() * 16,
  opacity: 0.15 + Math.random() * 0.25,
}));

export function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{ left: heart.x, bottom: '-5%' }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(heart.id) * 40],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart
            className="fill-current"
            style={{ width: heart.size, height: heart.size, opacity: heart.opacity }}
          />
        </motion.div>
      ))}
    </div>
  );
}
