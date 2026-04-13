import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Évolutions — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Évolutions"
        subtitle="Systèmes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes', href: '/systemes' },
          { label: 'Évolutions' },
        ]}
      />
    </InnerLayout>
  )
}
