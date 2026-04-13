import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Les Drows — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Les Drows"
        subtitle="Royaumes"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Toyalis.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Les Drows' },
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
    </InnerLayout>
  )
}
