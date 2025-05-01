"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function MobileNavigation() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 md:hidden z-50">
      <div className="flex justify-around items-center">
        <Link href="#" className="flex flex-col items-center text-[#627daf]">
          <span className="text-xs font-medium">{t("nav.home")}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-[#4b5563]">
          <span className="text-xs font-medium">{t("nav.features")}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-[#4b5563]">
          <span className="text-xs font-medium">{t("nav.pricing")}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-[#4b5563]">
          <span className="text-xs font-medium">{t("nav.getStarted")}</span>
        </Link>
      </div>
    </div>
  )
}
