import React from "react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-purple-900 via-purple-800 to-purple-700 text-white pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-purple-200 mb-2">
              Get In Touch
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Ready to discover your next{" "}
              <span className="text-purple-200">dream property?</span>
            </h3>
          </div>

          {/* Simple contact form */}
          <form className="w-full md:w-auto max-w-md flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:flex-1 rounded-lg bg-white/10 border border-white/20 px-3 sm:px-4 py-2.5 text-sm placeholder:text-purple-200/70 focus:outline-none focus:ring-2 focus:ring-purple-300/70"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-white text-purple-700 font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 shadow-md hover:bg-purple-50 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Main footer content */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-xs font-semibold">
                ML
              </div>
              <div className="leading-tight">
                <p className="text-[10px] tracking-[0.3em] uppercase text-purple-200">
                  Monaro
                </p>
                <p className="text-base font-semibold">Lands</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-purple-100/80 max-w-xs leading-relaxed">
              Premium real estate consultancy connecting you with luxurious
              homes, prime lands, and investment opportunities across top
              locations.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-purple-100/90">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="hover:text-white transition-colors duration-150"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-150"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-purple-100/90">
              <li>+1 (555) 012-3456</li>
              <li>hello@monarolands.com</li>
              <li>123 Skyline Avenue, Beverly Hills, CA</li>
            </ul>
          </div>

          {/* Social / badges */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 mb-4">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {["IN", "FB", "IG", "YT"].map((label) => (
                <button
                  key={label}
                  className="h-8 w-8 rounded-full border border-white/25 flex items-center justify-center text-xs hover:bg-white/15 transition-colors duration-150"
                  aria-label={label}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-purple-100/80 leading-relaxed">
              Licensed &amp; regulated real estate professionals with over 20
              years of market expertise.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-purple-100/80">
          <p>© {year} MONARO LANDS. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:inline-block">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
