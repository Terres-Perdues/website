import TopNav from './TopNav'

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopNav />
      <main className="flex-1 overflow-y-auto" style={{ backgroundColor: '#e9e4d2' }}>
        {children}
      </main>
    </div>
  )
}
