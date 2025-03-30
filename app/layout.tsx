import type React from "react"
import type { Metadata } from "next"
import { Unbounded, Syne } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const unbounded = Unbounded({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
})

const syne = Syne({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Todo App - Powered by Supabase",
  description: "A simple todo application built with Next.js and Supabase",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${unbounded.variable} ${syne.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'