import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import ImageLightbox from '@/components/ImageLightbox'
import ClassAccordion from '@/components/ClassAccordion'
import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Les Humains — Terres Perdues' }

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
          src={assetPath(`/humains/${image}.${imageExt}`)}
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
        title="Les Humains"
        subtitle="Royaumes"
        image={assetPath('/backgrounds/Zeidenburg.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Royaumes' },
          { label: 'Les Humains' },
        ]}
        leftText={
          <p>
            De tous les peuples de Terres-Perdues, les Humains comptent parmi les plus ambitieux.
            Leur histoire est celle d&apos;une civilisation qui, à force de conquêtes, d&apos;alliances
            et de sacrifices, a bâti un Empire dont la puissance inspire autant l&apos;admiration
            que la méfiance.
          </p>
        }
        rightText={
          <>
            <p>
              Fiers de leurs réalisations, ils se considèrent comme les héritiers d&apos;une grande
              tradition de courage, de justice et de piété, qu&apos;ils entendent préserver pour les
              générations futures.
            </p>
            <p style={{ marginTop: '1em' }}>
              D&apos;apparence variée, les Humains présentent une grande diversité de tailles, de
              silhouettes et de traits physiques. Leur existence est relativement courte
              comparativement à celle de certains autres peuples, mais cette fragilité semble
              nourrir leur désir d&apos;accomplissement. Artisans, soldats, marchands, érudits et
              religieux contribuent chacun à la grandeur d&apos;une civilisation où les réalisations
              personnelles occupent une place importante.
            </p>
          </>
        }
        extraText={
          <div style={{ columns: '2', columnGap: '3rem' }}>
            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Société et traditions</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                La société humaine repose sur un profond attachement à l&apos;ordre, aux traditions et au mérite. Contrairement
                à d&apos;autres peuples où la naissance détermine largement le rang social, l&apos;Empire valorise les accomplissements
                individuels. Un simple soldat peut accéder aux plus hauts commandements par ses exploits, tout comme un artisan
                talentueux peut gagner la reconnaissance des plus grands dignitaires. La richesse et les origines familiales
                conservent leur importance, mais aucun titre ne saurait remplacer entièrement la compétence et les services
                rendus à l&apos;Empire.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Les guildes occupent une place essentielle dans cette organisation, offrant à leurs membres formation,
                protection et possibilités d&apos;avancement. Elles encouragent l&apos;excellence et constituent souvent les principaux
                chemins vers la reconnaissance sociale. Cette méritocratie demeure toutefois imparfaite : les faveurs, les
                alliances et les ambitions personnelles peuvent parfois ouvrir des portes que le talent seul ne suffit pas
                à franchir.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Pouvoir impérial et politique</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                À la tête de cette civilisation se trouve l&apos;Empereur, symbole de l&apos;unité et de la puissance humaine.
                Son autorité s&apos;étend sur les affaires politiques, militaires et administratives, mais son règne doit
                composer avec les nombreuses institutions qui contribuent à la prospérité de l&apos;Empire.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                L&apos;Académie de magie, les guildes d&apos;artisans et les grandes associations marchandes cherchent toutes à
                faire valoir leurs intérêts auprès du pouvoir impérial. Même la Guilde des voleurs, dont l&apos;existence est
                officiellement condamnée, possède ses réseaux et exerce une influence que certains dirigeants préfèrent ne
                pas ignorer. Alliances, rivalités et négociations façonnent ainsi la politique humaine, où les services
                rendus à l&apos;Empire peuvent parfois compter davantage que les titres de noblesse.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Religion et culte de Caria</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '1em' }}>
                L&apos;Église de Caria constitue l&apos;autre grand pilier de la société humaine. Indépendante du pouvoir impérial,
                elle possède sa propre hiérarchie et veille à préserver les enseignements de la déesse. Ses prêtres, ses
                clercs et ses hauts dignitaires exercent une influence qui dépasse largement les murs des temples. En période
                de crise, le Clergé représente souvent une force d&apos;unité capable de rappeler aux différentes factions
                qu&apos;elles appartiennent à un même peuple.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                Cette foi occupe une place centrale dans la perception que les Humains ont d&apos;eux-mêmes. Ils aspirent à
                incarner les vertus de Caria et à faire rayonner leur civilisation au-delà de leurs frontières. Leurs
                chevaliers défendent les faibles, leurs missionnaires portent la parole divine et leurs légions protègent
                les terres impériales. Pourtant, la grandeur de l&apos;Empire repose aussi sur des décisions moins glorieuses.
                Lorsque les intérêts de l&apos;État sont menacés, certains dirigeants n&apos;hésitent pas à employer des moyens
                que leurs propres lois et traditions condamneraient publiquement.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Relations avec les autres peuples</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Nains —</strong> Les Humains entretiennent des relations généralement cordiales avec les Nains, dont
                ils admirent le savoir-faire et les réalisations artisanales. Les deux peuples partagent un profond attachement
                à l&apos;honneur et au travail bien fait, mais leurs tempéraments provoquent parfois quelques frictions. Les Humains
                reprochent volontiers aux Nains leur entêtement et leur fidélité excessive aux traditions, particulièrement
                lorsque celles-ci font obstacle à une solution plus pragmatique.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Elfes —</strong> Ils reconnaissent également la noblesse des origines elfiques et la richesse de leur
                héritage. Toutefois, la hauteur avec laquelle certains Elfes considèrent les affaires des peuples mortels
                leur paraît souvent insupportable. Là où un Humain voit l&apos;urgence d&apos;agir, un Elfe peut envisager des décennies
                de réflexion. Cette différence de perception du temps nourrit l&apos;impression que les Elfes sont hautains,
                pompeux et parfois indifférents aux souffrances de leurs voisins.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.75em' }}>
                <strong>Drows —</strong> Les Drows suscitent un mépris beaucoup plus profond. Considérés comme des ennemis
                de l&apos;ordre impérial, ils sont généralement combattus et tenus à l&apos;écart. Les Humains ne peuvent toutefois
                nier leur remarquable instinct de survie et leur débrouillardise. Il arrive que des intérêts communs favorisent
                certaines collaborations discrètes, mais ces ententes demeurent fragiles, marquées par la méfiance et les
                préjugés.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Morts-Vivants —</strong> Quant aux Morts-Vivants, ils représentent tout ce que la civilisation humaine
                prétend combattre. Leur existence même constitue une offense aux enseignements de Caria, et leur emprise sur
                les forces obscures leur vaut une haine presque universelle. Ironiquement, leur organisation militaire et leurs
                ambitions impériales présentent des ressemblances troublantes avec celles des Humains, une comparaison que ces
                derniers accueillent rarement avec enthousiasme.
              </p>
            </section>

            <section style={{ breakInside: 'avoid', marginBottom: '2rem' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Ambitions impériales</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                L&apos;Empire poursuit une ambition qui dépasse la simple conquête territoriale : assurer la pérennité de sa
                civilisation et faire reconnaître sa grandeur. Ses citoyens peuvent servir cette cause par la foi, les armes,
                le commerce ou des voies beaucoup moins honorables. Derrière les étendards, les temples et les discours
                glorieux se trouve un peuple aussi capable de compassion que de cruauté, dont les plus nobles aspirations
                côtoient parfois les ambitions les plus sombres.
              </p>
            </section>

            <section style={{ breakInside: 'avoid' }}>
              <h3 className="font-title" style={{ fontSize: '1.6rem', color: '#425d34', marginBottom: '0.5rem' }}>Suggestions de noms</h3>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.5em' }}>
                <strong>Masculins :</strong> Aurélian, Cassian, Valérien, Lucian, Severus, Léandre, Alaric, Conrad
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a', marginBottom: '0.5em' }}>
                <strong>Féminins :</strong> Livia, Octavie, Aliénor, Isadora, Lysandre, Fiora, Héléna, Blanche
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 15, color: '#2a2a2a' }}>
                <strong>Noms de famille :</strong> de la Skeuil, Valcor, Montferrand, Rochefort, Desforges, d&apos;Aubrecourt, Corvinius
              </p>
            </section>
          </div>
        }
      />

      <div style={{ backgroundColor: '#2d4022', padding: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="font-title" style={{ fontSize: '2.5rem', color: '#e9e4d2', marginBottom: '60px' }}>Classes et évolutions</h2>
        <ImageLightbox
          src={assetPath('/arbre-humains.jpg')}
          alt="Arbre des Humains"
          width={1920}
          height={1080}
          className="h-auto object-contain rounded-2xl"
          style={{ width: '80%' }}
        />
      </div>

      <div style={{ padding: '5%' }}>

        <ClassAccordion label="Classes 1">
          <ClassCard
            image="1classe-moine" imageExt="webp"
            name="Moine" tier="Classe 1"
            description={`Les moines sont des hommes et des femmes ayant choisi de consacrer une part importante de leur existence au culte de Caria. Sans nécessairement occuper une fonction au sein du clergé, ils en représentent souvent le visage le plus accessible auprès de la population. On les retrouve dans les temples, les hospices et les lieux de pèlerinage, mais également sur les routes lorsque leur devoir les appelle ailleurs.

Leur foi s'exprime avant tout par leurs gestes. Ils offrent soins et assistance à ceux qui en ont besoin, participent aux cérémonies et veillent à transmettre les enseignements de Caria à ceux qui souhaitent les entendre. Certains consacrent leur temps à l'étude et à la prière, tandis que d'autres préfèrent mettre leurs connaissances au service de leur communauté.

Bien qu'ils ne soient pas des combattants de vocation, les moines ne sont pas pour autant sans défense. Leur maîtrise de certains pouvoirs accordés par Caria leur permet de protéger leurs compagnons, de soulager leurs blessures et de faire face aux forces qui menacent les fidèles. Cette proximité avec le divin leur vaut généralement le respect de la population, qui voit en eux des intermédiaires entre les préoccupations du quotidien et les préceptes de la déesse.`}
            pouvoirs={['Soins de Caria', 'Protection divine']}
          />
          <ClassCard
            image="1classe-soldat"
            name="Soldat" tier="Classe 1"
            description={`Les soldats constituent le cœur des forces armées et forment souvent le premier rempart face aux menaces qui pèsent sur leur peuple. Ils apprennent à manier les armes, à tenir une position et à combattre aux côtés de leurs semblables. Leur formation repose moins sur la recherche de prouesses individuelles que sur la capacité à demeurer efficace lorsque le combat s'éternise.

Tous ne rejoignent pas les rangs pour les mêmes raisons. Certains cherchent à servir leur cité, d'autres y voient une façon de gagner leur vie ou de se forger une réputation. Les soldats viennent ainsi de milieux variés et portent chacun leur propre histoire.

La vie militaire demeure toutefois exigeante. La discipline, l'entraînement et l'obéissance occupent une place importante dans leur quotidien. Avec le temps, ils apprennent à compter sur leurs compagnons autant que sur leurs propres aptitudes. Ceux qui poursuivent cette voie découvrent qu'un soldat ne se définit pas seulement par les batailles qu'il remporte, mais aussi par celles qu'il accepte de livrer pour les autres.`}
            pouvoirs={['Discipline militaire']}
          />
          <ClassCard
            image="1classe-mage"
            name="Mage" tier="Classe 1"
            description={`Les mages sont ceux qui ont entrepris l'étude des forces arcaniques et appris à les plier à leur volonté. Là où la magie demeure mystérieuse ou inquiétante pour une partie de la population, ils cherchent à en comprendre les principes afin d'en faire un outil qu'ils peuvent maîtriser.

Leur apprentissage exige autant d'études que de pratique. Ils apprennent à reconnaître les manifestations de la magie, à canaliser son énergie et à produire leurs premiers sortilèges sans perdre le contrôle des forces qu'ils manipulent. Les erreurs peuvent être coûteuses et rappellent à chacun que les arcanes ne se laissent pas dompter sans effort.

À mesure que leurs connaissances progressent, les mages découvrent l'étendue des possibilités qui s'offrent à eux. Certains sont attirés par la puissance qu'ils peuvent en tirer, tandis que d'autres cherchent avant tout à approfondir leur compréhension des arcanes.

Cette recherche finit souvent par orienter leur apprentissage. Car si tous partagent les mêmes fondements, rares sont les mages capables d'explorer toutes les facettes de la magie avec une égale maîtrise.`}
            pouvoirs={['Sorts magiques impériaux de base']}
          />
          <ClassCard
            image="1classe-troubadour"
            name="Troubadour" tier="Classe 1"
            description={`Les troubadours ont appris à tirer profit des talents qui les distinguent du commun des mortels. Certains manient les mots avec assez d'adresse pour captiver une assemblée, tandis que d'autres préfèrent la musique, le chant ou les arts de la scène. Quelques-uns exercent des talents plus discrets, où l'agilité des doigts importe davantage que celle de la langue.

Ils parcourent souvent les routes, les places publiques et les établissements où se rassemblent voyageurs et habitants. Leur art peut leur offrir le gîte et le couvert, leur ouvrir certaines portes ou simplement détourner l'attention au moment opportun. Avec le temps, ils apprennent surtout à reconnaître les occasions où leurs aptitudes peuvent leur être utiles.

Cette vie les place au contact de gens de toutes provenances. Les troubadours peuvent ainsi devenir porteurs de nouvelles, conteurs, artistes, négociateurs ou filous selon les circonstances et les choix de chacun.

Tous partagent néanmoins une même réalité : leur talent constitue leur principal outil. Qu'ils choisissent d'en vivre honnêtement ou d'en faire un instrument de tromperie leur appartient entièrement.`}
            pouvoirs={['Chant de courage', 'Inspiration alliée']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 2">
          <ClassCard
            image="2classe-pretre"
            name="Prêtre" tier="Classe 2"
            description={`Les prêtres ont placé leur existence au service de Caria et de ses préceptes. Là où les moines apprennent à vivre leur foi, ils en deviennent les gardiens et les porte-paroles, assumant une place reconnue au sein du culte de la déesse.

Ils président aux cérémonies, accompagnent les fidèles et veillent à la transmission des enseignements de Caria. Leur dévotion leur permet également de puiser plus profondément dans les pouvoirs accordés par la déesse. Entre leurs mains, des blessures graves peuvent être refermées et ceux que l'on croyait perdus peuvent parfois être arrachés à leur sort.

Cette proximité avec Caria leur vaut une place particulière auprès des fidèles. Certains parcourent les terres pour porter ses enseignements et ses bienfaits là où ils sont nécessaires, tandis que d'autres consacrent leur existence aux temples et aux affaires du clergé.

Lorsqu'un prêtre invoque le pouvoir de Caria, il ne fait donc plus que professer sa foi : il offre aux mortels un aperçu de ce qu'elle peut accomplir.`}
            pouvoirs={['Soins divins avancés', 'Pouvoir de Caria']}
          />
          <ClassCard
            image="2classe-flagellant"
            name="Flagellant" tier="Classe 2"
            description={`Les flagellants suivent une voie austère où la foi se mesure autant dans les actes que dans les sacrifices consentis. Ils consacrent leur existence à combattre le mal et considèrent que certaines fautes exigent davantage que des prières pour être expiées.

Leur propre corps devient parfois l'instrument de cette conviction. Par la douleur et les blessures qu'ils s'infligent, ils parviennent à puiser dans une ferveur qui décuple la violence de leurs coups. Chaque sacrifice leur permet de frapper avec une force renouvelée, au risque de pousser leur enveloppe mortelle au-delà de ce qu'elle peut supporter.

Cette conception de la foi les mène souvent loin des temples, là où les préceptes de Caria doivent être défendus par les armes. Ils traquent les manifestations du mal et affrontent ceux qu'ils considèrent comme une menace pour les fidèles.

Respectés pour leur dévotion autant que redoutés pour leurs méthodes, les flagellants rappellent que servir Caria peut parfois exiger de verser son propre sang avant celui de l'ennemi.`}
            pouvoirs={['Ferveur sacrée', 'Coups amplifiés par le sacrifice']}
          />
          <ClassCard
            image="2classe-barbare"
            name="Barbare" tier="Classe 2"
            description={`Les barbares ont appris à combattre loin des méthodes qui régissent les armées et les ordres militaires. Là où d'autres comptent sur les formations et les commandements, ils puisent dans leur force, leur endurance et leur instinct. Pour eux, le champ de bataille est une épreuve où survivre et terrasser son adversaire constituent les seules règles qui importent vraiment.

Cette voie leur vaut une réputation qui oscille entre méfiance et admiration. Pourtant, tous ne viennent pas des terres sauvages et ne méprisent pas la civilisation. Ils ont simplement appris que certaines batailles ne se remportent ni par l'ordre ni par la discipline.

À force d'affrontements, les barbares découvrent en eux des ressources que peu de combattants peuvent atteindre. Certains parviennent même à abandonner momentanément leur enveloppe humaine pour adopter celle de l'ours, faisant de la force de la bête une extension de la leur.

Souvent employés comme troupes de choc, ils sont de ceux que l'on envoie pour briser une ligne ou tenir lorsque d'autres reculeraient. Qu'ils viennent des terres sauvages ou des cités, rares sont ceux qui souhaitent se trouver devant eux lorsqu'ils cessent de retenir la bête qui sommeille en eux.`}
            pouvoirs={['Rage barbare', 'Forme de l\'ours']}
          />
          <ClassCard
            image="2classe-chevalier"
            name="Chevalier" tier="Classe 2"
            description={`Les chevaliers représentent l'aboutissement de la formation militaire de nombreux soldats. Là où certains font du combat leur métier, ils choisissent d'en faire un devoir. Porter ce titre signifie désormais représenter un ordre, une cause ou une autorité jusque sur les champs de bataille.

Leur formation en fait des combattants accomplis, capables de se battre à pied comme à cheval. Protégés par de lourdes armures, ils peuvent encaisser des coups qui auraient raison de soldats moins préparés. Ils savent également concentrer leurs efforts sur leur défense et réduire, pendant un temps, la violence des attaques qui les atteignent.

Cette résistance leur permet de tenir lorsque les rangs commencent à céder. Ils protègent leurs compagnons, rallient ceux qui hésitent et se portent là où leur présence peut changer le cours d'un affrontement. Lorsque le danger approche, on s'attend à ce qu'ils soient parmi les premiers à avancer et les derniers à reculer.

Le titre ne dicte toutefois ni leur cause ni leurs convictions. Chaque chevalier doit choisir ce qu'il entend défendre et jusqu'où il est prêt à aller pour le faire. Car avec le temps, ce ne sont plus leurs armes qui déterminent ce qu'ils deviendront, mais les combats qu'ils choisiront de mener.`}
            pouvoirs={['Combat monté', 'Réduction des dégâts reçus']}
          />
          <ClassCard
            image="2classe-magedambre"
            name="Mage d'Ambre" tier="Classe 2"
            description={`Les mages d'ambre ont choisi d'explorer la magie pour la puissance qu'elle peut leur offrir. Ils concentrent leurs recherches sur les forces capables d'altérer, de détruire et de vaincre, cherchant sans cesse à repousser les limites de ce qu'ils peuvent accomplir par les arcanes.

Cette recherche ne repose pas uniquement sur la force de leurs sortilèges. Les mages d'ambre étudient la manière dont l'énergie magique peut être concentrée et employée avec efficacité. Leur maîtrise de l'acide en est l'une des manifestations les plus reconnaissables, leur permettant de ronger aussi bien la chair que les protections de leurs adversaires.

Cette orientation leur vaut une réputation de redoutables praticiens lorsque la magie doit servir au combat. Pour certains, la puissance constitue un moyen de se protéger ou de servir une cause; pour d'autres, son acquisition représente une fin en soi.

Tous savent néanmoins que la recherche de puissance possède ses dangers. Plus ils cherchent à repousser les limites des arcanes, plus les conséquences d'une erreur peuvent devenir importantes.`}
            pouvoirs={['Sorts d\'acide', 'Magie offensive']}
          />
          <ClassCard
            image="2classe-magedamethyste"
            name="Mage d'Améthyste" tier="Classe 2"
            description={`Les mages d'améthyste refusent généralement de réduire les arcanes à une seule de leurs applications. Ils cherchent plutôt à comprendre la magie dans son ensemble, étudiant ses principes, ses interactions et les nombreuses formes qu'elle peut adopter.

Leur apprentissage les pousse à développer un éventail de connaissances qui leur permet d'adapter leurs sortilèges aux situations auxquelles ils sont confrontés. Ils s'intéressent autant aux moyens de contrôler les forces arcaniques qu'à ceux permettant de les employer pour attaquer, se défendre ou soutenir leurs alliés.

La glace occupe une place particulière dans leurs études. Ils apprennent à en exploiter les propriétés pour blesser leurs adversaires, mais également pour entraver leurs mouvements et exercer un contrôle sur leur environnement.

Cette approche fait des mages d'améthyste des praticiens polyvalents. Là où d'autres recherchent la maîtrise d'une facette particulière des arcanes, ils cherchent à comprendre comment chacune peut servir les autres.`}
            pouvoirs={['Sorts de glace', 'Contrôle de terrain']}
          />
          <ClassCard
            image="2classe-rodeur" imageExt="webp"
            name="Rôdeur" tier="Classe 2"
            description={`Les rôdeurs ont fait de l'observation, de la patience et de la ruse leurs principales armes. Experts de la traque, ils savent suivre une cible sur de longues distances, anticiper ses déplacements et attendre le moment où elle sera la plus vulnérable.

Cette connaissance de leurs adversaires constitue leur plus grand avantage. En observant leurs mouvements et leur manière de combattre, les rôdeurs apprennent à identifier leurs faiblesses et à exploiter les points où une attaque produira le plus de dégâts. Entre leurs mains, un coup précis vaut souvent mieux qu'une succession d'assauts.

Leur maîtrise de la discrétion et de l'assassinat leur permet également d'éliminer une cible avant qu'elle ne puisse donner l'alerte. Habitués à opérer seuls, ils savent approcher leurs ennemis sans être remarqués et disparaître lorsque leur tâche est accomplie.

Éclaireurs, chasseurs ou assassins, les rôdeurs sont rarement les premiers que l'ennemi remarque. Ils sont plutôt ceux qui l'observent depuis assez longtemps pour savoir exactement où frapper.`}
            pouvoirs={['Pistage', 'Coup dans le dos']}
          />
          <ClassCard
            image="2classe-barde"
            name="Barde" tier="Classe 2"
            description={`Les bardes ont choisi de perfectionner leurs talents au grand jour. Musiciens, conteurs, orateurs ou artistes, ils savent capter l'attention d'une assemblée et employer leur art pour susciter chez ceux qui les écoutent bien davantage qu'un simple divertissement.

Leur présence accompagne les fêtes et les rassemblements, mais leur influence ne s'arrête pas aux tavernes et aux places publiques. Une chanson peut redonner courage à des compagnons épuisés, un récit raviver leur détermination. Leur maîtrise de la musique produit parfois des effets qui dépassent les mots. Une mélodie peut apaiser une bête sauvage, tandis qu'un accord soudain peut désorienter leurs ennemis et les laisser momentanément sans réaction. Sur le champ de bataille, leur art devient ainsi une arme à part entière.

Les bardes ne dépendent toutefois pas uniquement de leur musique pour se défendre. Habitués aux routes et aux dangers qui les accompagnent, ils développent souvent une remarquable maîtrise de l'arc, leur permettant de combattre à distance tout en soutenant leurs compagnons.

Certains recherchent les grandes scènes et la reconnaissance, tandis que d'autres mettent leurs talents au service d'une cause ou de leurs compagnons. Tous savent cependant qu'une voix capable d'être entendue peut parfois avoir autant de poids qu'une lame.`}
            pouvoirs={['Magie musicale', 'Arc de barde']}
          />
        </ClassAccordion>

        <ClassAccordion label="Classes 3">
          <ClassCard
            image="3classe-cardinal"
            name="Cardinal" tier="Classe 3"
            description={`La Cardinal se tient au sommet du culte de Caria, là où la foi semble parfois se confondre avec le divin. Rares sont celles et ceux qui atteignent une telle proximité avec la déesse et, pour les fidèles qui croisent sa route, il devient difficile de savoir où s'arrête la dévotion et où commence la volonté de Caria.

Entre ses mains, les blessures se referment et les maux qui résistent aux autres guérisseurs peuvent être vaincus. Mais son pouvoir dépasse celui de préserver la vie. Lorsque Caria le permet, la Cardinal peut rappeler une âme ayant franchi le seuil de la mort et rendre aux vivants celui que tous croyaient perdu.

Là où elle marche, les ombres reculent. Sa lumière peut dissiper les ténèbres, repousser les forces qui s'y dissimulent et rappeler aux ennemis de Caria que certaines flammes ne peuvent être étouffées.

Peu de mortelles peuvent prétendre avoir reçu de tels dons. Aussi, lorsque la Cardinal accomplit l'impossible, certains ne voient plus devant eux une simple servante de Caria, mais la main de la déesse elle-même.`}
            pouvoirs={['Résurrection des alliés', 'Lumière divine de zone']}
          />
          <ClassCard
            image="3classe-clerc"
            name="Clerc" tier="Classe 3"
            description={`Le clerc est un combattant ayant appris à faire de sa foi un rempart plutôt qu'une arme de vengeance. Là où le flagellant cherchait autrefois l'expiation par l'affrontement, il met désormais sa force au service de ceux qui ne peuvent se défendre eux-mêmes.

Sa dévotion à Caria accompagne chacun de ses combats. Il se dresse entre ses compagnons et le danger, accepte les blessures qui leur étaient destinées et oppose aux ennemis de la foi autant sa détermination que ses armes. Sa maîtrise du combat se conjugue aux pouvoirs que lui accorde la déesse, faisant de lui l'un des plus redoutables défenseurs de son culte.

Sa foi ne nourrit plus la colère qui animait autrefois le Flagellant. Elle est devenue résolution. Le Clerc se place entre ses alliés et leurs ennemis, accepte les blessures qui leur étaient destinées et poursuit le combat là où d'autres auraient depuis longtemps succombé.

Lorsque les armes ne suffisent plus, Caria répond à son dévouement. Par sa volonté, il peut protéger ses compagnons contre les éléments et leur permettre de résister à des forces qui auraient raison de combattants ordinaires. Plus encore, il peut offrir une part de sa propre vitalité pour préserver celle d'un autre, faisant du sacrifice une ultime expression de sa foi.

Peu importe l'ennemi qui se dresse devant lui, le Clerc n'a pas besoin d'être invincible. Il lui suffit de demeurer debout assez longtemps pour que ceux derrière lui puissent l'être encore.`}
            pouvoirs={['Bouclier divin', 'Transfert de vitalité']}
          />
          <ClassCard
            image="3classe-inquisiteur"
            name="Inquisiteur" tier="Classe 3"
            description={`L'Inquisitrice est l'un des instruments les plus redoutés du culte de Caria. Là où d'autres cherchent encore à ramener les égarés vers la lumière, elle traque les corruptions qu'elle juge trop profondes pour être pardonnées. Peu empruntent cette voie jusqu'à son terme, car elle exige une conviction capable de survivre au doute comme à la peur.

Sa chasse la mène souvent contre ceux qui détournent les forces arcaniques à des fins qu'elle considère impies. Avec le temps, elle apprend à résister à leurs sortilèges et à briser les conditions nécessaires à leur magie. Lorsqu'elle impose le silence autour d'elle, les paroles s'éteignent et les incantations meurent avant même d'avoir pu prendre forme.

Face aux cultes interdits, aux créatures corrompues et aux mages qu'elle pourchasse, l'Inquisitrice agit avec une efficacité qui nourrit autant sa légende que la crainte qu'elle inspire. Sa présence annonce rarement la rédemption. Elle signifie plutôt que le temps du jugement est venu.

Car lorsque l'Inquisitrice désigne quelque chose comme une souillure, elle ne cherche plus à la contenir. Elle cherche à faire en sorte qu'il n'en reste rien.`}
            pouvoirs={['Résistance magique', 'Silence de zone', 'Contre-sort']}
          />
          <ClassCard
            image="3classe-barbaredekhislev"
            name="Barbare de Khislev" tier="Classe 3"
            description={`Le barbare de Khislev est de ceux dont on prononce rarement le nom sans évoquer les épreuves qui l'ont façonné. Dans le royaume de glace, seuls quelques élus sont appelés à suivre les rites qui permettent d'atteindre ce rang. Beaucoup disparaissent dans les étendues gelées. Rares sont ceux qui en reviennent, et aucun n'en ressort véritablement indemne.

Celui qui survit a appris que la force ne réside pas uniquement dans la puissance du corps. Elle appartient aussi à celui dont la volonté refuse de céder lorsque le froid, la douleur et l'épuisement ont emporté tout le reste. À Khislev, cette force se gagne et commande le respect.

Les épreuves éveillent également en lui un lien avec l'ours polaire, incarnation de la puissance qui règne sur ces terres. Lorsqu'il en adopte la forme, il ne semble plus simplement emprunter celle de la bête : il devient pour un temps quelque chose que les terres de Khislev elles-mêmes semblent avoir enfanté.

Peu peuvent prétendre avoir survécu à cette voie. Lorsque l'un d'eux quitte le royaume de glace, les récits de son passage voyagent souvent plus vite que lui.`}
            pouvoirs={['Résistance froid +50', 'Forme de l\'ours polaire']}
          />
          <ClassCard
            image="3classe-gardeimperial"
            name="Chevalier Impérial" tier="Classe 3"
            description={`La Chevalière impériale incarne ce que l'Empire veut montrer de plus grand et de plus noble. Guerrière autant que symbole, elle porte les valeurs qu'il prétend défendre : justice, foi, honneur et devoir. Sur le champ de bataille comme dans les cours impériales, sa présence impose le respect. Son armure porte les couleurs de l'Empire, mais ce sont ses actes qui en portent la réputation.

Rares sont ceux et celles qui se montrent assez dignes pour recevoir la faveur de Caria, protectrice des Hommes. Lorsque la déesse répond à son appel, la Chevalière impériale peut étendre sa protection à ceux qui combattent à ses côtés. Sous cette grâce, les coups des morts-vivants et des Drows perdent une part de leur force, permettant aux soldats de tenir là où d'autres auraient déjà succombé.

La Chevalière impériale ne combat jamais seulement pour elle-même. Elle défend les terres de l'Empire, protège son peuple et se dresse là où l'honneur exige une lame. Elle est un modèle pour les soldats, la preuve vivante que Caria veille encore sur les Hommes.

Nombreux sont ceux qui rêvent de porter un jour son titre. Rares sont ceux dont les exploits deviennent assez grands pour le mériter. Car devenir Chevalière impériale, c'est devenir le bouclier vivant de l'Empire.`}
            pouvoirs={['Grâce de Caria', 'Protection de zone contre les morts-vivants et Drows']}
          />
          <ClassCard
            image="3classe-compagniedusang" imageExt="webp"
            name="Compagnie du Sang" tier="Classe 3"
            description={`Le membre de la Compagnie du Sang est l'une des armes que l'Empire préfère garder dans l'ombre. Choisi parmi les combattants les plus redoutables, il est envoyé là où les armées régulières échouent et où les méthodes conventionnelles ne suffisent plus.

Lorsque les lois deviennent un obstacle, il les contourne. Lorsque la diplomatie meurt, il prend le relais. Sa mission n'est pas d'être admiré, mais de faire triompher l'Empire, quel qu'en soit le prix. Il traque les ennemis de la Couronne, écrase les menaces naissantes et accomplit les tâches que personne ne souhaite revendiquer.

Sur le champ de bataille, sa présence suffit à semer le doute. Ses adversaires connaissent ses couleurs, sa réputation et surtout ce qu'elles annoncent. Car lorsqu'un membre de la Compagnie du Sang apparaît, c'est que l'Empire a décidé d'en finir.

Il ne combat ni pour la gloire, ni pour les chants, ni pour les honneurs. Sa valeur se mesure aux missions accomplies et aux ennemis qui ne se relèvent pas. Certains le considèrent comme un héros, d'autres comme un monstre au service du trône. Il ne reconnaît qu'une seule vérité : la fin justifie les moyens. L'Empire doit triompher.`}
            pouvoirs={['Opérations spéciales', 'Furtivité de combat']}
          />
          <ClassCard
            image="3classe-conteur"
            name="Conteur" tier="Classe 3"
            description={`Le conteur a fait des récits du monde l'œuvre de son existence. Il appartient davantage aux légendes qu'aux scènes ordinaires. Rares sont ceux qui atteignent une telle maîtrise de leur art, car ses récits ne se contentent plus de captiver ceux qui les entendent : ils semblent éveiller quelque chose d'ancien dans le monde lui-même.

Sa musique peut apaiser des créatures que nul homme ne devrait pouvoir approcher. Même certaines bêtes fantastiques peuvent suspendre leur colère pour écouter les accords de sa lyre, comme si elles reconnaissaient dans ces mélodies les échos d'histoires oubliées depuis des siècles.

Entre ses mains, la lyre devient également un instrument de pouvoir. Certains accords donnent naissance à des sortilèges que nul mage ne saurait reproduire, tandis que certaines mélodies semblent capables de donner corps aux récits qu'il transmet. Lorsqu'il doit délaisser son instrument, il est également un archer de renom, dont l'adresse à l'arc rivalise avec sa maîtrise de la lyre.

Le Conteur connaît les histoires qui ont façonné les peuples, mais aussi celles que le temps a presque effacées. Lorsqu'il commence à jouer, tous peuvent tendre l'oreille, car ils savent parfois qu'il raconte une histoire dont ils font eux-mêmes partie.`}
            pouvoirs={['Magie de la lyre', 'Apaisement des bêtes', 'Arc de maître']}
          />
          <ClassCard
            image="3classe-voleur" imageExt="webp"
            name="Voleur" tier="Classe 3"
            description={`La Voleuse est une figure dont on connaît souvent les actes bien avant de connaître le visage. Peu atteignent une telle maîtrise de la discrétion, car elle ne se contente plus d'éviter les regards : elle semble capable de se déplacer avec les ombres elles-mêmes.

Là où la lumière se fait rare, sa présence devient presque impossible à suivre. Elle s'introduit là où nul ne l'attend, traverse les défenses et approche sa cible avant même que celle-ci ne soupçonne le danger. Lorsqu'elle choisit de frapper, le garrot devient l'une de ses armes les plus redoutables, capable de transformer quelques secondes d'inattention en une condamnation.

La Voleuse demeure également une agente de l'ombre. Espionnage, infiltration, sabotage et assassinat comptent parmi les missions que la Guilde des voleurs peut accomplir lorsque l'Empire ne peut se permettre d'agir ouvertement.

Peu savent réellement qui porte ce titre. C'est peut-être préférable ainsi : lorsque la Voleuse accomplit parfaitement son travail, il ne reste souvent derrière elle qu'un corps et des questions auxquelles personne ne pourra répondre.`}
            pouvoirs={['Furtivité avancée', 'Garrot', 'Infiltration']}
          />
          <ClassCard
            image="3classe-mageceleste"
            name="Mage Céleste" tier="Classe 3"
            description={`Le mage céleste a porté son étude des arcanes au-delà des limites de la magie elle-même. Il cherche désormais à comprendre les liens qui unissent les forces arcaniques au monde, aux astres et aux phénomènes qui dépassent l'existence des mortels.

Ses recherches l'amènent à considérer la magie comme une composante d'un ensemble bien plus vaste. Le mouvement des astres, les forces célestes et les manifestations inexpliquées de l'univers deviennent autant de sujets d'étude susceptibles de révéler une part des mécanismes qui régissent les arcanes.

Cette compréhension lui permet de canaliser des forces dont l'origine semble aussi lointaine que les étoiles. Il peut appeler vers la terre des fragments embrasés du firmament ou manipuler des forces capables d'attirer vers un même point la matière et la lumière. Lorsqu'il libère de tels pouvoirs, même les lois qui régissent le monde semblent momentanément plier devant lui.

Peut-être aucun mortel ne pourra-t-il comprendre entièrement les mécanismes de l'univers. Le Mage céleste compte néanmoins parmi les rares à en avoir suffisamment percé les secrets pour commencer à en imposer les règles.`}
            pouvoirs={['Sorts célestes', 'Fragments du firmament', 'Gravité']}
          />
          <ClassCard
            image="3classe-magederubis"
            name="Mage de Rubis" tier="Classe 3"
            description={`La Mage de rubis a consacré son existence à une ambition qui dépasse la simple maîtrise des arcanes : atteindre les limites de leur puissance. Rares sont ceux qui poussent cette quête assez loin pour mériter ce titre, car chaque nouvelle limite franchie exige de manipuler des forces capables de consumer celle qui les invoque.

Le feu représente l'expression ultime de sa maîtrise. Entre ses mains, les flammes ne sont plus un simple sortilège, mais une force capable de ravager ses adversaires, de réduire leurs protections en cendres et de transformer le champ de bataille. Lorsqu'elle libère pleinement sa puissance, même les combattants les plus aguerris apprennent à craindre son courroux.

Mais une telle puissance ne tolère ni l'imprécision ni l'hésitation. Chaque invocation représente un équilibre entre contrôle et destruction, et une seule erreur peut suffire à retourner contre elle les forces qu'elle commande.

Peu de mages atteignent un jour une telle maîtrise. Lorsque la Mage de rubis déchaîne les flammes, elle offre un aperçu de ce que deviennent les arcanes lorsqu'une mortelle refuse de leur reconnaître des limites.`}
            pouvoirs={['Sorts de feu avancés', 'Nova de feu']}
          />
        </ClassAccordion>

      </div>
    </InnerLayout>
  )
}
