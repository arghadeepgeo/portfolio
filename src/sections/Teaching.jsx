import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FieldMap from '../components/decorative/FieldMap'
import { teachingData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Teaching() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.teach-item'), {
      opacity: 0, x: -20, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="teaching" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>04</span>
          Teaching &amp; Fieldwork
        </div>
        <h2>Classrooms in <span className="it">two states,</span> field notebooks across eight.</h2>
      </div>

      <div className="teaching-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80 }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase', margin: '0 0 18px' }}>
            Appointments &amp; Roles
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {teachingData.appointments.map((a, i) => (
              <li
                key={i}
                className="teach-item"
                style={{
                  borderBottom: '1px solid var(--rule)',
                  padding: '18px 0',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 20,
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent)', paddingTop: 4 }}>
                  {a.period}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 22, margin: '0 0 4px', lineHeight: 1.15, fontVariationSettings: '"SOFT" 30' }}>
                    {a.title} <span style={{ fontStyle: 'italic', color: 'var(--muted)', fontWeight: 300 }}>{a.subtitle}</span>
                  </h4>
                  <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: 'var(--muted)', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>
                    {a.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase', margin: '40px 0 14px' }}>
            Toolkit
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 560 }}>
            {teachingData.toolkit}
          </p>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase', margin: '0 0 18px' }}>
            Field Sites · 2015 - 25
          </h3>
          <FieldMap />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', color: 'var(--muted)', marginTop: 18, lineHeight: 1.55 }}>
            From the high-altitude homestays of Pelling and Tinchuley to the coastal industries of Vizag and the heritage circuits of Rajgir - a decade of fieldwork across eight Indian states.
          </p>
        </div>
      </div>
    </section>
  )
}
