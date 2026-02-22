"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CTA() {
  const { ref, isInView } = useInView();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
      <div
        ref={ref}
        className={cn(
          "max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] transition-all duration-1000 ease-out border border-slate-800 shadow-2xl shadow-slate-900/40",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        {/* Deep, refined background */}
        <div className="absolute inset-0 bg-[#0B1221]" />
        
        {/* Subtle Grid Pattern from image */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 19h2v2h-2z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* Dynamic Light Effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        
        {/* Precise left edge glow like image */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-teal-400/40 to-transparent shadow-[4px_0_20px_rgba(20,184,166,0.3)]" />

        {/* Content Container */}
        <div className="relative px-8 py-16 md:px-16 md:py-20 lg:px-24 flex flex-col items-center sm:items-start">
          <div className="max-w-2xl w-full">
            {/* Tag/Badge inspired by image */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-teal-950/40 rounded-full border border-teal-500/30 mb-8 backdrop-blur-sm group hover:border-teal-500/50 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-teal-400 transition-transform group-hover:rotate-12" />
              <span className="text-[11px] text-teal-300 font-bold uppercase tracking-[0.2em]">
                Free to get started
              </span>
            </div>

            {/* Typography refined for high-end look */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Start managing your practice
              <span className="block mt-1 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                the smarter way.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-medium opacity-90">
              Join healthcare professionals who save 10+ hours every week. 
              No credit card needed to start your free trial.
            </p>

            {submitted ? (
              <div className="flex items-center gap-4 p-6 bg-teal-500/5 rounded-2xl border border-teal-500/20 backdrop-blur-md animate-in fade-in zoom-in duration-500">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Success!</p>
                  <p className="text-teal-300/80 text-sm">We&apos;ll be in touch with your access details.</p>
                </div>
              </div>
            ) : (
              <form 
                className="flex flex-col sm:flex-row gap-4 mb-10 w-full"
                onSubmit={handleSubmit}
              >
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    aria-label="Email address"
                    suppressHydrationWarning
                    className="w-full px-6 py-4.5 rounded-2xl bg-[#131B2D] border border-slate-700/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/40 transition-all text-base shadow-inner group-hover:border-slate-600/50"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="px-8 py-4.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold flex items-center justify-center gap-2 group shadow-xl shadow-teal-500/20 active:scale-[0.98] transition-all"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}

            {/* Checklist from image */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
              {[
                "14-day free trial",
                "No setup fees",
                "Cancel anytime"
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-2.5 group cursor-default">
                  <span className="w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-slate-400 transition-colors uppercase text-[10px] tracking-widest font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
