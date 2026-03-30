export default function TempleBells({ className = "" }: { className?: string }) {
  // Enhanced, softer golden bell components that stay out of the way of text
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Asymmetrical placement so the left and right sides are not mirrored */}
      {[
        // -- LEFT SIDE (3 bells) --
        { x: "left-[-4%]", y: "top-[-5%]", scale: 0.5, delay: 0, shadowColor: "rgba(255,215,0,0.15)", ropeHeight: '70px' },
        // Lowered second bell further
        { x: "left-[9%]", y: "top-[-1%]", scale: 0.4, delay: 0.7, shadowColor: "rgba(255,165,0,0.1)", ropeHeight: '270px' },
        // Moved third bell slightly left
        { x: "left-[19%]", y: "top-[-10%]", scale: 0.3, delay: 1.4, shadowColor: "rgba(255,140,0,0.08)", ropeHeight: '30px' },
        
        // -- RIGHT SIDE (2 bells) --
        { x: "right-[15%]", y: "top-[-6%]", scale: 0.35, delay: 1.1, shadowColor: "rgba(255,165,0,0.1)", ropeHeight: '45px' },
        { x: "right-[2%]", y: "top-[-3%]", scale: 0.55, delay: 0.3, shadowColor: "rgba(255,215,0,0.15)", ropeHeight: '140px' },
      ].map((bell, i) => (
        <div
          key={i}
          className={`absolute ${bell.x} flex flex-col items-center origin-top animate-swing z-0`}
          style={{ 
            top: bell.y,
            transform: `scale(${bell.scale})`,
            animationDelay: `${bell.delay}s`,
            animationDuration: `${3.5 + (i * 0.5)}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            opacity: 0.85 // softer overall opacity
          }}
        >
          {/* Detailed rope with softer texture */}
          <div className="relative flex flex-col items-center opacity-80">
            {/* Hanging thread core */}
            <div
              className="bg-gradient-to-r from-[#B8860B] via-[#EEDD82] to-[#B8860B]"
              style={{ width: '2px', height: bell.ropeHeight }}
            />
            {/* Rope texture lines */}
            <div 
              className="absolute top-0 bottom-0 border-l border-r border-[#CDAA7D]/30" 
              style={{ width: '2px', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(205,170,125,0.4) 2px, rgba(205,170,125,0.4) 4px)' }} 
            />
          </div>

          {/* Gorgeous SVG Bell */}
          <div className="relative mt-[-8px]" style={{ filter: `drop-shadow(0 10px 15px ${bell.shadowColor})` }}>
            <svg 
              width="180" 
              height="200" 
              viewBox="0 0 200 240" 
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
              style={{ transform: 'translateX(-2px)' }}
            >
              <defs>
                {/* Softer, more muted metallic gold gradients */}
                <linearGradient id={`goldMain-${i}`} x1="15%" y1="0%" x2="85%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8DC" />
                  <stop offset="15%" stopColor="#FCE6C9" />
                  <stop offset="35%" stopColor="#F0CA86" />
                  <stop offset="70%" stopColor="#DAA520" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>

                <linearGradient id={`goldRim-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DAA520" />
                  <stop offset="25%" stopColor="#FCE6C9" />
                  <stop offset="50%" stopColor="#F0CA86" />
                  <stop offset="75%" stopColor="#FCE6C9" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>

                <linearGradient id={`darkBronze-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B6508" />
                  <stop offset="50%" stopColor="#CDAA7D" />
                  <stop offset="100%" stopColor="#8B6508" />
                </linearGradient>

                <radialGradient id={`bellInterior-${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="50%" stopColor="#5C4033" />
                  <stop offset="100%" stopColor="#8B6508" />
                </radialGradient>
              </defs>

              <g transform="translate(100, 100)">
                {/* Hanger Ring and Top cap */}
                <path d="M -15 -85 C -15 -110, 15 -110, 15 -85" fill="none" stroke={`url(#darkBronze-${i})`} strokeWidth="10" strokeLinecap="round"/>
                <path d="M -20 -85 C -20 -115, 20 -115, 20 -85" fill="none" stroke={`url(#goldMain-${i})`} strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                
                <rect x="-24" y="-85" width="48" height="20" rx="6" fill={`url(#darkBronze-${i})`} />
                <rect x="-20" y="-83" width="40" height="16" rx="4" fill={`url(#goldMain-${i})`} />
                <rect x="-16" y="-76" width="32" height="4" fill={`url(#darkBronze-${i})`} opacity="0.5"/>
                
                {/* Main Bell Body */}
                <path d="M -35 -65 
                        C -45 -25, -50 20, -65 65 
                        C -75 95, -95 110, -100 115 
                        L 100 115 
                        C 95 110, 75 95, 65 65 
                        C 50 20, 45 -25, 35 -65 
                        Z" 
                      fill={`url(#goldMain-${i})`} />
                
                {/* Elaborate Decorative Patterns / Engravings - Softened */}
                <g opacity="0.25" stroke={`url(#darkBronze-${i})`} fill="none">
                  {/* Top bands */}
                  <path d="M -42 -30 Q 0 -22 42 -30" strokeWidth="5" />
                  <path d="M -40 -30 Q 0 -22 40 -30" strokeWidth="2" stroke="#FFF" opacity="0.2"/>
                  
                  <path d="M -46 0 Q 0 10 46 0" strokeWidth="3" />
                  
                  {/* Scalloped middle pattern */}
                  <path d="M -54 35 Q -40 45 -27 38 Q -13 45 0 38 Q 13 45 27 38 Q 40 45 54 35" strokeWidth="2" />
                  
                  {/* Bottom ornate bands */}
                  <path d="M -68 75 Q 0 90 68 75" strokeWidth="6" />
                  <path d="M -73 85 Q 0 100 73 85" strokeWidth="3" />
                  
                  {/* Vertical accent lines suggesting volume */}
                  <path d="M -25 -65 Q -35 25 -50 115" strokeWidth="2" opacity="0.1" />
                  <path d="M 25 -65 Q 35 25 50 115" strokeWidth="2" opacity="0.1" />
                </g>

                {/* Shimmer/Highlight overlay for 3D effect */}
                <path d="M -30 -65 C -25 -25, -20 20, -35 65 C -45 95, -60 110, -80 115 
                         C -60 105, -35 85, -20 50 C -5 20, -10 -25, -15 -65 Z" 
                      fill="#FFFFFF" opacity="0.15" />
                
                <path d="M 30 -65 C 25 -25, 20 20, 35 65 C 45 95, 60 110, 80 115 
                         C 60 105, 35 85, 20 50 C 5 20, 10 -25, 15 -65 Z" 
                      fill="#000000" opacity="0.1" />
                
                {/* Bottom Rim / Opening */}
                <ellipse cx="0" cy="115" rx="100" ry="18" fill={`url(#goldRim-${i})`} />
                <ellipse cx="0" cy="115" rx="92" ry="12" fill={`url(#bellInterior-${i})`} />
                <ellipse cx="0" cy="115" rx="92" ry="12" fill="none" stroke={`url(#darkBronze-${i})`} strokeWidth="1.5" opacity="0.6"/>
                
                {/* Detailed Clapper */}
                <g transform="translate(0, 120)">
                  <path d="M -5 0 L 5 0 L 2 15 L -2 15 Z" fill={`url(#goldMain-${i})`} />
                  <circle cx="0" cy="20" r="12" fill={`url(#goldMain-${i})`} />
                  <circle cx="-3" cy="17" r="3" fill="#FFFFFF" opacity="0.3" /> {/* Highlight */}
                  <circle cx="0" cy="20" r="12" fill="none" stroke={`url(#darkBronze-${i})`} strokeWidth="1" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
