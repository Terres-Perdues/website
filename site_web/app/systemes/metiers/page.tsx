import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Métiers — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Métiers"
        subtitle="Systèmes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes', href: '/systemes' },
          { label: 'Métiers' },
        ]}
      />
    </InnerLayout>
  )
}
