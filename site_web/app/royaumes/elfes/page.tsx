import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Les Elfes — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Les Elfes"
        subtitle="Royaumes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes', href: '/royaumes' },
          { label: 'Les Elfes' },
        ]}
      />
    </InnerLayout>
  )
}
