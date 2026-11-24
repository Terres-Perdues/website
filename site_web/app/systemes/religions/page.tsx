import InnerLayout from '@/components/InnerLayout'
import ContentPage from '@/components/ContentPage'

export const metadata = { title: 'Religions — Terres Perdues' }

const dieux = [
  {
    name: 'Illuvatar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat erat, etiam a interdum tortor proin dictum pulvinar nunc.',
  },
  {
    name: 'Yuro',
    description: 'Integer imperdiet eleifend faucibus. Nam porta sagittis vestibulum, aliquam nisi orci tincidunt a interdum nec consectetur at felis.',
  },
  {
    name: 'Lotonar',
    description: 'Nunc sollicitudin eget felis at fringilla. Integer elementum massa ut nisi ullamcorper condimentum, nulla at eleifend mauris.',
  },
  {
    name: 'Missel',
    description: 'Aenean velit leo, tincidunt ac volutpat eget, maximus a mi. Sed vehicula est vitae scelerisque posuere, cras ullamcorper eget justo.',
  },
  {
    name: 'Purkam',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris facilisis metus posuere.',
  },
  {
    name: 'Shayokolin',
    description: 'Condimentum massa ac, pellentesque dui. Duis vestibulum varius neque, morbi dolor dolor congue blandit libero mollis facilisis.',
  },
  {
    name: 'Gaia',
    description: 'Tempor mauris aliquam libero magna, tempor vel scelerisque nec, vehicula ac ex. Phasellus non lorem vitae nisl dapibus pretium.',
  },
  {
    name: 'Pochas',
    description: 'Vivamus euismod ligula sed metus luctus, at feugiat urna gravida. Curabitur blandit nisi in lacus convallis, a porta augue tempus.',
  },
  {
    name: 'Clearis',
    description: 'Suspendisse potenti. Donec vel dui ut magna consequat facilisis, quisque at sapien eget orci tristique fermentum in non arcu.',
  },
  {
    name: 'Aule',
    description: 'Maecenas ultricies, neque a convallis malesuada, metus nunc lobortis lorem, sit amet efficitur justo ipsum a nibh pellentesque.',
  },
  {
    name: 'Miriu',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod donec sed.',
  },
  {
    name: 'Caria',
    description: 'Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo, vestibulum id ligula porta.',
  },
  {
    name: 'Elitea',
    description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus sed posuere.',
  },
  {
    name: 'Mirmiton',
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula eget lacinia.',
  },
  {
    name: 'Salsalah',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis, integer posuere erat a ante.',
  },
  {
    name: 'Orome',
    description: 'Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, nullam id dolor id nibh ultricies.',
  },
  {
    name: 'Couros',
    description: 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor, maecenas faucibus mollis interdum dapibus.',
  },
  {
    name: 'Kcaios',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus, sed odio dui fermentum massa justo.',
  },
  {
    name: 'Lucas',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat.',
  },
  {
    name: 'Athée',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

export default function Page() {
  return (
    <InnerLayout>
      <ContentPage
        title="Religions"
        subtitle="Systèmes"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes' },
          { label: 'Religions' },
        ]}
        bottomContent={
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {dieux.map((d) => (
              <div
                key={d.name}
                style={{ borderTop: '2px solid #c0b89a', paddingTop: '0.9rem' }}
              >
                <h2
                  className="font-title"
                  style={{ fontSize: '1.4rem', color: '#425d34', marginBottom: '0.4rem', lineHeight: 1.2 }}
                >
                  {d.name}
                </h2>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: 15, color: '#7a7060' }}
                >
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        }
      />
    </InnerLayout>
  )
}
