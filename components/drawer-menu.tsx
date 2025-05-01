"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, User, ChevronRight, ChevronLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Use the appropriate chevron based on language direction
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 text-[#111827] focus:outline-none" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          ref={drawerRef}
          className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} bottom-0 w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "transform-none" : isRTL ? "transform -translate-x-full" : "transform translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-[#111827]">{t("nav.menu")}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-60px)]">
            <nav className="p-4">
              <div className="space-y-1">
                <a
                  href="#"
                  className={`flex items-center justify-between py-3 px-2 bg-gray-50 rounded-md text-[#111827] font-medium ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("nav.home")}</span>
                  <ChevronIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-between py-3 px-2 text-[#4b5563] hover:bg-gray-50 rounded-md ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("nav.features")}</span>
                  <ChevronIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-between py-3 px-2 text-[#4b5563] hover:bg-gray-50 rounded-md ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("nav.pricing")}</span>
                  <ChevronIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-between py-3 px-2 text-[#4b5563] hover:bg-gray-50 rounded-md ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("nav.solution")}</span>
                  <ChevronIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-between py-3 px-2 text-[#4b5563] hover:bg-gray-50 rounded-md ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("nav.faq")}</span>
                  <ChevronIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-between py-3 px-2 text-[#4b5563] hover:bg-gray-50 rounded-md ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("nav.contact")}</span>
                  <ChevronIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  className={`flex items-center w-full py-3 px-2 text-[#111827] font-medium hover:bg-gray-50 rounded-md ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <User className={`h-5 w-5 ${isRTL ? "ml-3" : "mr-3"}`} />
                  <span>{t("nav.login")}</span>
                </button>
                <button className="mt-4 bg-[#627daf] text-white px-4 py-3 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium w-full text-center">
                  {t("nav.getStarted")}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
