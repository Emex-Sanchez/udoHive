export type PixelIconName =
  | 'ShoppingCart'
  | 'Warehouse'
  | 'Tractor'
  | 'MapPinned'
  | 'Building2'
  | 'BrainCircuit'
  | 'ShieldCheck'
  | 'Factory';

const ICONS: Record<PixelIconName, string[]> = {
  ShoppingCart: [
    '..........',
    '..IIII....',
    '..I..I....',
    '.I......I.',
    '.IIIIIIII.',
    'IIIIIIIIII',
    '.I....I.I.',
    '..........',
    '..........',
    '..........',
  ],
  Warehouse: [
    '..........',
    '..IIII....',
    '.IIIIIIII.',
    'IIIIIIIIII',
    'IIIIIIIIII',
    'I.......II',
    'I..II....I',
    'IIIIIIIIII',
    '..........',
    '..........',
  ],
  Tractor: [
    '..........',
    '..IIII....',
    '..I..I....',
    '.IIIIIIII.',
    'IIIIIIIIII',
    'I.......II',
    'IIIIIIIIII',
    '..........',
    '..........',
    '..........',
  ],
  MapPinned: [
    '..........',
    '...III....',
    '..IIIII...',
    '..IIIII...',
    '.IIIIIIII.',
    '.IIIIIIII.',
    '..IIIIII..',
    '...IIII...',
    '....II....',
    '..........',
  ],
  Building2: [
    '..........',
    '..IIII....',
    '.IIIIIIII.',
    'IIIIIIIIII',
    'I.I....I.I',
    'I.I....I.I',
    'IIIIIIIIII',
    '..........',
    '..........',
    '..........',
  ],
  BrainCircuit: [
    '..........',
    '..IIII....',
    '.I....I.I.',
    'II.......II',
    'II.......II',
    '.I....I.I.',
    '..IIII....',
    '..........',
    '..........',
    '..........',
  ],
  ShieldCheck: [
    '..........',
    '...III....',
    '..IIIII...',
    '.I.......I.',
    '.I.......I.',
    '..IIIIII..',
    '...IIII...',
    '....II....',
    '..........',
    '..........',
  ],
  Factory: [
    '..........',
    '..IIII....',
    '.IIIIIIII.',
    'IIIIIIIIII',
    'I.........I',
    'I...II...I',
    'IIIIIIIIII',
    '..........',
    '..........',
    '..........',
  ],
};

interface PixelIconProps {
  name: PixelIconName;
  color?: string;
  size?: number;
  className?: string;
}

export default function PixelIcon({
  name,
  color = '#999999',
  size = 8,
  className,
}: PixelIconProps) {
  const rows = ICONS[name];
  const colors: Record<string, string> = { I: color };
  return (
    <svg
      viewBox="0 0 10 10"
      width={10 * size}
      height={10 * size}
      className={className}
      style={{
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges',
        display: 'block',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {rows.map((row, y) =>
        [...row].map((code, x) => {
          const c = colors[code];
          if (!c) return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={c} />;
        })
      )}
    </svg>
  );
}
