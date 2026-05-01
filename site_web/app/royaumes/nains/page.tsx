import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import Image from 'next/image'
import ImageLightbox from '@/components/ImageLightbox'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Les Nains — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Les Nains"
        subtitle="Royaumes"
        image={assetPath('/backgrounds/Nain-top-mine.png')}
        imageSize={510}
        imageScale={1.6}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Les Nains' },
        ]}
        leftText={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat.
            Etiam a interdum tortor. <strong>Proin dictum</strong> pulvinar nunc, eu congue
            tortor sagittis in. Integer imperdiet eleifend faucibus. Nam porta sagittis
            vestibulum. Aliquam nisi orci, tincidunt a interdum nec, consectetur at felis.
          </p>
        }
        rightText={
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
        }
      />
      <div style={{ backgroundColor: '#2d4022', padding: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-title" style={{ fontSize: '2.5rem', color: '#e9e4d2', marginBottom: '60px' }}>Classes et évolutions</h2>
        <ImageLightbox
          src={assetPath('/arbre-nains-tp2026.jpg')}
          alt="Arbre des Nains"
          width={1920}
          height={1080}
          className="h-auto object-contain rounded-2xl"
          style={{ width: '80%' }}
        />
      </div>
    </InnerLayout>
  )
}
