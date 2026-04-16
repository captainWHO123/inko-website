import { motion } from "motion/react";

export type FeatureSectionProps = {
  tag: string;
  title: string;
  description: string;
  image: string;
  sectionId?: string;
  bgColor?: string;
};

export const FeatureSection = ({
  tag,
  title,
  description,
  image,
  sectionId,
  bgColor = "bg-white",
}: FeatureSectionProps) => (
  <section id={sectionId} className={`px-6 py-24 ${bgColor}`}>
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="w-full flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="block aspect-[852/428] w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <p className="mb-4 text-2xl font-bold tracking-widest text-inko-blue uppercase">{tag}</p>
          <h2 className="mb-6 font-mono text-[40px] leading-tight font-medium">{title}</h2>
          <p className="max-w-xl text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
);
