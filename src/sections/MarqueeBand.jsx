const items = [
  'Urban Geography', 'Remote Sensing', 'Air Quality', 'GIS Modelling',
  'Spatial Analysis', 'Time-Series Forecasting', 'Land-Use Change', 'Sustainability',
]

function MarqueeContent() {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          {i % 2 === 1
            ? <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>{item}</span>
            : item}
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
        </span>
      ))}
    </span>
  )
}

export default function MarqueeBand() {
  return (
    <div style={{
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
      overflow: 'hidden',
      padding: '22px 0',
      background: 'var(--ink)',
      color: 'var(--paper)',
      position: 'relative',
      zIndex: 5,
    }}>
      <div style={{
        display: 'flex',
        gap: 60,
        whiteSpace: 'nowrap',
        animation: 'marquee-scroll var(--marquee-duration, 60s) linear infinite',
        fontFamily: 'var(--font-serif)',
        fontSize: 38,
        fontWeight: 350,
        fontVariationSettings: '"SOFT" 50, "WONK" 1',
        letterSpacing: '-0.015em',
      }}>
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}
