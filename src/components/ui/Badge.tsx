import React from 'react';
import { cn } from '../../lib/utils/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-neutral-800 text-neutral-300',
    success: 'bg-white text-black',
    warning: 'bg-neutral-500 text-white',
    error: 'bg-red-900/50 text-red-200 border border-red-500/50',
    outline: 'bg-transparent text-white border border-white/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-widest',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
