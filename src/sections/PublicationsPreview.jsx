import { Link } from 'react-router'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { journalArticles } from '../data/publications'
import { pubStats } from '../data/publications'

gsap.registerPlugin(ScrollTrigger)

const PREVIEW_IDS = [24, 23, 22, 16, 15, 14, 20, 7, 2]
const previewPubs = journalArticles.filter(p => PREVIEW_IDS.includes(p.id))

function formatAuthors(authors) {
  return authors.map((a, i) => (
    <span key={i}>
      {a.bold ? <b>{a.name}</b> : a.name}
      {i < authors.length - 1 ? ', ' : ''}
    </span>
  ))
}

export default function PublicationsPreview() {
  const section = useRef(null)

  useGSAP(() => {
    gsap.from(section.current.querySelectorAll('.pub-row-preview'), {
      opacity: 0, y: 20, stagger: 0.07, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: section.current, start: 'top 75%' },
    })
  }, { scope: section })

  return (
    <section id="publications" ref={section} className="section-base">
      <div className="sec-head">
        <div className="label">
          <span className="num" style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 300, color: 'var(--ink)', letterSpacing: 0, fontVariationSettings: '"SOFT" 50' }}>03</span>
          Selected Publications
        </div>
        <h2>
          A working <span className="it">bibliography</span> - twenty-four entries from a longer record.
        </h2>
      </div>

      {/* Stats row */}
      <div className="pub-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 50 }}>
        <div style={{ display: 'flex', gap: 30 }}>
          {[
            { v: pubStats.citations, l: 'Citations' },
            { v: pubStats.hIndex, l: 'h-index' },
            { v: pubStats.i10Index, l: 'i10-index' },
          ].map(s => (
            <div key={s.l} style={{ borderTop: '2px solid var(--ink)', paddingTop: 8 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 56, lineHeight: 0.9, fontWeight: 350, fontVariationSettings: '"SOFT" 50' }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
          Indexed across Scopus, Web of Science and UGC-CARE listed journals. Reviewer for <em>Sustainable Cities and Society, Journal of Cleaner Production, GeoJournal,</em> and fifteen others. ORCiD <span className="mono" style={{ fontSize: 13 }}>0000-0002-3284-4633</span>.
        </p>
      </div>

      {/* Preview list */}
      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {previewPubs.map(pub => (
          <div
            key={pub.id}
            className="pub-row-preview"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 220px 110px',
              gap: 24, padding: '22px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'baseline',
              transition: 'background 0.25s, padding 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-2)'; e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.paddingRight = '12px' }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.paddingRight = '0' }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>- {String(pub.id).padStart(2, '0')}.</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.32, fontWeight: 400, color: 'var(--ink)', fontVariationSettings: '"SOFT" 20' }} dangerouslySetInnerHTML={{ __html: pub.titleHtml }} />
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: 'var(--muted)', fontStyle: 'italic' }}>{pub.journal}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textAlign: 'right', color: 'var(--ink)' }}>
              {pub.year}
              {pub.badges.includes('SCI') && (
                <span style={{ display: 'inline-block', border: '1px solid var(--moss)', color: 'var(--moss)', fontSize: '8.5px', padding: '2px 6px', marginLeft: 6, letterSpacing: '0.16em' }}>SCI</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
        <Link
          to="/publications"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--paper)', background: 'var(--ink)', padding: '14px 22px', textDecoration: 'none', border: '1px solid var(--ink)', display: 'inline-flex', gap: 12, alignItems: 'center' }}
        >
          → Open the full archive <span style={{ color: 'var(--gold)' }}>/{pubStats.total}</span>
        </Link>
        <a
          href="/argha-portfolio/Arghadeep-Bose-CV.pdf"
          download
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', background: 'transparent', padding: '14px 22px', textDecoration: 'none', border: '1px solid var(--ink)', display: 'inline-flex', gap: 12, alignItems: 'center' }}
        >
          ↓ Download CV (PDF)
        </a>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.16em', color: 'var(--muted)', textTransform: 'uppercase' }}>ResearcherID AAT-2766-2021</span>
      </div>
    </section>
  )
}
