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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Brand Name Overlay */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-start">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2">MONARO</h1>
          <p className="text-white text-sm uppercase tracking-wider">PREMIUM REAL ESTATE</p>
        </div>
        <div className="text-right">
          <h1 className="text-6xl md:text-8xl font-bold text-white">LANDS</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          DISCOVER YOUR DREAM PROPERTY
        </h2>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          MONARO LANDS BRINGS YOU EXCEPTIONAL PROPERTIES ACROSS PRIME LOCATIONS FROM LUXURIOUS HOMES TO PRISTINE LAND. YOUR PERFECT INVESTMENT AWAITS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="primary" icon={<span>→</span>}>
            Explore Properties
          </Button>
          <Button variant="outline">
            Contact US
          </Button>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <StatBox 
            value="50+" 
            label="LOCATIONS" 
            variant="secondary"
            className="min-w-[180px]"
          />
          <StatBox 
            value="500+" 
            label="PROPERTIES" 
            variant="secondary"
            className="min-w-[180px]"
          />
        </div>
      </div>
    </section>
  );
};
