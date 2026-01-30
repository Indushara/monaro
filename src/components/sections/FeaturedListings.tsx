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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">FEATURED LISTINGS</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-purple-600">Exceptional</span> Properties
          </h2>
          <p className="text-gray-600 max-w-2xl">
            EXPLORE OUR HANDPICKED SELECTION OF PREMIUM PROPERTIES, FROM STUNNING HOMES TO PRIME LAND INVESTMENTS.
          </p>
        </div>

        {/* 3D House Model Placeholder */}
        <div className="mb-12 flex justify-end">
          <div className="w-full md:w-1/2 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">3D House Model</p>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tag === 'Featured'
                          ? 'bg-purple-600 text-white'
                          : 'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold">
                    {property.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
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
