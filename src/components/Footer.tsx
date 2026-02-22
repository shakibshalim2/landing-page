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
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 mb-5 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-bold">
                Care<span className="text-teal-400">Nest</span>
              </span>
            </button>
            <p className="text-sm text-slate-400 max-w-xs mb-6 leading-relaxed">
              A modern platform connecting patients and doctors for seamless healthcare management.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:hello@carenest.com" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@carenest.com</span>
              </a>
              <a href="tel:+15550001234" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+1 (555) 000-1234</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200 cursor-pointer"
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
        <div className="border-t border-slate-700/50 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CareNest. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-500/20 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-500/20 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-500/20 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all"
              aria-label="Follow us on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
