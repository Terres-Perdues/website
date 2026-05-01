'use client'

import { useState, useEffect } from 'react'

interface ClassAccordionProps {
  label: string
  children: React.ReactNode
}

export default function ClassAccordion({ label, children }: ClassAccordionProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(window.innerWidth >= 768)
  }, [])

  return (
    <div style={{ marginTop: '2.5%' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full text-left"
        style={{ paddingBottom: 12, borderBottom: '1.5px solid #c0b89a' }}
      >
        <span className="font-title" style={{ fontSize: '1.5rem', color: '#425d34', letterSpacing: '-1px' }}>
          {label}
        </span>
        <span
          className="transition-transform duration-300"
          style={{
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            fontSize: 18,
            color: '#7a7060',
          }}
        >
          ▼
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? '9999px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div style={{ paddingTop: 75 }}>
          {children}
        </div>
      </div>
    </div>
  )
}
