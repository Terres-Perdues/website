import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Inscriptions - Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Inscriptions"
        subtitle="Général"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Brujamonte.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Général' },
          { label: 'Inscriptions' },
        ]}
        leftText={
          <p>
            Les inscriptions ouvriront leurs portes avec le lancement officiel du serveur.
            Rejoins notre <strong><a href="https://discord.gg/9549RWNZPa" target="_blank" rel="noopener noreferrer">serveur Discord</a></strong> pour être informé dès que les portes de Tyleene s&apos;ouvriront et ne manquer aucune annonce.
          </p>
        }
        rightText={
          <p>
            À venir avec l&apos;ouverture du serveur.
          </p>
        }
      />
    </InnerLayout>
  )
}
