"use client";

import {
  CalendarCheck,
  FileText,
  MessageCircle,
  Pill,
  Activity,
  Shield,
  ArrowRight,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CalendarCheck,
  FileText,
  MessageCircle,
  Pill,
  Activity,
  Shield,
};

const iconColors = [
  "bg-teal-100 text-teal-600",
  "bg-blue-100 text-blue-600",
  "bg-violet-100 text-violet-600",
  "bg-amber-100 text-amber-600",
  "bg-rose-100 text-rose-600",
  "bg-emerald-100 text-emerald-600",
];

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isInView } = useInView();
  const Icon = iconMap[icon];

  return (
    <div
      ref={ref}
      className={cn(
        "group relative bg-white rounded-xl p-6 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      {/* Icon */}
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center mb-4",
        iconColors[index % iconColors.length]
      )}>
        {Icon && <Icon className="w-5 h-5" />}
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
      
      {/* Learn more link */}
      <button className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors group/link cursor-pointer">
        Learn more
        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}

export default function Features() {
  return (
    <SectionWrapper id="features" className="bg-white">
      <SectionHeader
        badge="Features"
        title="Everything you need to run"
        highlight="your practice"
        description="Powerful tools designed by healthcare professionals, for healthcare professionals."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
