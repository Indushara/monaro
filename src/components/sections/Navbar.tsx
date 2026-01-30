import React from 'react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 fade-in">
      {/* Gradient overlay to sit nicely on top of the hero image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      <nav className="relative pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/10 border border-white/40 flex items-center justify-center text-xs text-white font-semibold float-slow">
            ML
          </div>
          <div className="leading-tight">
            <p className="text-xs text-white/70 tracking-[0.2em] uppercase">
              Monaro
            </p>
            <p className="text-sm sm:text-base font-semibold text-white">
              Lands
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <a href="#home" className="hover:text-purple-200 transition-colors">
            Home
          </a>
          <a
            href="#featured"
            className="hover:text-purple-200 transition-colors"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:text-purple-200 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile CTA / menu placeholder */}
        <div className="flex md:hidden">
          <Button
            variant="primary"
            className="!px-4 !py-2 text-xs"
          >
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
};

