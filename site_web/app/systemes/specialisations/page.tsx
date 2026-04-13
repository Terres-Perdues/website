import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Spécialisations — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Spécialisations"
        subtitle="Systèmes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes' },
          { label: 'Spécialisations' },
        ]}
      />
    </InnerLayout>
  )
}
