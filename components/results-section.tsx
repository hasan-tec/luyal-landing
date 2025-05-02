"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ResultsSection() {
  const { t, isRTL } = useLanguage()

  const stats = [
    {
      value: "+41%",
      label: t("results.averageOrder"),
      desc: t("results.limango"),
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/679749855c95b9d88e552cc9_limango.svg%20fill-UOuNdyWONpuEulGUzWzfbYrHZNiMlJ.png",
      alt: "limango logo",
    },
    {
      value: "2x",
      label: t("results.buyerFrequency"),
      desc: t("results.equiva"),
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-jHzGsgzlSAo38cWDhjfEmCszSnYjIC.png",
      alt: "EQUIVA logo",
    },
    {
      value: "+62%",
      label: t("results.activeUsers"),
      desc: t("results.dacadoo"),
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20%281%29-Ukb2ULnHFfTSfMrfvP8pkot7cOoHfi.png",
      alt: "dacadoo logo",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[1200px] mx-auto px-4">
        <div
          className={`flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 ${isRTL ? "rtl" : ""}`}
          dir={isRTL ? "rtl" : undefined}
        >
           {/* Update the heading size for better hierarchy */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-medium text-[#111827] max-w-full md:max-w-[600px]"
          style={{
            fontFamily: "var(--font-primary, Inter, sans-serif)",
            letterSpacing: "-0.02em",
            fontWeight: 500,
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {t("results.title")}
        </h2>
          <a
            href="#"
            className={`hidden md:flex items-center text-[#111827] font-medium mt-4 md:mt-0 hover:underline ${isRTL ? "flex-row-reverse" : ""}`}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("results.seeAll")}
            <ArrowRight className={isRTL ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4"} />
          </a>
        </div>

        {/* Mobile: See all success stories on top */}
        <div className={`md:hidden flex justify-start mb-6 ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : undefined}>
          <a
            href="#"
            className={`flex items-center text-[#111827] font-medium hover:underline ${isRTL ? "flex-row-reverse" : ""}`}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("results.seeAll")}
            <ArrowRight className={isRTL ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4"} />
          </a>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full ${isRTL ? "rtl" : ""}`}
          dir={isRTL ? "rtl" : undefined}
        >
          {(isRTL ? stats.slice().reverse() : stats).map((stat, i) => (
            <div
              key={stat.value}
              className="bg-[#F1F1F2] rounded-[18px] p-6 sm:p-8 flex flex-col items-start w-full h-full shadow-none border border-transparent"
            >
              <div className="mb-4 sm:mb-6 w-full" style={{ textAlign: isRTL ? "right" : "left" }}>
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#111827] mb-1"
                  style={{
                    letterSpacing: "-0.02em",
                    lineHeight: "1.2",
                    fontFamily: "var(--font-primary, Inter, sans-serif)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[#485563] font-normal text-sm sm:text-base leading-normal"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {stat.label}
                </div>
              </div>
              <p
                className="text-[#4B5563] mb-6 w-full text-sm sm:text-base leading-normal font-normal"
                style={{
                  fontFamily: "var(--font-primary, Inter, sans-serif)",
                  textAlign: isRTL ? "right" : "left",
                }}
              >
                {stat.desc}
              </p>
              <div
                className="mt-auto flex items-end h-6 sm:h-8 w-full justify-start"
                style={{ justifyContent: isRTL ? "flex-end" : "flex-start" }}
              >
                <Image
                  src={stat.logo || "/placeholder.svg"}
                  alt={stat.alt}
                  width={90}
                  height={24}
                  className="h-5 sm:h-6 w-auto object-contain opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
