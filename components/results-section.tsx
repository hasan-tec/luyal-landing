"use client"

import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ResultsSection() {
  const { t, isRTL } = useLanguage()

  // Use the appropriate arrow based on language direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-evenly items-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#111827]">
            {t("results.title").split(" ").length > 4 ? (
              <>{t("results.title")}</>
            ) : (
              <>
                {t("results.title").split(" ").slice(0, 3).join(" ")}
                <br />
                {t("results.title").split(" ").slice(3).join(" ")}
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-items-center">
          {/* First stat card */}
          <div className="bg-[#f1f1f2] rounded-lg p-8" style={{ width: "317.59px", height: "345.07px" }}>
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl font-bold text-[#111827] mb-2">+41%</div>
              <div className="text-[#4b5563] font-medium">{t("results.averageOrder")}</div>
            </div>
            <p className="text-[#4c4d58] mb-8">{t("results.limango")}</p>
            <div className="h-8">
              <Image
                src="/images/logos/limango.png"
                alt="limango logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Second stat card */}
          <div className="bg-[#f1f1f2] rounded-lg p-8" style={{ width: "317.59px", height: "345.07px" }}>
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl font-bold text-[#111827] mb-2">2x</div>
              <div className="text-[#4b5563] font-medium">{t("results.buyerFrequency")}</div>
            </div>
            <p className="text-[#4c4d58] mb-8">{t("results.equiva")}</p>
            <div className="h-8">
              <Image
                src="/images/logos/equiva.png"
                alt="EQUIVA logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Third stat card */}
          <div className="bg-[#f1f1f2] rounded-lg p-8" style={{ width: "317.59px", height: "345.07px" }}>
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl font-bold text-[#111827] mb-2">+62%</div>
              <div className="text-[#4b5563] font-medium">{t("results.activeUsers")}</div>
            </div>
            <p className="text-[#4c4d58] mb-8">{t("results.dacadoo")}</p>
            <div className="h-8">
              <Image
                src="/images/logos/dacadoo.png"
                alt="dacadoo logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
