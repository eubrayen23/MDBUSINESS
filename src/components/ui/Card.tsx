import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'flat';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  const variants = {
    default: 'bg-white shadow-soft border border-ink-100',
    outline: 'bg-transparent border-2 border-ink-100',
    flat: 'bg-ink-50 border-none',
  };

  return (
    <div
      className={cn('rounded-2xl p-6', variants[variant], className)}
      {...props}
    />
  );
}
