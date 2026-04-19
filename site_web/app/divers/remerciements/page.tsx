import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'
import { assetPath } from '@/lib/asset-path'

export const metadata = { title: 'Remerciements — Terres Perdues' }

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Remerciements"
        subtitle="Divers"
        image={assetPath('/backgrounds/Accueil-arriere-plan-Toyalis.jpg')}
        imageSize={510}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Divers' },
          { label: 'Remerciements' },
        ]}
        leftText={
          <>
            <p>
              Chère communauté des Terres-perdues,
            </p>
            <p>
              C'est avec plaisir que nous vous annonçons que nous irons de l'avant avec une remise en ligne graduelle du serveur des Terres-perdues, shard mis sur pied et maintenu par une équipe bénévole au début des années 2005. Nous tenons à remercier sincèrement <strong>Michel Tremblay</strong>, <strong>Hugo Villeneuve</strong> et <strong>Maxime Villeneuve</strong> (alias <strong>AD Omega</strong>, <strong>MJ Kcaicos</strong> et <strong>AD Gorfang</strong>) pour leur aimable autorisation à relancer Terres-perdues.
            </p>
            <br />
            <p>
              Nous tenons à offrir nos remerciements chaleureux à <strong>AD Marius</strong> qui a fondé ce shard avant de passer le flambeau à une nouvelle équipe à l'automne 2003. Nous nous assurerons d'en conserver l'esprit et la qualité du jeu de rôle qui en avait fait un incontournable de la communauté UO francophone.
            </p>
          </>
        }
        rightText={
          <>
            <p>
              Nous tenons aussi à souligner l'apport de tous les développeur.euse.s, contributeur.ice.s et joueur.euse.s qui ont mis la main à la pâte au fil des années, qui ont enrichi Terres-perdues par leurs compétences techniques et, bien sûr, par leur imaginaire. Nous saluons au passage <strong>Miriu/@Brehan</strong>, <strong>@ZarGooD</strong> et <strong>@Nystar</strong>, impliqués à l'époque à divers titres dans l'équipe, et qui ont décidé de s'impliquer activement dans le projet actuel. Cette continuité est de fort bon augure. De même, un merci particulier à <strong>@Chalven</strong>, qui voulait rester discret, mais qui agit comme rassembleur à divers titres. Merci à <strong>@JHONNYBEGOOD88</strong> et à <strong>@KingPin</strong> pour le coup de main initial avec la reprise.
            </p>
            <br />
            <p>
              Après vingt années de dormance, il va de soi que nous ne pourrons reconstruire à l'identique ce qui a fait la spécificité et l'attrait des Terres-perdues. Nous récupérerons ce qui est susceptible d'avoir survécu à l'épreuve du temps sur Internet Archive, réviserons et synthétiserons le tout. Collectivement, nous rebâtirons sur ces fondations qui, par la force des choses, sont constituées d'une part de ruines. C'est l'occasion d'ouvrir de nouvelles perspectives sur ce monde qui nous a fait vivre tant d'émotions à l'époque!
            </p>
            <br />
            <p>
              Nous voyons dans cette initiative l'occasion de refonder une communauté désireuse de renouer avec une expérience de jeu de rôle de qualité. Tel que stipulé plus haut, nous poursuivrons dans le même esprit qu'avant, en s'impliquant de manière bénévole et sans but lucratif. Nous ne sommes toutefois pas dupes : le maintien d'un tel serveur ainsi que les infrastructures web associées peuvent s'avérer une affaire onéreuse. Comme communauté, nous nous engageons à être créatif.ve.s afin que l'aspect pécunier n'incombe pas qu'à un seul individu.
            </p>
            <br />
            <p>
              Sur ce, souhaitons-nous bon succès (avec l'huile de bras de chacun.e que cela demandera)... et beaucoup de plaisir au fil de la route !
            </p>
          </>
        }
      />
    </InnerLayout>
  )
}
