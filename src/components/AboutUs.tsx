import { motion } from "motion/react";

export const AboutUs = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-inko-blue">
            About Us
          </p>
          <h2 className="mb-12 font-mono text-5xl tracking-tight font-bold text-[var(--text-primary)]">
            Built by people who know sales.
          </h2>
          <div className="mx-auto max-w-2xl space-y-6 text-xl leading-relaxed text-[var(--text-secondary)]">
            <p>
              Our founder <strong className="text-[var(--text-primary)]">Victor</strong> spent 7 years in
              insurance sales — managing thousands of clients, juggling follow-ups, and watching good deals go
              cold because details fell through the cracks.
            </p>
            <p>
              He assembled a team of engineers and product builders to solve the problems every sales
              professional faces but no one has built for — until now. Inko uses advanced AI to capture,
              analyze, and act on every client conversation, so you never lose a detail again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
