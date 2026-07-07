import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { invitedLecturesData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function InvitedLectures() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.lecture-item'), {
      opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="invited-lectures" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>07</span>
          Lectures &amp; Talks
        </div>
        <h2>
          Delivering knowledge beyond campus - <span className="it">invited lectures</span> and resource person roles.
        </h2>
      </div>

      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {invitedLecturesData.map((lecture, i) => (
          <div
            key={i}
            className="lecture-item"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1.5fr 2fr 130px',
              gap: 24, padding: '24px 0',
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
                {lecture.title}
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--fs-detail)', color: 'var(--muted)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                {lecture.institution}
              </p>
            </div>
            <div style={{ fontSize: 'var(--fs-body)', color: 'var(--ink-2)', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>
              {lecture.desc}
            </div>
            <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink)' }}>
              {lecture.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
