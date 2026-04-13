import Image from 'next/image'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface ContentPageProps {
  title: string
  subtitle?: string
  image?: string
  imageSize?: number
  breadcrumbs?: Breadcrumb[]
  leftText?: React.ReactNode
  rightText?: React.ReactNode
  children?: React.ReactNode
}

export default function ContentPage({
  title,
  subtitle,
  image,
  imageSize = 280,
  breadcrumbs,
  leftText,
  rightText,
  children,
}: ContentPageProps) {
  return (
    <div style={{ padding: '5%' }}>

      {/* Breadcrumb */}
      {breadcrumbs && (
        <nav className="flex items-center gap-2 mb-10 mt-4 nav:mt-0">
          {breadcrumbs.map((crumb, i) => (
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
      )}

      {/* Main layout — 3 colonnes desktop / 1 colonne mobile */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Colonne 1 — Image ronde */}
        {image && (
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <div
              className="overflow-hidden"
              style={{
                width: `min(${imageSize}px, 85vw)`,
                height: `min(${imageSize}px, 85vw)`,
                borderRadius: '50%',
                position: 'relative',
              }}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          </div>
        )}

        {/* Colonne 2 — Titre, sous-titre, texte intro */}
        <div style={{ width: '100%', maxWidth: 400 }}>
          <h1
            className="font-title leading-tight mb-2"
            style={{ fontSize: '3rem', color: '#425d34' }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="font-body uppercase mb-6"
              style={{ fontSize: 12, letterSpacing: '0.2em', color: '#7a7060' }}
            >
              {subtitle}
            </p>
          )}

          {leftText && (
            <div
              className="font-body leading-relaxed"
              style={{ fontSize: 20, color: '#2a2a2a' }}
            >
              {leftText}
            </div>
          )}
        </div>

        {/* Colonne 3 — Corps de texte */}
        <div className="md:pt-[115px]" style={{ width: '100%', maxWidth: 400 }}>
          {rightText && (
            <div
              className="font-body leading-relaxed"
              style={{ fontSize: 15, color: '#2a2a2a' }}
            >
              {rightText}
            </div>
          )}
          {children}
        </div>

      </div>
    </div>
  )
}
