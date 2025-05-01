"use client"

import { Home, Grid, CreditCard, HelpCircle, Menu } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useState } from "react"

export default function BottomNavigation() {
  const { t } = useLanguage()
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center z-50 lg:hidden">
        <a href="#" className="flex flex-col items-center text-[#627daf]">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">{t("nav.home")}</span>
        </a>
        <a href="#" className="flex flex-col items-center text-[#4b5563]">
          <Grid className="h-6 w-6" />
          <span className="text-xs mt-1">{t("nav.features")}</span>
        </a>
        <a href="#" className="flex flex-col items-center text-[#4b5563]">
          <CreditCard className="h-6 w-6" />
          <span className="text-xs mt-1">{t("nav.pricing")}</span>
        </a>
        <a href="#" className="flex flex-col items-center text-[#4b5563]">
          <HelpCircle className="h-6 w-6" />
          <span className="text-xs mt-1">{t("nav.faq")}</span>
        </a>
        <button onClick={() => setShowMore(!showMore)} className="flex flex-col items-center text-[#4b5563]">
          <Menu className="h-6 w-6" />
          <span className="text-xs mt-1">{t("nav.more")}</span>
        </button>
      </div>

      {showMore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowMore(false)}>
          <div
            className="absolute bottom-16 right-4 bg-white rounded-lg shadow-xl p-4 w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center py-2 text-[#4b5563]">
                {t("nav.solution")}
              </a>
              <a href="#" className="flex items-center py-2 text-[#4b5563]">
                {t("nav.contact")}
              </a>
              <a href="#" className="flex items-center py-2 text-[#4b5563]">
                {t("nav.login")}
              </a>
              <button className="bg-[#627daf] text-white px-4 py-2 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium w-full mt-2 text-center">
                {t("nav.getStarted")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
