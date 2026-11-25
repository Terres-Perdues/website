import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import ClassAccordion from '@/components/ClassAccordion'
import Image from 'next/image'
import ImageLightbox from '@/components/ImageLightbox'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Morts-vivants - Terres Perdues' }

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
            Les Morts-Vivants doivent leur existence à Shakoyolin, dieu de l&apos;ombre et de la mort,
            dont la volonté a donné naissance à l&apos;Empire funeste.
          </p>
        }
        rightText={
          <>
            <p>
              Arrachés au repos éternel, ils poursuivent une seconde existence sous le joug de leur
              créateur, liés à une puissance dont ils ne peuvent véritablement s&apos;affranchir.
            </p>
            <p style={{ marginTop: '1em' }}>
              Leurs formes varient selon la nature de leur réanimation. Certains ne sont plus que des
              squelettes animés, tandis que d&apos;autres conservent des chairs décomposées ou prennent
              la forme de spectres. Leur conscience diffère également. Plusieurs ne possèdent que des
              souvenirs épars, alors que d&apos;autres retrouvent progressivement leur personnalité,
              leurs connaissances et les ambitions de leur existence passée.
            </p>
          </>
        }
        extraText={
          <div style={{ columns: '2', columnGap: '3rem' }}>
            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Des vivants de toutes les races rejoignent parfois Brujamonte, attirés par les promesses
                de puissance et d&apos;immortalité.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Tous demeurent cependant dépendants de la noirceur, une substance mystérieuse recueillie
                sous forme de fragments dans les puits des âmes. Cette énergie nourrit leurs pouvoirs,
                restaure leurs corps et imprègne les territoires où ils peuvent subsister. Loin de son
                influence, leur existence devient précaire. Cette dépendance les condamne à une expansion
                permanente.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Société et traditions</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                La civilisation des Morts-Vivants repose sur une obéissance absolue à Shakoyolin et une
                discipline qui imprègne chaque aspect de leur existence. L&apos;individu n&apos;y possède
                de valeur qu&apos;à travers sa contribution à l&apos;Empire. Soldats, artisans,
                administrateurs et nécromanciens remplissent les fonctions qui leur sont assignées, au
                service d&apos;une œuvre dont nul ne connaît véritablement les limites.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Brujamonte est une civilisation austère, mais remarquablement organisée. La cité est
                dominée par des forteresses monumentales, des nécropoles sophistiquées et de vastes
                ouvrages de pierre noire. Les traditions y célèbrent les conquêtes, le devoir et la
                fidélité envers Shakoyolin. Les exploits individuels sont reconnus, mais toujours
                considérés comme des victoires de l&apos;Empire plutôt que comme des accomplissements
                personnels.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Les Morts-Vivants accordent une importance considérable au rang et à la compétence. Un
                commandant habile ou un administrateur efficace peut gravir les échelons de la hiérarchie,
                tandis que l&apos;incompétence et la désobéissance sont sévèrement punies.
                L&apos;ambition personnelle demeure tolérée lorsqu&apos;elle sert les desseins de
                Shakoyolin.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Malgré cette uniformité apparente, certains Morts-Vivants conservent une individualité
                marquée. Ceux qui retrouvent leurs souvenirs peuvent développer leurs propres convictions,
                parfois en contradiction avec les devoirs qui leur sont imposés. Rares sont toutefois ceux
                qui osent défier ouvertement l&apos;ordre établi.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Pouvoir et politique</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Toute autorité à Brujamonte découle de Shakoyolin. Sa volonté gouverne l&apos;Empire à
                travers une hiérarchie rigoureuse de commandants ou de gouverneurs chargés d&apos;assurer
                l&apos;exécution de ses desseins. Les décisions sont prises selon une logique froide, où
                l&apos;efficacité et la pérennité de l&apos;Empire priment sur toute autre considération.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Cette organisation constitue leur plus grande force. Chaque territoire conquis est
                méthodiquement recensé, administré et intégré à l&apos;appareil impérial. Les ressources
                sont réparties selon les besoins. Rien n&apos;est laissé au hasard lorsque la survie et
                l&apos;expansion de l&apos;Empire sont en jeu. Les légions incarnent cette rigueur.
                Organisées selon une chaîne de commandement inflexible, elles avancent avec une discipline
                terrifiante. Leurs soldats ne connaissent ni la fatigue ni la peur qui affligent les
                armées vivantes.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Les Morts-Vivants ne recherchent pas la cruauté pour elle-même. Une population peut être
                épargnée si sa soumission sert les intérêts de Brujamonte, tout comme une cité peut être
                anéantie si sa résistance représente un obstacle trop coûteux. Chaque décision répond à
                une logique implacable, dénuée de compassion comme de haine.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Religion et croyances</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Shakoyolin occupe une place absolue dans l&apos;existence des Morts-Vivants. Il est leur
                créateur et la puissance qui maintient leur civilisation en vie. Son culte ne repose pas
                uniquement sur la foi, mais sur une dépendance profonde envers sa volonté. Les Morts-Vivants
                lui vouent une dévotion constante, exprimée à travers les conquêtes et l&apos;obéissance.
                Les grandes cérémonies célèbrent son règne, tandis que les victoires militaires sont
                consacrées à sa gloire.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Cette soumission prend néanmoins différentes formes. Certains Morts-Vivants éprouvent une
                ferveur sincère, reconnaissants d&apos;avoir reçu une seconde existence. D&apos;autres
                obéissent par crainte, par habitude ou parce qu&apos;ils savent leur survie indissociable
                de la puissance divine.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Shakoyolin promet un monde affranchi des faiblesses de la condition mortelle, où la mort
                ne mettrait plus fin aux ambitions et aux accomplissements. Cette vision d&apos;un règne
                éternel nourrit les conquêtes de Brujamonte, même si les moyens employés pour y parvenir
                imposent un lourd tribut aux peuples vivants.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Relations avec les autres peuples</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                Les Morts-Vivants entretiennent avec les autres civilisations des relations dictées par les
                intérêts de Brujamonte. Leur diplomatie est directe, leurs engagements rigoureux et leur
                patience presque sans limites.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Humains -</strong> Ils sont aussi honnis que craints. Le culte de Caria constitue
                l&apos;antithèse absolue des enseignements de Shakoyolin, tandis que l&apos;Empire humain
                représente leur plus grande menace. Leur rivalité dépasse les frontières : chacun voit dans
                l&apos;autre une négation de sa propre existence. Certains Humains ont pourtant fui leurs
                semblables pour trouver refuge à Brujamonte, alimentant la méfiance entre les deux peuples.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Elfes -</strong> Ils partagent avec les Morts-Vivants une vision du temps qui
                dépasse celle des autres peuples. Mais là où les Elfes cherchent à préserver
                l&apos;équilibre du monde, les Morts-Vivants aspirent à briser le cycle naturel pour
                instaurer un règne éternel. Malgré cette opposition, ils reconnaissent, voire jalousent,
                la maîtrise exceptionnelle des arcanes elfiques.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Nains -</strong> Les Nains éprouvent une profonde aversion envers les Morts-Vivants,
                dont l&apos;existence constitue une profanation du repos éternel et du sacré. Cette
                hostilité trouve peu d&apos;écho à Brujamonte. Les Morts-Vivants saluent leur résistance
                légendaire et la solidité de leurs forteresses, mais ne les considèrent comme aucun obstacle
                dans la poursuite de leurs ambitions.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Drows -</strong> Les Drows comptent parmi les alliés privilégiés de Brujamonte.
                Les Morts-Vivants reconnaissent leur intelligence et leurs talents indispensables, mais
                supportent difficilement leur arrogance et leur tendance à les traiter comme de simples
                serviteurs. Leur franchise et leur rigueur s&apos;accordent mal avec les intrigues des
                grandes familles drows. Malgré ces tensions, les deux peuples savent préserver une alliance
                favorable à leurs ambitions.
              </p>
            </section>

            <section style={{ breakInside: 'avoid' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Ambitions et objectifs</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                L&apos;Empire de Brujamonte ne connaît ni repos ni frontières définitives. Sa survie exige
                un approvisionnement toujours croissant en ressources, tandis que la volonté de Shakoyolin
                impose une expansion sans fin. Chaque conquête permet de soutenir les légions,
                d&apos;étendre l&apos;influence de la noirceur et de préparer les campagnes suivantes.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Cette progression ne relève ni de la vengeance ni d&apos;un goût particulier pour la
                destruction. Elle répond à une nécessité que les Morts-Vivants considèrent comme
                incontestable. Les peuples qui acceptent leur domination peuvent être intégrés à
                l&apos;ordre impérial. Ceux qui s&apos;y opposent deviennent des obstacles à éliminer.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Pour les serviteurs de Shakoyolin, la paix véritable ne pourra exister que lorsque toute
                résistance aura disparu et que l&apos;ensemble de Tylene sera soumis à un même règne.
                Leur Empire avance ainsi avec une patience inexorable, convaincu que le temps lui-même
                travaille à sa victoire.
              </p>
            </section>
          </div>
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
            image="1-squelette-3" imageExt="webp"
            name="Squelette" tier="Classe 1"
            description={`Les squelettes sont des morts arrachés au repos par la nécromancie. Relevés par une liche, un nécromancien ou une autre puissance capable de commander aux morts, ils reviennent avec une conscience imparfaite, faite de volontés, d'instincts et parfois de fragments de ce qu'ils furent autrefois.

Dépouillés de leur chair, ils ne sont pourtant pas aussi fragiles que leur apparence pourrait le laisser croire. La noirceur qui les anime renforce leurs os et leur confère une résistance comparable à une véritable armure. Les lames et les armes perforantes perdent également une partie de leur efficacité contre un corps qui n'a plus ni organes ni chair à protéger.

Mais leur retour n'est que le commencement. À mesure que leur existence se prolonge, certains cherchent à donner un nouveau sens à ce qu'ils sont devenus. Dans les légions de Brujamonte, ils peuvent trouver un rang, une fonction et une nouvelle identité au service de Shakoyolin.

D'autres ressentent plutôt le manque laissé par leur ancienne enveloppe. Pour eux commence alors une quête plus viscérale : retrouver la chair, et avec elle peut-être une part de l'être qu'ils étaient autrefois.`}
            pouvoirs={[
              'Parrying osseux',
            ]}
          />
          <ClassCard
            image="1-fantome-3" imageExt="webp"
            name="Fantôme" tier="Classe 1"
            description={`Les Fantômes sont des âmes dont la mort n'a pas entièrement interrompu l'existence. Certains conservent leurs souvenirs, leurs habitudes et jusqu'aux préoccupations qui furent les leurs de leur vivant. La véritable nature de leur condition ne leur apparaît pas toujours immédiatement et chacun peut mettre un temps différent à comprendre ce qu'il est devenu.

Leur corps n'est désormais qu'une manifestation de l'âme. Les armes ordinaires les atteignent difficilement et ils peuvent, pendant quelques instants, disparaître entièrement du regard des vivants. Même lorsqu'ils souhaitent agir sur le monde matériel, ils doivent apprendre à le faire autrement, notamment en projetant l'ectoplasme dont leur forme est constituée.

Avec le temps viennent toutefois les questions auxquelles ils ne peuvent éternellement échapper. Les incohérences s'accumulent, leurs nouveaux pouvoirs se révèlent et les souvenirs du passé prennent un autre sens.

Tôt ou tard, chaque Fantôme doit comprendre la vérité sur son existence. Ce qu'il choisira d'en faire déterminera alors ce qu'il deviendra.`}
            pouvoirs={[
              'Immunité partielle aux masses',
              "Invisibilité",
              "Jet d'ectoplasme",
            ]}
          />
          <ClassCard
            image="1-noble-4" imageExt="JPG"
            name="Noble" tier="Classe 1"
            description={`Les Nobles de Brujamonte possèdent encore ce que presque tous les serviteurs de Shakoyolin ont perdu : un cœur qui bat.

Nul ne les a arrachés à une tombe. Ils ont franchi volontairement les frontières de Brujamonte et accepté de vivre parmi les morts. Pouvoir, savoir interdit, fascination pour Shakoyolin ou rejet du monde qu'ils abandonnent : les raisons qui les conduisent jusque-là leur appartiennent. Il faut néanmoins une ambition peu commune pour chercher la faveur du dieu de la Mort avant même que son heure soit venue.

Car Shakoyolin accueille volontiers ceux qui viennent à lui. Ses faveurs sont réelles, tout comme les pouvoirs qu'il peut accorder. Mais ceux qui s'engagent sur cette voie découvrent parfois trop tard qu'il est plus facile d'attirer son regard que de s'en détourner.

À Brujamonte, certains Nobles finissent par lui abandonner jusqu'aux derniers vestiges de leur mortalité. D'autres préfèrent étudier les secrets de la mort et apprendre à commander aux êtres qui la peuplent.

Tous sont pourtant entrés au royaume des morts encore vivants. C'est peut-être le plus grand privilège que Shakoyolin leur accorde. Ou la première chose qu'il leur prendra.`}
            pouvoirs={[
              'Animation de sans-tête, squelette ou zombie',
            ]}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 2">
          <ClassCard
            image="2-wight-3" imageExt="JPG"
            name="Wight" tier="Classe 2"
            description={`Les Wights comptent parmi les officiers qui donnent aux légions de Brujamonte leur discipline et leur cohésion. Élevées au-dessus des simples soldats, elles mènent les morts au combat et veillent à ce que les rangs continuent d'avancer là où une armée de vivants aurait depuis longtemps hésité.

La magie qui les anime a profondément renforcé leurs os. Sous son influence, leur squelette devient une armure presque impénétrable, capable d'encaisser des coups qui fracasseraient le corps d'un autre mort. À cette résistance s'ajoute une maîtrise du combat acquise au service des légions. Les Wights excellent à parer les attaques dirigées contre elles et savent profiter d'une ouverture pour désarmer leur adversaire, rendant leur défense particulièrement difficile à percer.

Mais devenir Wight signifie aussi accepter pleinement sa nouvelle existence, soumise complètement à Shakoyolin. Leur ancienne existence s'efface peu à peu derrière leur fonction, leur rang et leur devoir envers Brujamonte.

Elles apprennent ainsi à commander les morts, à maintenir leurs formations et à faire agir la légion comme un seul corps. Pour les légions de Brujamonte, les Wights sont plus que des combattantes. Elles sont celles autour desquelles les morts s'organisent, les officières dont les ordres continuent de résonner longtemps après que les cris des vivants se sont tus.`}
            pouvoirs={[
              "Désarmement de l'ennemi",
              'Déviation des coups',
            ]}
          />
          <ClassCard
            image="2-necrophage-3" imageExt="JPG"
            name="Nécrophage" tier="Classe 2"
            description={`Les Nécrophages sont des morts qui refusent d'accepter ce qu'ils sont devenus. Sous les lambeaux de chair qui recouvrent encore leurs os apparaissent des organes exposés et les vestiges d'un corps qu'ils cherchent désespérément à reconstruire. Là où les Wights embrassent leur nouvelle existence, eux s'accrochent au souvenir de celle qu'ils ont perdue.

Cette obsession nourrit une relation tourmentée avec Shakoyolin. Ils lui doivent la puissance qui anime leurs os et leur confère une résistance presque impénétrable. Pourtant, chaque don reçu leur rappelle également celui qu'ils tiennent responsable de leur condition. Ils peuvent ainsi éprouver autant de reconnaissance envers leur créateur que de haine envers lui - et envers la créature qu'ils aperçoivent désormais dans leur propre reflet.

La chair des vivants devient pour eux bien davantage qu'une nourriture. En la dévorant, ils peuvent reconstruire rapidement leurs tissus et refermer des blessures qui auraient abattu d'autres morts. Les plus terribles peuvent même arracher le cœur encore battant d'un adversaire et s'approprier l'énergie vitale qu'il contient.

Chaque morceau de chair consommé semble les rapprocher de l'être qu'ils furent autrefois. Pourtant, plus ils cherchent à redevenir humains, plus les moyens nécessaires pour y parvenir les éloignent de leur humanité.`}
            pouvoirs={[
              'Parrying osseux amélioré',
              'Dévore de la chaire fraîche pour soigner ses blessures',
            ]}
          />
          <ClassCard
            image="2-spectre-3" imageExt="webp"
            name="Spectre" tier="Classe 2"
            description={`Les Spectres ont compris qu'ils étaient morts, mais cette révélation ne les a pas conduits vers la soumission. Elle a plutôt éveillé leur curiosité envers cette existence qui échappe désormais aux règles des vivants.

Ils apprennent à maîtriser leur forme spectrale et découvrent qu'elle résiste non seulement aux armes, mais également à plusieurs forces élémentaires. Ils conservent la faculté de disparaître brièvement et de projeter leur ectoplasme, mais leur compréhension de leur condition leur ouvre une possibilité autrement plus troublante.

Libérés d'un véritable corps, les Spectres peuvent pénétrer celui d'un vivant et en prendre possession. Pour quelques instants, ils retrouvent alors une enveloppe de chair, des sens et une présence dans le monde qu'ils avaient perdus avec la mort.

Certains y voient une nouvelle forme d'existence. D'autres commencent plutôt à comprendre que l'absence de corps pourrait ne pas être une faiblesse, mais le premier pas vers des pouvoirs que les vivants ne pourront jamais posséder.`}
            pouvoirs={[
              'Touche spectrale',
              'Adaptation spectrale',
              'Invisibilité amélioré',
            ]}
          />
          <ClassCard
            image="2-revenant-3" imageExt="JPG"
            name="Revenant" tier="Classe 2"
            description={`Les Revenants ont cessé de chercher une explication à leur présence parmi les morts. Ils connaissent désormais la vérité et ont choisi de l'accepter. Dans cette seconde existence, Shakoyolin leur offre ce que la mort leur avait retiré : une raison de continuer.

Ils deviennent ses yeux et ses messagers, des présences silencieuses capables de parcourir les terres des vivants sans jamais véritablement leur appartenir. Leur maîtrise du monde spectral leur permet de disparaître pendant de longues périodes, de suivre une proie sans être vus et de surgir là où nul ne les attendait.

Cette proximité avec Shakoyolin transforme peu à peu leur rapport à la mort. Ils ne la craignent plus et ne la regrettent plus. Ils commencent plutôt à comprendre qu'ils peuvent en devenir les instruments.

Dans les récits de Brujamonte, certains Revenants finissent ainsi par acquérir une réputation qui dépasse leur propre nom. Car lorsqu'une âme morte apprend à traquer les vivants sans jamais être vue, il ne lui reste qu'un pas à franchir pour devenir quelque chose que même les vivants racontent à voix basse.`}
            pouvoirs={[
              'Invisibilité amélioré',
              "Arme de classe ignore l'armure",
            ]}
          />
          <ClassCard
            image="2-damne-3" imageExt="JPG"
            name="Damné" tier="Classe 2"
            description={`Les Damnés se sont avancés là où peu de vivants osent aller. Ils ne se contentent plus de servir Shakoyolin : ils lui abandonnent peu à peu leur âme, convaincus qu'au terme de cette offrande les attend l'un des plus grands présents que puisse convoiter un mortel : vaincre la mort elle-même.

Déjà, les faveurs du dieu transforment leur existence. Ils peuvent arracher la force vitale d'un adversaire pour nourrir la leur et abandonner leur forme humaine pour emprunter celle d'autres créatures. Une lumière maudite émane désormais d'eux, signe que quelque chose de plus ancien et de plus sombre s'est installé derrière leur enveloppe mortelle.

Mais chaque pouvoir reçu réclame davantage. Un souvenir, une parcelle d'humanité, un fragment d'âme : le chemin vers l'immortalité se paie morceau par morceau. Les Damnés avancent malgré tout, car au bout de cette voie se trouve la promesse de renaître Vampires, affranchis du temps et de la mort.

Ils sont nombreux à entendre cet appel. Beaucoup se croient assez forts pour atteindre son terme. Brujamonte est remplie des vestiges de ceux qui se trompaient. Shakoyolin accepte volontiers les sacrifices. Il accorde beaucoup plus rarement la récompense.`}
            pouvoirs={[
              'Aura de lumière maudite',
              'Drain de vie',
              'Polymorph créatures niveau 1',
            ]}
          />
          <ClassCard
            image="2-necromancien-3" imageExt="JPG"
            name="Nécromancien" tier="Classe 2"
            description={`Les Nécromanciens ont fait de la mort un objet d'étude. Là où les autres mortels l'acceptent, la craignent ou la vénèrent, eux cherchent à la comprendre. Ils consacrent des années aux dépouilles, aux âmes et aux secrets de Shakoyolin, avec une obsession qui finit souvent par éclipser tout le reste.

Leurs recherches les entraînent vers des connaissances que peu d'érudits accepteraient même de consigner. Ils apprennent à maudire les vivants, à façonner les os par la magie et à rappeler des créatures mineures d'entre les morts pour les soumettre à leur volonté. Chaque expérience réussie ouvre la porte à de nouvelles questions, et chaque réponse semble les entraîner un peu plus profondément dans leur art.

À Brujamonte, cette obsession est rarement condamnée. Shakoyolin semble même regarder avec intérêt ceux qui consacrent leur existence à percer les mécanismes de son domaine. Certains Nécromanciens finissent ainsi par connaître la mort avec une intimité que même les laquais de Shakoyolin ne possèdent pas.

Mais leurs recherches les conduisent inévitablement vers une dernière question. Après avoir appris à rappeler les morts, à manipuler leurs restes et à contraindre leurs âmes, pourquoi devraient-ils accepter qu'un jour leur propre existence prenne fin?`}
            pouvoirs={[
              'Sorts de nécromancie de base',
            ]}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 3">
          <ClassCard
            image="3-seigneur-3" imageExt="JPG"
            name="Seigneur des Ténèbres" tier="Classe 3"
            description={`Le Seigneur des ténèbres compte parmi les plus terribles serviteurs de Shakoyolin. Général suprême des légions de Brujamonte, il ne commande plus quelques rangs de morts : des armées entières avancent sous ses ordres. Drapé d'une armure d'ébène et monté sur son destrier, son apparition suffit parfois à annoncer la chute d'une cité.

La noirceur imprègne désormais son existence. Là où il avance, la lumière elle-même semble reculer. Il peut étendre autour de lui des zones de ténèbres où ses ennemis perdent leurs repères, tandis qu'une aura obscure accompagne chacun de ses pas. Ceux qui osent l'approcher doivent lutter contre une peur qui dépasse souvent leur propre volonté.

Mais sa véritable puissance demeure celle du commandement. Il est l'aboutissement de la discipline des légions mortes, celui auquel Wights et soldats obéissent lorsque Shakoyolin exige la conquête. Sous son regard, les morts avancent avec une cohésion qui transforme une horde en une armée.

Rares sont les êtres à recevoir autant de pouvoir de Shakoyolin et plus rares encore sont ceux qui survivent assez longtemps pour porter ce titre. Lorsque le Seigneur des ténèbres prend lui-même la tête d'une légion, ce n'est plus une bataille qui s'annonce. C'est Brujamonte qui vient réclamer de nouvelles terres.`}
            pouvoirs={[
              'Aura de peur',
              'Appel à la nuit',
            ]}
          />
          <ClassCard
            image="3-lamesang-3" imageExt="JPG"
            name="Lame de Sang" tier="Classe 3"
            description={`Il arrive parfois qu'une Wight se distingue moins par ses talents de commandement que par le nombre d'ennemis tombés sous ses coups. Lorsque ses prouesses deviennent impossibles à ignorer, elle peut délaisser les rangs de la légion pour suivre une voie autrement plus sanglante. C'est ainsi que naissent les Lames de sang.

Redoutable duelliste, la Lame de sang recherche les adversaires capables de mettre son talent à l'épreuve. Peu lui importe alors le nombre de soldats qui s'affrontent autour d'elle : lorsqu'elle désigne sa proie, le reste du champ de bataille semble perdre toute importance.

L'arme qu'elle porte est intimement liée à sa puissance. Chaque blessure vient gorger sa lame du sang de sa victime et la rend progressivement plus dangereuse. Plus l'affrontement se prolonge, plus ses coups deviennent meurtriers, jusqu'au moment où une seule ouverture peut suffire à mettre brutalement fin au combat.

On raconte ainsi qu'affronter une Lame de sang rapidement est dangereux, mais que la laisser combattre longtemps relève de la folie. Lorsque son arme ruisselle enfin du sang de ses adversaires, même les plus grands guerriers savent que le prochain coup pourrait être le dernier.`}
            pouvoirs={[
              "Pierre d'âme",
              'Pouvoir de la lame sanglante',
            ]}
          />
          <ClassCard
            image="3-cauchemard-3" imageExt="JPG"
            name="Cauchemar" tier="Classe 3"
            description={`Le Cauchemar est ce qu'il reste d'un Nécrophage dont la quête pour retrouver son corps a échoué. Sa métamorphose a déformé sa chair et brisé les derniers fragments de l'être qu'il cherchait à redevenir. Tourmenté par son échec, il ne conserve qu'un lien fragile avec la réalité, dominé par une rage que rien ne semble pouvoir apaiser.

Cette fureur en fait une véritable machine à tuer. Il se jette sur ses victimes avec une violence presque incontrôlable et conserve les instincts de charognard acquis au cours de son existence. Mais c'est dans la noirceur qu'il révèle sa véritable puissance. Lorsque la nuit tombe ou que la lumière disparaît, sa force, sa résistance et ses sens s'accroissent, comme si les ténèbres elles-mêmes nourrissaient ce qu'il est devenu.

Le Cauchemar porte surtout son nom pour la terreur qu'il inspire. Lorsqu'il choisit une victime, il peut s'attacher à elle et la poursuivre bien au-delà d'un simple affrontement. Sa présence la hante dans le monde physique comme au-delà de celui-ci, faisant de la fuite un refuge parfois bien illusoire.

Rares sont ceux qui croisent un Cauchemar et vivent assez longtemps pour raconter leur rencontre. Lorsque le soleil s'est déjà couché, ils sont plus rares encore.`}
            pouvoirs={[
              'Aura terreur avancée',
              'Bonus nocturne',
            ]}
          />
          <ClassCard
            image="3-momie-3" imageExt="png"
            name="Momie" tier="Classe 3"
            description={`La Momie est l'une des rares Nécrophages à avoir mené sa quête jusqu'à son terme. La chair a de nouveau recouvert ses os et son corps a repris les traits qu'il possédait autrefois. Seuls son teint cadavérique et quelques marques laissées par la mort rappellent encore ce qu'elle est réellement.

Une telle transformation ne passe pas inaperçue. La Momie y voit la main de Shakoyolin et la preuve qu'elle a été choisie parmi les siens. Elle se proclame gardienne des âmes et intermédiaire du dieu de la Mort. Nul ne sait toutefois si Shakoyolin lui accorde réellement cette place ou s'il laisse simplement cette conviction grandir en elle pour mieux servir ses desseins.

Son emprise sur les âmes semble néanmoins confirmer une partie de ses prétentions. La Momie peut emprisonner l'essence de certaines créatures dans de petites statuettes qu'elle porte sur elle. Lorsque vient le moment, elle peut libérer ses captifs et les contraindre à reprendre forme pour combattre à son service.

Shakoyolin lui a également laissé un dernier présent. Sa chair se reconstitue à une vitesse que même les autres morts peuvent difficilement égaler, comme si quelque chose refusait désormais de laisser son corps mourir une seconde fois. La Momie croit y voir la protection de son dieu. D'autres y voient plutôt la marque d'un maître qui refuse de perdre ce qui lui appartient.`}
            pouvoirs={[
              'Assimilation des morts Shakoyolin',
              'Arme de classe : drain de mana',
            ]}
          />
          <ClassCard
            image="3-faucheuse-3" imageExt="JPG"
            name="Faucheuse" tier="Classe 3"
            description={`Nul ne sait véritablement à quel moment un Spectre devient une Faucheuse. Certains prétendent que Shakoyolin choisit lui-même une âme et lui abandonne une parcelle de son essence. D'autres murmurent quelque chose de plus inquiétant encore : lorsque la Faucheuse apparaît, ce serait le dieu lui-même qui contemplerait le monde à travers elle.

Elle ne hante plus les vivants. Elle vient les chercher.

Devant elle, rois et mendiants redeviennent semblables. Les armes offrent peu de réconfort et les murs encore moins. La Faucheuse traverse le monde comme un présage, et sa venue suffit parfois à faire comprendre qu'une existence touche à sa fin.

Car elle peut prononcer sur un être la Malédiction de la Mort. Dès cet instant, quelque chose change. Le condamné peut fuir, combattre, prier ou chercher refuge aux confins du monde : la mort a désormais son nom et finit inexorablement par le retrouver.

Peu prétendent avoir contemplé une Faucheuse et survécu à sa venue. Ceux qui l'ont fait racontent tous la même chose : pendant un instant, ils n'ont pas eu l'impression de se tenir devant un serviteur de Shakoyolin, plutôt que le dieu de la Mort lui-même était apparu.`}
            pouvoirs={[
              "Récolte d'âmes",
              'Malédiction de la faucheuse',
            ]}
          />
          <ClassCard
            image="3-banshee-3" imageExt="webp"
            name="Banshee" tier="Classe 3"
            description={`La Banshee est une âme que la mort a fini par briser. Les souvenirs de son existence, la conscience de ce qu'elle est devenue et les tourments accumulés depuis son trépas se confondent désormais dans une rage qu'elle ne parvient plus à contenir.

Sa souffrance nourrit une haine qui déborde sur tout ce qui l'entoure. Certains disent qu'elle jalouse les vivants, d'autres qu'elle maudit Shakoyolin pour l'existence qu'il lui a imposée. Peut-être ne sait-elle plus elle-même ce qu'elle hait. Il suffit parfois qu'une présence lui rappelle ce qu'elle a perdu pour réveiller toute sa fureur.

C'est alors que résonne son cri. Il ne s'agit pas simplement d'un hurlement, mais de l'expression de siècles de colère et de désespoir. Ceux qui l'entendent peuvent se retrouver paralysés tandis que leur force vitale les abandonne, incapables de faire autre chose que subir une parcelle de son tourment.

On raconte que le cri d'une Banshee porte loin dans la nuit. Les plus sages savent qu'il ne faut pas chercher à savoir ce qui l'a provoqué. Car lorsqu'elle hurle, la Banshee ne demande plus à être entendue. Elle veut que le monde souffre avec elle.`}
            pouvoirs={[
              'Cri de la banshee',
              'Adaptation spectrale',
              'Invisibilité amélioré',
            ]}
          />
          <ClassCard
            image="3-chasseur-3" imageExt="JPG"
            name="Chasseur Invisible" tier="Classe 3"
            description={`Il existe des histoires de guerriers ayant survécu à des armées, de rois protégés derrière des murailles et de fugitifs ayant traversé le monde pour échapper à leurs ennemis. Certaines de ces histoires se terminent pourtant de la même manière : un jour, leur ombre cesse d'être seule.

Le Chasseur invisible est ce que devient la traque lorsqu'on ne connaît plus ni repos ni frontières. Dès que Shakoyolin lui confie une proie, les distances et les refuges perdent peu à peu leur sens. Il peut suivre sa victime pendant des jours sans se montrer, laissant parfois pour seule preuve de sa présence cette certitude grandissante que quelque chose marche derrière elle.

Puis vient le moment où la chasse prend fin. Le Chasseur referme alors autour de sa proie un piège dont elle ne peut franchir les limites. Le monde extérieur semble soudain disparaître. Aucun allié ne peut venir la sauver, aucune fuite ne peut prolonger sa vie. Il ne reste plus que deux êtres enfermés dans un même espace et un duel qui doit connaître une fin.

On raconte que certains ont réussi à vaincre un Chasseur invisible. À Brujamonte, une autre version circule : lorsque Shakoyolin donne votre nom au Chasseur, vous n'êtes pas poursuivi. Vous êtes déjà mort.`}
            pouvoirs={[
              'Piège macabre',
              "Arme de classe ignore l'armure",
              'Invisibilité amélioré',
            ]}
          />
          <ClassCard
            image="3-vampire-3" imageExt="JPG"
            name="Vampire" tier="Classe 3"
            description={`Le Vampire est l'un des rares mortels à avoir traversé les épreuves de Shakoyolin et reçu la récompense promise aux Damnés. Son cœur ne bat plus, son âme ne lui appartient peut-être plus entièrement, mais la mort qui attend tous les vivants a perdu sur lui une grande part de son emprise.

Ce qui subsiste de son ancienne enveloppe cache une force monstrueuse. Le sang et l'énergie vitale de ses victimes peuvent réparer ses blessures et nourrir une puissance que peu de créatures peuvent égaler. Sa maîtrise de la métamorphose lui permet d'adopter des formes toujours plus redoutables et même les bêtes peuvent devenir ses yeux, parcourant les terres pour observer ceux sur lesquels il a porté son attention.

Une telle existence possède pourtant ses propres malédictions. Le feu demeure un ennemi redoutable et certaines substances, dont l'ail, provoquent chez lui une répulsion inexplicable. D'autres faiblesses entourent les Vampires de récits parfois contradictoires, au point qu'il devient difficile de distinguer les véritables protections des superstitions inventées par des vivants terrifiés.

Peu de Damnés survivent assez longtemps pour recevoir ce titre. Lorsqu'un Vampire apparaît, on ne voit donc pas seulement un prédateur immortel. On voit l'un des rares êtres auxquels Shakoyolin a tenu sa promesse. Et peut-être la preuve la plus inquiétante qu'il valait mieux ne jamais la recevoir.`}
            pouvoirs={[
              'Drain de vie avancé',
              'Polymorph créatures avancées',
              'Animal espion',
            ]}
          />
          <ClassCard
            image="3-Liche-3" imageExt="JPG"
            name="Liche" tier="Classe 3"
            description={`Il existe des Nécromanciens dont les recherches finissent par les conduire au-delà de ce qu'un mortel devrait pouvoir comprendre. Ceux qui franchissent cette dernière frontière ne reviennent pas véritablement. Ils deviennent autre chose.

La Liche est le miroir de Shakoyolin, l'une des plus terribles expressions de son pouvoir dans le monde. Elle a percé suffisamment de secrets du trépas pour s'arracher elle-même aux lois qui gouvernent l'existence. À Brujamonte, même les morts s'écartent sur son passage. Son savoir inspire une révérence presque aussi profonde que la crainte de ce qu'elle pourrait en faire.

Entre ses mains, la nécromancie atteint des sommets que peu peuvent seulement concevoir. Les os se referment autour d'elle comme une armure, son souffle porte le froid du tombeau et ses sortilèges peuvent faire imploser la chair de ceux qui osent lui résister. Ce ne sont plus de simples incantations, mais les manifestations d'une connaissance acquise au prix d'une existence entière consacrée aux secrets de Shakoyolin.

Même parmi les plus grands serviteurs de Brujamonte, la Liche occupe une place à part. On la consulte avec déférence, on lui obéit avec prudence et rares sont ceux qui commettent l'erreur de provoquer sa colère.

Car contempler une Liche, c'est entrevoir ce qu'un mortel peut devenir lorsqu'il étudie assez longtemps l'œuvre de Shakoyolin pour commencer à lui ressembler.`}
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
