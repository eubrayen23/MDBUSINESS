import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, ChevronDown, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionBlockProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onDelete?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function SectionBlock({ id, title, children, onDelete, isOpen = true, onToggle }: SectionBlockProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'group bg-white border border-ink-100 rounded-2xl overflow-hidden transition-shadow',
        isDragging ? 'shadow-2xl z-50 ring-2 ring-brand-500 opacity-80' : 'hover:shadow-md'
      )}
    >
      <div className="flex items-center justify-between p-4 bg-white border-b border-ink-50">
        <div className="flex items-center gap-4">
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 text-ink-300 hover:text-ink-600 transition-colors"
          >
            <GripVertical size={20} />
          </button>
          <h3 className="font-black text-ink-900 uppercase tracking-tight text-sm">{title}</h3>
        </div>

        <div className="flex items-center gap-2">
          {onDelete && (
            <button
              onClick={onDelete}
              className="p-2 text-ink-300 hover:text-danger-500 hover:bg-danger-50 rounded-lg transition-all"
            >
              <Trash2 size={16} />
            </button>
          )}
          <button
            onClick={onToggle}
            className={cn(
              "p-2 text-ink-400 hover:bg-ink-50 rounded-lg transition-all",
              isOpen ? "rotate-0" : "-rotate-90"
            )}
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="p-6 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
