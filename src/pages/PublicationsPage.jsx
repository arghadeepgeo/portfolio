import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import { journalArticles, bookChapters, pubStats } from '../data/publications'

const BASE = import.meta.env.BASE_URL

const FILTERS = [
  { key: 'all',     label: 'All',            count: pubStats.total },
  { key: 'air',     label: 'Air Quality',    count: 3 },
  { key: 'urban',   label: 'Urban Expansion',count: 5 },
  { key: 'vuln',    label: 'Vulnerability',  count: 8 },
  { key: 'sustain', label: 'Sustainability', count: 7 },
  { key: 'chapter', label: 'Book Chapters',  count: 6 },
]

function formatAuthors(authors) {
  return authors.map((a, i) => (
    <span key={i}>
      {a.bold ? <b>{a.name}</b> : a.name}
      {i < authors.length - 1 ? ', ' : ''}
    </span>
  ))
}

function PubRow({ pub, index }) {
  return (
    <motion.div
      layout
      className="pub-row-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 110px 1fr 240px 80px',
        gap: 24, padding: '24px 0',
        borderBottom: '1px solid var(--rule)',
        alignItems: 'baseline',
        transition: 'background 0.25s, padding-left 0.25s, padding-right 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-2)'; e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.paddingRight = '12px' }}
      onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.paddingRight = '0' }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>
        - {String(pub.id).padStart(2, '0')}.
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: 'var(--ink)', fontVariationSettings: '"SOFT" 50', lineHeight: 1 }}>
        {pub.shortYear}
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-title-md)', lineHeight: 1.32, fontWeight: 400, color: 'var(--ink)' }}>
        <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--muted)', fontStyle: 'normal', marginBottom: 6, letterSpacing: '0.01em' }}>
          {formatAuthors(pub.authors)}
        </span>
        {pub.link ? (
          <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted var(--ink-2)' }} dangerouslySetInnerHTML={{ __html: pub.titleHtml }} />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: pub.titleHtml }} />
        )}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-title-sm)', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.45 }}>
        {pub.journal}
        {pub.issn && <span style={{ display: 'block', fontStyle: 'normal', fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.1em', marginTop: 4, color: 'var(--ink)' }}>{pub.issn}</span>}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {pub.badges.map(b => (
          <span key={b} style={{ border: '1px solid var(--moss)', color: 'var(--moss)', fontFamily: 'var(--font-mono)', fontSize: '8.5px', padding: '2px 6px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{b}</span>
        ))}
        {pub.cat !== 'chapter' && (
          <span style={{ border: '1px solid var(--accent)', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '8.5px', padding: '2px 6px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            {pub.cat === 'air' ? 'Air' : pub.cat === 'urban' ? 'Urban' : pub.cat === 'vuln' ? 'Vuln' : 'Sustain'}
          </span>
        )}
        {pub.cat === 'chapter' && (
          <span style={{ border: '1px solid var(--accent)', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '8.5px', padding: '2px 6px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Chapter</span>
        )}
      </div>
    </motion.div>
  )
}

export default function PublicationsPage() {
  const [activeCat, setActiveCat] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const allPubs = [...journalArticles, ...bookChapters]
    return allPubs.filter(p => {
      const catMatch = activeCat === 'all' || p.cat === activeCat
      const q = query.trim().toLowerCase()
      const textMatch = !q || (p.title + p.journal + String(p.year)).toLowerCase().includes(q)
      return catMatch && textMatch
    })
  }, [activeCat, query])

  const journalVisible = filtered.filter(p => p.cat !== 'chapter')
  const chapterVisible = filtered.filter(p => p.cat === 'chapter')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Nav />

      <main className="main-content" style={{ position: 'relative', zIndex: 5 }}>

        {/* Archive Header */}
        <div className="archive-head" style={{ padding: '130px 0 70px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 60, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 26, display: 'flex', gap: 8, alignItems: 'center' }}>
              <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px dotted var(--muted)' }}>← Index</Link>
              <span>/</span>
              <span>03 · Archive</span>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>Bibliography</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 350, fontSize: 'clamp(56px, 8vw, 132px)', lineHeight: 0.92, letterSpacing: '-0.035em', margin: 0 }}>
              The complete<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>bibliography,</span><br />
              2020 - 2024.
            </h1>
          </div>

          <div style={{ borderTop: '1px solid var(--ink)', paddingTop: 18 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 14px', maxWidth: 460 }}>
              A working record of peer-reviewed journal articles, book chapters and conference proceedings - drawn from the past five years of research at the University of North Bengal and St. Xavier's College, Burdwan.
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--muted)', letterSpacing: '0.12em', lineHeight: 1.9 }}>
              <div><b style={{ color: 'var(--ink)', fontWeight: 500, marginRight: 8 }}>ORCiD</b> 0000-0002-3284-4633</div>
              <div><b style={{ color: 'var(--ink)', fontWeight: 500, marginRight: 8 }}>Scopus</b> 57217308219</div>
              <div><b style={{ color: 'var(--ink)', fontWeight: 500, marginRight: 8 }}>ResearcherID</b> AAT-2766-2021</div>
              <div><b style={{ color: 'var(--ink)', fontWeight: 500, marginRight: 8 }}>Updated</b> 29 · 04 · 2026</div>
            </div>
          </div>
        </div>

        {/* Summary strip */}
        <div className="summary-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
          {[
            { v: pubStats.journalArticles, l: 'Journal Articles' },
            { v: `0${pubStats.bookChapters}`, l: 'Book Chapters' },
            { v: pubStats.citations, l: 'Citations' },
            { v: pubStats.hIndex, l: 'h-index' },
            { v: pubStats.i10Index, l: 'i10-index' },
          ].map((cell, i) => (
            <div key={i} style={{ padding: '24px 22px', borderRight: i < 4 ? '1px solid var(--rule)' : 0 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, lineHeight: 0.92, fontWeight: 350 }}>
                {cell.v}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 10 }}>
                {cell.l}
              </div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div style={{ margin: '60px 0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap', borderBottom: '1px solid var(--rule)', paddingBottom: 22 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-chip${activeCat === f.key ? ' active' : ''}`}
                onClick={() => setActiveCat(f.key)}
              >
                {f.label}
                <span className="count">{f.count}</span>
              </button>
            ))}
          </div>
          <div className="search-box">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="6" cy="6" r="4.5" />
              <line x1="9.5" y1="9.5" x2="13" y2="13" />
            </svg>
            <input
              type="text"
              placeholder="Search title, journal, year…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Publications list */}
        {journalVisible.length > 0 && (
          <>
            <div className="section-label">Journal Articles · 2024 - 2020</div>
            <AnimatePresence mode="popLayout">
              {journalVisible.map((pub, i) => <PubRow key={pub.id} pub={pub} index={i} />)}
            </AnimatePresence>
          </>
        )}

        {chapterVisible.length > 0 && (
          <>
            <div className="section-label" style={{ marginTop: 70 }}>Book Chapters · Edited Volumes</div>
            <AnimatePresence mode="popLayout">
              {chapterVisible.map((pub, i) => <PubRow key={`ch-${pub.id}`} pub={pub} index={i} />)}
            </AnimatePresence>
          </>
        )}

        {filtered.length === 0 && (
          <div style={{ padding: '60px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>
            - No matches in this archive -
          </div>
        )}

        {/* Bottom actions */}
        <div style={{ margin: '50px 0 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <a
            href={`${BASE}Arghadeep-Bose-CV.pdf`}
            download
            style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--paper)', background: 'var(--ink)', padding: '14px 22px', textDecoration: 'none', display: 'inline-flex', gap: 12, alignItems: 'center', border: '1px solid var(--ink)' }}
          >
            ↓ Download Full CV (PDF)
          </a>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            → Continue on{' '}
            <a
              href="https://scholar.google.com/citations?user=gYJ6XPYAAAAJ"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)', borderBottom: '1px dotted var(--accent)', textDecoration: 'none' }}
            >
              Google Scholar
            </a>
          </div>
        </div>
      </main>

      <Footer volume="03" entries="30 entries indexed" />
    </motion.div>
  )
}
