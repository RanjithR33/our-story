import { motion } from 'framer-motion';
import { timelineData } from '../../constants/timelineData';
import { SectionHeading } from '../common/SectionHeading';

export function Timeline() {
  return (
    <section id="timeline" className="section-padding bg-bg-light dark:bg-bg-dark">
      <div className="container-app">
        <SectionHeading
          title="Our Journey"
          subtitle="Every chapter of our love story, written in moments"
        />

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {timelineData.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card overflow-hidden p-6 md:p-8">
                      <time className="font-accent text-sm font-semibold uppercase tracking-wider text-primary">
                        {event.date}
                      </time>
                      <h3 className="mt-2 font-hero text-2xl font-semibold text-text-primary dark:text-white">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-text-secondary leading-relaxed">
                        {event.description}
                      </p>
                      <div className="mt-4 overflow-hidden rounded-2xl">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-56"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-white dark:bg-bg-dark md:block"
                    aria-hidden="true"
                  />

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
