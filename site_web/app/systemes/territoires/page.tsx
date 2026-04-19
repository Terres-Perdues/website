import InnerLayout from '@/components/InnerLayout'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Territoires — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <div style={{ padding: '5%' }}>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 mt-4 nav:mt-0">
          {[
            { label: 'Accueil', href: '/' },
            { label: 'Systèmes' },
            { label: 'Territoires' },
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

        {/* 2 colonnes */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Colonne 1 — Carte */}
          <div className="flex-1">
            <Image
              src={assetPath('/TP-CARTE copy.jpg')}
              alt="Carte de Terres Perdues"
              width={1200}
              height={900}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Colonne 2 — Titre + textes */}
          <div className="flex-1">
            <h1
              className="font-title leading-tight mb-2"
              style={{ fontSize: '3rem', color: '#425d34' }}
            >
              Territoires
            </h1>
            <p
              className="font-body uppercase mb-6"
              style={{ fontSize: 12, letterSpacing: '0.2em', color: '#7a7060' }}
            >
              Systèmes
            </p>
            <div className="font-body leading-relaxed mb-6" style={{ fontSize: 20, color: '#2a2a2a' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat.
                Etiam a interdum tortor. <strong>Proin dictum</strong> pulvinar nunc, eu congue
                tortor sagittis in. Integer imperdiet eleifend faucibus. Nam porta sagittis
                vestibulum. Aliquam nisi orci, tincidunt a interdum nec, consectetur at felis.
              </p>
            </div>
            <div className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
              <p>
                Nunc sollicitudin eget felis at fringilla. Integer elementum massa ut nisi
                ullamcorper condimentum. Nulla at eleifend mauris, rhoncus hendrerit nisl.
                Aenean velit leo, tincidunt ac volutpat eget, maximus a mi. Sed vehicula est
                vitae scelerisque posuere. Cras ullamcorper eget justo non ultrices. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Mauris facilisis metus posuere, condimentum massa ac, pellentesque
                dui. Duis vestibulum varius neque. Morbi dolor dolor, congue blandit libero
                mollis, facilisis tempor mauris. Aliquam libero magna, tempor vel scelerisque
                nec, vehicula ac ex.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InnerLayout>
  )
}
