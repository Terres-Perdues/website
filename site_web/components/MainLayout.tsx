import Sidebar from './Sidebar'
import MobileNav from './MobileNav'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar — desktop uniquement */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Menu mobile */}
      <MobileNav />

      {/* Main content */}
      <main
        className="flex-1 h-screen overflow-hidden md:ml-[var(--main-offset)] mt-16 md:mt-0"
      >
        {children}
      </main>
    </div>
  )
}
