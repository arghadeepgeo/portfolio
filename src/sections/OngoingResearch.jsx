import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ongoingResearchData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function OngoingResearch() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.ongoing-item'), {
      opacity: 0, y: 20, stagger: 0.08, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="ongoing-research" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>04</span>
          Active Research
        </div>
        <h2>
          Work in progress - <span className="it">ongoing inquiries</span> and manuscripts under review.
        </h2>
      </div>

      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {ongoingResearchData.map((project, i) => (
          <div
            key={i}
            className="ongoing-item"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 140px',
              gap: 24, padding: '22px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'baseline',
              transition: 'background 0.25s, padding 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-2)'; e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.paddingRight = '12px' }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.paddingRight = '0' }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>
              - {String(i + 1).padStart(2, '0')}.
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-title-md)', lineHeight: 1.35, fontWeight: 400, color: 'var(--ink)', fontVariationSettings: '"SOFT" 20' }}>
              {project.title}
            </div>
            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  border: project.status === 'Under Review' ? '1px solid var(--accent)' : '1px solid var(--moss)',
                  color: project.status === 'Under Review' ? 'var(--accent)' : 'var(--moss)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '8.5px',
                  padding: '2px 8px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
