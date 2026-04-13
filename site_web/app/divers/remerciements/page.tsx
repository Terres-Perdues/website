import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Remerciements — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Remerciements"
        subtitle="Divers"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Divers', href: '/divers' },
          { label: 'Remerciements' },
        ]}
      />
    </InnerLayout>
  )
}
