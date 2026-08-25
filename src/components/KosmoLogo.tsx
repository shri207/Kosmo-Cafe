import React from 'react';

interface KosmoLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'emblem' | 'horizontal';
  className?: string;
  id?: string;
}

export const LionEmblem: React.FC<{ size?: number; className?: string; id?: string }> = ({
  size = 56,
  className = '',
  id = 'kosmo-lion-emblem'
}) => {
  return (
    <svg
      id={id}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      aria-label="Kosmo Cafe Royal Lion Emblem"
    >
      <defs>
        <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2BF" />
          <stop offset="35%" stopColor="#E5C65A" />
          <stop offset="70%" stopColor="#D6B34A" />
          <stop offset="100%" stopColor="#9E7C1F" />
        </linearGradient>
        <linearGradient id="goldGradGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C99E2A" />
          <stop offset="50%" stopColor="#FFEAA7" />
          <stop offset="100%" stopColor="#8C6810" />
        </linearGradient>
        <radialGradient id="emblemBg" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#042F21" />
          <stop offset="90%" stopColor="#031E15" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* Dark emerald background circle */}
      <circle cx="100" cy="100" r="96" fill="url(#emblemBg)" stroke="url(#goldGrad1)" strokeWidth="3" />

      {/* Outer concentric decorative border rings */}
      <circle cx="100" cy="100" r="91" stroke="url(#goldGrad1)" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="100" cy="100" r="85" stroke="url(#goldGrad1)" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="74" stroke="url(#goldGrad1)" strokeWidth="1.8" />

      {/* Fleur-de-lis & ornamental ticks around ring */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            {/* Small outer ornamental tooth */}
            <path
              d="M 98 9 L 100 6 L 102 9 Z"
              fill="url(#goldGrad1)"
            />
            {/* Fleur-de-lis motif between rings */}
            <path
              d="M 100 18 C 98 22, 95 23, 94 25 C 93 27, 95 28, 97 27 C 98 26, 99 24, 100 24 C 101 24, 102 26, 103 27 C 105 28, 107 27, 106 25 C 105 23, 102 22, 100 18 Z"
              fill="url(#goldGrad1)"
            />
            {/* Inner sawtooth spike */}
            <path
              d="M 96 28 L 100 33 L 104 28 Z"
              fill="url(#goldGrad1)"
            />
          </g>
        );
      })}

      {/* Inner Crown / Ring border */}
      <circle cx="100" cy="100" r="67" stroke="url(#goldGrad1)" strokeWidth="1.5" />

      {/* Radiating Lion Mane Lines */}
      {/* Top and side flowing mane strands */}
      <path
        d="M 75 36 C 85 45, 90 52, 90 60"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 85 34 C 92 42, 96 50, 96 58"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 100 33 L 100 58"
        stroke="url(#goldGrad1)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 115 34 C 108 42, 104 50, 104 58"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 125 36 C 115 45, 110 52, 110 60"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Left flowing mane waves */}
      <path
        d="M 60 48 C 68 55, 75 68, 70 82 C 67 90, 62 100, 68 112"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 50 62 C 58 72, 64 85, 60 98 C 58 108, 54 118, 62 130"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 45 80 C 52 90, 56 102, 54 115 C 52 126, 56 138, 68 148"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 46 100 C 52 110, 53 125, 60 138 C 65 146, 72 154, 82 160"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Right flowing mane waves */}
      <path
        d="M 140 48 C 132 55, 125 68, 130 82 C 133 90, 138 100, 132 112"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 150 62 C 142 72, 136 85, 140 98 C 142 108, 146 118, 138 130"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 155 80 C 148 90, 144 102, 146 115 C 148 126, 144 138, 132 148"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 154 100 C 148 110, 147 125, 140 138 C 135 146, 128 154, 118 160"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom beard strands */}
      <path
        d="M 85 145 C 88 155, 94 165, 96 172"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 100 148 L 100 174"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 115 145 C 112 155, 106 165, 104 172"
        stroke="url(#goldGrad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Solid Stylized Gold Lion Face Mask */}
      <path
        d="M 72 65 
           C 78 58, 86 54, 100 54 
           C 114 54, 122 58, 128 65 
           C 134 72, 136 82, 130 92 
           C 126 98, 128 106, 132 114 
           C 134 118, 132 126, 124 130 
           C 118 133, 114 128, 110 132 
           C 106 136, 108 144, 100 152 
           C 92 144, 94 136, 90 132 
           C 86 128, 82 133, 76 130 
           C 68 126, 66 118, 68 114 
           C 72 106, 74 98, 70 92 
           C 64 82, 66 72, 72 65 Z"
        fill="url(#goldGradGlow)"
        stroke="url(#goldGrad1)"
        strokeWidth="1.5"
      />

      {/* Piercing Lion Eyes */}
      <path
        d="M 78 82 C 84 80, 90 84, 93 86 C 88 89, 82 88, 78 82 Z"
        fill="#042F21"
      />
      <path
        d="M 122 82 C 116 80, 110 84, 107 86 C 112 89, 118 88, 122 82 Z"
        fill="#042F21"
      />

      {/* Brow furrow and nose ridge */}
      <path
        d="M 94 84 L 97 100 L 93 108 L 100 114 L 107 108 L 103 100 L 106 84"
        stroke="#042F21"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Nose and Muzzle */}
      <polygon points="95,108 105,108 100,116" fill="#042F21" />

      {/* Whiskers & Mouth cleft */}
      <path
        d="M 100 116 L 100 123 M 92 124 C 95 127, 98 126, 100 123 C 102 126, 105 127, 108 124"
        stroke="#042F21"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Chin Tuft */}
      <path
        d="M 95 130 C 97 136, 100 140, 100 144 C 100 140, 103 136, 105 130"
        stroke="#042F21"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const KosmoLogo: React.FC<KosmoLogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  id = 'kosmo-cafe-logo'
}) => {
  const emblemSizes = {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88,
  };

  const textSizes = {
    sm: { brand: 'text-xl tracking-[0.18em]', plaque: 'text-[9px] px-2 py-0.5 tracking-[0.25em]' },
    md: { brand: 'text-2xl tracking-[0.2em]', plaque: 'text-[10px] px-2.5 py-0.5 tracking-[0.3em]' },
    lg: { brand: 'text-3xl sm:text-4xl tracking-[0.22em]', plaque: 'text-xs px-3 py-1 tracking-[0.35em]' },
    xl: { brand: 'text-4xl sm:text-5xl tracking-[0.25em]', plaque: 'text-sm px-4 py-1.5 tracking-[0.4em]' },
  };

  if (variant === 'emblem') {
    return <LionEmblem size={emblemSizes[size]} className={className} id={`${id}-emblem`} />;
  }

  return (
    <div
      id={id}
      className={`inline-flex items-center gap-3 select-none group ${className}`}
    >
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LionEmblem size={emblemSizes[size]} id={`${id}-lion`} />
      </div>

      <div className="flex flex-col items-start leading-none justify-center">
        <span
          className={`font-brand font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5CC] via-[#E5C65A] to-[#C99E2A] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${textSizes[size].brand}`}
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          KOSMO
        </span>
        <div className="mt-1 flex items-center">
          <span
            className={`font-brand uppercase font-bold text-[#043C2A] bg-gradient-to-r from-[#D6B34A] via-[#FFF0BE] to-[#D6B34A] rounded-sm shadow-sm border border-[#FFEAA7] ${textSizes[size].plaque}`}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            CAFE
          </span>
        </div>
      </div>
    </div>
  );
};
