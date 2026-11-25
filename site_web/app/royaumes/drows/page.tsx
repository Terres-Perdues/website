import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import ImageLightbox from '@/components/ImageLightbox'
import ClassAccordion from '@/components/ClassAccordion'
import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Les Drows - Terres Perdues' }

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
          src={assetPath(`/drows/${image}.${imageExt}`)}
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
        title="Les Drows"
        subtitle="Royaumes"
        image={assetPath('/backgrounds/Delgaia.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Les Drows' },
        ]}
        leftText={
          <p>
            À la suite des guerres dévastatrices d&apos;Imbar Nuhuinenna, certains survivants elfes
            trouvèrent refuge dans les profondeurs des montagnes, près des gisements de malepierre.
            Ils poursuivirent leurs recherches sur ce filon malgré les dangers.
          </p>
        }
        rightText={
          <>
            <p>
              Au fil des générations, leur exposition à cette magie transforma leur apparence et leur
              nature, donnant naissance au peuple aujourd&apos;hui connu sous le nom de Drows.
            </p>
            <p style={{ marginTop: '1em' }}>
              Les Drows ont conservé la silhouette élancée, les traits fins et la longévité de leurs
              ancêtres elfiques. Leur peau s&apos;est toutefois assombrie, prenant des teintes allant
              du gris cendré au noir profond, tandis que leur chevelure est généralement devenue blanche
              ou argentée. Leurs yeux, adaptés à l&apos;obscurité, témoignent de leur longue existence
              souterraine.
            </p>
          </>
        }
        extraText={
          <div style={{ columns: '2', columnGap: '3rem' }}>
            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Ils possèdent encore la grâce et le raffinement de leur ancienne lignée, auxquels
                s&apos;ajoute une présence souvent jugée inquiétante par les autres peuples.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Société et traditions</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                La société drow repose sur une hiérarchie dominée par de puissantes familles dont les
                rivalités façonnent la vie quotidienne. À la tête de ces lignées se trouvent les Matrones,
                figures d&apos;autorité qui veillent aux intérêts de leur maison et de ses descendants.
                L&apos;appartenance à une grande famille constitue un avantage considérable. Elle offre
                protection, richesse, éducation et relations, autant de privilèges que les Drows de
                condition modeste doivent conquérir par leurs propres moyens. Toutefois, la naissance ne
                garantit ni le respect ni la réussite. Un individu particulièrement doué ou rusé peut
                attirer l&apos;attention d&apos;une Matrone et obtenir une position que son origine ne lui
                aurait jamais permise. Les grandes familles savent reconnaître les individus capables de
                servir leurs ambitions, quitte à les arracher à leurs anciennes allégeances.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                La famille représente un refuge contre les ambitions adverses, mais également un lieu de
                compétition où chacun doit prouver son utilité. Les services rendus créent des obligations,
                les faveurs appellent des contreparties et les offenses sont rarement oubliées. La trahison
                demeure l&apos;une des fautes les plus graves, surtout lorsqu&apos;elle compromet les
                intérêts de ceux qui ont accordé leur protection. Les Drows admirent l&apos;audace et
                considèrent la prise de risque comme une voie légitime vers la grandeur. Cette culture
                favorise les ambitions démesurées, les entreprises clandestines et les manœuvres les plus
                téméraires, pourvu que leurs instigateurs possèdent les moyens d&apos;en assumer les
                conséquences.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Malgré leurs rivalités, les Drows entretiennent une civilisation raffinée, où les arts, la
                magie, l&apos;artisanat et les disciplines martiales jouissent d&apos;un prestige
                considérable. Les grandes familles rivalisent pour s&apos;attacher les meilleurs talents et
                faire étalage de leur puissance. Dans leurs demeures comme dans les rues de la cité, les
                marques de respect, les promesses et les traditions occupent une place essentielle. Une
                parole donnée peut engager plusieurs générations, tandis qu&apos;une offense publique peut
                faire naître une querelle dont nul ne se souvient plus de l&apos;origine.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Pouvoir et politique</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Le pouvoir de Charnaggen Morngha appartient au Conseil des Matrones, où siègent les
                dirigeantes des familles les plus influentes de la cité. Chacune y défend les intérêts de
                sa lignée, cherchant à étendre son autorité sur les institutions, les ressources et les
                territoires. Les décisions du Conseil résultent rarement d&apos;un consensus véritable.
                Elles naissent plutôt d&apos;alliances fragiles, de concessions calculées et de rapports de
                force que les Matrones s&apos;efforcent constamment de faire pencher en leur faveur.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Les grandes familles entretiennent leurs propres réseaux d&apos;influence, composés de
                guerriers, de magiciens, de marchands et d&apos;informateurs. Certaines dominent les
                échanges commerciaux, tandis que d&apos;autres doivent leur puissance à leurs forces
                militaires ou à leur maîtrise des arts occultes. Les promesses, les dettes et les faveurs
                constituent une monnaie politique aussi précieuse que les richesses matérielles. Une
                Matrone avisée sait qu&apos;un allié redevable peut parfois se révéler plus utile
                qu&apos;un ennemi vaincu.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Les complots, l&apos;espionnage et les assassinats font partie des instruments du pouvoir,
                bien que leur usage demeure soumis à certaines règles tacites. Une famille peut chercher à
                renverser sa rivale, mais elle doit éviter de compromettre la stabilité de la cité ou de
                provoquer l&apos;union de ses adversaires. Les manœuvres les plus audacieuses suscitent
                l&apos;admiration lorsqu&apos;elles réussissent, tandis que leurs auteurs malheureux sont
                rarement épargnés. Chez les Drows, la légitimité se mesure autant à la capacité de
                conserver son pouvoir qu&apos;aux moyens employés pour l&apos;obtenir.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Religion et croyances</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                La religion constitue l&apos;un des rares fondements communs de la civilisation drow. Leurs
                cultes occupent une place importante dans les traditions de Charnaggen Morngha, où les
                cérémonies et les rites contribuent à préserver une certaine unité entre les lignées.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Pourtant, les Drows entretiennent une relation ambiguë avec leurs dieux. La plupart
                reconnaissent leur puissance et redoutent leur courroux, mais éprouvent une profonde
                réticence à dépendre de leur intervention. Dans une société qui glorifie l&apos;ambition,
                la ruse et la débrouillardise, devoir implorer une puissance supérieure peut être perçu
                comme un aveu de faiblesse. Les Drows préfèrent généralement attribuer leurs réussites à
                leurs propres talents plutôt qu&apos;à une quelconque faveur divine. La piété sincère
                existe, mais elle côtoie un pragmatisme profondément enraciné.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Kcaïcos demeure particulièrement respecté pour sa maîtrise des ténèbres et de la
                dissimulation, tandis que Pochas inspire autant de crainte que d&apos;intérêt parmi ceux
                qui pratiquent les arts du poison et de la maladie. Couros, quant à lui, trouve
                naturellement sa place dans une civilisation où les rivalités et les bouleversements
                constituent des voies reconnues vers le pouvoir. Si leurs enseignements influencent les
                traditions drows, ils servent aussi fréquemment à légitimer des ambitions qui n&apos;ont
                que peu à voir avec la dévotion.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Les Matrones et les autorités religieuses savent exploiter cette crainte des dieux pour
                consolider leur influence. Une alliance peut être présentée comme une obligation sacrée,
                une vengeance comme un châtiment divin et une conquête comme l&apos;accomplissement
                d&apos;une volonté supérieure. Les Drows ne sont toutefois pas dupes de ces manœuvres,
                auxquelles ils participent eux-mêmes volontiers lorsque leurs intérêts l&apos;exigent.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Relations avec les autres peuples</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Elfes -</strong> Ils suscitent chez les Drows un mépris nourri par des siècles de
                rancœur. Les Drows reprochent à leurs cousins d&apos;avoir abandonné leur royaume pour se
                réfugier dans les forêts de Toyalis, tandis que les Elfes les accusent d&apos;avoir
                précipité sa destruction par leur usage de la malepierre. Aux yeux des Drows, les Elfes
                sont devenus des êtres arrogants et timorés, prisonniers de principes qui les empêchent
                d&apos;exploiter pleinement leur potentiel. Ils leur reconnaissent néanmoins une maîtrise
                remarquable de la magie et un héritage culturel dont ils partagent les origines. Cette
                parenté ne fait qu&apos;attiser leur rivalité, chacun des deux peuples se considérant
                comme le véritable héritier de la grandeur perdue d&apos;Ulthuan.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Humains -</strong> Ils éveillent une curiosité mêlée de dédain. Leur existence
                éphémère et leurs prétentions à la vertu paraissent souvent dérisoires aux yeux des Drows.
                Pourtant, leur ambition, leur ingéniosité et leur capacité à bâtir de puissantes
                institutions suscitent une admiration difficile à dissimuler. Les Drows comprennent
                particulièrement bien les jeux d&apos;influence qui animent la politique impériale et
                savent exploiter les rivalités entre ses factions. Malgré l&apos;hostilité officielle entre
                les deux civilisations, des arrangements clandestins peuvent naître lorsque leurs intérêts
                convergent.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Nains -</strong> Les Nains sont considérés comme un peuple rustre, entêté et
                dépourvu du raffinement auquel les Drows accordent tant d&apos;importance. Leurs querelles
                dépassent les simples différences culturelles. Les deux civilisations se disputent depuis
                longtemps les richesses et les territoires souterrains, faisant de leurs rencontres une
                source fréquente de conflits. Malgré leur mépris, les Drows reconnaissent la résistance
                exceptionnelle des Nains, tant sur les champs de bataille que dans leurs ouvrages légendaires.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Morts-Vivants -</strong> Les Morts-Vivants comptent parmi les alliés les plus
                précieux des Drows, qui voient dans leurs rangs une main-d&apos;œuvre servile d&apos;une
                docilité et d&apos;une fiabilité exceptionnelles. Leur endurance et leur obéissance en font
                des esclaves recherchés, capables d&apos;accomplir les travaux les plus pénibles comme les
                besognes les plus ingrates. Les Drows méprisent toutefois leur dépendance envers Shakoyolin,
                dieu de la mort, et les considèrent souvent comme de simples automates dépourvus de volonté
                propre. Cette condescendance ne les empêche pas de reconnaître la puissance terrifiante de
                leurs légions, dont ils savent tirer avantage sans jamais oublier le danger qu&apos;elles
                représentent.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Ambitions et objectifs</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Les Drows aspirent à devenir l&apos;une des puissances les plus influentes de Tylene. Leur
                ambition ne se mesure toutefois pas uniquement à l&apos;étendue des territoires conquis.
                Ils cherchent avant tout à contrôler les ressources, les routes commerciales et les réseaux
                d&apos;influence qui leur permettront d&apos;imposer leurs conditions aux autres peuples.
                Les richesses souterraines constituent un enjeu majeur de cette expansion, alimentant
                notamment leur rivalité avec les Nains.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                Cette ambition collective dissimule une multitude d&apos;intérêts particuliers. Chaque
                grande famille cherche à accroître son prestige, à affaiblir ses rivales et à s&apos;assurer
                une place dominante au sein de la cité. Les alliances extérieures, les expéditions
                militaires et les entreprises commerciales deviennent autant d&apos;occasions de servir la
                puissance drow que de favoriser l&apos;ascension d&apos;une lignée. Il arrive ainsi que les
                ambitions personnelles compromettent les intérêts de Charnaggen Morngha, au grand déplaisir
                des Matrones qui en subissent les conséquences.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Pour les Drows, la grandeur appartient à ceux qui osent la saisir.
              </p>
            </section>

            <section style={{ breakInside: 'avoid' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Suggestions de noms</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.5em' }}>
                <strong>Masculins :</strong> Rizdorl, Zaknlyn, Ilztrak, Veszryn, Kronzar, Drizfein, Elaugimar
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.5em' }}>
                <strong>Féminins :</strong> Vierstra, Shurafae, Iraeryne, Zarbryn, Chessarra, Vasdiira, Erelshalee
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Noms de famille :</strong> Oussurden, Baenath, Melrae, Arkenett, Melndar, Cladviir, Hlaneld
              </p>
            </section>
          </div>
        }
      />

      <div style={{ backgroundColor: '#2d4022', padding: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-title" style={{ fontSize: '2.5rem', color: '#e9e4d2', marginBottom: '60px' }}>Classes et évolutions</h2>
        <ImageLightbox
          src={assetPath('/arbre-drow.jpg')}
          alt="Arbre des Drows"
          width={1920}
          height={1080}
          className="h-auto object-contain rounded-2xl"
          style={{ width: '80%' }}
        />
      </div>

      <div style={{ padding: '5%' }}>

        <ClassAccordion label="Classes 1">
          <ClassCard
            image="1classe-lancier"
            name="Lancier" tier="Classe 1"
            description={`Dans les armées Drows, les Lanciers forment des unités disciplinées dont la valeur repose autant sur leur cohésion que sur leur habileté au combat. Mieux considérés que les Troupes de choc, ils bénéficient de certains privilèges, mais cette distinction s'accompagne d'exigences autrement plus sévères.

Leur longue lance leur permet de contenir les charges, de protéger les unités précieuses et de tenir les passages étroits des profondeurs. Là où les Troupes de choc sont envoyées mourir pour briser les lignes ennemies, les Lanciers reçoivent l'ordre de résister. Peu importe la violence de l'assaut, ils doivent maintenir leurs positions jusqu'à ce que leurs supérieurs en décident autrement.

Cette responsabilité leur vaut une reconnaissance fragile. Une défense héroïque peut ouvrir la voie aux honneurs, mais une retraite prématurée ou une position abandonnée entraîne des châtiments cruels. Dans la hiérarchie Drow, on pardonne plus facilement la mort d'un soldat que son incapacité à remplir son devoir.

Pour les Lanciers les plus ambitieux, chaque bataille devient ainsi une épreuve dont dépend leur avenir. Ceux qui parviennent à survivre sans jamais céder peuvent espérer s'élever au-dessus de leur condition et conquérir enfin le droit de décider des combats qu'ils devront livrer.`}
            pouvoirs={[]}
          />
          <ClassCard
            image="1classe-arbaletrier"
            name="Arbalétrier" tier="Classe 1"
            description={`Chez les Drows, peu de combattants inspirent autant de respect que ceux qui maîtrisent l'arbalète. Leur vue exceptionnelle, leur adresse et leur capacité à analyser rapidement un affrontement en font des soldats particulièrement recherchés. À Charnaggen Morngha, rejoindre leurs rangs représente déjà une distinction que bien des guerriers ne connaîtront jamais.

Formés à exploiter les moindres avantages du terrain, les Arbalétriers apprennent à observer leurs adversaires avant de décocher le premier carreau. Leur précision leur permet de frapper depuis des positions éloignées, souvent dissimulées dans les ombres. Ils peuvent ainsi affaiblir une formation ennemie avant même que celle-ci ne réalise d'où provient l'attaque.

Cette spécialisation leur accorde une place enviable dans la hiérarchie militaire. Contrairement aux troupes envoyées au cœur de la mêlée, ils bénéficient d'une certaine protection, leur valeur justifiant qu'on évite de les exposer inutilement. Ce privilège demeure toutefois fragile : dans une société où chacun doit prouver son utilité, la moindre faiblesse peut coûter cher.

Les Arbalétriers savent que leur avenir dépend de leur adresse autant que de leur jugement. Car à Charnaggen Morngha, celui qui peut abattre un ennemi sans jamais s'exposer possède déjà un avantage considérable sur celui qui doit risquer sa vie pour en faire autant.`}
            pouvoirs={['Esquive passive', 'Poison sur arme']}
          />
          <ClassCard
            image="1classe-troupedechoc"
            name="Troupe de Choc" tier="Classe 1"
            description={`Dans les armées Drows, la gloire appartient rarement à ceux qui versent le plus de sang. Les membres de la Troupe de choc le savent mieux que quiconque. Envoyés au cœur des affrontements, là où les lignes se brisent et où les pertes sont les plus lourdes, ils occupent une place peu enviable dans la hiérarchie militaire. Aux yeux des officiers, ils ne sont souvent guère plus que de la chair à canon.

Armés pour le combat rapproché, ils apprennent à supporter la violence des charges et à poursuivre l'offensive malgré les blessures. Leur entraînement est brutal, mais l'expérience des batailles forge des guerriers capables de tenir tête à des adversaires autrement mieux considérés.

Pour beaucoup, cette condition nourrit une ambition tenace. Chaque victoire, chaque exploit et chaque bataille traversée représente une occasion de se distinguer de la masse et d'échapper au sort réservé aux soldats ordinaires.

Car si la société Drow accorde peu de valeur à ceux qui doivent s'exposer pour combattre, elle sait aussi reconnaître la puissance de ceux qui survivent assez longtemps pour devenir impossibles à ignorer.`}
            pouvoirs={[]}
          />
          <ClassCard
            image="1classe-prophetes"
            name="Prophètes" tier="Classe 1"
            description={`À Charnaggen Morngha, les Prophètes comptent parmi les premiers initiés aux arts occultes qui imprègnent la civilisation Drow. Leur apprentissage repose sur la maîtrise de la malepierre et de la malerune, deux sources de pouvoir dont les secrets se transmettent avec précaution. Manipuler de telles forces exige une discipline rigoureuse, car les mêmes énergies capables de préserver une vie peuvent également la consumer.

Leurs premières incantations révèlent toute l'étrangeté de cette magie. Ils apprennent à refermer les blessures, à faire jaillir les flammes ou à répandre des poisons insidieux. Certains sortilèges permettent même d'appeler des rats et des corbeaux porteurs de pestilence, créatures dont la présence rappelle l'influence de Pochas sur les traditions occultes Drows.

Malgré leurs connaissances, les Prophètes demeurent au commencement d'un long apprentissage. La malepierre peut se révéler aussi imprévisible que puissante, et chaque nouvelle découverte les rapproche de forces qu'ils ne comprennent pas encore entièrement. Leur talent leur ouvre néanmoins des perspectives enviables dans une société où le savoir magique constitue une source d'influence considérable.

Certains consacreront leur existence à percer les secrets des arcanes, tandis que d'autres chercheront dans les rites et les enseignements religieux une compréhension plus profonde des puissances qu'ils manipulent. Tous savent cependant qu'au-delà des premiers sortilèges se trouvent des connaissances que les maîtres de leur art ne partagent qu'avec les plus dignes.`}
            pouvoirs={['Malepierre et malerune de base', 'Invocation de rats et corbeaux pestilents']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 2">
          <ClassCard
            image="2classe-maitredarme"
            name="Maître d'Arme" tier="Classe 2"
            description={`Dans une société où la naissance, les alliances et l'influence déterminent souvent la place de chacun, les Maîtres d'arme font figure d'exception. Issus des rangs méprisés de la Troupe de choc, ils ont gagné leur ascension à la pointe de leurs armes, au terme d'innombrables batailles dont beaucoup de leurs compagnons ne sont jamais revenus.

Leur maîtrise du combat rapproché est devenue redoutable. Chaque affrontement a perfectionné leurs réflexes, leur endurance et leur connaissance des armes, jusqu'à faire d'eux des adversaires que même les officiers les plus aguerris hésitent à défier. Leur puissance est telle qu'ils peuvent désormais invoquer un Ogre Drow, colosse capable de fracasser les lignes ennemies et de combattre à leurs côtés.

Leur promotion leur accorde enfin les privilèges autrefois réservés à ceux qui les commandaient. On leur confie des guerriers, on sollicite leur expérience et leur présence sur le champ de bataille devient un atout précieux plutôt qu'une ressource sacrifiable.

Pourtant, leur ascension demeure inachevée. Les Maîtres d'arme ont arraché leur place parmi les officiers, mais les plus grands honneurs militaires restent à conquérir. Et nul ne connaît mieux qu'eux le prix du sang nécessaire pour les atteindre.`}
            pouvoirs={['Invocation d\'un Ogre Drow']}
          />
          <ClassCard
            image="2classe-coureurdegouts"
            name="Coureur d'Égouts" tier="Classe 2"
            description={`Sous les rues de Charnaggen Morngha s'étend un dédale de galeries, de conduits oubliés et de passages dont bien peu connaissent les secrets. C'est dans cet univers hostile que les Coureurs d'égouts perfectionnent leur art, abandonnant la discipline des formations militaires pour embrasser une guerre où la discrétion vaut davantage que la force.

Leur agilité exceptionnelle leur permet d'esquiver instinctivement les attaques et de se faufiler là où leurs adversaires peinent à les suivre. Passés maîtres dans l'art de la dissimulation, ils peuvent également masquer leur identité, circulant parmi les étrangers sans éveiller les soupçons. Leur connaissance des souterrains en fait des éclaireurs, des espions et des messagers particulièrement recherchés.

Leurs services sont précieux aux autorités Drows, qui leur confient des missions dont l'existence même doit parfois demeurer secrète. Leur rang leur accorde une liberté inconnue des Lanciers ordinaires, mais les expose également aux intrigues et aux rivalités qui agitent les profondeurs de la cité.

Certains se contentent de cette existence dans l'ombre. D'autres découvrent que les secrets qu'ils rapportent peuvent leur ouvrir les portes d'un cercle autrement plus redouté, où l'art de disparaître n'est que le prélude à celui de tuer.`}
            pouvoirs={['Esquive instinctive', 'Déguisement', 'Furtivité souterraine']}
          />
          <ClassCard
            image="2classe-arbaletrierlourd"
            name="Arbalétrier Lourd" tier="Classe 2"
            description={`Les Arbalétriers lourds comptent parmi les combattants les plus redoutés des armées Drows. Leur maîtrise de l'arbalète leur a permis de s'élever au-dessus des simples tireurs et d'obtenir une place enviable dans la hiérarchie militaire. Peu d'adversaires peuvent se vanter d'avoir survécu à leurs carreaux, et moins encore d'avoir découvert leur position avant qu'il ne soit trop tard.

Leur arme, d'une puissance exceptionnelle, peut transpercer les armures les plus résistantes et abattre des ennemis à des distances considérables. Lorsqu'une formation adverse menace de submerger leurs rangs, ils peuvent également déchaîner une véritable pluie de carreaux, transformant une avancée ennemie en un massacre.

Leur réputation leur accorde des privilèges que les soldats ordinaires ne peuvent qu'envier. On leur réserve les positions les plus avantageuses et leur laisse une liberté considérable dans la conduite de leurs engagements. Après tout, un Arbalétrier lourd vaut souvent davantage à l'abri des regards qu'au milieu d'une mêlée.

Leur adresse est devenue une arme aussi précieuse que leur arbalète. Certains finiront par servir les plus hautes instances de la Main noire, tandis que d'autres découvriront que les profondeurs abritent des créatures capables de rendre leurs embuscades plus terribles encore.`}
            pouvoirs={['Perce-armure', 'Pluie de carreaux']}
          />
          <ClassCard
            image="2classe-maitredeguerre"
            name="Maître de Guerre" tier="Classe 2"
            description={`Les Maîtres de guerre appartiennent à cette élite forgée dans les batailles les plus sanglantes, là où des légions entières ont été anéanties sans parvenir à les faire reculer. Leur ascension ne doit rien aux intrigues ou aux privilèges : elle s'est conquise au prix d'exploits que les générations de soldats se transmettent encore.

Leur maîtrise des armes et leur intelligence tactique font d'eux des commandants redoutables. Sous leurs ordres, les formations les plus éprouvées deviennent des remparts infranchissables. Lorsque les lignes menacent de céder, ils peuvent invoquer un Ogre Drow, colosse monstrueux dont la force dévastatrice suffit à renverser une charge et à semer la terreur parmi les assaillants.

Leur réputation leur a ouvert les portes des hautes sphères militaires. Les généraux sollicitent leurs conseils et les officiers leur confient les positions dont dépend le sort des campagnes. Leur présence sur un champ de bataille représente désormais une promesse de résistance que peu d'ennemis osent mettre à l'épreuve.

On raconte que certaines forteresses ont résisté à des sièges interminables sous leur commandement, jusqu'à ce que les assiégeants renoncent, épuisés et décimés. Car lorsqu'un Maître de guerre reçoit l'ordre de tenir une position, ce n'est généralement pas lui qui finit par céder.`}
            pouvoirs={['Invocation d\'un Ogre Drow', 'Tactique de siège']}
          />
          <ClassCard
            image="2classe-moine"
            name="Moine" tier="Classe 2"
            description={`Les Moines occupent une place singulière dans la société Drow. Considérés comme les enfants de Pochas, ils consacrent leur existence aux enseignements du dieu de la pestilence, dont ils portent les bénédictions jusque sur les champs de bataille. Pour eux, la maladie n'est pas seulement un fléau, mais une manifestation du pouvoir divin.

Armés de lourdes masses d'armes, ils avancent au milieu des combattants, répandant la corruption parmi leurs ennemis. Leurs malesphères libèrent des nuages de vapeurs toxiques, tandis que leurs malerunes leur permettent aussi bien de soigner leurs alliés que de déchaîner des flammes et des émanations maléfiques. Là où ils passent, la frontière entre guérison et contagion devient dangereusement incertaine.

Leur proximité avec Pochas leur confère une autorité particulière auprès des fidèles. On recherche leurs bénédictions autant qu'on redoute leur contact, car les forces qu'ils invoquent peuvent préserver une vie ou la condamner à une lente agonie.

Au sein des armées Drows, le Moine incarne une présence que les armes seules ne sauraient remplacer : celle d'un dieu dont les faveurs et les châtiments empruntent parfois le même visage.`}
            pouvoirs={['Malesphères toxiques', 'Soins de Pochas', 'Corruption divine']}
          />
          <ClassCard
            image="2classe-sorciergris"
            name="Sorcier Gris" tier="Classe 2"
            description={`Les Sorciers gris ont franchi les premières frontières des arts occultes pour accéder à des connaissances que peu de Drows osent approfondir. Leur maîtrise de la malepierre et de la malerune leur confère une place enviable parmi les adeptes des arcanes, mais leur réputation repose surtout sur les manifestations terrifiantes de leur magie.

Entre leurs mains, les malesphères libèrent d'épais nuages de vapeurs toxiques capables d'empoisonner des groupes entiers. Leur aura du Mali trouble les sens et les mouvements de leurs adversaires, rendant leurs attaques incertaines, jusqu'à parfois les paralyser complètement. Plus redoutable encore, leur furie démoniaque inflige des blessures dont le sang refuse de cesser de couler.

Sur les champs de bataille, les Sorciers gris sont autant recherchés que redoutés. Leur présence peut briser une offensive sans qu'ils aient à croiser le fer, tandis que leurs connaissances leur assurent une influence grandissante dans les cercles occultes.

Pourtant, les secrets qu'ils possèdent ne représentent qu'une fraction des puissances dissimulées dans les profondeurs de leur art. Au-delà de leur savoir se trouvent des mystères dont la maîtrise pourrait faire d'eux les plus terribles sorciers de leur peuple.`}
            pouvoirs={['Malesphères de zone', 'Aura du Mali', 'Furie démoniaque']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 3">
          <ClassCard
            image="3classe-arbaletrierdelamainnoire"
            name="Arbalétrier de la Main Noire" tier="Classe 3"
            description={`Au sein des armées Drows, la Main noire rassemble des combattants dont la réputation dépasse les frontières de leur cité. Parmi eux, les Arbalétriers occupent une place à part. Leur adresse est devenue si redoutable que certains récits leur attribuent des exploits qu'aucun tireur ordinaire ne saurait reproduire.

L'Arbalétrier de la Main noire a porté son art à des sommets presque inconcevables. Entre ses mains, l'arbalète devient un instrument de mort auquel peu d'armures peuvent résister. Son regard distingue les faiblesses d'une défense, ses carreaux trouvent leur cible au milieu du chaos et les arcanes viennent désormais renforcer un arsenal déjà terrifiant.

Sa présence sur un champ de bataille suffit parfois à bouleverser les plans d'une armée entière. Les officiers ennemis apprennent à craindre les hauteurs, les passages obscurs et jusqu'aux silhouettes immobiles qui se dessinent au loin. Car nul ne peut savoir avec certitude où se trouve un tel tireur, ni quel adversaire il a déjà choisi d'abattre.

Son rang lui confère une autorité et une liberté rarement accordées aux autres guerriers. Il n'est plus question de lui dicter où se placer ou quand ouvrir le feu. Ceux qui sollicitent son intervention savent qu'ils disposent d'une arme exceptionnelle, mais que son jugement demeure aussi précieux que ses carreaux.`}
            pouvoirs={['Carreaux magiques perce-armure', 'Tir de précision surnaturel']}
          />
          <ClassCard
            image="3classe-assassin"
            name="Assassin" tier="Classe 3"
            description={`L'Assassin appartient à cette poignée d'êtres dont les exploits ont depuis longtemps dépassé les frontières de la réalité et de la légende. Rois, généraux et grands dignitaires auraient péri de sa main, parfois au cœur même de bastions réputés inviolables.

Jadis maître de l'infiltration, il a perfectionné son art jusqu'à devenir une véritable incarnation de la mort silencieuse. Ses frappes atteignent les points les plus vulnérables avec une précision surnaturelle, capables d'infliger des blessures dévastatrices ou d'abattre un adversaire d'un seul coup. Il connaît des techniques d'assassinat dont les secrets ne sont transmis qu'aux plus redoutables adeptes de sa profession.

Mais sa plus grande force réside peut-être dans l'impossibilité de le reconnaître. Capable de disparaître à volonté, de changer de nom et d'endosser de nouvelles identités, il traverse les royaumes sous mille visages. Nul ne saurait dire combien de vies il a vécues, combien de cours il a infiltrées ou combien de souverains ont déjà partagé leur table avec leur futur bourreau.

Les plus puissants s'entourent de gardes, multiplient les précautions et condamnent parfois leurs propres serviteurs au moindre soupçon. Pourtant, pour l'Assassin, rien ne peut garantir leur sécurité. Car lorsqu'il a choisi sa cible, le véritable mystère n'est plus de savoir comment il parviendra jusqu'à elle, mais depuis combien de temps il se trouve déjà à ses côtés.`}
            pouvoirs={['Disparition à volonté', 'Frappe mortelle unique', 'Multiples identités']}
          />
          <ClassCard
            image="3classe-cavaleriescorpion"
            name="Cavalerie Scorpion" tier="Classe 3"
            description={`Les récits des guerres souterraines évoquent parfois une cavalière surgissant des ténèbres, accompagnée d'une créature dont la taille et la férocité semblent appartenir aux cauchemars. Ceux qui ont affronté une membre de la Cavalerie scorpion savent désormais qu'ils ne rendent pas justice à la terreur de son apparition.

Montée sur son destrier, elle manœuvre avec une rapidité déconcertante, harcelant ses adversaires de carreaux enduits de poisons mortels. Mais son véritable pouvoir réside dans l'invocation d'un scorpion gigantesque, compagnon de combat dont les pinces broient les armures et dont le dard fait trembler les guerriers les plus aguerris. Ensemble, ils peuvent briser des formations entières et transformer une retraite en déroute.

La cavalière s'est également forgé une réputation sinistre auprès des Nains. Elle connaît les faiblesses de leurs grandes machines de guerre et sait compromettre les mécanismes de leurs redoutables canons. Plus d'une forteresse réputée imprenable aurait ainsi vu ses défenses réduites au silence avant même le premier assaut.

Rares sont les ennemis qui oublient la rencontre d'une telle cavalière. Car lorsque les sabots résonnent dans les galeries et qu'une silhouette monstrueuse émerge à ses côtés, ce n'est plus une simple escarmouche qui s'annonce. C'est le souvenir d'une catastrophe que les survivants transmettront à leurs descendants.`}
            pouvoirs={['Carreaux empoisonnés', 'Invocation du scorpion géant', 'Sabotage des canons nains']}
          />
          <ClassCard
            image="3classe-gardenoir"
            name="Garde Noir" tier="Classe 3"
            description={`Il fut un temps où le Garde noir combattait parmi les soldats dont personne ne retenait le nom. De cette existence sacrifiable, il s'est élevé par des prouesses martiales si extraordinaires que les plus puissants dignitaires Drows lui confient désormais leur propre sécurité. Son ascension représente l'un des honneurs les plus difficiles à conquérir dans la hiérarchie militaire.

Sa maîtrise des armes est devenue légendaire, mais son véritable pouvoir dépasse les limites du combat ordinaire. Par un art mystérieux, il peut marquer des individus et des lieux, puis franchir instantanément les distances qui l'en séparent. Aucune muraille ne garantit son absence, aucun éloignement ne l'empêche de rejoindre celui qu'il protège ou poursuit.

Cette faculté fait de lui un gardien sans pareil, mais également une arme stratégique redoutable. Il peut surgir au cœur d'une forteresse, rejoindre un commandant menacé ou apparaître là où l'ennemi se croyait hors d'atteinte. Sa seule existence suffit à remettre en question les certitudes des plus grands stratèges.

Autrefois envoyé mourir pour protéger les puissants, le Garde noir est désormais celui dont ils espèrent la venue lorsque tout semble perdu. Et nul ne peut savoir si, quelque part dans les ombres, il n'a pas déjà marqué l'endroit où se jouera leur destin.`}
            pouvoirs={['Téléportation par marquage', 'Combat de garde d\'élite']}
          />
          <ClassCard
            image="3classe-cavalieredelamainnoire"
            name="Cavalière de la Main Noire" tier="Classe 3"
            description={`Les plus anciennes chroniques militaires Drows racontent des batailles où le jour disparut soudainement, engloutissant des armées entières dans une obscurité sans fin. Au cœur de ces récits apparaît une cavalière montée sur un lézard colossal, dont les griffes éventrent la pierre et dont la silhouette domine les champs de bataille.

Celle qu'on nomme volontiers fille de Kcaïcos a conquis sa renommée au prix d'innombrables affrontements. Sa monture et elle parcourent désormais des distances impossibles, surgissant sur des fronts que l'ennemi croyait hors de leur portée.

Mais sa véritable légende naît lorsque les ténèbres s'étendent. La nuit exalte sa force, ses réflexes et sa férocité, jusqu'à faire d'elle une adversaire presque surnaturelle. D'un pouvoir que nul ne sait véritablement expliquer, elle peut imposer une nuit éternelle à ses ennemis, transformant le champ de bataille en un royaume d'ombres où chaque instant lui appartient.

On raconte que des cités ont ouvert leurs portes sans combattre en apprenant son approche. Que des armées ont abandonné leurs étendards lorsque le ciel s'est obscurci en plein jour. Car lorsque la Cavalière de la Main noire apporte la nuit, personne ne peut promettre le retour de l'aube.`}
            pouvoirs={['Monture : lézard colossal', 'Nuit éternelle de zone', 'Puissance nocturne décuplée']}
          />
          <ClassCard
            image="3classe-sorciernoir"
            name="Sorcier Noir" tier="Classe 3"
            description={`Certains secrets de la malepierre ne devraient jamais quitter les profondeurs où ils furent découverts. Le Sorcier noir les a pourtant arrachés aux ténèbres, au prix d'une existence consacrée à des arts que même les plus grands érudits Drows redoutent d'étudier. Il est devenu une anomalie vivante, une présence devant laquelle la magie elle-même semble perdre ses limites.

À son approche, la lumière décline et l'air se charge d'une odeur de soufre et de chair corrompue. La foudre déchire les voûtes souterraines, des pluies acides rongent la pierre et des rivières de corruption engloutissent les armées. Il peut libérer des pestilences dont les victimes deviennent les instruments de leur propre destruction. Mais parmi ses incantations, aucune n'inspire autant d'effroi que le Sang de Pochas, manifestation d'une puissance divine dont les véritables effets demeurent entourés de mystère.

Son existence bouleverse les rapports de force au sein de la société Drow. Les puissantes dirigeantes recherchent ses faveurs sans jamais prétendre le contrôler, tandis que les armées ennemies préfèrent abandonner leurs positions plutôt que de risquer sa colère.

Là où le Sorcier noir a exercé son art, les blessures du monde ne guérissent pas. Des siècles plus tard, certaines galeries continuent de suinter l'acide, et nul ne sait si les murmures qui s'en échappent appartiennent aux morts ou à quelque chose qui attend encore d'être libéré.`}
            pouvoirs={['Foudre souterraine', 'Pluie acide', 'Sang de Pochas']}
          />
          <ClassCard
            image="3classe-encenseuse"
            name="Encenseuse" tier="Classe 3"
            description={`Lorsque les armées Drows marchent sous les auspices de Pochas, il arrive qu'une silhouette portant un encensoir colossal prenne place parmi leurs rangs. L'Encenseuse est l'une des plus hautes incarnations du culte de la pestilence, une figure dont les bénédictions sont recherchées avec ferveur et dont les ennemis prononcent le nom avec effroi.

Son arme sacrée renferme une corruption que nul alchimiste ne saurait reproduire. Chaque coup peut transmettre une peste dévastatrice, tandis que ses mouvements libèrent d'épais nuages de spores toxiques qui enveloppent les combattants. Sous les volutes de son encensoir, les armures deviennent inutiles contre un ennemi qui s'insinue dans les poumons et le sang.

Elle conserve la maîtrise des malerunes et des rites de guérison, mais c'est désormais à travers son arme que s'exprime la véritable étendue de sa puissance. Pour les fidèles, les vapeurs qui l'entourent sont le souffle même de Pochas, et son passage annonce autant la faveur divine que le jugement du dieu.

On raconte qu'après certaines batailles, les armes se sont tues depuis longtemps lorsque les premières victimes commencent à tomber. Car l'Encenseuse n'a pas besoin de remporter tous ses combats : il lui suffit parfois d'avoir traversé le champ de bataille pour que la peste achève son œuvre.`}
            pouvoirs={['Encensoir de pestilence', 'Nuages de spores toxiques', 'Soins de Pochas']}
          />
          <ClassCard
            image="3classe-ombre-de-glace"
            name="Sombrecoeur" tier="Classe 3"
            description={`Jadis tombée au combat après avoir inscrit son nom parmi les plus redoutables combattantes de l'Empire Drow, elle fut arrachée au repos éternel par des forces dont les secrets demeurent jalousement gardés. Lorsqu'elle ouvrit de nouveau les yeux, son cœur ne battait plus et son sang avait perdu toute chaleur.

Depuis sa résurrection, une puissance glaciale habite sa chair. Là où elle avance, le givre gagne la pierre et le souffle des vivants se change en vapeur. Elle peut dresser d'immenses murailles de glace pour emprisonner ses ennemis, briser leurs assauts ou transformer le champ de bataille en un tombeau gelé. Sa maîtrise des armes, déjà exceptionnelle de son vivant, semble désormais affranchie de la douleur et de la fatigue.

Elle chevauche une créature bipède aux allures prédatrices, dont les foulées dévorent les distances et dont les cris résonnent longtemps après son passage. Ensemble, elles surgissent au milieu des armées comme une vision de cauchemar.

Certains prétendent que la Sombrecoeur ne peut plus mourir, tandis que d'autres murmurent que sa résurrection exige un tribut que nul mortel ne pourrait concevoir.

Une seule certitude demeure : la mort l'a déjà réclamée une fois. Désormais, c'est elle qui vient chercher les autres.`}
            pouvoirs={['Murailles de glace', 'Monture bipède prédatrice', 'Résurrection mystérieuse']}
          />
        </ClassAccordion>

      </div>
    </InnerLayout>
  )
}
