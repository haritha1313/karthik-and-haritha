export default function TempleArch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main arch */}
      <path
        d="M50,200 L50,80 Q50,20 150,20 L300,10 L450,20 Q550,20 550,80 L550,200"
        fill="none"
        stroke="#D4A017"
        strokeWidth="3"
      />
      {/* Inner arch */}
      <path
        d="M80,200 L80,90 Q80,40 170,40 L300,32 L430,40 Q520,40 520,90 L520,200"
        fill="none"
        stroke="#9B1B30"
        strokeWidth="2"
      />
      {/* Kalash (pot) at top */}
      <g transform="translate(300, 0)">
        <ellipse cx="0" cy="8" rx="12" ry="6" fill="#D4A017" />
        <path d="M-8,8 L-6,16 L6,16 L8,8" fill="#D4A017" />
        {/* Coconut */}
        <circle cx="0" cy="4" r="4" fill="#8B4513" />
        {/* Mango leaves */}
        <path d="M0,4 C-8,-4 -12,-2 -10,2" stroke="#B8860B" strokeWidth="1.5" fill="#D4A017" />
        <path d="M0,4 C8,-4 12,-2 10,2" stroke="#B8860B" strokeWidth="1.5" fill="#D4A017" />
        <path d="M0,4 C-4,-8 -2,-10 0,-6" stroke="#B8860B" strokeWidth="1" fill="#D4A017" />
        <path d="M0,4 C4,-8 2,-10 0,-6" stroke="#B8860B" strokeWidth="1" fill="#D4A017" />
      </g>
      {/* Hanging bells */}
      {[150, 250, 350, 450].map((x) => (
        <g key={x} transform={`translate(${x}, 50)`}>
          <line x1="0" y1="0" x2="0" y2="15" stroke="#D4A017" strokeWidth="1" />
          <path d="M-4,15 Q0,25 4,15" fill="#D4A017" />
          <circle cx="0" cy="22" r="1.5" fill="#B8860B" />
        </g>
      ))}
      {/* Decorative pillars */}
      {[70, 530].map((x) => (
        <g key={x}>
          <rect x={x - 8} y={80} width="16" height="120" fill="none" stroke="#D4A017" strokeWidth="1.5" />
          {/* Pillar bands */}
          {[100, 130, 160].map((y) => (
            <rect key={y} x={x - 8} y={y} width="16" height="4" fill="#D4A017" opacity="0.4" />
          ))}
        </g>
      ))}
      {/* Marigold garland hanging from arch */}
      <path
        d="M100,70 Q200,100 300,85 Q400,70 500,90"
        fill="none"
        stroke="#F9A825"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M100,70 Q200,105 300,90 Q400,75 500,90"
        fill="none"
        stroke="#EF6C00"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
