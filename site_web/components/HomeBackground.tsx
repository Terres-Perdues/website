'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { assetPath } from '@/lib/asset-path'

const scenes = [
  {
    bg: assetPath('/backgrounds/Accueil-arriere-plan-Brujamonte.jpg'),
    tag: assetPath('/svg/Tag-accueil-Brujamote.svg'),
    alt: 'Brujamonte',
  },
  {
    bg: assetPath('/backgrounds/Accueil-arriere-plan-Khislev.jpg'),
    tag: assetPath('/svg/Tag-accueil-Khislev.svg'),
    alt: 'Khislev',
  },
  {
    bg: assetPath('/backgrounds/Accueil-arriere-plan-Toyalis.jpg'),
    tag: assetPath('/svg/Tag-accueil-Toyalis.svg'),
    alt: 'Toyalis',
  },
]

export default function HomeBackground() {
  // Pick a random scene once per page load (server-stable via useMemo seed)
  const scene = useMemo(
    () => scenes[Math.floor(Math.random() * scenes.length)],
    []
  )

  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <Image
        src={scene.bg}
        alt={scene.alt}
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Subtle dark overlay on left edge for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(45,64,34,0.35) 0%, transparent 30%)',
        }}
      />

      {/* Kingdom SVG tag — bottom right */}
      <Image
        src={scene.tag}
        alt={`Tag ${scene.alt}`}
        height={90}
        width={390}
        className="absolute z-10 drop-shadow-lg object-contain"
        style={{ bottom: '90px', right: 0 }}
        priority
      />
    </div>
  )
}
