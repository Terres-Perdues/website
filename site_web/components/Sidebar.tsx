'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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

export default function Sidebar() {
  const pathname = usePathname()
  const [openSection, setOpenSection] = useState<string | null>(null)

  const isActive = (href: string) =>
    href !== '/' && pathname.startsWith(href)

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label))

  return (
    <aside
      className="sidebar-responsive fixed left-0 top-0 h-screen flex flex-col z-50"
      style={{ width: '590px', backgroundColor: '#3d572f' }}
    >
      {/* Logo */}
      <Link href="/" className="flex hover:opacity-85 transition-opacity" style={{ padding: '90px 90px 90px' }}>
        <Image
          src={assetPath('/svg/TP-logo-accueil.svg')}
          alt="Terres Perdues — Accueil"
          width={390}
          height={390}
          className="object-contain"
          priority
        />
      </Link>

      {/* Divider */}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto space-y-4" style={{ padding: '0 90px' }}>
        {navigation.map((section) => (
          <div key={section.label}>
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
                  className={`nav-section block text-left w-full ${
                    isActive(section.href) ? 'underline underline-offset-4' : ''
                  }`}
                >
                  {section.label}
                </button>
                {section.children && (
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openSection === section.label ? `${section.children.length * 40 + 60}px` : '0px',
                      opacity: openSection === section.label ? 1 : 0,
                    }}
                  >
                    <div className="space-y-0.5" style={{ paddingTop: 15, paddingBottom: 50 }}>
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

      {/* Bottom buttons */}
      <div className="pt-4 flex items-center gap-3" style={{ padding: '16px 90px 90px' }}>
        <Link
          href="/inscriptions"
          className="font-title text-gold-tp hover:text-gold-light hover:border-gold-light transition-all duration-200 hover:scale-105 active:scale-95 text-center"
          style={{
            width: 200,
            padding: '8px 0',
            border: '1.5px solid #d7ae5d',
            borderRadius: 6,
            fontSize: '23px',
            display: 'inline-block',
          }}
        >
          Inscription
        </Link>
        <a
          href="https://discord.gg/7k2Jd47H"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Discord"
          style={{ marginLeft: 34 }}
        >
          <Image
            src={assetPath('/svg/DISCORD.svg')}
            alt="Discord"
            width={168}
            height={46}
            className="object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(38%) saturate(600%) hue-rotate(5deg) brightness(100%) contrast(95%)' }}
          />
        </a>
      </div>
    </aside>
  )
}
