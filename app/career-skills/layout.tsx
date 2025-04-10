import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Skills Journal | Samar.dev",
  description: "Weekly reflection of personal growth, communication, and career-building skills.",
}

export default function CareerSkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none -z-10" />
      {children}
    </div>
  )
}
