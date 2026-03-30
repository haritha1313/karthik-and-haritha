export default function BananaLeaves({
  side,
  className = "",
}: {
  side: "left" | "right";
  className?: string;
}) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg
      viewBox="0 0 120 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip }}
    >
      {/* Leaf 1 - large */}
      <path
        d="M60,380 Q20,300 10,200 Q5,150 15,100 Q25,50 40,20 Q50,5 55,0"
        stroke="#B8860B"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M60,380 Q20,300 10,200 Q5,150 15,100 Q25,50 40,20 Q50,5 55,0
           Q60,20 65,60 Q70,120 65,200 Q60,300 60,380Z"
        fill="#D4A017"
        opacity="0.6"
      />
      {/* Leaf veins */}
      {[80, 140, 200, 260, 320].map((y) => (
        <path
          key={y}
          d={`M${30 + (y - 80) * 0.05},${y} Q${45},${y - 10} ${60},${y}`}
          stroke="#B8860B"
          strokeWidth="0.5"
          opacity="0.5"
          fill="none"
        />
      ))}
      {/* Leaf 2 - smaller, slightly different angle */}
      <path
        d="M70,380 Q40,320 30,250 Q25,200 35,160 Q45,120 55,90"
        stroke="#9B1B30"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M70,380 Q40,320 30,250 Q25,200 35,160 Q45,120 55,90
           Q60,110 65,160 Q72,220 75,300 Q75,350 70,380Z"
        fill="#B8860B"
        opacity="0.4"
      />
    </svg>
  );
}
