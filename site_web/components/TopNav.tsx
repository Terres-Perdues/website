'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'
import { assetPath } from '@/lib/asset-path'

const navItems = [
  {
    label: 'Général',
    href: '/general',
    children: [
      { label: 'Règlements', href: '/general/reglements' },
      { label: 'Inscriptions', href: '/inscriptions' },
      { label: 'Roadmap', href: '/general/roadmap' },
      { label: 'Statut', href: '/general/statut' },
    ],
  },
  {
    label: 'Royaumes',
    href: '/royaumes',
    children: [
      { label: 'Humains', href: '/royaumes/humains' },
      { label: 'Elfes', href: '/royaumes/elfes' },
      { label: 'Nains', href: '/royaumes/nains' },
      { label: 'Morts-vivants', href: '/royaumes/morts-vivants' },
      { label: 'Drows', href: '/royaumes/drows' },
    ],
  },
  {
    label: 'Systèmes',
    href: '/systemes',
    children: [
      { label: 'Évolutions', href: '/systemes/evolutions' },
      { label: 'Métiers', href: '/systemes/metiers' },
      { label: 'Spécialisations', href: '/systemes/specialisations' },
      { label: 'Territoires', href: '/systemes/territoires' },
      { label: 'Religions', href: '/systemes/religions' },
    ],
  },
  {
    label: 'Forum',
    href: 'https://terres-perdues.forumactif.com/',
    external: true,
  },
  {
    label: 'Divers',
    href: '/divers',
    children: [
      { label: 'FAQ', href: '/divers/faq' },
      { label: 'Équipe', href: '/divers/equipe' },
      { label: 'Remerciements', href: '/divers/remerciements' },
    ],
  },
]

export default function TopNav() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenMenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 120)
  }

  return (
    <header
      className="topnav-height flex items-center flex-shrink-0 relative z-50"
      style={{ backgroundColor: '#3d572f', padding: '0 70px' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center mr-28 hover:opacity-85 transition-opacity flex-shrink-0">
        <Image src={assetPath('/svg/TP-logo-horizontale.svg')} alt="Terres Perdues" width={420} height={102} className="object-contain" />
      </Link>

      {/* Nav links */}
      <nav className="flex items-center flex-1" style={{ gap: '36px' }}>
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-title text-gold-tp hover:text-gold-light transition-colors"
              style={{ fontSize: '1.35rem' }}
            >
              {item.label}
            </a>
          ) : (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="font-title text-gold-tp hover:text-gold-light transition-colors cursor-default"
                style={{ fontSize: '1.35rem' }}
              >
                {item.label}
              </span>

              {/* Dropdown */}
              {item.children && (
                <div
                  className="absolute top-full left-0 pt-2 transition-all duration-200"
                  style={{
                    opacity: openMenu === item.label ? 1 : 0,
                    pointerEvents: openMenu === item.label ? 'auto' : 'none',
                    transform: openMenu === item.label ? 'translateY(0)' : 'translateY(-6px)',
                  }}
                >
                  <div
                    className="py-2 rounded shadow-lg min-w-max"
                    style={{ backgroundColor: '#3d572f', border: '1px solid rgba(215,174,93,0.2)' }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block font-body hover:text-gold-tp hover:bg-black/10 transition-colors"
                        style={{
                          fontSize: '1.1rem',
                          padding: '8px 24px',
                          color: pathname === child.href ? '#d7ae5d' : 'rgba(255,255,255,0.75)',
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-7 flex-shrink-0">
        <Link
          href="/inscriptions"
          className="font-title text-gold-tp hover:text-gold-light hover:border-gold-light transition-all duration-200 text-center"
          style={{ fontSize: '1.2rem', padding: '10px 26px', border: '1.5px solid #d7ae5d', borderRadius: 5 }}
        >
          Inscription
        </Link>
        <a href="https://discord.gg/7k2Jd47H" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <Image
            src={assetPath('/svg/DISCORD.svg')}
            alt="Discord"
            width={130}
            height={36}
            style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(42%) saturate(420%) hue-rotate(358deg) brightness(93%) contrast(88%)' }}
          />
        </a>
      </div>
    </header>
  )
}
