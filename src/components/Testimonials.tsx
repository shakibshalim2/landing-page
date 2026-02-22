"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const avatarColors = [
  "bg-teal-600",
  "bg-blue-600",
  "bg-violet-600",
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "relative bg-white rounded-xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-amber-400"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold",
            avatarColors[index % avatarColors.length]
          )}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-white">
      <SectionHeader
        badge="Reviews"
        title="What people are"
        highlight="saying"
        description="Real feedback from healthcare providers and patients using CareNest."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
