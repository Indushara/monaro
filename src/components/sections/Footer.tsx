import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-purple-400 text-sm uppercase tracking-wider">GET IN TOUCH</p>
          </div>
          <div>
            <p className="text-purple-400 text-sm uppercase tracking-wider">SEND US A MESSAGE</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} MONARO LANDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
