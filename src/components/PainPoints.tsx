import { motion } from "motion/react";
import { PAIN_POINTS } from "../content/landing";

export const PainPoints = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-center font-mono text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">
          The problem
        </p>
        <h2 className="mb-20 text-center font-mono text-5xl tracking-tight font-bold text-[var(--text-primary)]">
          Every week, good leads go cold
          <br />
          because of things that slip through.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-[var(--border-default)] bg-white p-8 shadow-[var(--shadow-soft)]"
              >
                <Icon className="mb-4 h-8 w-8 text-inko-blue" />
                <h3 className="mb-3 font-mono text-xl font-bold text-[var(--text-primary)]">
                  {point.title}
                </h3>
                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
