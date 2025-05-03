"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const { t, isRTL } = useLanguage()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  // Function to handle navigation and close the menu
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault()
      const id = href.replace("/#", "").replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        // Custom smooth scroll (slower and more visible)
        const y = el.getBoundingClientRect().top + window.pageYOffset
        const startY = window.scrollY
        const diff = y - startY
        let start: number | null = null
        const duration = 800 // ms, slower for more visible effect
        function step(timestamp: number) {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          window.scrollTo(0, startY + diff * easeInOutQuad(progress))
          if (progress < 1) {
            window.requestAnimationFrame(step)
          }
        }
        function easeInOutQuad(t: number) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        }
        window.requestAnimationFrame(step)
      }
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {open && (
        <div
          className={`absolute ${isRTL ? "left-0" : "right-0"} top-full mt-0 w-screen max-w-[100vw] bg-white shadow-lg z-[100] transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
            paddingLeft: !isRTL ? 24 : undefined,
            paddingRight: isRTL ? 24 : undefined,
            transform: open ? "translateY(0)" : "translateY(-20px)",
            opacity: open ? 1 : 0,
          }}
        >
          {/* Navigation Links */}
          <div className="py-2">
            <a
              href="/"
              onClick={e => handleNavigation(e, "/")}
              className={`block w-full px-10 py-3 text-lg font-medium text-[#111827] border-b border-gray-100 hover:bg-gray-50 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("nav.home")}
            </a>
            <a
              href="/#features"
              onClick={e => handleNavigation(e, "/#features")}
              className={`block w-full px-10 py-3 text-lg font-medium text-[#4b5563] border-b border-gray-100 hover:bg-gray-50 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("nav.features")}
            </a>
            <a
              href="/#pricing"
              onClick={e => handleNavigation(e, "/#pricing")}
              className={`block w-full px-10 py-3 text-lg font-medium text-[#4b5563] border-b border-gray-100 hover:bg-gray-50 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("nav.pricing")}
            </a>
            <a
              href="/#howitworks"
              onClick={e => handleNavigation(e, "/#howitworks")}
              className={`block w-full px-10 py-3 text-lg font-medium text-[#4b5563] border-b border-gray-100 hover:bg-gray-50 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("nav.solution")}
            </a>
            <a
              href="/#faq"
              onClick={e => handleNavigation(e, "/#faq")}
              className={`block w-full px-10 py-3 text-lg font-medium text-[#4b5563] border-b border-gray-100 hover:bg-gray-50 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("nav.faq")}
            </a>
            <a
              href="/#contact"
              onClick={e => handleNavigation(e, "/#contact")}
              className={`block w-full px-10 py-3 text-lg font-medium text-[#4b5563] border-b border-gray-100 hover:bg-gray-50 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("nav.contact")}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="px-10 py-4  ">
            <button
              className={`flex items-center justify-center w-full px-4 py-3 mb-3 border border-gray-300 rounded-md text-[#111827] font-medium hover:bg-gray-50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
                aria-hidden="true"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                </g>
              </svg>
              {t("nav.login")}
            </button>
            <button className="flex items-center justify-center w-full px-4 py-3 bg-[#627daf] hover:bg-[#627daf]/90 text-white font-medium rounded-md">
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
