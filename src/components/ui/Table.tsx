import React from 'react';
import { cn } from '../../lib/utils/utils';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ headers, children, className }) => {
  return (
    <div className={cn('w-full overflow-x-auto border border-white/10 rounded-sm', className)}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neutral-900 border-b border-white/10">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string }> = ({
  children,
  onClick,
  className,
}) => (
  <tr
    onClick={onClick}
    className={cn(
      'hover:bg-white/5 transition-colors',
      onClick && 'cursor-pointer',
      className
    )}
  >
    {children}
  </tr>
);

export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <td className={cn('px-4 py-3 text-sm', className)}>
    {children}
  </td>
);
