const HERO_ROWS = [
  '............XXXXX................',
  '...........BBBBBBBB................',
  '.......GG........BBBBBBBB.........',
  '...........BBBBBBBB....GG.........',
  '............HHHHHHHH..............',
  '............hhhhhhhh..............',
  '............hhhhhhhh..............',
  '............hhhhhhhh..............',
  '...................Eew............',
  '...................eeE............',
  '...................Eew............',
  '............hhhhhhhh..............',
  '..............hhhhhh..............',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
];

const HERO_COLORS: Record<string, string> = {
  X: '#000000',
  B: '#999999',
  G: '#444444',
  H: '#cccccc',
  h: '#666666',
  E: '#ffffff',
  e: '#000000',
  w: '#333333',
};

interface PixelHeroSceneProps {
  size?: number;
  className?: string;
}

export default function PixelHeroScene({ size = 10, className }: PixelHeroSceneProps) {
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${HERO_ROWS[0]?.length ?? 0} ${HERO_ROWS.length}`}
        width={HERO_ROWS[0]?.length * size}
        height={HERO_ROWS.length * size}
        style={{
          imageRendering: 'pixelated',
          shapeRendering: 'crispEdges',
          display: 'block',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {HERO_ROWS.map((row, y) =>
          [...row].map((code, x) => {
            const color = HERO_COLORS[code];
            if (!color) return null;
            return (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />
            );
          })
        )}
      </svg>
    </div>
  );
}
