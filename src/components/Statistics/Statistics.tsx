import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { statisticsData } from '../../constants/statisticsData';
import { SectionHeading } from '../common/SectionHeading';
import { useInView } from '../../hooks/useInView';

export function Statistics() {
  const { ref, isInView } = useInView();

  return (
    <section id="statistics" className="section-padding bg-gradient-to-b from-bg-light to-white dark:from-bg-dark dark:to-bg-dark/80">
      <div className="container-app" ref={ref}>
        <SectionHeading
          title="By The Numbers"
          subtitle="The mathematics of our love"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {statisticsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="glass-card flex flex-col items-center justify-center p-6 md:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="font-hero text-4xl md:text-5xl font-bold text-primary">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
