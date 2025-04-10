"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypingAnimation({ text, className = "", speed = 100, delay = 500 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    // Delay before starting the animation
    const startTimer = setTimeout(() => {
      setStartAnimation(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!startAnimation) return

    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        setIsComplete(true)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed, startAnimation])

  return (
    <div className={className}>
      <span className="relative">
        {displayedText}
        {!isComplete && (
          <motion.span
            className="absolute inline-block w-[2px] h-[1.2em] bg-primary ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          />
        )}
      </span>
    </div>
  )
}
