'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
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
  {
    bg: assetPath('/backgrounds/Nain-home-arriere-plan.jpg'),
    tag: assetPath('/svg/Tag-accueil-Brujamote.svg'),
    alt: 'Nains',
  },
]

export default function HomeBackground() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [animKeys, setAnimKeys] = useState<number[]>(scenes.map(() => 0))

  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * scenes.length))
  }, [])

  useEffect(() => {
    if (activeIndex === null) return
    setAnimKeys((prev) => prev.map((k, i) => (i === activeIndex ? k + 1 : k)))
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = ((prev ?? 0) + 1) % scenes.length
        setAnimKeys((k) => k.map((v, i) => (i === next ? v + 1 : v)))
        return next
      })
    }, 6000)
    return () => clearInterval(timer)
  }, [activeIndex === null])

  return (
    <div className="relative w-full h-full">
      {scenes.map((scene, i) => (
        <div
          key={scene.alt}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: activeIndex === i ? 1 : 0 }}
        >
          <div key={animKeys[i]} className="bg-pan absolute inset-0">
            <Image
              src={scene.bg}
              alt={scene.alt}
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
          </div>

          {/* Subtle dark overlay on left edge for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(45,64,34,0.35) 0%, transparent 30%)',
            }}
          />

          {/* Kingdom SVG tag — mobile */}
          <Image
            src={scene.tag}
            alt={`Tag ${scene.alt}`}
            height={68}
            width={293}
            className="absolute z-10 drop-shadow-lg object-contain md:hidden"
            style={{ bottom: '190px', right: 0 }}
            priority
          />
          {/* Kingdom SVG tag — desktop */}
          <Image
            src={scene.tag}
            alt={`Tag ${scene.alt}`}
            height={90}
            width={390}
            className="absolute z-10 drop-shadow-lg object-contain hidden md:block"
            style={{ bottom: '90px', right: 0 }}
            priority
          />
        </div>
      ))}
    </div>
  )
}
