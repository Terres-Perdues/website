import InnerLayout from '@/components/InnerLayout'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Roadmap — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <div style={{ padding: '5%' }}>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10">
          {[
            { label: 'Accueil', href: '/' },
            { label: 'Général' },
            { label: 'Roadmap' },
          ].map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: '#9a9080', fontSize: 11 }}>/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="font-body uppercase hover:text-green-tp transition-colors"
                  style={{ fontSize: 11, letterSpacing: '0.18em', color: '#9a9080' }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className="font-body uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.18em', color: '#9a9080' }}
                >
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Titre */}
        <h1 className="font-title leading-tight mb-2" style={{ fontSize: '3rem', color: '#425d34' }}>
          Roadmap
        </h1>
        <p className="font-body uppercase mb-8" style={{ fontSize: 12, letterSpacing: '0.2em', color: '#7a7060' }}>
          Général
        </p>

        {/* Image pleine largeur */}
        <div className="w-full">
          <Image
            src={assetPath('/roadmap-tp2026.jpg')}
            alt="Roadmap Terres Perdues 2026"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </InnerLayout>
  )
}
