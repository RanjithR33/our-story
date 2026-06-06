import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import { memoryMapData } from '../../constants/memoryMapData';
import { SectionHeading } from '../common/SectionHeading';

const MAP_POSITIONS: Record<string, { top: string; left: string }> = {
  '1': { top: '35%', left: '72%' },
  '2': { top: '32%', left: '74%' },
  '3': { top: '48%', left: '15%' },
  '4': { top: '28%', left: '48%' },
  '5': { top: '42%', left: '12%' },
};

export function MemoryMap() {
  const [activeMemory, setActiveMemory] = useState<string | null>(null);
  const selected = memoryMapData.find((m) => m.id === activeMemory);

  return (
    <section id="memory-map" className="section-padding bg-bg-light dark:bg-bg-dark">
      <div className="container-app">
        <SectionHeading
          title="Memory Map"
          subtitle="Places that hold pieces of our hearts"
        />

        <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl glass-card">
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20"
            aria-hidden="true"
          />
          <svg
            viewBox="0 0 100 60"
            className="absolute inset-0 h-full w-full opacity-20"
            aria-hidden="true"
          >
            <path
              d="M10,30 Q30,10 50,25 T90,30 Q70,50 50,40 T10,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-primary"
            />
          </svg>

          {memoryMapData.map((location) => {
            const pos = MAP_POSITIONS[location.id];
            return (
              <motion.button
                key={location.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ top: pos.top, left: pos.left }}
                onClick={() => setActiveMemory(location.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                aria-label={`View memory: ${location.name}`}
              >
                <MapPin
                  className={`h-8 w-8 drop-shadow-lg ${
                    activeMemory === location.id
                      ? 'fill-primary text-primary'
                      : 'fill-white text-primary'
                  }`}
                />
              </motion.button>
            );
          })}

          <AnimatePresence>
            {selected && (
              <motion.div
                className="absolute bottom-4 left-4 right-4 z-20 glass-card p-4 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                role="dialog"
                aria-label={`Memory: ${selected.name}`}
              >
                <button
                  onClick={() => setActiveMemory(null)}
                  className="absolute top-3 right-3 text-text-secondary hover:text-primary"
                  aria-label="Close memory"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex gap-4">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="h-20 w-28 rounded-xl object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <time className="text-xs font-medium uppercase tracking-wider text-primary">
                      {selected.date}
                    </time>
                    <h3 className="font-hero text-lg font-semibold text-text-primary dark:text-white">
                      {selected.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {selected.memory}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
