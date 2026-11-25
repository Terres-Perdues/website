import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import ImageLightbox from '@/components/ImageLightbox'
import ClassAccordion from '@/components/ClassAccordion'
import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Les Elfes - Terres Perdues' }

function ClassCard({ image, imageExt = 'png', name, tier, description, pouvoirs }: {
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
          src={assetPath(`/elfes/${image}.${imageExt}`)}
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
        title="Les Elfes"
        subtitle="Royaumes"
        image={assetPath('/backgrounds/portrait-elfes.png')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Les Elfes' },
        ]}
        leftText={
          <p>
            Enfants d&apos;Illuvatar, le Créateur, maître de la Connaissance et de la Lumière de la
            foudre, les elfes furent les premiers mortels à fouler Tyleene.
          </p>
        }
        rightText={
          <>
            <p>
              Ce sont les héritiers des enseignements des dieux élémentaires, ayant reçu les préceptes
              de chaque entité lors de l&apos;âge d&apos;or d&apos;Ulthuan, où ils vivaient en harmonie
              et découvraient le monde, l&apos;art et la philosophie. Après leur exil suivant la corruption
              de certains elfes ayant succombé aux promesses de Kcaicos et au pouvoir de Pochas, ils se
              sont réfugiés à Toyalis où, endurcis par la guerre et le deuil, ils sont devenus les
              parangons de la vertu de Tyleene.
            </p>
            <p style={{ marginTop: '1em' }}>
              Intemporels, ils ne connaissent ni la maladie ni la vieillesse.
            </p>
          </>
        }
        extraText={
          <div style={{ columns: '2', columnGap: '3rem' }}>
            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                D&apos;une beauté inégalée chez les autres peuples, ils portent une grande attention à leur
                apparence, leur chevelure aux teints variés (partant des teintes foncées jusqu&apos;aux
                plus pâles, sans oublier certaines têtes colorées) étant toujours soignée. Tout en eux
                inspire la finesse, leur silhouette élancée, leurs doigts sont fins, leurs oreilles,
                taillées en pointe, leur visage demeure imberbe malgré les siècles qui passent et même les
                plus costauds des elfes n&apos;aura pas une carrure plus imposante qu&apos;un humain moyen.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Société et traditions</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Bien sûr, un peuple aussi ancien repose sur des traditions millénaires. Afin d&apos;échapper
                à la soif de la tentation de nouveau, les elfes se sont tournés vers les étoiles
                d&apos;Illuvatar et le cercle de la nature de Gaïa pour trouver dix préceptes qui
                guideraient leur conduite. Sur des stèles de marbre, nous trouvons à Toyalis, refuge offert
                au peuple elfique par les disciples de Gaïa, les vertus du peuple éternel : honneur,
                sagesse, bonté, respect, entraide, dévotion, courage, franchise, noblesse et communauté.
                Ces valeurs assurent que chaque citoyen de Toyalis se souvienne des principes du bien et
                de sa place au sein du peuple d&apos;Illuvatar et de Gaïa.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                De plus, un esprit de communauté très fort s&apos;est installé au sein de Toyalis. Afin
                d&apos;éviter qu&apos;un être devienne plus influent que les autres, chaque métier et
                chaque vocation sont chapeautés par un ordre ou une guilde. Il n&apos;est pas rare
                qu&apos;un elfe appartienne à de nombreuses institutions, dont il est le fier représentant,
                au sein de cette société où tous travaillent en harmonie et s&apos;assurent que les valeurs
                du Quendi Axan sont honorées en tout lieu.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Bref, les elfes sont des êtres traditionnalistes, respectueux (et protocolaires
                jusqu&apos;à l&apos;excès), honorables (bien qu&apos;ils ne laisseront pas les forces du
                mal abuser d&apos;eux), généreux, braves et unis (même s&apos;ils doivent parfois régler
                leurs désaccords avec beaucoup d&apos;animosité, ils respecteront toujours l&apos;autorité
                de la race).
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Pouvoir et politique</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                L&apos;histoire politique de Toyalis a mûri durant des millénaires, et son organisation
                tentaculaire en est la preuve. Pour être uni tout en respectant la sagesse de chaque être,
                la capitale elfique repose sur un ensemble d&apos;institutions ayant droit de parole au
                sein d&apos;instances qui elles-mêmes les représenteront à divers conseils qui siègent à
                divers paliers gouvernementaux. Bref, rien ne change rapidement chez les elfes, mais rien
                ne les presse non plus.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Au sommet, il y a la Couronne elfique, l&apos;immuable idéal du peuple élu. Après la mort
                des derniers descendants d&apos;Ulthuan, la Couronne passa à l&apos;oubli jusqu&apos;à ce
                qu&apos;elle soit réinstituée, sous la guidance de Reiven Felayth de Soveliss, comme un
                symbole de souveraineté bienveillante. Insigne de noblesse, la Couronne est transmise à un
                être de valeur exceptionnelle dont la parole devient loi. Ce souverain préside la Cour
                ainsi que l&apos;Armée. Il est appuyé dans ses fonctions par le Magistrat royal, le
                Commandant en chef de l&apos;Hossë i Elen ainsi que son Maréchal, le Préfet de la
                trésorerie et la noblesse elfique, qui est constituée des représentants des divers ordres
                et institutions.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Religion et croyances</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                La foi a toujours fait partie de l&apos;identité des elfes, seuls êtres à avoir rencontré
                leur Créateur et conversé avec les dieux. À l&apos;origine, les elfes vénéraient tous les
                dieux de l&apos;ère de la Création, mais avec les siècles, ils se sont rapprochés
                d&apos;Illuvatar et de Gaïa, auxquels ils font référence comme étant leur Père et leur
                Mère. Un elfe athée serait sévèrement puni. Même ceux qui vénèrent, par exemple, un dieu
                élémentaire au lieu de Gaïa ou Illuvatar se voit parfois regardé avec surprise, si ce
                n&apos;est une certaine incompréhension, voire un mépris.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Le Temple d&apos;Illuvatar a traversé les temps les plus sombres de l&apos;histoire des
                elfes. Entre ses murs sacrés est partagé un savoir qui n&apos;a aucun rival en ce monde et
                qui tire ses racines à la fondation même d&apos;Ulthuan, la première cité qui fut. Les
                serviteurs d&apos;Illuvatar ont le devoir solennel de protéger les traditions et la loi
                sacrée du Créateur, le Quendi Axan, servant de rempart contre les écarts de conduite qui
                pourraient mener à un autre schisme. Le Temple d&apos;Illuvatar est grandement hiérarchisé,
                englobant aussi l&apos;Heren Istarion, l&apos;ordre des mages. Ultimement, le temple
                d&apos;Illuvatar devra aussi guider les peuples si la Grande Noirceur venait à s&apos;abattre.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Le Cercle Druidique est porté des protecteurs de l&apos;équilibre de la nature et des
                érudits des phénomènes naturels. Là où le clergé d&apos;Illuvatar est hiérarchisé autour
                d&apos;un puissant Temple, le Cercle Druidique est plus éparpillé. Les membres se
                rencontrent lorsque nécessaire, et les racines du Cercle sont beaucoup plus vastes que
                celles du Temple, se préoccupant de causes plus vastes. Ses serviteurs viennent
                d&apos;horizons multiples, ce qui permet à chaque terre, chaque forêt, chaque clairière,
                chaque rivière d&apos;avoir un gardien aux aguets. Les Disciples comptent sur l&apos;appui
                de nombreux alliés pour protéger Tyleene et le cercle de la vie ainsi que pour répandre
                les enseignements de la Mère nourricière.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Relations avec les autres peuples</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                Les elfes apparaissent souvent froids et distants - et ils le sont. Afin d&apos;échapper à
                la soif du pouvoir et à la corruption, ils se terrent derrière leurs principes pour se
                protéger de tout élan qui les mènerait de nouveau vers la déchéance.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Humains -</strong> Les elfes ont pris les humains sous leur tutelle lorsque ces
                derniers apparurent sur Tyleene, guidés par Caria. Depuis, ils ont été des alliés précieux
                grâce à leur bravoure, à leur sens du devoir, à leur ténacité et à leur ingéniosité. Par
                contre, un adage elfique dit « les hommes viennent du jour et de la nuit à la fois ». C&apos;est
                pour cette raison que les elfes aiment les hommes autant qu&apos;ils les craignent, car ils
                succombent plus facilement à la tentation, leur espérance de vie limitée les poussant
                parfois à prendre des raccourcis et leur jeunesse les empêchant de comprendre tous les
                enjeux. Bref, des alliés à tenir sous surveillance.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Nains -</strong> Une animosité a longtemps existé entre les nains et les elfes qui
                reprochaient au peuple d&apos;Aulë d&apos;être trop préoccupé par la satisfaction de
                besoins terrestres et économiques et trop peu par les enjeux qui menacent Tyleene. Leur
                franc-parler et leur manque de raffinement en font des compagnons déstabilisants pour des
                êtres comme les elfes qui prennent toujours une distance vis-à-vis leurs émotions et leurs
                besoins avant de s&apos;exprimer. N&apos;empêche, même s&apos;ils semblent se terrer dans
                leurs tunnels à certains moments, les Nains ont toujours été de précieux alliés contre les
                forces du mal. Bref, de partenaires de longue date, mais pas toujours des amis.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Morts-Vivants -</strong> Ces aberrations ne devraient pas exister. Ces êtres sont
                un danger pour le cycle de la vie et l&apos;ordre naturel, en plus d&apos;être une
                corruption des créations des premiers dieux. Aucune alliance ne pourrait exister avec ces
                créatures qu&apos;il faut au contraire exterminer, leur influence néfaste répandant autour
                d&apos;elles une obscurité aspirant l&apos;âme des êtres vivants. C&apos;est la mission à
                laquelle se consacre exclusivement l&apos;ordre des Amazones.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Drows -</strong> Les Drows sont le souvenir d&apos;une ère de paix et de
                prospérité perdue à tout jamais. Lorsqu&apos;un Elfe aperçoit un de ses cousins sombres,
                il ne voit pas seulement la corruption, la déchéance et la pestilence, il voit
                d&apos;abord et avant tout le plus grand échec de la race entière, celui de n&apos;avoir
                su protéger de l&apos;influence des êtres maléfiques le cœur des siens. Cette peine et
                cette nostalgie avalées, l&apos;Elfe prend ensuite la pleine mesure de ce qui se dresse
                devant lui : un danger pour Tyleene.
              </p>
            </section>

            <section style={{ breakInside: 'avoid' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Ambitions et objectifs</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Les Elfes rêvent d&apos;un monde où ils pourront de nouveau vivre en harmonie, créant,
                chantant et partageant les fruits de Tyleene. Ce paradis perdu, celui d&apos;un monde sans
                souci, sans créatures impies et sans guerre n&apos;est peut-être qu&apos;une chimère pour
                les autres mortels, mais pour les Elfes, c&apos;est un souvenir pas si lointain de leur
                histoire, si près mais tellement inaccessible. Pour y parvenir, ils combattront les forces
                du mal jusqu&apos;au-delà la Grande Noirceur, mais ils inculqueront aussi les valeurs du
                Quendi Axan aux peuples du bien, espérant ainsi protéger les enfants de Tyleene de la
                tentation des ténèbres.
              </p>
            </section>
          </div>
        }
      />

      <div style={{ backgroundColor: '#2d4022', padding: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-title" style={{ fontSize: '2.5rem', color: '#e9e4d2', marginBottom: '60px' }}>Classes et évolutions</h2>
        <ImageLightbox
          src={assetPath('/arbre-elfes-tp2026.jpg')}
          alt="Arbre des Elfes"
          width={1920}
          height={1080}
          className="h-auto object-contain rounded-2xl"
          style={{ width: '80%' }}
        />
      </div>

      <div style={{ padding: '5%' }}>

        <ClassAccordion label="Classes 1">
          <ClassCard
            image="1classe-archer"
            name="Archer" tier="Classe 1"
            description={`La réputation des archers elfiques n'est plus à démontrer. En fait, ce fut le premier instrument mortel qu'ils furent portés à manier, à l'époque où tuer ne servait qu'à se nourrir. C'est pourquoi l'arc à flèche, chez les elfes, est un symbole de noblesse, de contrôle, de finesse et pourquoi chaque elfe, quelle que soit sa vocation, est habile avec cet instrument de guerre.

Par contre, parfois, certains se démarquent et joignent les rangs de l'Heren Lintaluva, ordre des archers de Toyalis. C'est alors que commencent des siècles d'entraînement pour parvenir à la perfection. Sur le champ de bataille, les archers elfiques ont la réputation de conserver leur sang froid alors que déferle une pluie de flèches vers l'ennemi. Cette rapidité, cette précision et ce calme imperturbable font d'eux des tireurs bien mortels.`}
            pouvoirs={[]}
          />
          <ClassCard
            image="1classe-epeiste"
            name="Épéiste" tier="Classe 1"
            description={`À l'aube des premiers jours de guerre que connurent les elfes se réunirent, sous le regard d'Illuvatar et de Gaïa, chacun des grands pratiquants de l'art sacré de la lame. Comprenant qu'individuellement, ils ne pourraient tenir en échec une légion déterminée à semer la désolation, ils se réunirent sous la bannière de l'Heren Makariva. C'est ainsi que les fondements de la première institution d'escrime furent installés.

Les épéistes elfiques partagent une obsession pour l'art du combat à l'épée tel qu'il fut transmis par les plus grands maîtres de l'histoire. Ils répètent sans relâche les postures, les pas et les mouvements nécessaires à l'excellence de la lame. Agiles, coordonnés, expérimentés, il vaut mieux admirer le spectacle de loin et éviter de les croiser sur le champ de bataille. Dans un synchronisme sans faille, la force du mouvement collectif avant tout, les rangs des danseurs de lame elfiques avancent telle une vague propulsée par le courroux des dieux.

Lorsqu'ils ne s'entraînent et ne guerroient pas, ils cultiveront le calme avant la tempête. Vous les verrez polissant leur lame, nettoyant leur armure et s'assurant que lorsque leur présence sera nécessaire, ils seront prêts à valser une énième fois contre l'ennemi.`}
            pouvoirs={[]}
          />
          <ClassCard
            image="1classe-lancier"
            name="Lancier" tier="Classe 1"
            description={`L'Heren Nehte, l'ordre des lanciers de Toyalis, fut fondé après la chute d'Ulthuan lorsque certains courageux, devant l'arrivée des forces démoniaques, prirent les armes pour défendre la cité durant l'évacuation. Les lanciers, qui enrichissaient jadis leur connaissance martiale dans le but de fonder un art et une science du combat, portent maintenant cette mission de protéger en assemblant un régiment défensif redoutable, sous la tutelle des grands lanciers.

Bien équipés pour faire face aux assauts, ils héritent de la première ligne, poste aussi honorable que dangereux, servant de barrière de protection entre l'ennemi et les archers et mages elfiques. Vous les verrez parfois user de manœuvres pour rompre l'assaut ennemi et dérouter l'adversaire avec la portée de leur arme.`}
            pouvoirs={[]}
          />
          <ClassCard
            image="1classe-mage"
            name="Mage" tier="Classe 1"
            description={`L'Heren Istarion est l'ordre de magie le plus ancien, aussi vieux que la magie elle-même. À l'ère d'Ulthuan, les mages accomplissaient de grandes découvertes et firent avancer divers domaines de connaissance elfique. Lorsque vint le temps de se défendre contre les forces du mal, l'ordre changea de vocation, cherchant maintenant à former les apprentis mages explorant les voies sacrées des arcanes.

Aujourd'hui, par leur foi et leur profonde connaissance des forces de l'univers, les mages occupent des rôles d'influence et perfectionnent leur capacité à canaliser les énergies élémentaires de Tyleene.

Le parcours des mages n'est jamais linéaire. Vous les verrez autant dans les bibliothèques, les salles d'audience, les temples et les guildes pour s'abreuver du savoir du monde que dans les forêts de Tyleene pour étudier et cueillir les réactifs nécessaires à leurs nombreux sortilèges, exemple bien concret de leur polyvalence. Ils manient autant la foudre que le feu et la glace, peuvent guérir et soigner et savent exprimer leur potentiel autant sur un champ de bataille que lorsqu'ils communient avec les dieux et la nature.`}
            pouvoirs={['Sorts magiques elfiques']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 2">
          <ClassCard
            image="2classe-coureurdesbois"
            name="Coureur des Bois" tier="Classe 2"
            description={`Forêts, steppes, dunes, montagnes, marais, volcans… on les appelle les coureurs des bois, mais ce sont les plus vifs explorateurs sur tous les terrains. Ces maîtres de la reconnaissance savent se déplacer avec vivacité, mais surtout, ils le font sans se faire repérer, transformant tout ce qu'ils ont sous la main en camouflage expert. Leur prouesse à l'arc n'est pas à négliger, mais ils sont surtout prêts à affronter toute éventualité, que ce soit de longues heures sans bouger pour laisser passer une armée qu'ils espionnent que de longues journées éloignés de toute civilisation.

Leurs rapports servent l'armée elfique, mais aussi le grand cercle druidique, dont ils sont souvent très proches, indiquant les fléaux qui ravagent les forêts de Tyleene et les villages les plus éloignés du royaume des Elfes.`}
            pouvoirs={['Camouflage arbre']}
          />
          <ClassCard
            image="2classe-tireurelite"
            name="Tireur d'Élite" tier="Classe 2"
            description={`La vue perçante des archers elfiques, leur agilité naturelle et les siècles d'entraînement font d'eux des archers redoutables, mais ce n'est rien face à la précision des tireurs d'élite. Certains récits parlent d'orcs abattus d'une flèche en pleine tête à des centaines de mètres, de sorciers privés d'une main en pleine incantation au centre de leur garde personnelle ou encore de rangs criblés de flèches à une vitesse inimaginable alors qu'il n'y a qu'une poignée de tireurs d'élite devant eux. Telles sont la précision et la rapidité des tirs des plus fins tireurs elfiques et personne n'égale leur prouesse à l'arc chez les autres peuples, car l'arc est le cadeau d'Illuvatar pour ses enfants, et la punition offerte à ceux qui souillent sa création.`}
            pouvoirs={['Précision de tir maximale']}
          />
          <ClassCard
            image="2classe-maitreepeiste"
            name="Maître Épéiste" tier="Classe 2"
            description={`Les plus fines lames de l'armée elfique, pris sous la tutelle des plus grands escrimeurs de Toyalis, peuvent un jour aspirer à l'ordre des Maîtres épéistes. Rares élus sélectionnés au terme d'enseignements rigoureux et d'entraînements drastiques, ils représentent l'art millésime du combat à l'épée longue. Traversant le champ de bataille avec grâce, ils esquivent les hordes ennemies qu'ils tailladent à la vitesse de l'éclair. En fait, leur agilité leur permet parfois de frapper deux fois là où l'oeil ne perçoit qu'un coup. Leur danse meurtrière n'a d'égale que leur lame forgée d'un métal inaltérable par les plus habiles forgerons du temple d'Illuvatar. Des décennies d'entraînement leur permettent de manier cette lame avec une telle précision qu'ils peuvent atteindre avec précision les organes les plus sensibles, laissant agoniser leur cible pour se tourner vers les autres ennemis.

Ne vous laissez pas tromper, on serait porté à croire que ce ne sont que de simples tueurs, mais ils sont aussi porteurs des enseignements de leur ordre, qui leur recommande, oui, le sacrifice de soi, mais aussi la compassion et le contrôle de soi. Car l'ordre des maîtres épéistes a aussi la mission de partager les valeurs de rigueur, d'excellence et de foi.`}
            pouvoirs={['Esquive de combat', 'Double Coup']}
          />
          <ClassCard
            image="2classe-guerriersombre"
            name="Guerrier Sombre" tier="Classe 2"
            description={`Certains elfes échappent un jour au paradigme de la sagesse imperturbable des elfes. Certains guerriers, témoins de la mort de leurs confrères et de la souffrance du monde, finissent par s'enfoncer dans une compassion qui les pousse à l'extrême. Imprégnés d'une force de caractère imperturbable dont ils se vêtissent pour être plus forts pour les leurs, les guerriers sombres abandonnent les dogmes de leur peuple et s'enfoncent dans une colère sans merci pour les serviteurs du mal. Pour représenter ce schisme, ils abandonnent l'art ancestral du combat à l'épée longue et s'arment d'une hache à double tranchant, symbole des pièges tendus par la rage qui les anime.

On les croirait solitaires, mais on les retrouve encore au service de l'armée elfique. Ce sont les premiers à foncer dans les rangs ennemis, imbus d'une puissance effrayante, s'entourant d'ennemis pour les pourfendre de coups larges et meurtriers.`}
            pouvoirs={['Rage meurtrière', 'Coup Circulaire']}
          />
          <ClassCard
            image="2classe-grandlancier"
            name="Grand Lancier" tier="Classe 2"
            description={`Aucune muraille n'est plus étanche que la ligne des grands lanciers. Ces maîtres de la lance représentent l'apothéose de la défense elfique. Puissants, agiles et dotés d'un sens aigu du combat, les grands lanciers sont capables de soutenir les assauts répétés et de parer tout en frappant l'ennemi. Ils manient leur imposant outil de guerre avec la grâce d'un finelame, parant les coups provenant de tous côtés, imperturbables défenseurs de l'armée millénaire.

Hors du champ de bataille, ils deviennent aussi des figures qui imposent le respect et la retenue. Il faut dire que leur rôle au sein de l'armée demande un sang froid et une patience sans égale, même parmi les êtres millénaires. Sur le champ de bataille, ils sont, oui, le rempart qui protège des assauts, mais il n'est pas rare, lorsque le combat se calme, de les voir porter main forte aux soigneurs, guettant du coin de l'oeil l'arrivée de la prochaine salve.`}
            pouvoirs={['Blocage de lance', 'Bloque Coup']}
          />
          <ClassCard
            image="2classe-cavalier"
            name="Cavalier" tier="Classe 2"
            description={`Les cavaliers développent avec leur monture un lien puissant, empreint d'un respect et de codes transmis depuis des millénaires. Le cheval et l'elfe deviennent alors inséparables, capables de communiquer à travers des signes subtils que même les druides n'arrivent à déchiffrer.

Épousant la vitesse de leur monture, les cavaliers de l'armée elfique sont les experts de la reconnaissance et des frappes éclair. La vivacité des montures elfiques font l'objet de maintes légendes, certains affirmant avoir vu les sabots galoper sur le vent lui-même pour atteindre des vitesses inégalées afin de surprendre les forces ennemies ou livrer un message le plus rapidement possible.

Bref, l'ordre des cavaliers possède un aura bien particulier. Celui d'une relation sincère entre l'elfe et la bête et d'une rapidité inégalée sur Tyleene.`}
            pouvoirs={['Combat monté', 'Charge']}
          />
          <ClassCard
            image="2classe-hautmage"
            name="Haut Mage" tier="Classe 2"
            description={`Certains mages reçoivent, au terme de leur parcours académique, la possibilité de rejoindre les rangs des hauts-mages sous la tutelle du temple d'Illuvatar. Les rares élus parviendront à découvrir les secrets anciens légués par les divinités lors de l'ère de la cohabitation avec les dieux et deviendront des membres influents des différentes sphères du royaume des elfes.

Leur présence sur le champ de bataille sera vite remarquée, car le ciel se couvrira rapidement de nuages chargés d'électricité. Les enseignements reçus par le Temple leur permettent en effet de se spécialiser dans la voie de la foudre, manipulant le saphir pour en faire des usages multiples. Certains se couvrent d'énergie électrique pour punir ceux qui s'en approchent ou même exploiter la vitesse de l'éclair pour éviter les coups, transformant parfois même leurs membres en la foudre elle-même, alors que d'autres manipuleront les nuages pour faire tomber la foudre elle-même sur ceux qui seront assez fous pour maintenir les rangs ennemis devant la colère d'Illuvatar.`}
            pouvoirs={["Sorts avancés de foudre", "Sort Mouvement Rapide", "Sort Vengeance d'Illuvatar"]}
          />
          <ClassCard
            image="2classe-druide"
            name="Druide" tier="Classe 2"
            description={`Les druides sont portés par une vision du monde et de la nature qui leur est propre. Leur vaste connaissance des phénomènes naturels et des cycles de la mort et de la vie en font des êtres spéciaux en communion particulière avec Gaia.

Ils demeurent ancrés dans la vie de Toyalis. Ils deviendront de sages philosophes, des soigneurs compétents ou des combattants-magiciens redoutables. En effet, s'ils sont capables d'une compassion sans limites, ils peuvent aussi se laisser habiter d'une rage redoutable lorsque vient le temps de défendre les grands principes druidiques et la vie elle-même! Manipulant le saphir, l'émeraude, le diamant et le rubis, ils insuffleront leur foi dans leurs sortilèges pour faire déferler les éléments eux-mêmes sur l'ennemi, appelant parfois les gardiens ancestraux à leurs côtés ou canalisant en eux-même la furie du combat, s'armant de leur bâton de marche devenu un sceptre de combat ou encore de griffes et de crocs acérés. Car telle est la puissance de la nature!`}
            pouvoirs={['Sorts druidiques (nature)']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 3">
          <ClassCard
            image="3classe-ranger"
            name="Ranger" tier="Classe 3"
            description={`Nul ne parcourt les territoires aussi rapidement que le Ranger, éternel voyageur de Tyleene. Étroitement lié au cercle druidique qui dépend de ses yeux omniscients, il est l'éternel voyageur qui possède un repère dans chaque forêt. Habile chasseur, ce pèlerin se débrouille aussi bien à l'arc qu'à l'épée courte, sans oublier les trappes qu'il pose pour traquer les troupes ennemies ou changer un champ de bataille en piège mortel avant que le premier coup soit porté.

Il peut passer de longues semaines au même endroit, parfois caché parmi les troupes ennemies qui campent lors d'un déplacement, camouflé tel un arbre ou même un rocher, échappant aux yeux les plus alertes.

Il est accueilli avec enthousiasme à Toyalis, car il apporte une information précieuse sur les terres les plus éloignées, mais il ne reste jamais longtemps, rejoignant parfois le Cercle Druidique, parfois la forêt, car l'appel de la nature est fort pour celui qui dort plus souvent sur un tapis de feuillage que sur un matelas.`}
            pouvoirs={['Camouflage arbre conservé']}
          />
          <ClassCard
            image="3classe-archerdilluvatar"
            name="Archer d'Illuvatar" tier="Classe 3"
            description={`L'archer d'Illuvatar ne tient plus qu'une simple flèche sur la corde tendue de son arc, il dépose, sur l'empennage de ses flèches, la foi d'un peuple aussi vieux que le monde lui-même. Décochant sur l'ennemi une salve de foudre avec la précision des plus grands tireurs qui soient, l'archer d'Illuvatar est une puissance redoutable à lui seul. Habité par la puissance du Créateur, l'archer céleste est nimbé d'une aura d'esquive qui le rend difficile à stopper et il dégage même, lorsqu'on le frappe, une énergie divine qui terrasse parfois l'assaillant.

À Toyalis, l'archer d'Illuvatar est un représentant du Temple d'Illuvatar et protecteur des valeurs du Quendi Axan, en plus de superviser la formation des archers. Il forme, avec l'épéiste d'Illuvatar, la branche martiale du clergé du Créateur et s'assure que les dogmes elfiques sont respectés.`}
            pouvoirs={["Résistance lumière +50", "Foudre divine", "Arc d'Illuvatar : dégâts de lumière"]}
          />
          <ClassCard
            image="3classe-assassin"
            name="Assassin" tier="Classe 3"
            description={`Pour ces moments où il faut tuer sans être vu, certaines instances savent à qui demander. Les méthodes de l'assassin sont parfois critiquées puisqu'elles sont contraires aux dogmes milléniaux, mais l'ordre des ombres est parfois l'unique rempart contre les sombres desseins des forces du mal. Pratiquement invisible lorsque la situation le demande, et doté d'une précision qui n'a aucun égal chez les autres tireurs de Tyleene, l'assassin peut, d'une seule flèche, tuer le guerrier le plus redoutable dans les rangs ennemis, éradiquant ainsi en un instant un sorcier noir puissant ou un général indispensable au maintien du front ennemi. Pour des missions particulières, l'assassin est aussi habile avec sa lame, capable de s'infiltrer dans les repères les mieux protégés pour accomplir son boulot.

À Toyalis, l'assassin ne jouit d'aucun rôle particulier, l'ordre des ombres oeuvrant dans le plus grand secret et même inconnu de la plupart des mortels. Le disciple des ombres s'inventera donc souvent une autre identité martiale, prétendant n'être qu'un simple archer, alors que la nuit tombée et l'obscurité déployée, il commence sa réelle mission.`}
            pouvoirs={["Invisibilité", "Coup critique", "Coup mortel à l'arc"]}
          />
          <ClassCard
            image="3classe-amazone"
            name="Amazone" tier="Classe 3"
            description={`Seules les tireuses au cœur dénué de tout vice peuvent aspirer à rejoindre le clan des Amazones. Experte dans l'éradication des créatures mortes-vivantes, l'Amazone peut sentir les profanateurs de la vie grâce à la pureté de son âme. Une fois qu'elle a identifié sa proie, rien ne peut l'empêcher de vaincre sa cible, son arc enchanté dotant chaque flèche d'une puissance de lumière destructrice pour toute créature revenant d'outre tombe. On raconte aussi que la pureté de l'Amazone lui permet de résister à certains fléaux.

Chose certaine, ce groupe sélect de chasseuses de morts-vivants attire la curiosité, même parmi les elfes, puisque l'Amazone a complètement épousé la soif de tuer les immondices sans égard au contrôle habituel chez les Elfes. Chez les serviteurs de Shakoyolin, ces guerrières de la rédemption sont sources de légendes terrifiantes, même pour les liches les plus aguerries.`}
            pouvoirs={["Arc Amazone : dégâts ×2 contre les morts-vivants"]}
          />
          <ClassCard
            image="3classe-epeistedilluvatar"
            name="Épéiste d'Illuvatar" tier="Classe 3"
            description={`L'épéiste d'Illuvatar a répondu à l'appel du maître de la foudre, devenant un membre à part entière du Temple d'Illuvatar et défenseur des valeurs elfiques, le Quendi Axan. Pieux combattant au service de la lumière céleste, l'épéiste d'Illuvatar devient à la foi le parangon des valeurs elfiques et le bras meurtrier de la colère divine. Sous les reflets lumineux de son armure aux couleurs du ciel étoilé imbue d'une puissance divine, le guerrier de la foudre avance sur le champ de bataille, sa lame légendaire, Armorhin, à la main, et terrasse les engeances mettant en péril Tyleene, Toyalis et le peuple des éons. La lumière n'ébranle plus ce guerrier, puisque la justice émane de lui telle une sentence mortelle, et il n'est pas rare que la foudre elle-même, inspirée par la puissance de son serviteur, s'abatte là où la lame touche les impies. Ce n'est pas pour rien que les rangs se brisent lorsqu'émerge du front l'épéiste d'Illuvatar.`}
            pouvoirs={["Résistance lumière +50", "Foudre divine", "Épée Armorhin : dégâts de lumière"]}
          />
          <ClassCard
            image="3classe-gardephoenix"
            name="Garde Phoenix" tier="Classe 3"
            description={`Il y a des siècles, Pukarm obtint d'Illuvatar la possibilité de choisir, parmi ses enfants, certains élus. Lorsque le maître des flammes est épaté par la conviction et la rage d'un guerrier sombre et que ce dernier rend l'âme, le corps du guerrier s'effrite en un tas de cendres. L'âme de l'elfe doit alors traverser son lot d'épreuves dans l'au-delà pour mériter une place au sein de l'ordre des Phoenix. Immortel parmi des êtres éternels, le Garde Phoenix est à la fois condamné à vivre éternellement une vie de rage et de guerre et béni par ses nouvelles capacités. Nimbé d'une aura de flammes, ce guerrier marche dans les rangs ennemis pour y semer la destruction avec sa hallebarde qui brûle les forces du mal sans égard à la puissance de l'ennemi, puisqu'il ne craint plus la mort. Lorsqu'enfin son adversaire croit l'avoir vaincu, des siècles de rage animent le phoenix dont le cadavre s'enflamme tel un brasero, répandant une furie ardente autour de lui alors que l'esprit reforme un nouveau corps dans l'antre des Phoenix. Certaines légendes racontent même que certaines armées ennemies auraient abdiqué en apercevant, des heures après avoir tué un de ces guerriers immortels, leur nemesis réapparaître à travers le front des elfes, prêt pour une deuxième ronde.`}
            pouvoirs={["Résistance feu +50", "Mort et renaissance du Phoenix", "Rage Ardente"]}
          />
          <ClassCard
            image="3classe-lionblanc"
            name="Lion Blanc" tier="Classe 3"
            description={`Le lion blanc a trouvé le calme dans les landes glaciales de Khislev. Le vent frigide, les arbres dénudés et le silence absolu ont apporté un baume sur les souffrances qui mènent à la voie du guerrier sombre. Véritable ermite, la venue d'un lion blanc dans Toyalis ou sur le champ de bataille est un événement en soi, car il a fait son nid parmi les géants de glace et les ettins qu'il chasse sans relâche et n'en sort que lorsque le devoir l'appelle. On raconte en fait qu'il s'abreuve de la froideur des steppes pour calmer ses douleurs et emplir son coeur d'une conviction inébranlable. Il n'est pas rare de voir le Lion blanc se remettre instantanément de coups subis ou de sorts lancés ou alors utiliser les techniques transmises par tous les corps martiaux elfiques qu'il a perfectionnées sur Khislev. Sa hache, Imhlaril, est aussi une légende à elle seule, faisant rayonner sa rage meurtrière partout autour du guerrier.

Mais, tel le lion de la jungle, le Lion blanc doit éventuellement retourner se reposer au sein de son repère frigide, car le froid vient à lui manquer cruellement.`}
            pouvoirs={["Résistance glace +50", "Guérison de poison et paralysie au combat", "Empalement"]}
          />
          <ClassCard
            image="3classe-garderoyal"
            name="Garde Royal" tier="Classe 3"
            description={`Seul le grand lancier qui se démarque par des capacités telles qu'on n'en voit qu'une poignée de cas par siècle peut aspirer aux tests de la garde royale. Ni la foi, ni les tours de magie ne peuvent paver la voie vers ce titre honorifique au sein de l'ordre qui a tenu le front lors du dernier exil du peuple elfique. Non, seulement un entraînement acharné sans égal. Armé de sa fidèle lance qui, dit-on, le suit jusqu'à la couche et vêtu d'une armure impénétrable, le garde royal est un guerrier tout simplement invincible tant sa maîtrise du combat est parfaite. Et derrière cette façade métallique se cache un combattant aux réflexes inégalés, érudit des tactiques militaires et des postures de combat. Une lance n'est pas qu'une arme, dans les mains du garde royal, c'est un outil de parade inégalable. Sur le champ de bataille, le garde royal attire les troupes vers lui et si l'ennemi commet l'erreur de l'ignorer, c'est empalé au bout d'une lance qu'il termine ses jours.

Garde du corps, sentinelle de la cité, protecteur du palais royal, on retrouve ces gardes en devoir dans la cité ou en plein entraînement dans l'arène, appelant à eux des régiments de soldats elfiques entiers, par bravade ou par désir de parfaire leurs techniques, et à chaque fois, ils s'en sortent indemnes.`}
            pouvoirs={["Empalement", "Bloque Coup hérité"]}
          />
          <ClassCard
            image="3classe-cavalierdudragon"
            name="Cavalier du Dragon" tier="Classe 3"
            description={`La vue d'un seul cavalier du dragon, dans son armure d'écailles étincelantes, suffit parfois pour faire déserter les rangs ennemis. Après avoir parcouru les landes à la recherche de défis de plus en plus immenses, le cavalier du dragon, maintenant lié spirituellement à sa monture, a réussi à retrouver en son for intérieur la puissance qui fut léguée aux elfes par les premiers dragons métalliques. Investi d'une nouvelle force, le cavalier du dragon arrive maintenant à canaliser la puissance du souffle draconique et à le projeter contre les forces du mal. Il n'est pas rare de voir de le voir filer tel le zéphyr sur son fidèle destrier, empalant ça et là les serviteurs du chaos avant de relâcher un brasier infernal sur quelque suppôt des enfers pour le retourner là d'où il vient.

Une telle puissance attire inévitablement l'admiration, même chez les Elfes, qui comprennent qu'un tel don n'est accordé qu'à une âme pure au service du Créateur. Et c'est pourquoi le cavalier du dragon est reçu avec toutes les éloges, même chez les Elfes qui ont vu défiler nombre de légendes.`}
            pouvoirs={["Immolation du dragon", "Charge montée"]}
          />
          <ClassCard
            image="3classe-pretredilluvatar"
            name="Prêtre d'Illuvatar" tier="Classe 3"
            description={`Le prêtre d'Illuvatar représente la foi la plus pure du peuple elfique, véritable avatar du Créateur sur Tyleene. Par sa main, le ciel se déferle, laissant s'abattre la foudre, la lumière et la grêle sur les immondices qui envahissent Tyleene. À lui seul, le prêtre du Père de la foudre peut abattre une armée entière, canalisant Sa volonté divine en brûlant quelques saphirs et en psalmodiant d'anciennes prières léguées par Illuvatar lui-même!

Le Temple d'Illuvatar est l'institution la plus influente du peuple elfique, présent au sein du conseil royal, du palais de justice, de la bibliothèque, de l'armée… bref, partout. Le prêtre d'Illuvatar devient donc, en plus d'un représentant de la foi elfique, un des êtres les plus influents du peuple du Créateur.`}
            pouvoirs={["Résistance lumière +50", "Sorts divins d'Illuvatar les plus puissants"]}
          />
          <ClassCard
            image="3classe-discipledegaia"
            name="Disciple de Gaïa" tier="Classe 3"
            description={`Dans chaque terre, dans chaque forêt, auprès de chaque clairière ou rivière, toujours, un disciple est aux aguets. Rien qui ne constitue une menace pour le cycle et l'équilibre n'échappe à l'attention constante du Cercle Druidique grâce au Disciple de Gaia, reconnu comme véritable maître d'œuvre du Cercle. Maître d'un ordre dont les ramifications sont diverses, s'étendant partout sur Tyleene, le Disciple de Gaïa, à la fois voix de la sagesse et représentant de la piété, devient un conseiller indispensable pour les factions de Toyalis.

Lorsqu'il faut agir, le disciple n'hésite pas et prend parfois les armes (son fidèle bâton) pour attaquer ou encore pour se défendre lorsqu'il soigne les soldats blessés. Et lorsque la situation le demande, le disciple combine la furie de tous les éléments et de tous les serviteurs de la nature réunis, les divinités élémentaires elles-mêmes apportant leur soutien au disciple. Terre, feu, eau et air se combinent dans une rage contrôlée par le disciple, maître des mots de pouvoir ancestraux et investi de la foi, secouant Tyleene elle-même dans un spasme de défense meurtrier.`}
            pouvoirs={["Sorts druidiques suprêmes", "Pierre d'Âme : restaure tous les HP"]}
          />
        </ClassAccordion>

      </div>
    </InnerLayout>
  )
}
