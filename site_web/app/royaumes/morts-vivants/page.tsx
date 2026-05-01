import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import ClassAccordion from '@/components/ClassAccordion'
import Image from 'next/image'
import ImageLightbox from '@/components/ImageLightbox'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Morts-vivants — Terres Perdues' }

function ClassCard({ image, imageExt = 'JPG', name, tier, description, pouvoirs }: {
  image: string
  imageExt?: string
  name: string
  tier: string
  description: string
  pouvoirs: string[]
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start" style={{ marginBottom: '5%' }}>
      <div className="flex-shrink-0">
        <Image
          src={assetPath(`/${image}.${imageExt}`)}
          alt={name}
          width={200}
          height={263}
          className="object-cover rounded-xl"
        />
      </div>
      <div style={{ maxWidth: 700 }}>
        <h2 className="font-title leading-tight mb-2" style={{ fontSize: '2.25rem', color: '#425d34', letterSpacing: '-1.5px' }}>
          {name}
        </h2>
        <p className="font-body uppercase mb-4" style={{ fontSize: 11, letterSpacing: '0.2em', color: '#7a7060' }}>
          {tier}
        </p>
        <p className="font-body leading-relaxed" style={{ fontSize: 16, color: '#2a2a2a' }}>
          {description}
        </p>
        <div style={{ marginTop: 20 }}>
          {pouvoirs.map((p, i) => (
            <div key={i}>
              <hr style={{ borderColor: '#c0b89a', marginBottom: 8 }} />
              <p className="font-body font-extrabold" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: 8 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Légion des damnés"
        subtitle="Morts-vivants"
        image={assetPath('/backgrounds/portrait-morts-vivants.png')}
        imageSize={510}
        imageScale={1.5}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Morts-vivants' },
        ]}
        leftText={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat.
            Etiam a interdum tortor. <strong>Proin dictum</strong> pulvinar nunc, eu congue
            tortor sagittis in. Integer imperdiet eleifend faucibus. Nam porta sagittis
            vestibulum. Aliquam nisi orci, tincidunt a interdum nec, consectetur at felis.
          </p>
        }
        rightText={
          <p>
            Nunc sollicitudin eget felis at fringilla. Integer elementum massa ut nisi
            ullamcorper condimentum. Nulla at eleifend mauris, rhoncus hendrerit nisl.
            Aenean velit leo, tincidunt ac volutpat eget, maximus a mi. Sed vehicula est
            vitae scelerisque posuere. Cras ullamcorper eget justo non ultrices. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris facilisis metus posuere, condimentum massa ac, pellentesque
            dui. Duis vestibulum varius neque. Morbi dolor dolor, congue blandit libero
            mollis, facilisis tempor mauris. Aliquam libero magna, tempor vel scelerisque
            nec, vehicula ac ex.
          </p>
        }
      />

      <div style={{ backgroundColor: '#2d4022', padding: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-title" style={{ fontSize: '2.5rem', color: '#e9e4d2', marginBottom: '60px' }}>Classes et évolutions</h2>
        <ImageLightbox
          src={assetPath('/arbre-morts-tp2026.jpg')}
          alt="Arbre des Morts-vivants"
          width={1920}
          height={1080}
          className="h-auto object-contain rounded-2xl"
          style={{ width: '80%' }}
        />
      </div>

      <div style={{ padding: '5%' }}>

        <ClassAccordion label="Classes 1">
          <ClassCard
            image="1-squelette-3" imageExt="jpg"
            name="Squelette" tier="Classe 1"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Parrying osseux',
            ]}
          />
          <ClassCard
            image="1-fantome-3" imageExt="JPG"
            name="Fantôme" tier="Classe 1"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Immunité partielle aux masses',
              "Invisibilité",
              "Jet d'ectoplasme",
            ]}
          />
          <ClassCard
            image="1-noble-4" imageExt="JPG"
            name="Noble" tier="Classe 1"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Animation de sans-tête, squelette ou zombie',
            ]}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 2">
          <ClassCard
            image="2-wight-3" imageExt="JPG"
            name="Wight" tier="Classe 2"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              "Désarmement de l'ennemi",
              'Déviation des coups',
            ]}
          />
          <ClassCard
            image="2-necrophage-3" imageExt="JPG"
            name="Nécrophage" tier="Classe 2"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Parrying osseux amélioré',
              'Dévore de la chaire fraîche pour soigner ses blessures',
            ]}
          />
          <ClassCard
            image="2-spectre-3" imageExt="JPG"
            name="Spectre" tier="Classe 2"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Touche spectrale',
              'Adaptation spectrale',
              'Invisibilité amélioré',
            ]}
          />
          <ClassCard
            image="2-revenant-3" imageExt="JPG"
            name="Revenant" tier="Classe 2"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Invisibilité amélioré',
              "Arme de classe ignore l'armure",
            ]}
          />
          <ClassCard
            image="2-damne-3" imageExt="JPG"
            name="Damné" tier="Classe 2"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Aura de lumière maudite',
              'Drain de vie',
              'Polymorph créatures niveau 1',
            ]}
          />
          <ClassCard
            image="2-necromancien-3" imageExt="JPG"
            name="Nécromancien" tier="Classe 2"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Sorts de nécromancie de base',
            ]}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 3">
          <ClassCard
            image="3-seigneur-3" imageExt="JPG"
            name="Seigneur des Ténèbres" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Aura de peur',
              'Appel à la nuit',
            ]}
          />
          <ClassCard
            image="3-lamesang-3" imageExt="JPG"
            name="Lame de Sang" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              "Pierre d'âme",
              'Pouvoir de la lame sanglante',
            ]}
          />
          <ClassCard
            image="3-cauchemard-3" imageExt="JPG"
            name="Cauchemar" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Aura terreur avancée',
              'Bonus nocturne',
            ]}
          />
          <ClassCard
            image="3-momie-3" imageExt="png"
            name="Momie" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Assimilation des morts Shakoyolin',
              'Arme de classe : drain de mana',
            ]}
          />
          <ClassCard
            image="3-faucheuse-3" imageExt="JPG"
            name="Faucheuse" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              "Récolte d'âmes",
              'Malédiction de la faucheuse',
            ]}
          />
          <ClassCard
            image="3-banshee-3" imageExt="JPG"
            name="Banshee" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Cri de la banshee',
              'Adaptation spectrale',
              'Invisibilité amélioré',
            ]}
          />
          <ClassCard
            image="3-chasseur-3" imageExt="JPG"
            name="Chasseur Invisible" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Piège macabre',
              "Arme de classe ignore l'armure",
              'Invisibilité amélioré',
            ]}
          />
          <ClassCard
            image="3-vampire-3" imageExt="JPG"
            name="Vampire" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Drain de vie avancé',
              'Polymorph créatures avancées',
              'Animal espion',
            ]}
          />
          <ClassCard
            image="3-Liche-3" imageExt="JPG"
            name="Liche" tier="Classe 3"
            description="Description de classe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat etiam interdum tortor proin dictum pulvinar nunc congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            pouvoirs={[
              'Sorts de nécromancie avancés',
            ]}
          />
        </ClassAccordion>

        <ClassAccordion label="Pouvoirs de race">
          <div style={{ maxWidth: 700 }}>
            <div>
              <hr style={{ borderColor: '#c0b89a', marginBottom: 8 }} />
              <p className="font-body font-extrabold" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: 8 }}>Soin par la noirceur</p>
              <hr style={{ borderColor: '#c0b89a', marginBottom: 8 }} />
              <p className="font-body font-extrabold" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: 8 }}>Puit des âmes et fouille-vicère pour récupérer des noirceurs</p>
              <hr style={{ borderColor: '#c0b89a', marginBottom: 8 }} />
              <p className="font-body font-extrabold" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: 8 }}>Utilisation de noirceurs hors des territoires morts-vivants</p>
            </div>
          </div>
        </ClassAccordion>

      </div>
    </InnerLayout>
  )
}
