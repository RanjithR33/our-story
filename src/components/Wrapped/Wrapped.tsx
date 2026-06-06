import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Calendar, Camera, Phone, Map, Music, Heart } from 'lucide-react';
import { wrappedData } from '../../constants/wrappedData';
import { SectionHeading } from '../common/SectionHeading';
import { useInView } from '../../hooks/useInView';

const iconMap = {
  calendar: Calendar,
  camera: Camera,
  phone: Phone,
  map: Map,
  music: Music,
  heart: Heart,
};

export function Wrapped() {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="wrapped" className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 dark:from-primary/5 dark:via-accent/5 dark:to-secondary/5">
      <div className="container-app" ref={ref}>
        <SectionHeading
          title="Our Year in Love"
          subtitle="Wrapped in memories, just like your favorite playlist"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wrappedData.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={stat.id}
                className="relative overflow-hidden rounded-3xl p-8 text-left text-white transition-transform"
                style={{ backgroundColor: stat.color }}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                aria-pressed={isActive}
              >
                <div className="absolute -right-4 -top-4 opacity-20">
                  <Icon className="h-32 w-32" aria-hidden="true" />
                </div>

                <Icon className="mb-4 h-8 w-8" aria-hidden="true" />

                <p className="text-sm font-medium uppercase tracking-wider opacity-90">
                  {stat.label}
                </p>

                <p className="mt-2 font-hero text-5xl font-bold">
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  )}
                </p>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="mt-4 text-sm opacity-90"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      Share-worthy moment ✨
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
