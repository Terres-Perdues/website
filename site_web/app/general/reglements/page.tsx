import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Règlements — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Règlements"
        subtitle="Général"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Général' },
          { label: 'Règlements' },
        ]}
      />
    </InnerLayout>
  )
}
