import Sidebar from './Sidebar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      {/* Main content — offset by sidebar width */}
      <main
        className="flex-1 h-screen overflow-hidden"
        style={{ marginLeft: 'var(--main-offset)' }}
      >
        {children}
      </main>
    </div>
  )
}
