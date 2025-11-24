export default function AfricanPattern() {
  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <defs>
        <pattern
          id="ankara-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100" height="100" fill="currentColor" fillOpacity="0.05" />

          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            fill="currentColor"
            fillOpacity="0.1"
          />

          <circle cx="25" cy="25" r="8" fill="currentColor" fillOpacity="0.15" />
          <circle cx="75" cy="25" r="8" fill="currentColor" fillOpacity="0.15" />
          <circle cx="25" cy="75" r="8" fill="currentColor" fillOpacity="0.15" />
          <circle cx="75" cy="75" r="8" fill="currentColor" fillOpacity="0.15" />

          <line
            x1="10"
            y1="10"
            x2="40"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.1"
          />
          <line
            x1="90"
            y1="10"
            x2="60"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.1"
          />
          <line
            x1="10"
            y1="90"
            x2="40"
            y2="60"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.1"
          />
          <line
            x1="90"
            y1="90"
            x2="60"
            y2="60"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.1"
          />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#ankara-pattern)" />
    </svg>
  );
}
