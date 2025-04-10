"use client"

import { Card } from "@/components/ui/card"
import { Music } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function NowPlaying() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSong, setCurrentSong] = useState({
    title: "Timeless",
    artist: "The Weeknd",
    album: "After Hours",
  })

  // Toggle visibility
  useEffect(() => {
    setIsVisible(true)

    // Optional: Hide after some time
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-3 flex items-center gap-3 bg-black/80 backdrop-blur-sm border-primary/20 w-64">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Music className="h-5 w-5 text-primary" />
            </div>
            <div className="overflow-hidden">
              <p className="font-medium text-sm truncate">{currentSong.title}</p>
              <p className="text-xs text-muted-foreground truncate">
                {currentSong.artist} • {currentSong.album}
              </p>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
