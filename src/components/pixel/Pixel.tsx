export interface PixelGridArtProps {
  rows: string[];
  colors: Record<string, string>;
  size?: number;
  className?: string;
}

/**
 * Renders a grid of 1x1 unit pixels scaled by `size`.
 * Each char in `rows` is looked up in `colors`; missing codes are transparent.
 */
export function PixelGridArt({
  rows,
  colors,
  size = 8,
  className,
}: PixelGridArtProps) {
  const width = rows[0]?.length ?? 0;
  const height = rows.length;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * size}
      height={height * size}
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
          const color = colors[code];
          if (!color) return null;
          return (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />
          );
        })
      )}
    </svg>
  );
}
