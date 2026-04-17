import { motion } from "motion/react";
import { TemplateFeatureVisual } from "./TemplateFeatureVisual";

const featureAssetContainerStyle = {
  borderRadius: "24px",
  boxShadow: "0 12px 30px rgba(17, 62, 84, 0.08)",
} as const;

export type FeatureSectionProps = {
  tag: string;
  title: string;
  description: string;
  image?: string;
  sectionId?: string;
  bgColor?: string;
  visualType?: "template";
};

export const FeatureSection = ({
  tag,
  title,
  description,
  image,
  sectionId,
  bgColor = "bg-transparent",
  visualType,
}: FeatureSectionProps) => (
  <section id={sectionId} className={`px-6 py-16 sm:py-20 lg:py-24 ${bgColor}`}>
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-16">
        <div className="w-full lg:flex-[0_0_56%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden"
            style={featureAssetContainerStyle}
          >
            <div className={visualType === "template" ? "w-full" : "aspect-[852/428] w-full"}>
              {visualType === "template" ? (
                <TemplateFeatureVisual />
              ) : image ? (
                <img
                  src={image}
                  alt={title}
                  className="block h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : null}
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:flex-[0_0_44%]">
          <p className="mb-3 text-lg font-bold tracking-widest text-inko-blue uppercase sm:mb-4">{tag}</p>
          <h2 className="mb-4 font-mono text-[40px] leading-tight font-medium sm:mb-5 lg:mb-6">{title}</h2>
          <p className="max-w-xl text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
);
