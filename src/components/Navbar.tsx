"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/lib/hooks";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              Care<span className="text-teal-600">Nest</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer",
                    isActive
                      ? "text-teal-600"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Log in
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!isOpen}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-3 mt-2 mx-4 rounded-xl shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                  isActive
                    ? "text-teal-600 bg-teal-50"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {link.label}
              </button>
            );
          })}
          <div className="border-t border-slate-100 mt-2 pt-3 px-3">
            <Button variant="primary" size="md" className="w-full" onClick={() => handleNavClick("#contact")}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
