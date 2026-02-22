"use client";

import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href.replace("#", ""));
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Subtle background accents to match CTA */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2 mb-4 md:mb-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <button
                onClick={() => handleNavClick("#home")}
                className="flex items-center gap-2 mb-6 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Care<span className="text-teal-400">Nest</span>
                </span>
              </button>
              <p className="text-sm text-slate-400 max-w-xs mb-8 leading-relaxed md:block">
                Empowering individuals with high-quality healthcare that is accessible, personal, and innovative. Join the future of wellness today.
              </p>

              {/* Contact info - Optimized for mobile stacking */}
              <div className="flex flex-col gap-4 w-full max-w-xs mx-auto md:mx-0">
                <a href="mailto:hello@carenest.com" className="group flex items-center justify-center md:justify-start gap-4 text-slate-400 hover:text-teal-400 text-sm transition-all py-1">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/40 flex items-center justify-center group-hover:bg-teal-500/10 border border-slate-700/30">
                    <Mail className="w-4.5 h-4.5 shrink-0 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-medium">hello@carenest.com</span>
                </a>
                <a href="tel:+15550001234" className="group flex items-center justify-center md:justify-start gap-4 text-slate-400 hover:text-teal-400 text-sm transition-all py-1">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/40 flex items-center justify-center group-hover:bg-teal-500/10 border border-slate-700/30">
                    <Phone className="w-4.5 h-4.5 shrink-0 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-medium">+1 (555) 000-1234</span>
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className={cn(
              "col-span-1 md:col-span-1",
              category === "Support" ? "col-span-2 md:col-span-1 text-center md:text-left mt-4 md:mt-0" : "text-center md:text-left"
            )}>
              <h3 className="text-[11px] font-black text-slate-200 uppercase tracking-[0.25em] mb-7">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-400 hover:text-teal-400 text-sm transition-all duration-200 cursor-pointer w-full md:w-auto text-center md:text-left"
                    >
                      <span className="relative pb-1 after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:h-[1px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:left-0 md:hover:after:left-0 hover:after:w-full">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1">
            <p className="text-[12px] font-medium text-slate-500 uppercase tracking-widest text-center md:text-left">
              &copy; {new Date().getFullYear()} CareNest Health. All rights reserved.
            </p>
            <div className="flex gap-6 text-[11px] text-slate-500 font-medium">
              <a href="#" className="hover:text-teal-400 transition-colors uppercase tracking-wider">Privacy</a>
              <a href="#" className="hover:text-teal-400 transition-colors uppercase tracking-wider">Terms</a>
              <a href="#" className="hover:text-teal-400 transition-colors uppercase tracking-wider">Cookies</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 order-1 md:order-2">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" }
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all border border-slate-700/30 group mb-2 md:mb-0 hover:border-teal-400/30 active:scale-95 shadow-sm"
                aria-label={`Follow us on ${social.label}`}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
