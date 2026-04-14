'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { assetPath } from '@/lib/asset-path'

const navigation = [
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

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  // Fermer le menu à chaque changement de page
  useEffect(() => {
    setOpen(false)
    setOpenSection(null)
  }, [pathname])

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label))

  return (
    <>
      {/* Barre du haut mobile */}
      <header
        className="md:hidden mobile-nav-bar fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{ backgroundColor: '#3d572f', height: 89, paddingLeft: 19, paddingRight: 24 }}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src={assetPath('/svg/TP-logo-horizontale.svg')}
            alt="Terres Perdues"
            width={285}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        {/* Bouton hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex flex-col justify-center items-center gap-1.5 p-2"
        >
          <span
            className="block h-0.5 w-7 transition-all duration-300"
            style={{
              backgroundColor: '#d7ae5d',
              transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-7 transition-all duration-300"
            style={{
              backgroundColor: '#d7ae5d',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-7 transition-all duration-300"
            style={{
              backgroundColor: '#d7ae5d',
              transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Menu plein écran */}
      <div
        className="md:hidden mobile-nav-menu fixed inset-0 z-40 flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: '#3d572f',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          paddingTop: 64,
        }}
      >

        {/* Navigation */}
        <nav style={{ padding: '80px 32px 0' }}>
          {navigation.map((section) => (
            <div key={section.label} style={{ marginBottom: '18px' }}>
              {section.external ? (
                <a
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-section block"
                >
                  {section.label}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => section.children ? toggleSection(section.label) : undefined}
                    className="nav-section block text-left w-full"
                  >
                    {section.label}
                  </button>
                  {section.children && (
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openSection === section.label ? `${section.children.length * 40 + 40}px` : '0px',
                        opacity: openSection === section.label ? 1 : 0,
                      }}
                    >
                      <div className="space-y-0.5" style={{ paddingTop: 10, paddingBottom: 20 }}>
                        {section.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`nav-subitem block ${
                              pathname === child.href ? 'underline underline-offset-2' : ''
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Boutons inscription / Discord */}
        <div className="flex items-center gap-4" style={{ padding: '90px 32px' }}>
          <Link
            href="/inscriptions"
            className="font-title text-gold-tp hover:text-gold-light hover:border-gold-light transition-all duration-200 text-center"
            style={{
              padding: '8px 24px',
              border: '1.5px solid #d7ae5d',
              borderRadius: 6,
              fontSize: '20px',
              display: 'inline-block',
            }}
          >
            Inscription
          </Link>
          <a
            href="https://discord.gg/7k2Jd47H"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Discord"
          >
            <Image
              src={assetPath('/svg/DISCORD.svg')}
              alt="Discord"
              width={130}
              height={36}
              className="object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(42%) saturate(420%) hue-rotate(358deg) brightness(93%) contrast(88%)' }}
            />
          </a>
        </div>

      </div>
    </>
  )
}
