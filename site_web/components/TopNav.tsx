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
      className="flex items-center px-10 flex-shrink-0 relative z-50"
      style={{ backgroundColor: '#3d572f', height: 72 }}
    >
      {/* Logo + Title */}
      <Link href="/" className="flex items-center gap-3 mr-14 hover:opacity-85 transition-opacity flex-shrink-0">
        <Image src={assetPath('/svg/TP-logo-accueil.svg')} alt="Terres Perdues" width={44} height={44} className="object-contain" />
        <div>
          <span className="font-title text-white block leading-none" style={{ fontSize: '1.15rem' }}>
            Terres Perdues
          </span>
          <span className="font-body text-white/40 block" style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}>
            LE SORT EN EST JETÉ
          </span>
        </div>
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-10 flex-1">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-title text-white/80 hover:text-gold-tp transition-colors"
              style={{ fontSize: '1rem' }}
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
              <Link
                href={item.href}
                className="font-title hover:text-gold-tp transition-colors"
                style={{
                  fontSize: '1rem',
                  color: pathname.startsWith(item.href) ? '#d7ae5d' : 'rgba(255,255,255,0.8)',
                  textDecoration: pathname.startsWith(item.href) ? 'underline' : 'none',
                  textUnderlineOffset: 4,
                }}
              >
                {item.label}
              </Link>

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
                          fontSize: '0.875rem',
                          padding: '6px 20px',
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
      <div className="flex items-center gap-5 flex-shrink-0">
        <Link
          href="/inscriptions"
          className="font-title text-gold-tp hover:text-gold-light hover:border-gold-light transition-all duration-200 text-center"
          style={{ fontSize: '0.9rem', padding: '6px 18px', border: '1.5px solid #d7ae5d', borderRadius: 5 }}
        >
          Inscription
        </Link>
        <a href="https://discord.gg/7k2Jd47H" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <Image
            src={assetPath('/svg/DISCORD.svg')}
            alt="Discord"
            width={90}
            height={25}
            style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(38%) saturate(600%) hue-rotate(5deg) brightness(100%) contrast(95%)' }}
          />
        </a>
      </div>
    </header>
  )
}
