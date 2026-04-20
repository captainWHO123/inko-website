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
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:grid lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] xl:gap-12 2xl:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] 2xl:gap-16">
        <div className="min-w-0 w-full">
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
        <div className="min-w-0 w-full">
          <p className="mb-3 text-lg font-bold tracking-widest text-inko-blue uppercase sm:mb-4">{tag}</p>
          <h2 className="mb-4 font-mono text-[34px] leading-tight font-medium sm:mb-5 lg:mb-6 lg:text-[36px] 2xl:text-[40px]">
            {title}
          </h2>
          <p className="text-lg leading-relaxed xl:text-xl" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
);
