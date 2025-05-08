import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import NowPlaying from "./components/now-playing"
import MouseMoveEffect from "@/app/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samar.dev - AI DEVELOPER",
  description:
    "AI/ML student and indie builder showcasing projects and progress in machine learning, computer vision, and more",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased relative", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MouseMoveEffect />

          {children}
          <NowPlaying />
        </ThemeProvider>
      </body>
    </html>
  )
}
