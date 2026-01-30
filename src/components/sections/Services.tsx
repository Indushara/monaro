import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: '🏠',
    title: 'LUXURY HOUSING',
    description: 'Discover exquisite Homes Designed for Modern Living, From Contemporary Villas To Classic Estates, We Curate Properties That Exceed Expectations.',
    features: ['Premium Locations', 'Smart Home Ready', 'Custom Finishes'],
  },
  {
    icon: '🌳',
    title: 'PRIME LANDS',
    description: 'Discover exquisite Homes Designed for Modern Living, From Contemporary Villas To Classic Estates, We Curate Properties That Exceed Expectations.',
    features: ['Premium Locations', 'Smart Home Ready', 'Custom Finishes'],
  },
  {
    icon: '🏢',
    title: 'REAL ESTATE INVESTMENT',
    description: 'Discover exquisite Homes Designed for Modern Living, From Contemporary Villas To Classic Estates, We Curate Properties That Exceed Expectations.',
    features: ['Premium Locations', 'Smart Home Ready', 'Custom Finishes'],
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">WHAT WE OFFER</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-purple-600">Our</span> Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            COMPREHENSIVE REAL ESTATE SOLUTIONS TAILORED TO YOUR UNIQUE NEEDS AND INVESTMENT GOALS.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="bg-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-white">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
