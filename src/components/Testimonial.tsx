import { motion } from "motion/react";
import { TESTIMONIAL } from "../content/landing";

export const Testimonial = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-8xl leading-none text-inko-blue/15 font-serif select-none">
            &ldquo;
          </span>
          <blockquote className="mb-8 text-2xl leading-relaxed italic text-[var(--text-secondary)] md:text-3xl">
            {TESTIMONIAL.quote}
          </blockquote>
          <p>
            <span className="font-mono text-sm font-bold text-inko-blue">
              {TESTIMONIAL.attribution.role}
            </span>
            <span className="mx-2 text-[var(--text-muted)]">&middot;</span>
            <span className="text-base text-[var(--text-muted)]">
              {TESTIMONIAL.attribution.location}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
