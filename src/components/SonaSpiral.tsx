import React from 'react';

export const SonaSpiral: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-[spin_20s_linear_infinite]"
        style={{ color: 'var(--color-ochre-gold)' }}
      >
        <defs>
          <radialGradient id="sonaGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Decorative dots (Lusona points) */}
        {[...Array(9)].map((_, i) => (
          [...Array(9)].map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={40 + i * 15}
              cy={40 + j * 15}
              r="1"
              fill="currentColor"
              opacity="0.3"
            />
          ))
        ))}

        {/* The Spiral / Geometric path */}
        <path
          d="M100,100 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 M100,100 m-60,0 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0 M100,100 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 M100,100 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />

        {/* Central Geometric Figure */}
        <path
          d="M100,20 L180,100 L100,180 L20,100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="animate-pulse"
        />
        <path
          d="M60,60 L140,60 L140,140 L60,140 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          transform="rotate(45 100 100)"
        />
      </svg>
    </div>
  );
};
