  'use client';

import type { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ title, children, className = '', onClick }: CardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className={`bg-gray-900/40 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/50 overflow-hidden transition-all hover:shadow-xl ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
    >
      {title && (
        <div className="px-5 py-4 border-b border-gray-700/50">
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
