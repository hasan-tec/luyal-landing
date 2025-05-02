"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"

interface AnnouncementBarProps {
  messages: string[]
}

export default function AnnouncementBar({ messages }: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"in" | "out">("in")
  const { isRTL } = useLanguage?.() || { isRTL: false }

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

  // If no messages, return empty div with same height to maintain layout
  if (!messages.length) {
    return <div className="h-6 sm:h-7 md:h-8"></div>
  }

  return (
    <div
      className="relative h-auto min-h-[24px] sm:min-h-[28px] md:min-h-[32px] py-1.5 sm:py-2 flex items-center justify-center overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] overflow-hidden">
        <p
          className={`text-xs sm:text-sm md:text-base font-medium text-center w-full whitespace-nowrap sm:whitespace-normal overflow-hidden text-ellipsis
            ${isAnimating ? (direction === "out" ? "animate-slide-out" : "animate-slide-in") : ""}`}
          style={{
            animationDirection: isRTL ? "reverse" : "normal",
          }}
        >
          {messages[currentIndex]}
        </p>
      </div>
    </div>
  )
}
