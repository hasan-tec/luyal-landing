"use client"

import Image from "next/image"
import { HowItWorksFigmaShareCardSection } from "./how-it-works-figma-share-card-section"
import { HowItWorksFigmaConnectSection } from "./how-it-works-figma-connect-section"
import { useLanguage } from "@/context/language-context"

export default function HowItWorksFigmaSection() {
  const { t, isRTL } = useLanguage()
  return (
    <section 
      id="howitworks"
      className="w-full bg-[#eaf1fc] py-10 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center"
      dir={isRTL ? "rtl" : undefined}
    >
    {/* Heading */}
    <h2
          className="text-[#232b38] text-center font-vc-nudge font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-tight mb-8 sm:mb-12 md:mb-16 px-4"
          style={{ fontWeight: "500", letterSpacing: "-0.02em", direction: isRTL ? "rtl" : "ltr" }}
        >
          {isRTL ? (
            t("howitworks.title")
          ) : (
            <>
              <span>{t("howitworks.title1")}</span>
              <br />
              <span>{t("howitworks.title2")}</span>
            </>
          )}
        </h2>
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-4 md:px-6 lg:px-8">
        {/* Left: Image with floating cards */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 max-w-[480px] mx-auto md:mx-0">
          <Image
            src="/images/unsplash_TOaE3Td9F8M.png"
            alt="Loyalty Card Mobile"
            width={480}
            height={360}
            className="rounded-[20px] object-cover w-full h-auto"
            priority
          />
          {/* Top floating card */}
          <div className="absolute left-[5%] sm:left-[32px] top-[5%] sm:top-[24px] bg-white rounded-[12px] shadow-lg border border-[#e5e7eb] px-3 sm:px-6 py-2 sm:py-4 flex flex-col items-center w-[140px] sm:w-[180px] z-10">
            <span className="text-xs text-[#232b38] font-semibold mb-1 sm:mb-2">{t("howitworks.cardTitle")}</span>
            <svg
              width="100%"
              height="48"
              viewBox="0 0 120 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[120px]"
            >
              <rect x="0" y="28" width="16" height="20" rx="2" fill="#7EA1C4" />
              <rect x="24" y="12" width="16" height="36" rx="2" fill="#B6C6E3" />
              <rect x="48" y="6" width="16" height="42" rx="2" fill="#7EA1C4" />
              <rect x="72" y="16" width="16" height="32" rx="2" fill="#B6C6E3" />
              <rect x="96" y="2" width="16" height="46" rx="2" fill="#7EA1C4" />
            </svg>
            <div className="flex w-full justify-between mt-1 sm:mt-2 text-[10px] sm:text-[11px] text-[#7b8fa6]">
              <span>{t("howitworks.year1")}</span>
              <span>{t("howitworks.year2")}</span>
              <span>{t("howitworks.year3")}</span>
            </div>
            <div className="flex flex-row gap-1 sm:gap-2 mt-1 sm:mt-2 w-full justify-start">
              <span className="w-2 h-2 rounded-full bg-[#7EA1C4] inline-block"></span>
              <span className="text-[10px] sm:text-xs text-[#232b38]">{t("howitworks.market1")}</span>
              <span className="w-2 h-2 rounded-full bg-[#B6C6E3] inline-block ml-1 sm:ml-2"></span>
              <span className="text-[10px] sm:text-xs text-[#232b38]">{t("howitworks.market2")}</span>
            </div>
          </div>
          {/* Bottom floating card */}
          <div className="absolute left-[5%] sm:left-[24px] bottom-[5%] sm:bottom-[24px] bg-white rounded-[12px] shadow-lg border border-[#e5e7eb] px-2 sm:px-4 py-2 sm:py-3 flex items-center w-[120px] sm:w-[140px] z-10">
            <svg
              width="36"
              height="20"
              viewBox="0 0 48 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 sm:mr-2 w-9 sm:w-12"
            >
              <path d="M2 22C8 10 18 2 46 14" stroke="#7EA1C4" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-semibold text-[#7EA1C4] leading-tight">
                {t("howitworks.roi")}
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#7b8fa6]">{t("howitworks.roiDesc")}</span>
            </div>
          </div>
        </div>
        {/* Right: Text content */}
        <div
          className={`flex flex-col items-start max-w-[480px] w-full md:w-1/2 mt-8 md:mt-0${isRTL ? " rtl" : ""}`}
          dir={isRTL ? "rtl" : undefined}
        >
          <div className="flex flex-row items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#7EA1C4] inline-block" />
            <span
              className="font-medium text-sm sm:text-base leading-normal text-[#232b38]"
              style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
            >
              {t("howitworks.badge")}
            </span>
          </div>
          <h3
            className="font-vc-nudge font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#232b38] mb-3 sm:mb-4"
            style={{ fontWeight: 500, letterSpacing: "-0.02em", direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("howitworks.heading")
              .split("\n")
              .map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
          </h3>
          <div className="font-vc-nudge font-medium text-sm sm:text-base leading-normal text-[#232b38] mb-2">
            {t("howitworks.subheading")}
          </div>
          <p
            className="font-semibold text-sm sm:text-base leading-normal text-[#4B5563] mb-6 sm:mb-8"
            style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
          >
            {t("howitworks.desc")}
          </p>
          <a
            href="#"
            className="text-[#627daf] font-medium text-sm sm:text-base hover:text-[#6025D9] hover:underline transition-all"
            style={{ fontFamily: "var(--font-primary, Inter, Arial, sans-serif)" }}
          >
            {t("howitworks.cta") || "Learn more"}
          </a>
        </div>
      </div>
      <HowItWorksFigmaShareCardSection />
      {/* Figma Connect Section */}
      <HowItWorksFigmaConnectSection />
    </section>
  )
}
