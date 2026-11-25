import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Évolutions - Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Évolutions"
        subtitle="Systèmes"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Toyalis.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes' },
          { label: 'Évolutions' },
        ]}
        leftText={
          <p>
            En combattant et en jouant ton rôle, tu gagnes des points d&apos;expérience qui se
            transforment en points de grade : il faut atteindre 50 points de grade pour passer à
            ta 2e classe, puis 100 points de grade pour accéder à ta 3e classe.
          </p>
        }
        rightText={
          <p>
            En gagnant du grade au combat et dans les quêtes, ton personnage passe par trois
            paliers de classe propres à sa race, et chaque palier relève le maximum de ses
            compétences.
          </p>
        }
      />
    </InnerLayout>
  )
}
