import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import TopoBackground from '../components/decorative/TopoBackground'
import { heroData } from '../data/content'
import { useThemeMode } from '../context/ThemeContext'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const container = useRef(null)
  const { mode } = useThemeMode()

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.hero-meta-item', { opacity: 0, y: 16, stagger: 0.1, duration: 0.7 })
      .from('.hero-h1', { opacity: 0, y: 40, duration: 1.1 }, '-=0.4')
      .from('.hero-tagline', { opacity: 0, y: 24, duration: 0.8 }, '-=0.6')
      .from('.hero-kpi', { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }, '-=0.4')
      .from('.portrait-wrap', { opacity: 0, x: 30, duration: 1 }, 0.2)
  }, { scope: container })

  return (
    <section
      id="hero"
      ref={container}
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '120px 0 60px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 40,
        borderTop: 0,
      }}
    >
      <TopoBackground />

      {/* Left column */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
        <div>
          <div className="hero-meta" style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            {heroData.meta.map(m => (
              <span key={m.label} className="hero-meta-item">
                <b style={{ color: 'var(--ink)', fontWeight: 500 }}>{m.label}</b> {m.value}
              </span>
            ))}
          </div>

          <h1
            className="hero-h1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 350,
              fontSize: 'clamp(64px, 9vw, 156px)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              margin: '28px 0 0',
              fontVariationSettings: '"SOFT" 30, "WONK" 1',
            }}
          >
            Arghadeep<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>Bose,</span>{' '}
            <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--muted)' }}>&amp;</span><br />
            the city he<br />
            measures.
          </h1>
        </div>

        <div>
          <div
            className="hero-tagline"
            style={{ marginTop: 40, maxWidth: 560 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Prologue · 001
              </span>
              <span style={{ flex: 1, height: 1, background: 'var(--accent)', opacity: 0.35 }} />
            </div>
            <p style={{ fontSize: 'var(--fs-tagline)', lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, borderLeft: '2px solid var(--accent)', paddingLeft: 18 }}>
              Geographer, urbanist and educator working at the intersection of{' '}
              <em>remote sensing</em>, air-quality science, and the lived realities of South Asian cities.
              Currently Assistant Professor at The Assam Royal Global University.
            </p>
          </div>

          <div style={{ marginTop: 60 }}>
            <div className="hero-kpis" style={{ display: 'flex', width: '100%', gap: 0 }}>
              {heroData.kpis.map(kpi => (
                <div
                  key={kpi.label}
                  className="hero-kpi"
                  style={{ borderTop: '1px solid var(--rule)', paddingTop: 10, flex: 1, paddingRight: 16 }}
                >
                  <div className="kpi-value" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-kpi-val)', fontWeight: 400, lineHeight: 1, fontVariationSettings: '"SOFT" 50' }}>
                    {kpi.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right column - portrait */}
      <div className="portrait-wrap" style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
        <div style={{
          position: 'relative',
          border: '1px solid var(--ink)',
          background: 'var(--paper-2)',
          aspectRatio: '4/5',
          overflow: 'hidden',
          width: '100%',
          maxHeight: 'min(70vh, 680px)',
        }}>
          {/* Crosshairs */}
          {['tl', 'tr', 'bl', 'br'].map(pos => (
            <span key={pos} style={{
              position: 'absolute', pointerEvents: 'none', zIndex: 4,
              width: 22, height: 22,
              top: pos.includes('b') ? 'auto' : -1,
              bottom: pos.includes('b') ? -1 : 'auto',
              left: pos.includes('r') ? 'auto' : -1,
              right: pos.includes('r') ? -1 : 'auto',
            }}>
              <span style={{ position: 'absolute', width: '100%', height: 1, background: 'var(--accent)', top: '50%', left: 0 }} />
              <span style={{ position: 'absolute', width: 1, height: '100%', background: 'var(--accent)', left: '50%', top: 0 }} />
            </span>
          ))}

          <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', background: 'var(--paper)', border: '1px solid var(--ink)', padding: '5px 9px', textTransform: 'uppercase', zIndex: 3 }}>
            PLATE I · FIG. 01
          </div>
          <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', background: 'var(--paper)', border: '1px solid var(--ink)', padding: '5px 9px', textTransform: 'uppercase', zIndex: 3 }}>
            SUBJECT · A.B.
          </div>
          <div style={{ position: 'absolute', bottom: 14, left: 14, fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', background: 'var(--paper)', border: '1px solid var(--ink)', padding: '5px 9px', textTransform: 'uppercase', zIndex: 3 }}>
            26.7271°N · 88.3953°E
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)', padding: '5px 9px', textTransform: 'uppercase', zIndex: 3 }}>
            Ph.D · 2024
          </div>

          <img
            src={`${BASE}portrait.jpeg`}
            alt="Portrait of Dr. Arghadeep Bose"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.02) saturate(0.85)', mixBlendMode: mode === 'dark' ? 'normal' : 'multiply', display: 'block' }}
          />

          {/* Scan-line overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(26,26,23,0.05) 3px 4px)',
            mixBlendMode: mode === 'dark' ? 'screen' : 'multiply',
          }} />
        </div>

        <div className="portrait-side-label" style={{ position: 'absolute', left: '100%', top: 0, bottom: 0, width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.1em', whiteSpace: 'nowrap', transform: 'rotate(90deg)', display: 'block' }}>
            — SCALE 1:1 · ALT. 1,200 M · NORTH BENGAL FOOTHILLS —
          </span>
        </div>
      </div>
    </section>
  )
}
