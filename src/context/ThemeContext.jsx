import { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme, darkTheme } from '../theme'

const ThemeCtx = createContext({ mode: 'light', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem('ab-theme')
    return stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem('ab-theme', mode)
  }, [mode])

  const toggle = () => setMode(m => (m === 'light' ? 'dark' : 'light'))

  return (
    <ThemeCtx.Provider value={{ mode, toggle }}>
      <MuiThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeCtx.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeCtx)
