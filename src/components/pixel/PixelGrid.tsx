interface PixelGridProps {
  className?: string;
  opacity?: number;
}

/**
 * Subtle full-bleed pixel grid overlay (graph-paper feel).
 */
export default function PixelGrid({ className, opacity = 0.06 }: PixelGridProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="pixel-grid"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" fill="none" />
          <rect x="19" y="19" width="1" height="1" fill="currentColor" fillOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pixel-grid)" />
    </svg>
  );
}
