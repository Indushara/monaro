import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md sm:shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
};
