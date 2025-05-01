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
      alt: "limango logo"
    },
    {
      value: "2x",
      label: t("results.buyerFrequency"),
      desc: t("results.equiva"),
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-jHzGsgzlSAo38cWDhjfEmCszSnYjIC.png",
      alt: "EQUIVA logo"
    },
    {
      value: "+62%",
      label: t("results.activeUsers"),
      desc: t("results.dacadoo"),
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20%281%29-Ukb2ULnHFfTSfMrfvP8pkot7cOoHfi.png",
      alt: "dacadoo logo"
    }
  ]

  return (
    <section className="py-18 md:py-24 bg-white">
      <div className="w-full max-w-[600px] md:max-w-[1200px] mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16${isRTL ? ' rtl' : ''}`}
          dir={isRTL ? "rtl" : undefined}
        >
          <h2
            className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-medium text-[#111827] max-w-[600px]"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-4.4px",
              fontWeight: 500,
              textAlign: isRTL ? "right" : "left"
            }}
          >
            {t("results.title")}
          </h2>
          <a
            href="#"
            className={`hidden md:flex items-center text-[#111827] font-medium mt-4 md:mt-0 hover:underline${isRTL ? ' flex-row-reverse' : ''}`}
            style={{direction: isRTL ? "rtl" : "ltr"}}
          >
            {t("results.seeAll")}
            <ArrowRight className={isRTL ? "mr-2 h-5 w-5" : "ml-2 h-5 w-5"} />
          </a>
        </div>
        {/* Mobile: See all success stories on top */}
        <div className={`md:hidden flex justify-start mb-6${isRTL ? ' rtl' : ''}`} dir={isRTL ? "rtl" : undefined}>
          <a href="#" className={`flex items-center text-[#111827] font-medium hover:underline${isRTL ? ' flex-row-reverse' : ''}`}
            style={{direction: isRTL ? "rtl" : "ltr"}}
          >
            {t("results.seeAll")}
            <ArrowRight className={isRTL ? "mr-2 h-5 w-5" : "ml-2 h-5 w-5"} />
          </a>
        </div>
        <div className={`flex flex-col md:flex-row gap-8 md:gap-8 w-full items-center md:items-stretch justify-center${isRTL ? ' rtl' : ''}`} dir={isRTL ? "rtl" : undefined}>
          {(isRTL ? stats.slice().reverse() : stats).map((stat, i) => (
            <div key={stat.value} className="bg-[#F1F1F2] rounded-[18px] p-10 flex flex-col items-start w-full max-w-[318px] min-h-[345px] shadow-none border border-transparent">
              <div className="mb-6 w-full text-left" style={{textAlign: isRTL ? "right" : "left"}}>
                <div
                  className="text-[56px] font-medium text-[#111827] mb-1"
                  style={{ letterSpacing: "-2px", lineHeight: "67.2px", fontFamily: "DM Sans, Inter, Arial, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[#485563] font-normal text-[16px] leading-6"
                  style={{ fontFamily: "Inter, Arial, sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
              <p
                className="text-[#4B5563] mb-8 w-full text-[16px] leading-6 font-normal"
                style={{ fontFamily: "Inter, Arial, sans-serif", textAlign: isRTL ? "right" : "left" }}
              >
                {stat.desc}
              </p>
              <div className="mt-auto flex items-end h-8 w-full justify-start" style={{justifyContent: isRTL ? "flex-end" : "flex-start"}}>
                <Image
                  src={stat.logo}
                  alt={stat.alt}
                  width={110}
                  height={28}
                  className="h-7 w-auto object-contain opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
