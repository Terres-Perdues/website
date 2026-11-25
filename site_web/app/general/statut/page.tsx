import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Statut du serveur - Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Statut du serveur"
        subtitle="Général"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Khislev.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Général' },
          { label: 'Statut du serveur' },
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
