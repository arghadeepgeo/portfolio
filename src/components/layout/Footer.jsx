export default function Footer({ volume, entries, year = 'MMXXVI' }) {
  return (
    <footer className="site-footer">
      <div className="footer-big">
        A.<span className="it">Bose</span>
        {volume ? ` · ${volume}` : ''}
      </div>
      <div className="footer-meta">
        <div>© {year} · Arghadeep Bose</div>
        {entries && <div>{entries}</div>}
        <div>Site v.01 · Drawn by hand &amp; algorithm</div>
        <div>Last updated 29.04.2026</div>
      </div>
    </footer>
  )
}
