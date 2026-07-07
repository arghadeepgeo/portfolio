import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { refresherData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function RefresherFDP() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.refresher-item'), {
      opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="refresher" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>06</span>
          Training &amp; FDP
        </div>
        <h2>
          Refresher courses and <span className="it">faculty development</span> induction programmes.
        </h2>
      </div>

      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {refresherData.map((prog, i) => (
          <div
            key={i}
            className="refresher-item"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 100px',
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
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'var(--fs-title-md)', margin: '0 0 6px', lineHeight: 1.25, fontVariationSettings: '"SOFT" 20' }}>
                {prog.title}
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--fs-detail)', color: 'var(--muted)', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>
                {prog.institution}
              </p>
            </div>
            <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink)' }}>
              {prog.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
