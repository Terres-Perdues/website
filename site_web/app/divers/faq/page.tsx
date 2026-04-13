import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'FAQ — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="FAQ"
        subtitle="Divers"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Divers', href: '/divers' },
          { label: 'FAQ' },
        ]}
      />
    </InnerLayout>
  )
}
