const templateDimensions = [
  { label: "Need", backgroundColor: "#f1ffeb", textColor: "#2f8d03" },
  { label: "Budget", backgroundColor: "#e9f6ff", textColor: "#096fb8" },
  { label: "Script Review", backgroundColor: "#e3e8ff", textColor: "#4f62b5", badge: "Edit" },
  { label: "Timeline", backgroundColor: "#fff5ee", textColor: "#c44f01" },
  { label: "Resistance", backgroundColor: "#ffe6e6", textColor: "#cf0303" },
];

const previewSections = [
  { label: "Need", widths: ["100%", "100%", "43%"] },
  { label: "Budget", widths: ["100%"] },
  { label: "Script Review", widths: ["100%", "92%"] },
  { label: "Timeline", widths: ["64%"] },
  { label: "Resistance", widths: ["100%", "64%"] },
];

const cardSurfaceStyle = {
  backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 41.24%, rgba(255, 255, 255, 0.72) 83.336%)",
  boxShadow: "0 12.78px 29.82px rgba(17, 62, 84, 0.08)",
} as const;

function DragHandle() {
  return (
    <div className="flex h-full items-center bg-white/70 px-1.5 sm:px-2 lg:px-[8.5px]">
      <div className="grid grid-cols-2 gap-[2px] sm:gap-[3px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className="h-[2px] w-[2px] rounded-full bg-[#d4d4d4] sm:h-[3px] sm:w-[3px] lg:h-[3.5px] lg:w-[3.5px]"
          />
        ))}
      </div>
    </div>
  );
}

function TemplateDimensionRow({
  label,
  backgroundColor,
  textColor,
  badge,
}: {
  label: string;
  backgroundColor: string;
  textColor: string;
  badge?: string;
}) {
  return (
    <div
      className="flex items-stretch overflow-hidden rounded-[10px] sm:rounded-[12px] lg:rounded-[9.86px]"
      style={{ backgroundColor }}
    >
      <DragHandle />
      <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 px-3 py-2.5 text-center sm:gap-2 sm:px-4 sm:py-3 lg:gap-2 lg:px-[18px] lg:py-[10px]">
        <span
          className="shrink-0 whitespace-nowrap text-[12px] leading-[1.2] font-medium sm:text-[13px] lg:text-[14px]"
          style={{ color: textColor }}
        >
          {label}
        </span>
        {badge ? (
          <span className="shrink-0 whitespace-nowrap rounded-[4px] bg-[#4f62b5] px-1.5 py-0.5 text-[12px] leading-[1.1] font-medium text-white lg:px-[7px] lg:py-[2px] lg:text-[12px]">
            {badge}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function PreviewSection({ label, widths }: { label: string; widths: string[] }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-[5px]">
      <p className="whitespace-nowrap text-[14px] leading-[1.2] font-medium text-[#090c0d] lg:text-[15px]">
        {label}
      </p>
      <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-[5px]">
        {widths.map((width, index) => (
          <div
            key={`${label}-${index}`}
            className="h-[6px] rounded-[4px] bg-[#f1f1f1] sm:h-[10px] lg:h-[16px]"
            style={{ width }}
          />
        ))}
      </div>
    </div>
  );
}

export function TemplateFeatureVisual() {
  return (
    <div className="grid w-full items-stretch gap-2 bg-[#f2f2f2] p-2 sm:gap-3 sm:p-3 md:grid-cols-[43%_1fr] md:gap-1.5 md:p-1.5 lg:min-h-[428px] lg:grid-cols-[44%_1fr] lg:gap-1 lg:p-1">
      <div
        className="flex h-full flex-col gap-2 rounded-[20px] border border-white/90 p-2 backdrop-blur-sm sm:gap-3 sm:p-3 lg:gap-[10px] lg:rounded-[20px] lg:border-[2.5px] lg:p-[20px]"
        style={cardSurfaceStyle}
      >
        <div className="flex items-center justify-between gap-2">
          <p className="whitespace-nowrap text-[16px] leading-[1.1] font-medium text-[#090c0d] sm:text-[17px] lg:text-[19px]">
            My Template
          </p>
          <span className="shrink-0 whitespace-nowrap rounded-[4px] bg-[#8e0dff] px-1.5 py-0.5 text-[12px] leading-[1.1] font-medium text-white sm:px-2 sm:py-1 sm:text-[12px] lg:px-[7px] lg:py-[2px] lg:text-[13px]">
            Customize
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1 sm:gap-1.5 lg:gap-[5px]">
          {templateDimensions.map((item) => (
            <TemplateDimensionRow key={item.label} {...item} />
          ))}

          <div className="flex flex-1 items-center justify-center overflow-hidden rounded-[10px] bg-[#f5f5f5] sm:rounded-[12px] lg:rounded-[10px]">
            <div className="flex items-center gap-1 text-[#b6b6b6] sm:gap-2 lg:gap-3">
              <span className="text-[16px] leading-none font-light sm:text-[18px] lg:text-[20px]">+</span>
              <span className="whitespace-nowrap text-[12px] leading-[1.2] font-normal sm:text-[13px] lg:text-[14px]">
                Create Dimensions
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex h-full flex-col gap-3 rounded-[20px] border border-white/90 p-2 backdrop-blur-sm sm:gap-4 sm:p-3 lg:gap-[20px] lg:rounded-[20px] lg:border-[2.5px] lg:p-[20px]"
        style={cardSurfaceStyle}
      >
        <p className="text-center text-[12px] leading-[1.1] font-normal text-[#a0a1a5] lg:text-[13px]">
          Preview
        </p>

        <div className="flex flex-1 flex-col gap-3 sm:gap-4 lg:gap-[20px]">
          {previewSections.map((section) => (
            <PreviewSection key={section.label} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
