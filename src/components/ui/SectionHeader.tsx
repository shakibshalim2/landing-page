interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full mb-4 border border-teal-100 uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="text-teal-600">
            {highlight}
          </span>
        )}
      </h2>
      <p className="text-base sm:text-lg text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
