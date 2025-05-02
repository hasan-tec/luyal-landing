"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export function HowItWorksFigmaShareCardSection() {
  const { t, isRTL } = useLanguage()
  return (
    <section
      className="w-full flex justify-center bg-[#eaf1fc] py-10 sm:py-12 md:py-16 lg:py-24"
      dir={isRTL ? "rtl" : undefined}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-4 md:px-6 lg:px-8">
        {/* Image - Appears first on mobile, second on desktop */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 max-w-[480px] mx-auto md:mx-0 order-first md:order-last">
          <Image
            src="/images/unsplash_TOaE3Td9F8M (1).png"
            alt="Share Loyalty Card"
            width={480}
            height={360}
            className="rounded-[20px] object-cover w-full h-auto"
            priority
          />
        </div>
        {/* Card/Info - Appears second on mobile, first on desktop */}
        <div
          className={`flex flex-col items-start max-w-[480px] w-full md:w-1/2 mt-8 md:mt-0${isRTL ? " rtl" : ""}`}
          dir={isRTL ? "rtl" : undefined}
        >
          <div className="flex flex-row items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#627DAF] inline-block" />
            <span
              className="font-medium text-sm sm:text-base leading-normal text-[#232b38]"
              style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
            >
              {t("howitworks.share.badge")}
            </span>
          </div>
          <h3
            className="font-vc-nudge font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#232b38] mb-2 sm:mb-3"
            style={{ fontWeight: 500, letterSpacing: "-0.02em", direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("howitworks.share.heading")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </h3>
          <div className="font-vc-nudge font-medium text-sm sm:text-base leading-normal text-[#232b38] mb-2">
            {t("howitworks.share.subheading")}
          </div>
          <p
            className="font-semibold text-sm sm:text-base leading-normal text-[#4B5563] mb-6 sm:mb-8"
            style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
          >
            {t("howitworks.share.desc")}
          </p>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 border border-[#E5E7EB] rounded-[8px] sm:rounded-[18px] bg-white shadow font-semibold text-sm sm:text-base leading-normal text-[#232b38] hover:bg-[#f6fafd] transition"
            style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
          >
            {t("howitworks.share.cta")}
          </button>
        </div>
      </div>
    </section>
  )
}
