import { teachingData } from '../../data/content'

export default function FieldMap() {
  const { fieldSites } = teachingData

  return (
    <div style={{
      position: 'relative',
      border: '1px solid var(--ink)',
      background: 'var(--paper-2)',
      aspectRatio: '1 / 1.05',
      overflow: 'hidden',
    }}>
      <svg
        viewBox="0 0 60 60"
        aria-hidden="true"
        style={{ position: 'absolute', top: 14, right: 14, width: 42, height: 42, zIndex: 5 }}
      >
        <circle cx="30" cy="30" r="26" fill="none" stroke="var(--ink)" />
        <polygon points="30,8 33,30 30,52 27,30" fill="var(--ink)" opacity="0.85" />
        <polygon points="30,8 33,30 30,30" fill="var(--accent)" />
        <text x="30" y="6" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="6" fill="var(--ink)">N</text>
        <text x="30" y="58" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="6" fill="var(--ink)">S</text>
      </svg>

      <svg viewBox="0 0 400 420" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="map-dots" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="var(--ink)" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-dots)" />
        <g fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.45">
          <path d="M40 80 C 120 60, 200 90, 280 70 S 360 100, 380 90" />
          <path d="M30 110 C 110 95, 200 120, 290 100 S 370 130, 390 120" />
          <path d="M30 150 C 100 140, 200 160, 290 150 S 380 170, 390 160" />
          <path d="M40 200 C 120 195, 200 210, 290 205 S 380 220, 390 210" />
          <path d="M50 260 C 140 255, 220 270, 300 270 S 370 280, 380 280" />
          <path d="M70 320 C 160 320, 240 330, 300 335 S 360 340, 370 340" />
        </g>
        <path
          d="M120 60 L 290 65 L 320 130 L 340 200 L 290 320 L 240 380 L 180 380 L 130 320 L 90 240 L 80 160 Z"
          fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.55"
        />
        <line x1="200" y1="20" x2="200" y2="400" stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.6" />

        {fieldSites.map((site, i) => {
          const labelX = site.labelX ?? site.cx + 10
          return (
            <g key={i}>
              <circle cx={site.cx} cy={site.cy} r="5" fill={site.pulse ? 'var(--accent)' : 'var(--ink)'} />
              {site.pulse && (
                <circle cx={site.cx} cy={site.cy} r="6" fill="none" stroke="var(--accent)" strokeWidth="0.6" opacity="0.6">
                  <animate attributeName="r" values="6;18;6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
              )}
              <text x={labelX} y={site.cy + 3} fontFamily="JetBrains Mono" fontSize="8" fill="var(--ink)">
                {site.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div style={{
        position: 'absolute', bottom: 14, left: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
        background: 'var(--paper)', border: '1px solid var(--ink)',
        padding: '8px 10px', zIndex: 5,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
        Field Visit · 8 Sites
      </div>

      <div style={{
        position: 'absolute', bottom: 14, right: 14,
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
        background: 'var(--paper)', border: '1px solid var(--ink)',
        padding: '4px 8px', zIndex: 5,
      }}>
        ⊢━━━━━━━┤ 500 KM
      </div>
    </div>
  )
}
