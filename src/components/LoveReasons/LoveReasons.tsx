import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { reasonsData } from '../../constants/reasonsData';
import { SectionHeading } from '../common/SectionHeading';

export function LoveReasons() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section id="reasons" className="section-padding bg-bg-light dark:bg-bg-dark">
      <div className="container-app">
        <SectionHeading
          title="50 Reasons I Love You"
          subtitle="Tap a card to reveal another reason my heart chose you"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {reasonsData.map((reason, index) => {
            const isFlipped = flippedId === reason.id;
            return (
              <motion.button
                key={reason.id}
                className="perspective-[1000px] aspect-square"
                onClick={() => setFlippedId(isFlipped ? null : reason.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 10) * 0.05 }}
                aria-label={`Reason ${reason.id}: ${isFlipped ? reason.text : 'Tap to reveal'}`}
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 p-3 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <Heart className="h-6 w-6 text-primary fill-primary/30" aria-hidden="true" />
                    <span className="mt-2 font-hero text-2xl font-bold text-primary">
                      {reason.id}
                    </span>
                  </div>

                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent p-3 text-center text-white backface-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <p className="text-xs sm:text-sm font-medium leading-snug">
                      {reason.text}
                    </p>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
