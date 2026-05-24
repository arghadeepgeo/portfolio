import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { contactData } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

function ContactRow({ dt, children }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '110px 1fr',
      gap: 16, padding: '16px 0',
      borderBottom: '1px dashed rgba(244,239,230,0.18)',
      alignItems: 'baseline',
    }}>
      <dt style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(75% 0.05 80)' }}>{dt}</dt>
      <dd style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 17, fontVariationSettings: '"SOFT" 30' }}>{children}</dd>
    </div>
  )
}

export default function Contact() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(['.contact-left', '.contact-card'], {
      opacity: 0, y: 28, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 80%' },
    })
  }, { scope: section })

  return (
    <section id="contact" ref={section} className="section-base">
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
        <div className="contact-left">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 18 }}>
            - 06 / Correspondence
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 350,
            fontSize: 'clamp(54px, 8vw, 130px)', lineHeight: 0.92,
            letterSpacing: '-0.035em', margin: 0,
            fontVariationSettings: '"SOFT" 30, "WONK" 1',
          }}>
            Write a <span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>letter,</span> trace a route, ask a question.
          </h2>
          <p style={{ marginTop: 24, maxWidth: 540, fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Open to research collaborations in urban analytics, air-quality modelling and Himalayan sustainability. Available for guest lectures, doctoral committees and editorial review.
          </p>
        </div>

        <div
          className="contact-card"
          style={{
            border: '1px solid var(--ink)',
            padding: 30,
            background: 'var(--contact-card-bg)',
            color: 'var(--contact-card-text)',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', inset: 6, border: '1px solid rgba(244,239,230,0.25)', pointerEvents: 'none' }} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(75% 0.05 80)', marginBottom: 14 }}>
            Office of Dr. Arghadeep Bose
          </div>
          <dl style={{ margin: 0 }}>
            <ContactRow dt="Email">
              <a href={`mailto:${contactData.email}`} style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted oklch(75% 0.05 80)' }}>
                {contactData.email}
              </a>
            </ContactRow>
            <ContactRow dt="Phone">{contactData.phone}</ContactRow>
            <ContactRow dt="Office">{contactData.office}</ContactRow>
            <ContactRow dt="ORCiD">
              <a href={`https://orcid.org/${contactData.orcid}`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted oklch(75% 0.05 80)' }}>
                {contactData.orcid}
              </a>
            </ContactRow>
            <ContactRow dt="Scholar">
              <a href={`https://scholar.google.com/citations?user=${contactData.scholar}`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted oklch(75% 0.05 80)' }}>
                {contactData.scholar}
              </a>
            </ContactRow>
            <ContactRow dt="LinkedIn">
              <a href={`https://linkedin.com${contactData.linkedin}`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted oklch(75% 0.05 80)' }}>
                {contactData.linkedin}
              </a>
            </ContactRow>
            <div style={{ borderBottom: 0, display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16, padding: '16px 0', alignItems: 'baseline' }}>
              <dt style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(75% 0.05 80)' }}>CV</dt>
              <dd style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 17 }}>
                <a href={`${BASE}Arghadeep-Bose-CV.pdf`} download style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted oklch(75% 0.05 80)' }}>
                  ↓ Download PDF
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
