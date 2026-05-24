import { createTheme } from '@mui/material/styles'

const baseTokens = {
  paper:  '#f4efe6',
  paper2: '#ebe4d6',
  ink:    '#1a1a17',
  ink2:   '#2c2a25',
  muted:  '#6b6657',
  rule:   '#c8bfa9',
  accent: '#b65842',
  moss:   '#2e6040',
  gold:   '#bc9750',
}

const darkTokens = {
  paper:  '#1c1b18',
  paper2: '#242320',
  ink:    '#f0e8d8',
  ink2:   '#d8cfbf',
  muted:  '#8a8070',
  rule:   '#3a3830',
  accent: '#c46845',
  gold:   '#c9a85a',
}

function buildTheme(mode) {
  const t = mode === 'dark' ? darkTokens : baseTokens
  return createTheme({
    palette: {
      mode,
      background: { default: t.paper, paper: t.paper2 },
      text: { primary: t.ink, secondary: t.ink2, disabled: t.muted },
      primary: { main: t.accent },
      divider: t.rule,
    },
    typography: {
      fontFamily: '"Fraunces", Georgia, serif',
      h1: {
        fontFamily: '"Fraunces", Georgia, serif',
        fontWeight: 350,
        letterSpacing: '-0.035em',
        lineHeight: 0.92,
      },
      h2: {
        fontFamily: '"Fraunces", Georgia, serif',
        fontWeight: 350,
        letterSpacing: '-0.025em',
        lineHeight: 0.98,
      },
      h3: {
        fontFamily: '"Fraunces", Georgia, serif',
        fontWeight: 400,
        letterSpacing: '-0.015em',
      },
      h4: {
        fontFamily: '"Fraunces", Georgia, serif',
        fontWeight: 400,
      },
      body1: {
        fontFamily: '"Inter", -apple-system, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontFamily: '"Inter", -apple-system, sans-serif',
        fontSize: '0.875rem',
        lineHeight: 1.55,
      },
      caption: {
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: '0.65rem',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      },
      overline: {
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: '0.65rem',
        letterSpacing: '0.18em',
      },
      mono: {
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      },
    },
    shape: { borderRadius: 0 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: t.paper,
            color: t.ink,
            fontFamily: '"Fraunces", Georgia, serif',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontSize: '11px',
          },
        },
      },
    },
  })
}

export const lightTheme = buildTheme('light')
export const darkTheme  = buildTheme('dark')
