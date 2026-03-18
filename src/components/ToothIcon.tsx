export function ToothIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M16 3C12.2 3 10 5 9 7c-1.3 2.5-.5 5.5.5 8 .75 1.9 1.75 4.25 2.5 7 .6 2.3 1.4 4 2.3 4 .5-.2.8-1.5 1-2.5.2-1 .3-1.5.5-1.5s.3.5.5 1.5c.2 1 .5 2.3 1 2.5.9 0 1.7-1.7 2.3-4 .75-2.75 1.75-5.1 2.5-7 1-2.5 1.8-5.5.5-8C21.5 5 19.3 3 16 3z"
        fill="currentColor"
      />
      <path
        d="M12.5 8c.8-1.2 1.8-2.2 3.8-2.2"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
