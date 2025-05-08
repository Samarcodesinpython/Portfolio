"use client"

import { useEffect, useState } from "react"

export default function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side
    setIsClient(true)

    // Initialize at center of screen
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Add event listener
    window.addEventListener("mousemove", updateMousePosition)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  // Don't render anything on server
  if (!isClient) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: `radial-gradient(650px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 217, 255, 0.15), transparent 45%)`,
      }}
    ></div>
  )
}
