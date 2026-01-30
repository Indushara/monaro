import React from 'react';
import { StatBox } from '../ui/StatBox';
import { Button } from '../ui/Button';

export const TrustedPartner: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Statistics */}
          <div className="grid grid-cols-2 gap-6">
            <StatBox value="20+" label="YEARS OF EXPERIENCE" variant="primary" />
            <StatBox value="10K+" label="HAPPY CLIENTS" variant="secondary" />
            <StatBox value="50+" label="CITIES COVERED" variant="secondary" />
            <StatBox value="500+" label="PROPERTIES SOLD" variant="brown" />
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
              ABOUT MONARO LANDS
            </p>
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-purple-600">Trusted</span> Partner
            </h2>
            <p className="text-purple-600 uppercase font-semibold mb-6">
              YOUR TRUSTED PARTNER IN REAL ESTATE
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              AT MONARO LANDS, WE BELIEVE THAT FINDING THE PERFECT PROPERTY SHOULD BE AN EXCITING JOURNEY, NOT A STRESSFUL ORDEAL. WITH DECADES OF EXPERIENCE AND A PASSION FOR EXCELLENCE, WE'RE COMMITTED TO MAKING YOUR REAL ESTATE DREAMS A REALITY.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                '20+ YEARS OF REAL ESTATE EXCELLENCE',
                'TRUSTED BY 10,000+ SATISFIED CLIENTS',
                'EXPERT TEAM OF LICENSED PROFESSIONALS',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" icon={<span>→</span>}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
