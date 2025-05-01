"use client"

import { useState, useEffect } from "react"
import { X, User } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function FullscreenMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#111827] focus:outline-none lg:hidden"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/images/logo-gradient.png" alt="Luyal Logo" width={40} height={40} className="h-8 w-8" />
              <span className="text-[#111827] text-xl font-bold ml-2">{isRTL ? "لويال" : "Luyal"}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#111827] focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <a href="#" className="text-2xl font-medium text-[#111827]">
                {t("nav.home")}
              </a>
              <a href="#" className="text-2xl font-medium text-[#4b5563]">
                {t("nav.features")}
              </a>
              <a href="#" className="text-2xl font-medium text-[#4b5563]">
                {t("nav.pricing")}
              </a>
              <a href="#" className="text-2xl font-medium text-[#4b5563]">
                {t("nav.solution")}
              </a>
              <a href="#" className="text-2xl font-medium text-[#4b5563]">
                {t("nav.faq")}
              </a>
              <a href="#" className="text-2xl font-medium text-[#4b5563]">
                {t("nav.contact")}
              </a>
            </nav>
          </div>

          <div className="container mx-auto px-4 py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center text-[#111827] font-medium py-2">
                <User className="h-5 w-5 mr-2" />
                {t("nav.login")}
              </button>
              <button className="bg-[#627daf] text-white px-6 py-3 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium w-full text-center">
                {t("nav.getStarted")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
