export default function DiyaIcon({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flame */}
      <path
        d="M20,4 C22,8 24,12 22,16 C21,18 20,18 20,18 C20,18 19,18 18,16 C16,12 18,8 20,4Z"
        fill="#E8751A"
        opacity="0.9"
      />
      <path
        d="M20,8 C21,10 22,13 21,15 C20.5,16 20,16 20,16 C20,16 19.5,16 19,15 C18,13 19,10 20,8Z"
        fill="#C9A84C"
        opacity="0.9"
      />
      {/* Lamp body */}
      <ellipse cx="20" cy="24" rx="10" ry="4" fill="#C9A84C" />
      <path
        d="M10,24 C10,24 12,32 20,32 C28,32 30,24 30,24"
        fill="#A68A3A"
      />
      {/* Base */}
      <ellipse cx="20" cy="34" rx="6" ry="2" fill="#C9A84C" />
      {/* Wick */}
      <line x1="20" y1="18" x2="20" y2="20" stroke="#3E2723" strokeWidth="1" />
    </svg>
  );
}
