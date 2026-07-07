import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Dr. Arghadeep Bose | Portfolio",
          url: url,
        })
      } catch (err) {
        copyToClipboard(url)
      }
    } else {
      copyToClipboard(url)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div
      className="floating-actions"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        pointerEvents: 'none',
      }}
    >
      {/* Tooltip Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            style={{
              position: 'absolute',
              bottom: '120px',
              right: '0',
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '6px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              border: '1px solid var(--rule)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              pointerEvents: 'auto',
            }}
          >
            Link Copied!
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918145280647"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1, backgroundColor: 'var(--moss)', color: 'var(--paper)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--paper-2)',
          color: 'var(--ink)',
          border: '1px solid var(--rule)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'auto',
          transition: 'border-color 0.25s, background-color 0.25s, color 0.25s',
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.022 14.07 1 11.998 1 6.559 1 2.135 5.37 2.131 10.8c-.001 1.77.465 3.498 1.348 5.048l-.995 3.637 3.763-.987zm11.587-4.583c-.3-.15-1.774-.875-2.046-.975-.272-.1-.47-.15-.668.15-.198.3-.765.975-.938 1.175-.173.2-.347.225-.648.075-.3-.15-1.266-.467-2.41-1.485-.89-.795-1.49-1.777-1.664-2.078-.173-.3-.018-.462.13-.61.135-.133.3-.347.45-.52.15-.173.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.774-.726 2.02-1.429.247-.703.247-1.306.173-1.43-.073-.124-.272-.198-.57-.347z"/>
        </svg>
      </motion.a>

      {/* Share Button */}
      <motion.button
        onClick={handleShare}
        aria-label="Share page link"
        whileHover={{ scale: 1.1, backgroundColor: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--paper-2)',
          color: 'var(--ink)',
          border: '1px solid var(--rule)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'auto',
          transition: 'border-color 0.25s, background-color 0.25s, color 0.25s',
          outline: 'none',
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="17.42" y2="18.49" />
          <line x1="17.41" y1="5.51" x2="8.59" y2="10.49" />
        </svg>
      </motion.button>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'var(--paper)', borderColor: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--paper-2)',
              color: 'var(--ink)',
              border: '1px solid var(--rule)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              backdropFilter: 'blur(8px)',
              pointerEvents: 'auto',
              transition: 'border-color 0.25s, background-color 0.25s, color 0.25s',
              outline: 'none',
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
