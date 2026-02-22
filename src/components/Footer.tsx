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
          <div className="col-span-2 lg:col-span-2">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 mb-6 group cursor-pointer"
            >
              <div className="w-9 h-9 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Care<span className="text-teal-400">Nest</span>
              </span>
            </button>
            <p className="text-sm text-slate-400 max-w-xs mb-8 leading-relaxed">
              Providing modern healthcare solutions that prioritize your comfort and well-being. Connecting you with world-class medical expertise.
            </p>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a href="mailto:hello@carenest.com" className="group flex items-center gap-3 text-slate-400 hover:text-teal-400 text-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-teal-500/10">
                  <Mail className="w-4 h-4 shrink-0" />
                </div>
                <span>hello@carenest.com</span>
              </a>
              <a href="tel:+15550001234" className="group flex items-center gap-3 text-slate-400 hover:text-teal-400 text-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-teal-500/10">
                  <Phone className="w-4 h-4 shrink-0" />
                </div>
                <span>+1 (555) 000-1234</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-xs font-bold text-slate-100 uppercase tracking-[0.2em] mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200 cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} CareNest Health. All rights reserved.
            </p>
            <div className="flex gap-4 text-[11px] text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all border border-slate-700/50"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-4.5 h-4.5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all border border-slate-700/50"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all border border-slate-700/50"
              aria-label="Follow us on GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
