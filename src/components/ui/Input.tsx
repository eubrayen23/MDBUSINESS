import React from 'react';
import { cn } from '../../lib/utils/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'flex w-full bg-neutral-900 border border-white/10 text-white rounded-sm px-3 py-2 text-sm placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-150 disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
