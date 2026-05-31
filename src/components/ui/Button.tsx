import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-soft hover:shadow-glow focus-visible:ring-brand-500',
      secondary: 'bg-ink-800 text-white hover:bg-ink-900 focus-visible:ring-ink-500',
      outline: 'border-2 border-ink-200 bg-transparent hover:bg-ink-50 hover:border-ink-300 text-ink-900 focus-visible:ring-ink-500',
      ghost: 'bg-transparent hover:bg-ink-100 text-ink-700 focus-visible:ring-ink-500',
      danger: 'bg-danger-500 text-white hover:bg-danger-600 focus-visible:ring-danger-500',
      white: 'bg-white text-brand-600 hover:bg-brand-50 shadow-soft focus-visible:ring-white',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
