"use client"

import { useState } from "react"
import { Menu, X, Home, Grid, CreditCard, HelpCircle, MessageSquare, User } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function FabMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-2 mb-2 w-48">
          <div className="flex flex-col">
            <a href="#" className="flex items-center p-3 text-[#111827] hover:bg-gray-50 rounded-md">
              <Home className="h-5 w-5 mr-3" />
              <span>{t("nav.home")}</span>
            </a>
            <a href="#" className="flex items-center p-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
              <Grid className="h-5 w-5 mr-3" />
              <span>{t("nav.features")}</span>
            </a>
            <a href="#" className="flex items-center p-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
              <CreditCard className="h-5 w-5 mr-3" />
              <span>{t("nav.pricing")}</span>
            </a>
            <a href="#" className="flex items-center p-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
              <HelpCircle className="h-5 w-5 mr-3" />
              <span>{t("nav.faq")}</span>
            </a>
            <a href="#" className="flex items-center p-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
              <MessageSquare className="h-5 w-5 mr-3" />
              <span>{t("nav.contact")}</span>
            </a>
            <a href="#" className="flex items-center p-3 text-[#4b5563] hover:bg-gray-50 rounded-md">
              <User className="h-5 w-5 mr-3" />
              <span>{t("nav.login")}</span>
            </a>
          </div>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setIsOpen(false)}></div>}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-gray-700 text-white" : "bg-[#627daf] text-white"
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  )
}
