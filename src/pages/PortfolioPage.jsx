import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { motion } from 'framer-motion'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Hero from '../sections/Hero'
import MarqueeBand from '../sections/MarqueeBand'
import About from '../sections/About'
import Research from '../sections/Research'
import PublicationsPreview from '../sections/PublicationsPreview'
import Teaching from '../sections/Teaching'
import Awards from '../sections/Awards'
import Contact from '../sections/Contact'

export default function PortfolioPage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.state?.scrollTo
    if (!id) return
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350)
  }, [location.state])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Nav />

      <main className="main-content">
        <Hero />
      </main>

      <MarqueeBand />

      <main className="main-content">
        <About />
        <Research />
        <PublicationsPreview />
        <Teaching />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  )
}
