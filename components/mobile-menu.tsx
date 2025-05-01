"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, User } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Adjust width on very small screens
  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        menuRef.current.style.width = window.innerWidth < 360 ? "calc(100vw - 16px)" : ""
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((v) => !v)}
        className="p-2 text-[#111827] focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute top-full mt-2 bg-white rounded-lg shadow-lg z-50
            w-[calc(100vw-24px)] max-w-[280px] min-w-[250px]
            overflow-y-auto`}
          style={{
            left: isRTL ? "auto" : "0",
            right: isRTL ? "0" : "auto",
            maxHeight: "calc(100vh - 100px)",
          }}
        >
          <div className="p-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className={`py-2 font-medium block w-full
                           ${isRTL ? "pr-3" : "pl-3"}
                           text-[#111827]`}
              >
                {t("nav.home")}
              </a>
              <a
                href="#"
                className="py-2 text-[#4b5563] hover:text-[#111827]
                           font-medium block w-full"
              >
                {t("nav.features")}
              </a>
              <a
                href="#"
                className="py-2 text-[#4b5563] hover:text-[#111827]
                           font-medium block w-full"
              >
                {t("nav.pricing")}
              </a>
              <a
                href="#"
                className="py-2 text-[#4b5563] hover:text-[#111827]
                           font-medium block w-full"
              >
                {t("nav.solution")}
              </a>
              <a
                href="#"
                className="py-2 text-[#4b5563] hover:text-[#111827]
                           font-medium block w-full"
              >
                {t("nav.faq")}
              </a>
              <a
                href="#"
                className="py-2 text-[#4b5563] hover:text-[#111827]
                           font-medium block w-full"
              >
                {t("nav.contact")}
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button className="flex items-center font-medium py-2 w-full text-[#111827]">
                <User className="h-5 w-5 mr-2" />
                {t("nav.login")}
              </button>
              <button
                className="block w-full py-2 rounded-md font-medium text-center
                                bg-[#627daf] text-white hover:bg-opacity-90"
              >
                {t("nav.getStarted")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
