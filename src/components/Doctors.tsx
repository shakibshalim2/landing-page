"use client";

import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { DOCTORS } from "@/lib/constants";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

function DoctorCard({
  doctor,
  index,
}: {
  doctor: (typeof DOCTORS)[number];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      {/* Photo area */}
      <div className="relative h-52 bg-slate-100 overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-md shadow-sm">
          <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
          <span className="text-xs font-semibold text-slate-700">{doctor.rating}</span>
        </div>

        {/* Availability indicator */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-500 rounded-md shadow-sm">
          <span className="text-[10px] font-medium text-white uppercase tracking-wide">Available</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
            {doctor.name}
          </h3>
          <p className="text-xs text-teal-600 font-medium">
            {doctor.specialty}
          </p>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {doctor.experience}
          </span>
          <span className="text-slate-300">•</span>
          <span>{doctor.patients} patients</span>
        </div>

        <button 
          className="w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
          aria-label={`Book appointment with ${doctor.name}`}
        >
          Book Appointment
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function Doctors() {
  return (
    <SectionWrapper id="doctors" className="bg-slate-50">
      <SectionHeader
        badge="Our Team"
        title="Meet our expert"
        highlight="physicians"
        description="Board-certified doctors committed to providing personalized, compassionate care."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DOCTORS.map((doctor, index) => (
          <DoctorCard key={doctor.name} doctor={doctor} index={index} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
          View all physicians
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </SectionWrapper>
  );
}
