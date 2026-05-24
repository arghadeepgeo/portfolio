export default function TopoBackground() {
  return (
    <svg
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.28, zIndex: 0, color: 'var(--ink)' }}
    >
      <defs>
        <pattern id="topo-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo-grid)" />
      <g fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.55">
        <path d="M-20 740 C 200 700, 380 720, 580 660 S 980 600, 1220 640" />
        <path d="M-20 700 C 220 660, 400 680, 600 620 S 1000 560, 1220 600" />
        <path d="M-20 660 C 240 620, 420 640, 620 580 S 1020 520, 1220 560" />
        <path d="M-20 620 C 260 580, 440 600, 640 540 S 1040 480, 1220 520" />
        <path d="M-20 580 C 280 540, 460 560, 660 500 S 1060 440, 1220 480" />
        <path d="M-20 540 C 300 500, 480 520, 680 460 S 1080 400, 1220 440" />
        <path d="M-20 500 C 320 460, 500 480, 700 420 S 1100 360, 1220 400" />
        <path d="M-20 460 C 340 420, 520 440, 720 380 S 1120 320, 1220 360" />
      </g>
    </svg>
  )
}
