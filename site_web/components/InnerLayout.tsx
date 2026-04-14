import TopNav from './TopNav'
import MobileNav from './MobileNav'

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* TopNav — desktop uniquement */}
      <div className="hidden md:block flex-shrink-0 desktop-nav">
        <TopNav />
      </div>

      {/* Menu mobile */}
      <MobileNav />

      <main className="flex-1 overflow-y-auto mt-[calc(4rem+20px)] md:mt-0 pb-[100px] md:pb-0" style={{ backgroundColor: '#e9e4d2' }}>
        {children}
      </main>
    </div>
  )
}
