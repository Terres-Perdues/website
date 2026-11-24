import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Règlements — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Règlements"
        subtitle="Général"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Brujamonte.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Général' },
          { label: 'Règlements' },
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
