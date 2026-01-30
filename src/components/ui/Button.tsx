import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  icon,
}) => {
  const baseStyles = 'px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-white text-purple-600 hover:bg-purple-50',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border-2 border-black text-white bg-transparent hover:bg-black hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
