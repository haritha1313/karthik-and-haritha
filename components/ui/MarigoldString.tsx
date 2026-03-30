export default function MarigoldString({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* String */}
        <path
          d="M0,15 Q300,40 600,20 Q900,0 1200,25"
          stroke="#B8860B"
          strokeWidth="1"
          fill="none"
        />
        {/* Marigold flowers */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x = i * 40 + 20;
          const yBase = 15 + Math.sin(i * 0.5) * 10;
          const size = 6 + (i % 3) * 2;
          const colors = ["#F9A825", "#EF6C00", "#FF8F00", "#F57C00"];
          return (
            <g key={i} transform={`translate(${x}, ${yBase})`}>
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy={-size * 0.6}
                  rx={size * 0.35}
                  ry={size * 0.6}
                  fill={colors[i % colors.length]}
                  transform={`rotate(${angle})`}
                  opacity="0.85"
                />
              ))}
              <circle cx="0" cy="0" r={size * 0.2} fill="#D84315" />
            </g>
          );
        })}
        {/* Hanging jasmine strands */}
        {[200, 600, 1000].map((x) => (
          <g key={x}>
            <line x1={x} y1={20} x2={x} y2={55} stroke="#E8E8E8" strokeWidth="1" />
            {[30, 38, 46, 54].map((y) => (
              <circle key={y} cx={x} cy={y} r="2" fill="white" opacity="0.9" />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
