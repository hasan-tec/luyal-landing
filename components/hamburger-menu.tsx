"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, User } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "" // Re-enable scrolling when menu is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "" // Ensure scrolling is re-enabled on unmount
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 text-[#111827] focus:outline-none" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Slide-in menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 ${
            isRTL ? "left-0" : "right-0"
          } bottom-0 w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "transform-none" : isRTL ? "transform -translate-x-full" : "transform translate-x-full"
          }`}
          style={{ textAlign: isRTL ? "right" : "left" }}
        >
          {/* Menu header */}
          <div className={`flex items-center justify-between p-4 border-b border-gray-100`}>
            <div className={`flex items-center ${isRTL ? "order-2" : "order-1"}`}>
              <Image src="/images/logo-gradient.png" alt="Luyal Logo" width={32} height={32} className="h-8 w-8" />
              <span className={`text-[#111827] text-lg font-bold ${isRTL ? "mr-2" : "ml-2"}`}>
                {isRTL ? "لويال" : "Luyal"}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded-full hover:bg-gray-100 ${isRTL ? "order-1" : "order-2"}`}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu content */}
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            <nav className="p-4">
              <div className="space-y-3">
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 bg-gray-50 rounded-md text-[#111827] font-medium ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {t("nav.home")}
                </a>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 text-[#4b5563] hover:bg-gray-50 rounded-md ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {t("nav.features")}
                </a>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 text-[#4b5563] hover:bg-gray-50 rounded-md ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {t("nav.pricing")}
                </a>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 text-[#4b5563] hover:bg-gray-50 rounded-md ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {t("nav.solution")}
                </a>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 text-[#4b5563] hover:bg-gray-50 rounded-md ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {t("nav.faq")}
                </a>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 text-[#4b5563] hover:bg-gray-50 rounded-md ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {t("nav.contact")}
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  className={`flex items-center w-full py-3 px-4 text-[#111827] font-medium hover:bg-gray-50 rounded-md ${
                    isRTL ? "justify-end" : "justify-start"
                  }`}
                >
                  {isRTL ? (
                    <>
                      <span>{t("nav.login")}</span>
                      <User className="h-5 w-5 mr-3" />
                    </>
                  ) : (
                    <>
                      <User className="h-5 w-5 mr-3" />
                      <span>{t("nav.login")}</span>
                    </>
                  )}
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
