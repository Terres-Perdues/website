import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Statut du serveur — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Statut du serveur"
        subtitle="Général"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Général', href: '/general' },
          { label: 'Statut du serveur' },
        ]}
      />
    </InnerLayout>
  )
}
