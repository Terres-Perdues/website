import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Métiers - Terres Perdues' }

const metiers = [
  {
    name: 'Agriculteur',
    description: 'Cultive la terre pour approvisionner Tyleene en denrées, nourrir les troupes et ravitailler les marchands des quatre royaumes.',
  },
  {
    name: 'Alchimiste',
    description: 'Distille herbes, minéraux et essences rares en un vaste catalogue de potions aux effets aussi précieux que redoutables.',
  },
  {
    name: 'Armurier',
    description: 'Forge et entretient armures, boucliers et équipements défensifs indispensables aux guerriers qui défendent les royaumes.',
  },
  {
    name: 'Bijoutier',
    description: 'Façonne métaux précieux et pierres gemmes en parures et amulettes convoitées par les nobles comme par les aventuriers.',
  },
  {
    name: 'Bricoleur',
    description: 'Assemble et répare toutes sortes d\'objets du quotidien, transformant rebuts et matières récupérées en outils utiles.',
  },
  {
    name: 'Couturier',
    description: 'Taille étoffes et cuirs pour habiller les habitants de Tyleene, des armures légères aux tenues de cour les plus raffinées.',
  },
  {
    name: 'Dresseur',
    description: 'Apprivoise et entraîne montures, bêtes de somme et animaux de guerre au service des aventuriers qui parcourent Tyleene.',
  },
  {
    name: 'Élémentaliste',
    description: 'Maîtrise les forces primordiales du feu, de l\'air, de l\'eau et de la terre pour forger des objets imprégnés d\'énergie élémentaire.',
  },
  {
    name: 'Fabricant d\'arc',
    description: 'Courbe et tend bois, nerfs et cordes pour produire arcs et arbalètes dont dépendent archers et tireurs d\'élite au combat.',
  },
  {
    name: 'Fabricant d\'armes',
    description: 'Forge épées, haches et lances destinées à équiper les combattants de tous les royaumes en armes taillées pour la guerre.',
  },
  {
    name: 'Maçon',
    description: 'Érige murs, fortifications et bâtiments de pierre qui façonnent les cités et forteresses de Tyleene pour les générations futures.',
  },
  {
    name: 'Menuisier',
    description: 'Travaille le bois pour produire meubles, structures et mâts de navires qui soutiennent la vie civile et militaire de l\'Empire.',
  },
  {
    name: 'Taxidermiste',
    description: 'Prépare trophées et dépouilles de créatures pour en extraire matériaux rares, pièces d\'apparat ou ingrédients alchimiques.',
  },
  {
    name: 'Transcripteur',
    description: 'Copie et traduit parchemins, sortilèges et traités anciens, préservant le savoir des âges pour mages et érudits du royaume.',
  },
]

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Métiers"
        subtitle="Systèmes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes' },
          { label: 'Métiers' },
        ]}
        bottomContent={
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {metiers.map((m) => (
              <div
                key={m.name}
                style={{ borderTop: '2px solid #c0b89a', paddingTop: '0.9rem' }}
              >
                <h2
                  className="font-title"
                  style={{ fontSize: '1.4rem', color: '#425d34', marginBottom: '0.4rem', lineHeight: 1.2 }}
                >
                  {m.name}
                </h2>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: 15, color: '#7a7060' }}
                >
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        }
      />
    </InnerLayout>
  )
}
