"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, User } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function CompactHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative lg:hidden">
      <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100">
        <div className="flex items-center">
          <Image src="/images/logo-gradient.png" alt="Luyal Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-[#111827] text-lg font-bold ml-2">{isRTL ? "لويال" : "Luyal"}</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center text-[#111827] px-3 py-1.5 rounded-md border border-gray-200">
            <User className="h-4 w-4 mr-1" />
            <span className="text-sm">{t("nav.login")}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-[#111827] px-3 py-1.5 rounded-md border border-gray-200"
          >
            <span className="text-sm mr-1">{t("nav.menu")}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="py-2 px-4">
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="py-3 px-3 text-[#111827] font-medium bg-gray-50 rounded-md">
                {t("nav.home")}
              </a>
              <a href="#" className="py-3 px-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
                {t("nav.features")}
              </a>
              <a href="#" className="py-3 px-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
                {t("nav.pricing")}
              </a>
              <a href="#" className="py-3 px-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
                {t("nav.solution")}
              </a>
              <a href="#" className="py-3 px-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
                {t("nav.faq")}
              </a>
              <a href="#" className="py-3 px-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
                {t("nav.contact")}
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <button className="bg-[#627daf] text-white px-4 py-2.5 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium w-full text-center">
                {t("nav.getStarted")}
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
