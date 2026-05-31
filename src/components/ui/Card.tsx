import React from 'react';
import { cn } from '../../lib/utils/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, title, subtitle, footer }) => {
  return (
    <div className={cn('bg-card border border-white/10 rounded-sm overflow-hidden', className)}>
      {(title || subtitle) && (
        <div className="p-4 border-b border-white/10">
          {title && <h3 className="text-lg font-bold leading-none">{title}</h3>}
          {subtitle && <p className="text-sm text-neutral-400 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && <div className="p-4 border-t border-white/10 bg-black/20">{footer}</div>}
    </div>
  );
};
