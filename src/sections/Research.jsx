import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { researchAreas } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

function ResearchSVG({ type }) {
  const style = { width: '100%', height: '100%' }
  switch (type) {
    case 'land': return (
      <svg viewBox="0 0 120 60" style={style}>
        <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7">
          <rect x="2" y="2" width="116" height="56" />
          <rect x="14" y="14" width="40" height="32" fill="#c0a285" opacity="0.4" />
          <rect x="58" y="22" width="50" height="24" fill="#7a6b50" opacity="0.5" />
          <rect x="20" y="20" width="14" height="14" fill="var(--ink)" opacity="0.7" />
          <line x1="2" y1="40" x2="118" y2="40" strokeDasharray="2 2" />
        </g>
      </svg>
    )
    case 'air': return (
      <svg viewBox="0 0 120 60" style={style}>
        <g fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.7">
          <path d="M2 50 Q 18 20, 32 30 T 62 22 T 92 36 T 118 18" />
          <path d="M2 56 Q 22 40, 40 46 T 76 38 T 118 44" strokeDasharray="2 2" />
          <line x1="2" y1="58" x2="118" y2="58" />
          <circle cx="32" cy="30" r="1.6" fill="currentColor" />
          <circle cx="62" cy="22" r="1.6" fill="currentColor" />
          <circle cx="92" cy="36" r="1.6" fill="currentColor" />
        </g>
      </svg>
    )
    case 'social': return (
      <svg viewBox="0 0 120 60" style={style}>
        <g fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7">
          <circle cx="24" cy="30" r="22" />
          <circle cx="56" cy="30" r="14" />
          <circle cx="84" cy="30" r="10" />
          <circle cx="104" cy="30" r="6" />
          <line x1="2" y1="30" x2="118" y2="30" strokeDasharray="2 2" />
          <circle cx="24" cy="30" r="3" fill="var(--accent)" />
        </g>
      </svg>
    )
    case 'mountain': return (
      <svg viewBox="0 0 120 60" style={style}>
        <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7">
          <polyline points="2,52 22,30 38,40 56,18 76,32 96,12 118,40 118,58 2,58" fill="#7a6b50" fillOpacity="0.25" />
          <polyline points="2,52 22,30 38,40 56,18 76,32 96,12 118,40" />
          <line x1="56" y1="18" x2="56" y2="6" />
          <polygon points="56,4 60,10 52,10" fill="var(--accent)" />
        </g>
      </svg>
    )
    default: return null
  }
}

export default function Research() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.research-card'), {
      opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="research" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>02</span>
          Research Atlas
        </div>
        <h2>
          Four <span className="it">terrains</span> of inquiry - read together as one geography of change.
        </h2>
      </div>

      <div className="research-grid-inner" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1, background: 'var(--rule)',
        border: '1px solid var(--rule)',
      }}>
        {researchAreas.map(area => (
          <motion.div
            key={area.idx}
            className="research-card"
            whileHover={{ backgroundColor: 'var(--paper-2)' }}
            style={{
              background: 'var(--paper)',
              padding: '32px 26px',
              position: 'relative',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'default',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.16em' }}>
                {area.idx}
              </div>
              <h3
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.015em', margin: '14px 0 12px', fontVariationSettings: '"SOFT" 30, "WONK" 1' }}
                dangerouslySetInnerHTML={{ __html: area.titleHtml }}
              />
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>
                {area.desc}
              </p>
            </div>
            <div style={{ marginTop: 22, height: 70, display: 'flex', alignItems: 'flex-end' }}>
              <ResearchSVG type={area.svgType} />
            </div>
            <span style={{
              position: 'absolute', top: 18, right: 18,
              fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--accent)', border: '1px solid var(--accent)',
              padding: '3px 7px', borderRadius: 999,
            }}>
              {area.papers}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
