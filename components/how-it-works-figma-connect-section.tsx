"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export function HowItWorksFigmaConnectSection() {
  const { t, isRTL } = useLanguage()
  return (
    <section
      className="w-full flex justify-center bg-[#eaf1fc] py-10 sm:py-12 md:py-16 lg:py-24"
      dir={isRTL ? "rtl" : undefined}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-4 md:px-6 lg:px-8">
        {/* Left: Image */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 max-w-[480px] mx-auto md:mx-0">
          <Image
            src="/images/unsplash_tgquMvhNLc4.png"
            alt={t("howitworks.connect.heading")}
            width={480}
            height={360}
            className="rounded-[18px] object-cover w-full h-auto"
            priority
          />
        </div>
        {/* Right: Card/Info */}
        <div
          className={`flex flex-col items-start max-w-[480px] w-full md:w-1/2${isRTL ? " rtl" : ""}`}
          dir={isRTL ? "rtl" : undefined}
        >
          <div className="flex flex-row items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#627DAF] inline-block" />
            <span
              className="font-medium text-sm sm:text-base leading-normal text-[#111827]"
              style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
            >
              {t("howitworks.connect.badge")}
            </span>
          </div>

          <h3
            className="font-vc-nudge font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#111827] mb-2 sm:mb-3"
            style={{ fontWeight: 500, letterSpacing: "-0.02em", direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("howitworks.connect.heading")
              .split("\n")
              .map((line, idx, arr) => (
                <span key={idx}>
                  {line}
                  {idx !== arr.length - 1 && <br />}
                </span>
              ))}
          </h3>

          <div className="font-vc-nudge font-medium text-sm sm:text-base leading-normal text-[#111827] mb-2">
            {t("howitworks.connect.subheading")}
          </div>
          <p
            className="font-semibold text-sm sm:text-base leading-normal text-[#4B5563] mb-6 sm:mb-8"
            style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
          >
            {t("howitworks.connect.desc")}
          </p>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 border border-[#E5E7EB] rounded-[8px] bg-white shadow font-semibold text-sm sm:text-base leading-normal text-[#111827] hover:bg-[#f6fafd] transition"
            style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
          >
            {t("howitworks.connect.cta")}
          </button>
        </div>
      </div>
    </section>
  )
}
