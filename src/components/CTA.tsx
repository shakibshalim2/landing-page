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
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={cn(
          "max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem] transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Background with texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Accent shapes */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Side accent bar */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-teal-400 to-transparent" />

        {/* Content */}
        <div className="relative px-8 py-14 md:px-14 md:py-16 lg:px-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 rounded-full border border-teal-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs text-teal-300 font-medium uppercase tracking-wider">
                Free to get started
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Start managing your practice
              <span className="block text-teal-400">the smarter way.</span>
            </h2>

            <p className="text-base text-slate-400 mb-8 leading-relaxed max-w-lg">
              Join healthcare professionals who save 10+ hours every week. 
              No credit card needed to start your free trial.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                <p className="text-teal-300 text-sm">Thanks! We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form 
                className="flex flex-col sm:flex-row gap-3 mb-6"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  aria-label="Email address"
                  suppressHydrationWarning
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 focus:bg-white/10 transition-all text-sm"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="whitespace-nowrap shadow-lg shadow-teal-500/20"
                >
                  Get Early Access
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                No setup fees
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
