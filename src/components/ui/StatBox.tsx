import React from 'react';

interface StatBoxProps {
  value: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'brown';
  className?: string;
}

export const StatBox: React.FC<StatBoxProps> = ({
  value,
  label,
  variant = 'secondary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-purple-600 text-white',
    secondary: 'bg-white text-black border border-gray-200',
    brown: 'bg-amber-700 text-white',
  };

  return (
    <div className={`rounded-lg p-4 sm:p-6 ${variants[variant]} ${className}`}>
      <div className="text-3xl sm:text-4xl font-bold mb-2">{value}</div>
      <div className="text-xs sm:text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
};
