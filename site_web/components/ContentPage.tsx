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
  breadcrumbs?: Breadcrumb[]
  leftText?: React.ReactNode
  rightText?: React.ReactNode
  children?: React.ReactNode
}

export default function ContentPage({
  title,
  subtitle,
  image,
  breadcrumbs,
  leftText,
  rightText,
  children,
}: ContentPageProps) {
  return (
    <div className="px-16 py-12 max-w-6xl">

      {/* Breadcrumb */}
      {breadcrumbs && (
        <nav className="flex items-center gap-2 mb-10">
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

      {/* Main layout */}
      <div className="flex gap-16">

        {/* Left column */}
        <div className="flex-shrink-0" style={{ width: '44%' }}>

          {/* Circular image */}
          {image && (
            <div
              className="mb-8 overflow-hidden"
              style={{ width: 280, height: 280, borderRadius: '50%', position: 'relative' }}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          )}

          {/* Title */}
          <h1
            className="font-title leading-tight mb-2"
            style={{ fontSize: '3rem', color: '#1e2d16' }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className="font-body uppercase mb-8"
              style={{ fontSize: 12, letterSpacing: '0.2em', color: '#7a7060' }}
            >
              {subtitle}
            </p>
          )}

          {/* Left text */}
          {leftText && (
            <div
              className="font-body leading-relaxed"
              style={{ fontSize: 15, color: '#2a2a2a' }}
            >
              {leftText}
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="flex-1 pt-1">
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
