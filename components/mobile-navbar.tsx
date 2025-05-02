"use client"

import { useState } from "react"
import { Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"
import Link from "next/link"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  // Function to handle navigation and close the sheet
  const handleNavigation = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side={isRTL ? "right" : "left"}
          className={`p-0 w-72 max-w-full bg-white ${isRTL ? "rtl-sheet-close" : "ltr-sheet-close"}`}
        >
          <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
          <div className="relative px-4 py-4 border-b border-gray-100">
            <div className="flex items-center">
              <Image src="/images/logo-gradient.png" alt="Luyal Logo" width={32} height={32} className="h-8 w-8" />
              <span className={`text-[#111827] text-lg font-bold ${isRTL ? "mr-2" : "ml-2"}`}>
                {isRTL ? "لويال" : "Luyal"}
              </span>
            </div>
          </div>
          <nav className="flex flex-col gap-2 px-4 py-6">
            <Link href="/" onClick={handleNavigation} className="text-lg font-medium text-[#111827] py-2">
              {t("nav.home")}
            </Link>
            <Link href="/#features" onClick={handleNavigation} className="text-lg font-medium text-[#4b5563] py-2">
              {t("nav.features")}
            </Link>
            <Link href="/#pricing" onClick={handleNavigation} className="text-lg font-medium text-[#4b5563] py-2">
              {t("nav.pricing")}
            </Link>
            <Link href="/#howitworks" onClick={handleNavigation} className="text-lg font-medium text-[#4b5563] py-2">
              {t("nav.solution")}
            </Link>
            <Link href="/#faq" onClick={handleNavigation} className="text-lg font-medium text-[#4b5563] py-2">
              {t("nav.faq")}
            </Link>
            <Link href="/#contact" onClick={handleNavigation} className="text-lg font-medium text-[#4b5563] py-2">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="px-4 py-4 border-t border-gray-100 flex flex-col gap-3">
            <Button variant="outline" className="flex items-center justify-center w-full">
              <User className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("nav.login")}
            </Button>
            <Button className="bg-[#627daf] hover:bg-[#627daf]/90 text-white w-full font-medium">
              {t("nav.getStarted")}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
