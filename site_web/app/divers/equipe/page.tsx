import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: "L'Équipe - Terres Perdues" }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="L'Équipe"
        subtitle="Divers"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Khislev.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Divers' },
          { label: "L'Équipe" },
        ]}
        leftText={
          <p>À venir avec l&apos;ouverture du serveur.</p>
        }
        rightText={
          <p>&nbsp;</p>
        }
      />
    </InnerLayout>
  )
}
