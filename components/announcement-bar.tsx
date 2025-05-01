"use client"

import { useState, useEffect } from "react"

interface AnnouncementBarProps {
  messages: string[]
}

export default function AnnouncementBar({ messages }: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"in" | "out">("in")

  useEffect(() => {
    if (messages.length <= 1) return

    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection("out")
        setIsAnimating(true)

        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
          setDirection("in")

          // Small delay before removing animation class
          setTimeout(() => {
            setIsAnimating(false)
          }, 500)
        }, 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [messages.length, isAnimating])

  return (
    <div className="relative h-6 sm:h-7 md:h-8 flex items-center justify-center overflow-hidden">
      <p
        className={`text-xs sm:text-sm md:text-base font-medium text-center w-full
          ${isAnimating ? (direction === "out" ? "animate-slide-out" : "animate-slide-in") : ""}`}
      >
        {messages[currentIndex]}
      </p>
    </div>
  )
}
