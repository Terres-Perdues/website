import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import ImageLightbox from '@/components/ImageLightbox'
import ClassAccordion from '@/components/ClassAccordion'
import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Les Nains - Terres Perdues' }

function ClassCard({ image, imageExt = 'jpg', name, tier, description, pouvoirs }: {
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
          src={assetPath(`/nains/${image}.${imageExt}`)}
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
        <p className="font-body leading-relaxed" style={{ fontSize: 16, color: '#2a2a2a', whiteSpace: 'pre-line' }}>
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
        title="Les Nains"
        subtitle="Royaumes"
        image={assetPath('/backgrounds/Nain-top-mine.png')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Les Nains' },
        ]}
        leftText={
          <p>
            Fiers descendants de Yuro, dieu du roc, les Nains ont bâti leur civilisation dans les
            profondeurs des montagnes de Tylene. Leur royaume de Vanderroche, établi au pied du Mont
            Nocturne, témoigne de générations de labeur et d&apos;une maîtrise exceptionnelle de la
            pierre et des métaux.
          </p>
        }
        rightText={
          <>
            <p>
              De petite taille, trapus et dotés d&apos;une constitution remarquable, les Nains possèdent
              une endurance devenue légendaire. Leur barbe, souvent portée avec fierté, constitue un
              symbole de maturité et de dignité. Leurs mains portent fréquemment les marques de leur
              métier, qu&apos;ils considèrent comme autant de témoignages d&apos;une vie bien employée.
            </p>
            <p style={{ marginTop: '1em' }}>
              Leur longévité nourrit une mémoire collective exceptionnelle. Les exploits des ancêtres,
              les serments prononcés et les offenses subies traversent les générations, façonnant un
              peuple profondément attaché à son héritage.
            </p>
          </>
        }
        extraText={
          <div style={{ columns: '2', columnGap: '3rem' }}>
            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Société et traditions</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Pour les Nains, chaque métier constitue un engrenage essentiel d&apos;une grande mécanique
                collective. Mineurs, marteleurs, forgerons et artisans dépendent du savoir-faire des
                autres. Chacun est appelé à trouver sa vocation et à perfectionner son art, convaincu que
                sa contribution participe à la grandeur de Vanderroche.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Le travail dépasse largement la nécessité de gagner sa vie. Il représente une source
                d&apos;accomplissement, de dignité et de reconnaissance. Un Nain peut consacrer des
                décennies à maîtriser une technique ou à réaliser une œuvre dont il espère que les
                générations futures se souviendront. Cette quête d&apos;excellence nourrit toutefois une
                compétition parfois féroce. Les rivalités entre ateliers, les jalousies professionnelles
                et les querelles entourant la reconnaissance d&apos;un ouvrage sont monnaie courante.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Les Nains accordent également une importance considérable aux richesses matérielles.
                L&apos;or, les gemmes et les objets précieux représentent autant des récompenses du labeur
                que des symboles de réussite. La parole donnée demeure sacrée et la loyauté constitue
                l&apos;une des plus grandes vertus naines. Méfiants envers les étrangers, ils accordent
                difficilement leur confiance, mais font preuve d&apos;une générosité remarquable envers
                leurs véritables amis. Leur mémoire légendaire entretient toutefois les rancunes aussi
                fidèlement que les amitiés. Une offense peut poursuivre une famille pendant plusieurs
                générations.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Les Nains ne connaissent guère la demi-mesure. Ils travaillent avec acharnement, combattent
                avec férocité et célèbrent leurs victoires avec une ardeur tout aussi remarquable. Leurs
                tavernes résonnent de chants, de récits et de disputes, où les excès sont souvent aussi
                mémorables que les festivités elles-mêmes.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Pouvoir et politique</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Vanderroche est dirigée par le Seigneur des Mines, entouré de représentants des grandes
                institutions naines. Le Conseil des Sept incarne cette volonté de réunir les différentes
                forces du royaume, notamment les intérêts militaires, artisanaux, commerciaux et savants.
                La compétence, l&apos;expérience et les services rendus constituent d&apos;importantes
                sources de légitimité. Toutefois, les corporations prospères et les maîtres artisans les
                plus réputés exercent un pouvoir considérable. La richesse permet de financer de grands
                ouvrages, de soutenir des expéditions et d&apos;obtenir l&apos;appui de personnalités
                influentes.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Les débats politiques sont souvent animés. Chaque représentant défend ses convictions avec
                une obstination qui peut rendre les compromis interminables. Les traditions et les
                précédents occupent une place importante dans les décisions, au point que certaines
                réformes se heurtent à des querelles vieilles de plusieurs siècles.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Leur discipline, leur endurance et la qualité de leur équipement en font des adversaires
                redoutables. Le royaume doit également une grande part de sa puissance à son Académie des
                sciences. Les savants nains y perfectionnent la métallurgie ainsi que le métarunisme. Leurs
                réalisations sont réputées pour leur ingéniosité et leur durabilité, mais le secret
                entourant certaines découvertes et la rivalité entre maîtres peuvent parfois freiner leur
                diffusion.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Religion et croyances</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Yuro occupe une place centrale dans la culture naine. Dieu du roc, il incarne la force, la
                permanence et la persévérance auxquelles son peuple aspire. Les Nains voient dans les
                montagnes et les richesses de la terre les manifestations de son héritage, qu&apos;il leur
                appartient de préserver et de façonner.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Leur dévotion s&apos;exprime autant dans leurs réalisations que dans leurs cérémonies. Une
                forteresse capable de résister aux siècles, une lame forgée avec maîtrise ou un serment
                respecté malgré l&apos;adversité constituent autant d&apos;hommages à Yuro. Le travail bien
                accompli est souvent considéré comme une forme de piété, tandis que la paresse et le
                gaspillage sont particulièrement mal vus. Les traditions religieuses accordent une grande
                importance aux ancêtres. Les œuvres transmises, les noms gravés dans la pierre et les
                récits conservés de génération en génération assurent la continuité entre les vivants et
                ceux qui les ont précédés.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Cette fidélité au passé peut néanmoins devenir un fardeau. Certains Nains invoquent
                volontiers les traditions pour justifier leurs privilèges, leurs possessions ou leur refus
                du changement. L&apos;honneur et la volonté de Yuro peuvent alors devenir des arguments
                commodes pour défendre des intérêts beaucoup plus personnels.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Relations avec les autres peuples</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                Les Nains jugent les autres peuples moins à leurs paroles qu&apos;à leurs actes. Leur
                confiance se gagne lentement, mais le respect d&apos;un engagement ou une épreuve traversée
                ensemble peuvent donner naissance à des alliances durables.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Humains -</strong> Les Humains entretiennent avec les Nains des relations
                généralement favorables. Leur ingéniosité, leur courage et leur capacité à bâtir de
                puissants royaumes inspirent un respect sincère. Les Nains leur reprochent toutefois leur
                empressement et leur tendance à prendre des engagements qu&apos;ils ne peuvent toujours
                tenir.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Elfes -</strong> Les Elfes entretiennent avec les Nains une rivalité philosophique
                aussi ancienne que profonde. Aux yeux des Elfes, les Nains sont des êtres insatiables, trop
                prompts à défigurer le monde. Les Nains, quant à eux, reprochent aux Elfes leur passivité.
                Cette opposition n&apos;exclut toutefois pas une admiration réciproque. Les Elfes
                reconnaissent le génie artisanal et la persévérance des Nains, tandis que ces derniers
                respectent la sagesse et la maîtrise des arcanes elfiques.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Drows -</strong> Les Drows figurent parmi leurs adversaires les plus détestés.
                Leurs rivalités pour les territoires et les richesses souterraines ont engendré de nombreux
                conflits, dont les Nains conservent fidèlement le souvenir. Ils méprisent les intrigues et
                les trahisons des grandes familles drows, qu&apos;ils considèrent comme l&apos;antithèse
                de leur conception de l&apos;honneur.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Morts-Vivants -</strong> Les Morts-Vivants inspirent une profonde aversion aux
                Nains. Leur existence représente une violation du repos éternel et des traditions sacrées
                entourant leurs ancêtres. L&apos;expansion de Brujamonte constitue également une menace
                pour leurs territoires. Face aux légions de Shakoyolin, les Nains opposent la résistance
                de leurs forteresses et une détermination que même la mort ne saurait facilement ébranler.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Ambitions et objectifs</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Les Nains cherchent avant tout à préserver Vanderroche, à accroître sa prospérité et à
                transmettre aux générations futures un héritage plus grand que celui qu&apos;ils ont reçu.
                Mais cette volonté de bâtir et d&apos;accumuler peut également nourrir des ambitions moins
                nobles. Certaines familles convoitent les gisements les plus riches, des maîtres artisans
                cherchent à surpasser leurs rivaux à tout prix et des expéditions sont entreprises
                davantage pour la promesse de trésors que pour le bien du royaume.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Leur fierté les pousse à entreprendre des œuvres extraordinaires, mais aussi à s&apos;obstiner
                dans des entreprises vouées à l&apos;échec. Un Nain renonce rarement à une tâche commencée,
                à une promesse donnée ou à une dette d&apos;honneur, même lorsque le prix à payer devient
                déraisonnable.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Car les Nains demeurent convaincus que rien de véritablement précieux ne s&apos;obtient
                sans effort. Qu&apos;il s&apos;agisse d&apos;une arme, d&apos;une fortune, d&apos;une
                amitié ou d&apos;un royaume, ils consacrent leur existence à bâtir ce qui leur survivra.
                Reste à savoir si leur héritage sera celui de leurs plus grandes œuvres ou de leurs plus
                anciennes querelles.
              </p>
            </section>

            <section style={{ breakInside: 'avoid' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Suggestions de noms</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.5em' }}>
                <strong>Masculins :</strong> Thorgar, Grumvald, Hroldan, Baldrïn, Durgan, Korrik, Ragnar
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.5em' }}>
                <strong>Féminins :</strong> Grunna, Sigrun, Hildra, Bryndis, Durnhild, Vardis, Haldrada
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Noms de famille :</strong> Forgebrume, Barbe-d&apos;Or, Fendremont, Garderune, Lamedebraise, Pic-d&apos;Airain, Brise-Roc, Taille-Sapphire
              </p>
            </section>
          </div>
        }
      />

      <div style={{ backgroundColor: '#2d4022', padding: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-title" style={{ fontSize: '2.5rem', color: '#e9e4d2', marginBottom: '60px' }}>Classes et évolutions</h2>
        <ImageLightbox
          src={assetPath('/arbre-nains-tp2026.jpg')}
          alt="Arbre des Nains"
          width={1920}
          height={1080}
          className="h-auto object-contain rounded-2xl"
          style={{ width: '80%' }}
        />
      </div>

      <div style={{ padding: '5%' }}>

        <ClassAccordion label="Classes 1">
          <ClassCard
            image="1classe-marteleur"
            name="Marteleur" tier="Classe 1"
            description={`Au cœur des fournaises de Vanderroche, là où la chaleur ferait suffoquer les plus robustes guerriers, les Marteleurs imposent leur volonté au métal. Leurs marteaux frappent sans relâche les minerais extraits des profondeurs, les purifiant et les transformant en alliages dont naîtront les armes et les armures légendaires du peuple nain.

Maîtres des flammes et des métaux, ils connaissent les secrets de la matière et les caprices des minerais les plus rares. Leur savoir-faire est indispensable aux Forgerons, et nul ne saurait prétendre à la grandeur de Vanderroche sans reconnaître la puissance de ses ateliers.

Mais lorsque les tambours de guerre retentissent, les Marteleurs quittent leurs enclumes pour rejoindre leurs frères d'armes. Leurs percussions résonnent comme les battements du cœur de la montagne, enveloppant les guerriers d'une protection mystérieuse qui atténue les coups ennemis et leur permet de tenir face aux assauts les plus violents.

Tant que résonneront leurs tambours, les enfants de Yuro plieront, mais ne se briseront jamais.`}
            pouvoirs={['Tambour : réduction des dégâts alliés']}
          />
          <ClassCard
            image="1classe-mineur"
            name="Mineur" tier="Classe 1"
            description={`Il n'existe guère de Nain qui ne soit fier des richesses de Vanderroche, mais les Mineurs aiment rappeler que ces trésors ne se sont pas extraits tout seuls. Armés de leurs pics et de leurs lanternes, ils passent de longues journées sous la montagne, à la recherche des filons qui alimenteront les fournaises et rempliront les coffres du royaume.

Leur métier exige bien davantage que de solides bras. Un bon Mineur sait reconnaître la qualité d'un minerai, repérer les faiblesses d'une paroi et distinguer les galeries prometteuses de celles qui risquent de lui servir de tombeau. L'expérience est souvent son meilleur outil, et les conseils des anciens valent parfois davantage qu'une pleine bourse d'or.

Habitués à travailler dans l'obscurité, ils connaissent les dangers qui se cachent sous la pierre. Ils possèdent notamment l'étonnante capacité de faire exploser certaines gemmes, une technique aussi utile pour se défendre que redoutable entre des mains imprudentes.

Sans eux, les Marteleurs n'auraient rien à transformer et les Forgerons rien à façonner. Les Mineurs ne manquent d'ailleurs jamais une occasion de le rappeler, particulièrement lorsqu'un artisan se vante un peu trop bruyamment de ses réalisations.`}
            pouvoirs={['Explosion de gemme']}
          />
          <ClassCard
            image="1classe-soulard"
            name="Soûlard" tier="Classe 1"
            description={`Les Soûlards comptent parmi les meilleurs brasseurs du royaume, capables de produire des cuvées dont la réputation dépasse largement les frontières de leur cité. Malheureusement, à force de goûter leurs propres créations, plusieurs ont fini par développer un attachement à leur métier qui dépasse quelque peu les limites du raisonnable.

Leur talent demeure incontestable, notamment dans la préparation de bières aux étonnantes propriétés curatives. Mais les années d'excès ont parfois laissé des traces. Certains ont perdu leur fortune, d'autres leur réputation, et plusieurs errent désormais entre les tavernes et les routes, leur chope rarement vide et leur fierté quelque peu malmenée.

Habitués aux bagarres, ils possèdent une manière bien particulière de combattre. Leurs mouvements imprévisibles leur permettent parfois d'esquiver instinctivement les coups, tandis que l'ivrognerie semble décupler leurs capacités martiales.

Derrière leurs excès subsiste pourtant une volonté tenace de retrouver leur honneur. Certains recherchent les adversaires les plus redoutables et s'aventurent dans les contrées les plus dangereuses, espérant accomplir l'exploit qui rachètera leurs erreurs. Car un Soûlard peut perdre son or, sa maison et jusqu'à sa dernière chope, mais il lui reste toujours une réputation à reconquérir.`}
            pouvoirs={['Esquive ivre', 'Bière curative']}
          />
          <ClassCard
            image="1classe-forgeron"
            name="Forgeron" tier="Classe 1"
            description={`À Vanderroche, les plus grands héros ne sont pas toujours ceux qui reviennent victorieux du champ de bataille. Certains passent leur existence devant une enclume, à façonner des ouvrages dont la renommée traversera les siècles. Les Forgerons comptent parmi les artisans les plus respectés du peuple nain.

Héritiers d'un savoir transmis depuis des générations, ils transforment les métaux préparés par les Marteleurs en créations d'une qualité exceptionnelle. Mais le Forgeron ne se considère pas simplement comme un ouvrier habile. Il est un artiste, et ses œuvres portent autant la marque de son imagination que celle de son marteau.

Sa connaissance des équipements est d'ailleurs si complète qu'il peut manier toutes les armes et revêtir toutes les armures, y compris les imposantes armures de plates que les autres jeunes guerriers nains ne sauraient encore porter.

Les seigneurs de Vanderroche recherchent leurs services, les guerriers portent fièrement leurs créations et les apprentis rêvent un jour d'égaler leur talent. Il faut toutefois une certaine prudence lorsqu'on complimente un Forgeron sur son dernier ouvrage : il pourrait bien entreprendre d'en expliquer chaque détail, et il serait fort impoli de l'interrompre avant la fin.`}
            pouvoirs={['Port de toutes armures']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 2">
          <ClassCard
            image="2classe-marteleurdutonnerre"
            name="Marteleur du Tonnerre" tier="Classe 2"
            description={`Dans les grandes forges de Vanderroche, certains marteaux frappent avec une telle puissance que leurs échos semblent réveiller les orages emprisonnés sous la montagne. Les Marteleurs du tonnerre ont appris à canaliser la foudre au cœur même du métal, transformant un art ancestral en une maîtrise redoutable des forces célestes.

Leurs corps endurcis résistent aux décharges les plus violentes, tandis que leurs armes libèrent des éclairs capables de fendre les rangs ennemis. Sur le champ de bataille, leur arrivée s'annonce par des grondements sourds et des gerbes de lumière qui illuminent les profondeurs.

Mais c'est lorsque résonne leur Tambour des fureurs que leur véritable puissance se manifeste. Ses battements éveillent une ardeur guerrière irrésistible chez leurs compagnons, décuplant la violence de leurs assauts et transformant chaque charge en un déferlement de fer et de foudre.

Les vétérans racontent que certaines batailles furent remportées avant même que les premières lignes ne s'entrechoquent, tant le tonnerre de leurs tambours avait ébranlé le courage adverse. Car lorsque les Marteleurs du tonnerre marchent à la guerre, c'est la colère de Vanderroche qui gronde sous la terre.`}
            pouvoirs={['Résistance foudre', 'Tambour des fureurs', 'Foudre de guerre']}
          />
          <ClassCard
            image="2classe-marteleurdebrume"
            name="Marteleur de Brume" tier="Classe 2"
            description={`Dans les ateliers les plus reculés de Vanderroche, là où les vapeurs corrosives dévorent la pierre et où les métaux se dissolvent sous les yeux des imprudents, œuvrent les Marteleurs de brume. Ils ont percé les secrets des substances les plus dangereuses de la montagne, apprenant à façonner ce que d'autres n'oseraient même pas approcher.

Leur chair résiste désormais aux acides les plus virulents, et leurs attaques libèrent des substances capables de ronger les armures et de réduire les protections ennemies à néant. Lorsque leurs vapeurs se répandent sur le champ de bataille, les adversaires découvrent avec effroi que même l'acier peut devenir leur tombeau.

Leur Tambour des fureurs résonne au milieu des brumes corrosives, attisant la puissance des guerriers nains qui avancent sous son appel. Derrière le voile des vapeurs, le martèlement des armes annonce une offensive que peu de formations peuvent soutenir.

Certains récits évoquent des forteresses dont les portes furent rongées jusqu'aux gonds et des armées contraintes d'abandonner leurs remparts devant l'avancée de ces artisans de la destruction. Les Marteleurs de brume ont fait de la corrosion une arme de guerre, et nul ne sait mieux qu'eux que les ouvrages les plus solides finissent toujours par céder.`}
            pouvoirs={['Résistance acide', 'Tambour des fureurs', 'Vapeurs corrosives']}
          />
          <ClassCard
            image="2classe-briseurdefer" imageExt="png"
            name="Briseur de Fer" tier="Classe 2"
            description={`À force de manier le pic dans les galeries de Vanderroche, certains Mineurs finissent par développer une connaissance assez particulière de la résistance des matériaux. Les Briseurs de fer ont poussé cet art jusqu'à en faire une spécialité militaire, au grand désespoir des Forgerons chargés de réparer les dégâts qu'ils occasionnent.

Leur force n'a d'égale que leur précision. Ils savent où frapper une armure pour en affaiblir les jointures, comment fissurer un bouclier et de quelle manière endommager une arme pourtant réputée indestructible. Chaque coup porté menace l'intégrité de l'équipement adverse, transformant progressivement le guerrier le mieux protégé en une cible bien vulnérable.

Cette aptitude leur vaut une place de choix dans les rangs de Vanderroche, particulièrement lorsqu'il faut affronter des ennemis lourdement équipés. Peu leur importe la qualité des protections qui leur font face : tout métal possède ses faiblesses, et ils ont consacré leur existence à les découvrir.

On raconte que certains adversaires préfèrent abandonner leurs armes plutôt que de les voir réduites en morceaux. Il faut dire qu'un Briseur de fer éprouve une satisfaction toute particulière à détruire en quelques instants un ouvrage qui aura demandé des mois de travail à son créateur.`}
            pouvoirs={['Brise armure', 'Brise arme']}
          />
          <ClassCard
            image="2classe-longuebarbe"
            name="Longue Barbe" tier="Classe 2"
            description={`Chez les Nains, la longueur d'une barbe n'est pas qu'une affaire d'apparence. Elle témoigne souvent des années passées à travailler, à combattre et à accumuler un savoir que les plus jeunes auraient tort de négliger. Les Longues barbes comptent parmi ces vétérans dont l'expérience est devenue une richesse aussi précieuse que les minerais extraits des profondeurs.

Au fil de leurs aventures, ils ont appris à manier plusieurs armes, à suivre les traces des créatures les plus discrètes et à lutter contre des adversaires autrement plus imposants qu'eux. Leur polyvalence dépasse celle des combattants ordinaires, et rares sont les situations auxquelles ils ne peuvent opposer quelque connaissance acquise au cours de leur longue existence.

Leur familiarité avec les secrets de la montagne leur a également permis de développer une résistance remarquable à la magie. Ils savent graver des runes sur leurs armes et leurs pièces d'armure, perpétuant un savoir ancien qui leur offre des protections et des avantages précieux au combat.

Respectés pour leur expérience, les Longues barbes sont souvent consultés avant les expéditions les plus périlleuses. Leurs conseils ne sont pas toujours accueillis avec enthousiasme, particulièrement lorsqu'ils commencent par rappeler comment les choses se faisaient autrefois. Mais il est rare qu'un jeune Nain ayant ignoré leurs avertissements commette deux fois la même erreur.`}
            pouvoirs={['Résistance magique', 'Runes de protection']}
          />
          <ClassCard
            image="2classe-tueur"
            name="Tueur" tier="Classe 2"
            description={`Il arrive qu'un Soûlard, après avoir dilapidé sa fortune et compromis son honneur, décide qu'il est temps de donner un nouveau sens à son existence. Les Tueurs empruntent une voie périlleuse : celle qui consiste à affronter les créatures les plus redoutables du monde, dans l'espoir d'y trouver la gloire ou une fin digne de leur peuple.

Loin des tavernes de Vanderroche, ils deviennent de redoutables chasseurs. Ils apprennent à reconnaître les traces de leurs proies, à se déplacer discrètement et à préparer des embuscades dont même les bêtes les plus rusées peinent à se tirer. Leur connaissance des territoires sauvages n'a d'égale que leur obstination à poursuivre un adversaire, aussi dangereux soit-il.

La hache demeure leur arme de prédilection, et ils ont développé une technique particulière leur permettant de s'en servir autant pour se protéger que pour frapper.

Les Tueurs sont accueillis avec un mélange d'admiration et d'inquiétude lorsqu'ils reviennent à Vanderroche. Leurs exploits alimentent les conversations, mais leurs anciennes blessures rappellent le prix de cette existence. Plusieurs ont déjà vaincu des monstres que des compagnies entières refusaient d'approcher. Pourtant, il semble toujours leur manquer quelque chose, puisqu'à peine revenus, ils cherchent déjà une proie plus terrible que la précédente.`}
            pouvoirs={['Pistage', 'Parade à la hache']}
          />
          <ClassCard
            image="2classe-poseurderunes"
            name="Poseur de Runes" tier="Classe 2"
            description={`Il existe à Vanderroche des armes dont la réputation ne tient pas uniquement à la qualité de leur acier. Certaines brûlent leurs ennemis, d'autres résistent aux sortilèges ou possèdent un tranchant qu'aucune pierre ne saurait émousser. Ces merveilles sont souvent l'œuvre des Poseurs de runes, des Forgerons qui ont consacré leur talent à l'étude d'un art aussi ancien que jalousement préservé.

Leur métier exige une connaissance remarquable des métaux, mais également une patience et une précision peu communes. Une rune mal tracée peut perdre toute son efficacité, tandis qu'une inscription judicieusement placée transforme une simple lame en un ouvrage digne des plus grands guerriers.

Les combattants recherchent leurs services avant les expéditions périlleuses, tandis que les collectionneurs et les nobles rivalisent pour acquérir leurs créations. Il n'est d'ailleurs pas rare qu'un Poseur de runes consacre davantage de temps à perfectionner une inscription qu'à forger l'objet destiné à la recevoir.

Malgré leur renommée, ces artisans savent que les secrets de leur discipline dépassent largement les connaissances d'un seul Nain. Avares de leurs secrets, ils sauront immédiatement reconnaître un confrère, avec lequel ils pourront passer des lunes entières à perfectionner leur art, non sans une saine pointe de compétition.`}
            pouvoirs={['Gravure de runes sur armes et armures']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 3">
          <ClassCard
            image="3classe-canonnierdutonnerre" imageExt="png"
            name="Canonnier du Tonnerre" tier="Classe 3"
            description={`Les Nains ont toujours entretenu une certaine fierté à l'égard de leurs inventions, mais peu d'entre elles suscitent autant d'admiration que leurs célèbres canons. Le Canonnier du tonnerre représente l'aboutissement de générations d'expérimentations, dont plusieurs se sont malheureusement terminées par la disparition prématurée de leurs inventeurs.

Autrefois Marteleur, il connaît les métaux, leurs résistances et les contraintes auxquelles ils peuvent être soumis. Sa maîtrise de la foudre lui a également appris à respecter les forces qu'il manipule. Car faire exploser une charge est à la portée de plusieurs, mais savoir précisément où, quand et comment le faire exige un talent autrement plus rare.

Devenu maître de l'artillerie, il peut manœuvrer les plus imposantes pièces de Vanderroche et en exploiter toute la puissance. Ses connaissances lui valent une place privilégiée auprès des commandants militaires, qui savent qu'un seul de ses tirs peut accomplir ce que des centaines de soldats ne pourraient obtenir au terme d'un long siège.

Sa réputation est telle qu'on lui confie volontiers la destruction des fortifications les plus résistantes. Il faut dire que lorsqu'un Canonnier du tonnerre affirme pouvoir abattre une muraille, peu de Nains songent à le contredire. Ils préfèrent généralement s'éloigner et profiter du spectacle.`}
            pouvoirs={['Artillerie lourde', 'Canon à foudre']}
          />
          <ClassCard
            image="3classe-canonnierdebrume" imageExt="png"
            name="Canonnier de Brume" tier="Classe 3"
            description={`Il faut une certaine audace pour consacrer sa vie aux substances capables de dissoudre le métal et la pierre. Il en faut davantage encore pour les côtoyer quotidiennement et espérer atteindre un âge respectable. Le Canonnier de brume a non seulement survécu à ces expériences, mais il en a tiré une connaissance qui lui vaut aujourd'hui une place parmi les plus grands spécialistes de Vanderroche.

Issu des Marteleurs de brume, il connaît les propriétés des minerais, des acides et des alliages les plus délicats. Cette expertise lui permet de comprendre les mécanismes de l'artillerie avec une précision remarquable. Il sait qu'un canon mal entretenu, une pièce défectueuse ou une charge mal calculée peut se révéler plus dangereuse pour ses servants que pour l'ennemi.

Son habileté à manœuvrer ces machines de guerre lui a valu le respect des ingénieurs et des officiers. Patient dans ses préparatifs, il étudie les distances, les angles et les faiblesses des fortifications avant d'ordonner le tir. Sa réputation repose moins sur le nombre de projectiles employés que sur les résultats obtenus.

Les plus anciens artilleurs affirment qu'il suffit parfois d'un seul coup pour reconnaître la main d'un véritable maître. Quant aux ennemis qui ont eu l'occasion de vérifier cette affirmation, bien peu ont conservé des remparts suffisamment intacts pour en discuter.`}
            pouvoirs={['Artillerie lourde', 'Canon à acide']}
          />
          <ClassCard
            image="3classe-nainguerrier" imageExt="png"
            name="Nain Guerrier" tier="Classe 3"
            description={`Les annales de Vanderroche regorgent de récits de batailles où quelques Nains tinrent tête à des armées entières. Parmi ces héros, le Nain guerrier occupe une place à part. Sa maîtrise des armes, sa force et son endurance ont atteint un degré tel que les plus grands combattants de Tyleene eux-mêmes hésitent à croiser le fer avec lui.

Autrefois Briseur de fer, il a consacré sa vie à comprendre les faiblesses des armes et des armures. Il possède désormais un talent que bien peu peuvent expliquer : les coups qui devraient l'abattre se retournent contre leurs auteurs. Les adversaires les plus puissants découvrent ainsi, souvent à leurs dépens, que leur propre force peut devenir leur pire ennemie.

Certains récits lui attribuent également le pouvoir de faire surgir de formidables enclumes au-dessus de ses adversaires, comme si les forges de Vanderroche elles-mêmes venaient lui prêter main-forte. Les plus vieux guerriers jurent avoir vu des champions ennemis disparaître sous ces masses de métal, sans jamais comprendre d'où elles provenaient.

Son nom figure parmi les plus illustres défenseurs du peuple de Yuro. On lui confie les passages qu'aucune armée ne doit franchir et les combats dont dépend parfois la survie du royaume. Quant aux ennemis assez téméraires pour le défier, ils découvrent qu'il existe une différence considérable entre parvenir à frapper un Nain guerrier et réussir à le vaincre.`}
            pouvoirs={['Réflexion des dégâts', 'Enclume céleste']}
          />
          <ClassCard
            image="3classe-nainblanc"
            name="Nain Blanc" tier="Classe 3"
            description={`Il existe à Vanderroche des anciens dont les paroles ont davantage de poids que les décrets des seigneurs. Le Nain blanc appartient à cette poignée de sages dont les exploits, les connaissances et la longévité ont fait des figures presque sacrées. Sa barbe immaculée témoigne d'une existence consacrée à son peuple, et certains prétendent que Yuro lui-même prête une oreille attentive à ses conseils.

Là où tant de Nains se laissent emporter par leur orgueil, il a appris à maîtriser ses passions. Son calme ne connaît guère d'égal, et les querelles les plus anciennes trouvent parfois leur dénouement dans quelques paroles soigneusement choisies. Rois et guerriers recherchent son jugement, conscients que la sagesse d'un tel être ne s'acquiert ni par les titres ni par les richesses.

Mais derrière cette sérénité se cache une puissance que peu osent défier. Son toucher peut glacer la chair, ses armes portent la morsure du froid et, lorsqu'il invoque la grêle mythique, une tempête implacable s'abat sur ses ennemis. Même les plus farouches adversaires de Vanderroche ont appris à redouter cet ancien qui ne semble jamais céder à la colère.

Les légendes racontent qu'un Nain blanc peut traverser les plus terribles batailles sans jamais hausser la voix. Il faut dire qu'après avoir vu tomber tant de royaumes et s'éteindre tant de générations, il sait qu'il n'est nul besoin de s'emporter pour faire trembler le monde.`}
            pouvoirs={['Toucher glacial', 'Grêle mythique']}
          />
          <ClassCard
            image="3classe-pyromancien"
            name="Pyromancien" tier="Classe 3"
            description={`Il serait bien imprudent de croire que la sagesse impose nécessairement le calme et la retenue. Le Pyromancien en est la preuve vivante. Aussi érudit que les plus vénérables Longues barbes, il possède un tempérament ardent, une volonté inflexible et une fâcheuse tendance à faire connaître son désaccord avant même que son interlocuteur ait terminé sa phrase.

Son savoir des profondeurs et des anciennes traditions naines lui a permis de percer les secrets du feu. Les flammes qui consumeraient un guerrier ordinaire ne lui causent que peu de dommages, tandis que ses propres attaques atteignent une intensité que les maîtres des fournaises eux-mêmes contemplent avec admiration. Lorsqu'il est encerclé, il peut libérer un formidable globe de déflagration, embrasant tout ce qui l'entoure.

Malgré son caractère emporté, son expérience et ses connaissances lui valent une place parmi les figures les plus respectées de Vanderroche. Ses conseils sont précieux, ses jugements souvent éclairés, même si la manière dont il les exprime laisse parfois à désirer. Les chefs de clan ont appris qu'il est généralement préférable de supporter ses éclats de voix plutôt que de se priver de son savoir.

Car si le Nain blanc enseigne que la patience peut venir à bout des plus grandes difficultés, le Pyromancien rappelle volontiers qu'un bon brasier permet parfois d'obtenir le même résultat beaucoup plus rapidement.`}
            pouvoirs={['Résistance feu', 'Globe de déflagration']}
          />
          <ClassCard
            image="3classe-sanguinaire"
            name="Sanguinaire" tier="Classe 3"
            description={`Certains Tueurs finissent par comprendre qu'aucun exploit ne suffira à effacer leurs anciennes fautes. Plutôt que de renoncer à leur quête, ils s'abandonnent entièrement à la violence. Ainsi naît le Sanguinaire, un guerrier dont la réputation inspire autant de crainte à ses ennemis que d'inquiétude à ses propres compagnons.

Il ne cherche plus à déjouer son adversaire ni à ménager ses forces. Ses coups de hache ouvrent des blessures terribles, provoquant des saignements et des hémorragies capables d'épuiser les créatures les plus robustes. À mesure que le combat se prolonge, sa fureur semble grandir, comme si chaque blessure reçue ne faisait qu'attiser sa volonté de poursuivre le massacre.

C'est lorsqu'on croit enfin l'avoir terrassé que tout bascule. Animé d'une rage primitive, il déploie une puissance que nul guerrier raisonnable ne saurait égaler. Les récits abondent de Sanguinaires ayant poursuivi le combat alors que leurs blessures auraient dû les condamner depuis longtemps. Plusieurs ne survivent d'ailleurs pas à leurs propres victoires.

À Vanderroche, leurs noms figurent parmi ceux des plus grands combattants du royaume. Pourtant, les rares Sanguinaires qui reviennent de leurs expéditions accueillent les honneurs avec une indifférence troublante. Il semble que les louanges des vivants ne puissent satisfaire des Nains qui, depuis bien longtemps, n'ont cessé d'appeler la mort.`}
            pouvoirs={['Hémorragie', 'Rage ultime']}
          />
          <ClassCard
            image="3classe-championtueur" imageExt="png"
            name="Champion Tueur" tier="Classe 3"
            description={`Il est des Nains dont les exploits suffiraient à remplir des dizaines de sagas. Des guerriers qui ont terrassé des dragons, vaincu des monstres ancestraux et survécu à des affrontements dont les plus grands héros ne seraient jamais revenus. Le Champion tueur appartient à cette catégorie de légendes vivantes, bien qu'il soit généralement le dernier à s'émerveiller de ses propres accomplissements.

Il a fait de la chasse aux créatures légendaires la raison même de son existence. Chaque victoire nourrit une ambition nouvelle, chaque adversaire vaincu lui donne envie d'en affronter un plus terrible encore. Là où d'autres prendraient leur retraite couverts de gloire, il repart sur les routes, convaincu que son plus grand exploit reste à accomplir. Vous le verrez quitter les célébrations données en son honneur pour poursuivre une rumeur concernant quelque monstre oublié.

Les dépouilles de ses victimes lui permettent de confectionner des pièces d'armure aux propriétés exceptionnelles. Écailles de wyvernes ou os de démons deviennent autant de trophées que les plus grands seigneurs de Vanderroche lui envient.

Son peuple admire son courage, mais les anciens reconnaissent dans cette quête une folie qu'aucune victoire ne semble pouvoir apaiser. Le Champion tueur a depuis longtemps reconquis l'honneur qu'il croyait perdu, sans jamais parvenir à s'en convaincre. On raconte que certains ont fini par trouver la mort en affrontant des créatures que nul autre Nain n'aurait osé provoquer. Quant aux autres, ils poursuivent leurs exploits avec la même ardeur, persuadés qu'après tant de victoires, la prochaine sera enfin celle qui leur apportera satisfaction.`}
            pouvoirs={['Armure de trophées légendaires', 'Chasse aux créatures épiques']}
          />
          <ClassCard
            image="3classe-maitredesrunes"
            name="Maître des Runes" tier="Classe 3"
            description={`Les plus grandes œuvres de l'artisanat nain traversent les siècles, survivent aux royaumes et deviennent parfois l'objet de légendes. Derrière ces trésors se trouve souvent la main d'un Maître des runes, un artisan dont le talent a atteint des sommets que même les plus illustres Forgerons ne peuvent qu'espérer approcher.

Après une vie consacrée à l'étude des métaux et des inscriptions anciennes, il maîtrise désormais les runes majeures, dont les pouvoirs défient les connaissances des plus grands érudits. Certaines peuvent ramener les morts à la vie, d'autres faire disparaître un adversaire ou transformer sa chair en pierre. Entre ses mains, une simple pièce d'acier peut devenir le réceptacle de forces capables de changer le cours d'une bataille, voire le destin d'un royaume.

Sa renommée lui vaut une admiration presque religieuse. Les apprentis étudient ses créations, les nobles recherchent ses faveurs et les artisans les plus expérimentés viennent solliciter ses conseils. Pourtant, il demeure profondément attaché à son atelier, où chaque nouvel ouvrage représente l'occasion de perfectionner un art auquel il a consacré son existence.

On raconte que certains Maîtres des runes ont refusé des fortunes et fait patienter des rois pour achever une simple inscription. Il faut dire qu'à leurs yeux, les couronnes changent de tête bien plus souvent qu'une rune correctement gravée ne perd son pouvoir.`}
            pouvoirs={['Runes majeures', 'Résurrection runique', 'Pétrification']}
          />
        </ClassAccordion>

      </div>
    </InnerLayout>
  )
}
