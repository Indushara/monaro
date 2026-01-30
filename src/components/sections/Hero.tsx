import React from 'react';
import { Button } from '../ui/Button';
import { StatBox } from '../ui/StatBox';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Brand Name Overlay - Responsive */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-start">
        <div className="mb-2 sm:mb-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
            DISCOVER<br className="sm:hidden" /> MONARO
          </h1>
          <p className="text-white text-xs sm:text-sm uppercase tracking-wider mt-1 sm:mt-2">
            PREMIUM REAL ESTATE
          </p>
        </div>
        <div className="text-left sm:text-right mt-2 sm:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
            LANDS
          </h1>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-32 sm:pt-40 md:pt-48">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          PROPERTY
        </h2>
        
        <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed space-y-1">
          <p>MONARO LANDS BRINGS YOU</p>
          <p>EXCEPTIONAL PROPERTIES ACROSS</p>
          <p>PRIME LOCATIONS FROM LUXURIOUS</p>
          <p>HOMES TO PRISTINE LAND. YOUR</p>
          <p>PERFECT INVESTMENT AWAITS.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <Button 
            variant="primary" 
            icon={<span>→</span>}
            className="w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
          >
            Explore Properties
          </Button>
          <Button 
            variant="outline"
            className="w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
          >
            Contact US
          </Button>
        </div>

        {/* Statistics - Single centered box on mobile */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 sm:mt-16">
          <StatBox 
            value="50+" 
            label="LOCATIONS" 
            variant="secondary"
            className="w-full sm:min-w-[180px] sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
