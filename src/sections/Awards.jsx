import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { awardsData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Awards() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.award-card'), {
      opacity: 0, y: 24, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="awards" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>08</span>
          Honours &amp; Awards
        </div>
        <h2>A short list of the times the <span className="it">work was acknowledged.</span></h2>
      </div>

      <div className="awards-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
      }}>
        {awardsData.map((award, i) => (
          <motion.div
            key={i}
            className="award-card"
            whileHover={{ backgroundColor: 'var(--paper-2)' }}
            style={{
              padding: '32px 28px 28px',
              borderRight: i % 3 < 2 ? '1px solid var(--rule)' : 0,
              position: 'relative',
              transition: 'background 0.3s',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase' }}>
              {award.ribbon}
            </div>
            <h4
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'var(--fs-title-xl)', lineHeight: 1.12, margin: '14px 0 10px', fontVariationSettings: '"SOFT" 30, "WONK" 1', letterSpacing: '-0.01em' }}
              dangerouslySetInnerHTML={{ __html: award.titleHtml }}
            />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-detail)', color: 'var(--muted)', lineHeight: 1.5, margin: 0 }}>
              {award.desc}
            </p>
            <span style={{ position: 'absolute', top: 18, right: 22, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink)' }}>
              {award.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
