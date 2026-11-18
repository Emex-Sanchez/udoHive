import { PixelGridArt } from './Pixel';

const HIVES_ROWS = [
  '......XX......',
  '.....XXXX.....',
  '....XXXXXX....',
  '...XXXXXXXX...',
  '..XXXXXXXXXX..',
  '.XXXXXXXXXXXX.',
  'XXXXXXXXXXXXXX',
  'XBBBBBBBBBBBBBX',
  'XB............BX',
  'XBBBBBBBBBBBBBX',
  'XB............BX',
  'XBBBBBWWBBBBBBX',
  'XBBBBBBBBBBBBBX',
  'XBBBBBWWBBBBBBX',
  '.XXXXXXXXXXXXXX.',
  '...XXXXXX.....',
];

const COLORS: Record<string, string> = {
  X: '#000000',
  B: '#999999',
  W: '#ffffff',
};

interface PixelLogoProps {
  size?: number;
  className?: string;
}

export default function PixelLogo({ size = 8, className }: PixelLogoProps) {
  return (
    <PixelGridArt rows={HIVES_ROWS} colors={COLORS} size={size} className={className} />
  );
}
