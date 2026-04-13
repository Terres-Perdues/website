import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Terres Perdues — Serveur Ultima Online',
  description: 'Serveur privé Ultima Online francophone. Plongez dans un monde médiéval-fantastique unique avec 5 races jouables, des systèmes de métiers et de territoires.',
  keywords: 'Ultima Online, serveur privé, francophone, MMORPG, Terres Perdues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="h-screen overflow-hidden bg-green-dark">
        {children}
      </body>
    </html>
  )
}
