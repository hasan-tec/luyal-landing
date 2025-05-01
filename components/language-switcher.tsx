"use client"

import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage, t, isRTL } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center text-[#111827] font-medium text-sm hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-gray-100"
      aria-label={`Switch to ${language === "ar" ? "English" : "Arabic"}`}
    >
      <Globe className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"} flex-shrink-0`} />
      <span className="whitespace-nowrap">{t("language.switch")}</span>
    </button>
  )
}
