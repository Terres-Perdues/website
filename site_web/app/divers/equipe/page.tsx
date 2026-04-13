import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: "L'Équipe — Terres Perdues" }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="L'Équipe"
        subtitle="Divers"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Divers' },
          { label: "L'Équipe" },
        ]}
      />
    </InnerLayout>
  )
}
