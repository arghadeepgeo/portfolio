import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { aboutData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.gsap-reveal'), {
      opacity: 0, y: 28, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 80%' },
    })
  }, { scope: section })

  return (
    <section id="about" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>01</span>
          Profile · The Urban Geographer
        </div>
        <h2>
          A scholar mapping the <span className="it">restless geographies</span> of an urbanising sub-continent.
        </h2>
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
        <div className="gsap-reveal">
          {aboutData.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: 'var(--fs-body-lg)', lineHeight: 1.55, color: 'var(--ink-2)', margin: '0 0 18px',
                ...(i === 0 ? { '--drop-cap': 1 } : {}),
              }}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>

        <aside
          className="gsap-reveal"
          style={{
            border: '1px solid var(--ink)',
            padding: 28,
            position: 'relative',
            background: 'var(--about-aside-bg)',
          }}
        >
          <div style={{
            position: 'absolute', top: -10, left: 18,
            background: 'var(--paper)', padding: '0 8px',
            fontFamily: 'var(--font-mono)', fontSize: '9.5px',
            letterSpacing: '0.18em', color: 'var(--muted)',
          }}>
            FACT SHEET / FS-01
          </div>
          <dl style={{ margin: 0, paddingTop: 6 }}>
            {aboutData.facts.map(f => (
              <div key={f.dt} style={{
                display: 'grid', gridTemplateColumns: '110px 1fr',
                gap: 16, padding: '12px 0',
                borderBottom: '1px dashed var(--rule)',
              }}>
                <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', paddingTop: 3 }}>
                  {f.dt}
                </dt>
                <dd style={{ margin: 0, color: 'var(--ink)', fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-body)', lineHeight: 1.4 }}>
                  {f.dd}
                  {f.em && <em style={{ fontStyle: 'italic', color: 'var(--muted)', display: 'block', fontSize: 'var(--fs-detail)', marginTop: 2 }}>{f.em}</em>}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
