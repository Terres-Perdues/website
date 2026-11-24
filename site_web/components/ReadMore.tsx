'use client'

import { useState } from 'react'

function truncateAtWord(text: string, limit: number): { preview: string; rest: string } {
  if (text.length <= limit) return { preview: text, rest: '' }
  const cut = text.lastIndexOf(' ', limit)
  const idx = cut > 0 ? cut : limit
  return { preview: text.slice(0, idx), rest: text.slice(idx).trimStart() }
}

interface ReadMoreProps {
  leftText: string
  rightText: string
  leftLimit?: number
  rightLimit?: number
}

export default function ReadMore({
  leftText,
  rightText,
  leftLimit = 295,
  rightLimit = 629,
}: ReadMoreProps) {
  const [open, setOpen] = useState(false)

  const left = truncateAtWord(leftText, leftLimit)
  const right = truncateAtWord(rightText, rightLimit)
  const hasMore = left.rest.length > 0 || right.rest.length > 0

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <p className="font-body leading-relaxed" style={{ fontSize: 16, color: '#2a2a2a' }}>
          {left.preview}
          {!open && left.rest && '…'}
          {open && left.rest && ' ' + left.rest}
        </p>
        <p className="font-body leading-relaxed" style={{ fontSize: 16, color: '#2a2a2a' }}>
          {right.preview}
          {!open && right.rest && '…'}
          {open && right.rest && ' ' + right.rest}
        </p>
      </div>

      {hasMore && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-body uppercase mt-6"
          style={{ fontSize: 11, letterSpacing: '0.2em', color: '#7a7060', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {open ? '▲ Réduire' : '▼ Lire plus'}
        </button>
      )}
    </div>
  )
}
