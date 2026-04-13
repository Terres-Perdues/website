import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Territoires — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Territoires"
        subtitle="Systèmes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes', href: '/systemes' },
          { label: 'Territoires' },
        ]}
      />
    </InnerLayout>
  )
}
