import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tags: string[];
  featured?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'MODERN LUXURY VILLA',
    location: 'Beverly Hills, CA',
    price: '$2,850,000',
    beds: 5,
    baths: 5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    tags: ['Housing', 'Featured'],
    featured: true,
  },
  {
    id: 2,
    title: 'MODERN LUXURY VILLA',
    location: 'Beverly Hills, CA',
    price: '$1,650,000',
    beds: 5,
    baths: 5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    tags: ['Housing'],
  },
  {
    id: 3,
    title: 'MODERN LUXURY VILLA',
    location: 'Beverly Hills, CA',
    price: '$1,200,000',
    beds: 5,
    baths: 5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tags: ['Housing', 'Featured'],
    featured: true,
  },
];

export const FeaturedListings: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 mb-2">FEATURED LISTINGS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-purple-600">Exceptional</span> Properties
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            EXPLORE OUR HANDPICKED SELECTION OF PREMIUM PROPERTIES, FROM STUNNING HOMES TO PRIME LAND INVESTMENTS.
          </p>
        </div>

        {/* 3D House Model Placeholder */}
        <div className="mb-8 sm:mb-12 flex justify-center sm:justify-end">
          <div className="w-full sm:w-3/4 md:w-1/2 h-48 sm:h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-sm sm:text-base">3D House Model</p>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative h-56 sm:h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                  {property.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                        tag === 'Featured'
                          ? 'bg-purple-600 text-white'
                          : 'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-sm sm:text-base">
                    {property.price}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{property.location}</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
                <Button variant="secondary" className="w-full">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="secondary" icon={<span>→</span>}>
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};
