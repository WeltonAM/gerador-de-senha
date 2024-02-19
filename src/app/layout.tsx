import type { Metadata } from 'next'
import './globals.css'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
  title: 'Gerador de Senha',
  description: 'Projeto Next para estudos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen">
        <ToastContainer />

        {children}
      </body>
    </html>
  )
}
