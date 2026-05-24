import { HashRouter, Routes, Route, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import PageFrame from './components/layout/PageFrame'
import NoiseOverlay from './components/layout/NoiseOverlay'
import PortfolioPage from './pages/PortfolioPage'
import PublicationsPage from './pages/PublicationsPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<PortfolioPage />} />
        <Route path="publications" element={<PublicationsPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <NoiseOverlay />
        <PageFrame />
        <AnimatedRoutes />
      </ThemeProvider>
    </HashRouter>
  )
}
