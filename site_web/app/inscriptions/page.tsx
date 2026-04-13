import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Inscriptions — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Inscriptions"
        subtitle="Général"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Général', href: '/inscriptions' },
          { label: 'Inscriptions' },
        ]}
      />
    </InnerLayout>
  )
}
