interface PixelDividerProps {
  className?: string;
  color?: string;
  height?: number;
}

/**
 * Horizontal decorative pixel-art divider.
 */
export default function PixelDivider({
  className,
  color = '#999999',
  height = 4,
}: PixelDividerProps) {
  const width = 120;
  const rows: string[] = [];
  for (let y = 0; y < height; y++) {
    let row = '';
    for (let x = 0; x < width; x++) {
      row += x % 4 === y % 4 ? 'X' : '.';
    }
    rows.push(row);
  }

  const colors: Record<string, string> = { X: color };

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height * 4}
        style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges', display: 'block' }}
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
    </div>
  );
}
