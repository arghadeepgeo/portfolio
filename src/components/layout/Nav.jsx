import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useThemeMode } from '../../context/ThemeContext'

const navLinks = [
  { num: '01', label: 'Profile',      href: '/#about' },
  { num: '02', label: 'Research',     href: '/#research' },
  { num: '03', label: 'Publications', href: '/publications', exact: true },
  { num: '04', label: 'Teaching',     href: '/#teaching' },
  { num: '05', label: 'Awards',       href: '/#awards' },
  { num: '06', label: 'Contact',      href: '/#contact' },
]

export default function Nav({ coords }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { mode, toggle } = useThemeMode()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const onPubs = pathname === '/publications'

  const handleHashLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.slice(2)
    if (!onPubs) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <>
      <nav className="nav">
        <Link
          to="/"
          className="nav-mark"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={e => {
            if (!onPubs) {
              e.preventDefault()
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            }
            setMenuOpen(false)
          }}
        >
          <div className="nav-glyph" />
          <span>AB / Geographer</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(({ num, label, href, exact }) => {
            const isActive = exact ? pathname === '/publications' : false
            return (
              <li key={num}>
                {href.startsWith('/') && !href.startsWith('/#') ? (
                  <Link to={href} className={isActive ? 'active' : ''}>
                    <span className="num">{num}</span>
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={isActive ? 'active' : ''}
                    onClick={e => handleHashLink(e, href)}
                  >
                    <span className="num">{num}</span>
                    {label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        <div className="nav-right">
          <span className="nav-coords">{coords || (onPubs ? 'ARCHIVE · VOL. I' : '26.1445°N  91.7362°E')}</span>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {mode === 'light' ? '◐ Dark' : '◑ Light'}
          </button>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map(({ num, label, href, exact }) => {
            const isActive = exact ? pathname === '/publications' : false
            return (
              <li key={num}>
                {href.startsWith('/') && !href.startsWith('/#') ? (
                  <Link to={href} className={isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                    <span className="num">{num}</span>
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={isActive ? 'active' : ''}
                    onClick={e => handleHashLink(e, href)}
                  >
                    <span className="num">{num}</span>
                    {label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
        <div className="nav-mobile-footer">
          <span>{onPubs ? 'ARCHIVE · VOL. I' : '26.1445°N  91.7362°E'}</span>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {mode === 'light' ? '◐ Dark' : '◑ Light'}
          </button>
        </div>
      </div>
    </>
  )
}
