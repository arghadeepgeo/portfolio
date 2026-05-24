const gutterStyle = (pos) => ({
  position: 'fixed',
  background: 'var(--paper)',
  zIndex: 49,
  pointerEvents: 'none',
  transition: 'background 0.3s ease',
  ...(pos === 'top'    && { top: 0, left: 0, right: 0, height: 18 }),
  ...(pos === 'bottom' && { bottom: 0, left: 0, right: 0, height: 18 }),
  ...(pos === 'left'   && { top: 0, left: 0, bottom: 0, width: 18 }),
  ...(pos === 'right'  && { top: 0, right: 0, bottom: 0, width: 18 }),
})

export default function PageFrame() {
  return (
    <>
      <div style={gutterStyle('top')}    aria-hidden="true" />
      <div style={gutterStyle('bottom')} aria-hidden="true" />
      <div style={gutterStyle('left')}   aria-hidden="true" />
      <div style={gutterStyle('right')}  aria-hidden="true" />
      <div className="page-frame" aria-hidden="true">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>
    </>
  )
}
