'use client'

import { useState } from 'react'

export default function ShowMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ width: '100%' }}>
      {/* Barre + bouton : visible uniquement mobile */}
      <div
        className="flex items-center md:hidden"
        style={{
          background: 'rgba(210, 200, 185, 0.45)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          padding: '10px 20px',
        }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-body uppercase"
          style={{ fontSize: 14, letterSpacing: '0.2em', color: '#7a7060', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {open ? '▲ Réduire' : '▼ Lire plus'}
        </button>
      </div>

      {/* Contenu : toujours visible desktop, toggle mobile */}
      <div className={`${open ? '' : 'hidden'} md:block font-body leading-relaxed mt-6 md:mt-0`} style={{ fontSize: 15, color: '#2a2a2a' }}>
        {children}
      </div>
    </div>
  )
}
