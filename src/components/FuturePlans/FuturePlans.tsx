import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Home, Music, Sparkles, Heart, Car, BookOpen, Check } from 'lucide-react';
import { futurePlansData } from '../../constants/futurePlansData';
import { SectionHeading } from '../common/SectionHeading';

const iconMap = {
  plane: Plane,
  home: Home,
  music: Music,
  sparkles: Sparkles,
  heart: Heart,
  car: Car,
  dog: Heart,
  book: BookOpen,
};

export function FuturePlans() {
  const [plans, setPlans] = useState(futurePlansData);

  const toggleComplete = (id: string) => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === id ? { ...plan, completed: !plan.completed } : plan
      )
    );
  };

  return (
    <section id="future" className="section-padding bg-white/50 dark:bg-bg-dark/50">
      <div className="container-app">
        <SectionHeading
          title="Our Future Together"
          subtitle="Dreams we're building, one adventure at a time"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => {
            const Icon = iconMap[plan.icon as keyof typeof iconMap] ?? Heart;
            return (
              <motion.button
                key={plan.id}
                onClick={() => toggleComplete(plan.id)}
                className={`group relative overflow-hidden rounded-3xl p-6 text-left transition-all glass-card ${
                  plan.completed ? 'opacity-70' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                aria-pressed={plan.completed}
                aria-label={`${plan.title}${plan.completed ? ' (completed)' : ''}`}
              >
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-primary/10 transition-transform group-hover:scale-150" aria-hidden="true" />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {plan.completed && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>

                <h3 className={`mt-4 font-hero text-xl font-semibold text-text-primary dark:text-white ${plan.completed ? 'line-through' : ''}`}>
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {plan.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
