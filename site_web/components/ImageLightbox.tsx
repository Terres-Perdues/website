'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  style?: React.CSSProperties
}

export default function ImageLightbox({ src, alt, width, height, className, style }: ImageLightboxProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className ?? ''} md:cursor-default cursor-zoom-in`}
        style={style}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setOpen(false)}
          style={{ touchAction: 'none' }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vh',
              height: '100vw',
              transform: 'rotate(90deg) translateY(-100%)',
              transformOrigin: 'top left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto object-contain"
              style={{ maxHeight: '100vw' }}
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white font-bold text-2xl z-10"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
