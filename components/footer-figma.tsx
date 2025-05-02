"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function FooterFigma() {
  const { t, isRTL } = useLanguage()
  return (
    <footer className="w-full bg-[#7389B7] px-4 py-10 sm:py-12 md:py-16 lg:pt-20 lg:pb-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 sm:gap-10 md:gap-12">
        {/* Left: Logo, tagline, social */}
        <div className="flex flex-col items-start max-w-full sm:max-w-[400px]">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Image
              src="/images/logo-gradient.png"
              alt="Luyal Logo"
              width={48}
              height={48}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              style={{ objectFit: "contain" }}
            />
            <span
              className="font-medium text-white text-xl sm:text-2xl md:text-3xl leading-tight"
              style={{
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-primary, Inter, sans-serif)",
                fontWeight: 700,
              }}
            >
              Luyal
            </span>
          </div>
          <p
            className="text-white text-sm sm:text-base md:text-lg leading-normal mb-6"
            style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
          >
            {t("footer.tagline") || "Stay Connected with Luyal – Your Journey to Rewards Starts Here"}
          </p>
          <div className="flex flex-row gap-6 sm:gap-8 mb-2">
            <a href="#" aria-label={t("footer.social.facebook") || "Facebook"} className="hover:opacity-80 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
                <path
                  d="M13.333 10.833h-1.25v5h-2.5v-5h-1.25V8.75h1.25V7.917c0-1.034.683-1.667 1.75-1.667h1.25v2.083h-1.25v.417h1.25v2.083z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="#" aria-label={t("footer.social.twitter") || "Twitter"} className="hover:opacity-80 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
                <path
                  d="M16.667 6.667a6.667 6.667 0 01-1.885.516A3.333 3.333 0 0016.25 5.25a6.667 6.667 0 01-2.108.808A3.333 3.333 0 007.5 9.167c0 .262.03.517.086.76A9.45 9.45 0 013.333 5.833a3.333 3.333 0 001.03 4.444 3.333 3.333 0 01-1.51-.417v.042a3.333 3.333 0 002.667 3.267 3.333 3.333 0 01-1.505.057 3.333 3.333 0 003.117 2.317A6.68 6.68 0 013.333 15c4.418 0 6.833-3.667 6.833-6.833 0-.104-.002-.208-.007-.312A4.89 4.89 0 0016.667 6.667z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="#" aria-label={t("footer.social.linkedin") || "LinkedIn"} className="hover:opacity-80 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
                <path
                  d="M5.833 7.5H3.75v8.333h2.083V7.5zm-1.042-2.083a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm3.75 2.083h-2.083v8.333h2.083V12.5c0-1.042.833-1.875 1.875-1.875s1.875.833 1.875 1.875v3.333h2.083V12.5c0-2.292-1.875-4.167-4.167-4.167z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label={t("footer.social.instagram") || "Instagram"}
              className="hover:opacity-80 transition"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
                <rect x="3.333" y="3.333" width="13.333" height="13.333" rx="4" stroke="#fff" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="3.333" stroke="#fff" strokeWidth="1.5" />
                <circle cx="14.167" cy="5.833" r=".833" fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
        {/* Center: Navigation */}
        <div className="flex flex-row gap-12 sm:gap-16 md:gap-24 justify-start md:justify-center">
          <div className="flex flex-col gap-1 sm:gap-2">
            <span
              className="font-medium text-base sm:text-lg md:text-xl leading-normal text-white mb-1 sm:mb-2"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.pages") || "Pages"}
            </span>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.home") || "Home"}
            </a>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.features") || "Features"}
            </a>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.pricing") || "Pricing"}
            </a>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.faqs") || "Faqs"}
            </a>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <span
              className="font-medium text-base sm:text-lg md:text-xl leading-normal text-white mb-1 sm:mb-2"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.service") || "Service"}
            </span>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.shopify") || "Shopify"}
            </a>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.wordpress") || "WordPress"}
            </a>
            <a
              href="#"
              className="font-normal text-sm sm:text-base leading-relaxed text-white hover:opacity-80 transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.uiux") || "UI/UX Design"}
            </a>
          </div>
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col gap-3 sm:gap-4 max-w-full sm:max-w-[340px]">
          <span
            className="font-medium text-base sm:text-lg md:text-xl leading-normal text-white mb-1 sm:mb-2"
            style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
          >
            {t("footer.contact") || "Contact"}
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone icon */}
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
              <path
                d="M17 15.5v2a1 1 0 01-1.09 1c-3.5-.3-6.7-2.1-9.1-4.5s-4.2-5.6-4.5-9.1A1 1 0 013.5 3h2a1 1 0 011 1c.07.8.22 1.6.45 2.36a1 1 0 01-.23 1.04l-1.1 1.1a13.1 13.1 0 005.2 5.2l1.1-1.1a1 1 0 011.04-.23c.76.23 1.56.38 2.36.45a1 1 0 011 1z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-sm sm:text-base text-white"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.phone") || "(406) 555-0120"}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Email icon */}
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
              <rect x="3" y="5" width="14" height="10" rx="2" stroke="#fff" strokeWidth="1.5" />
              <path d="M3 5l7 5 7-5" stroke="#fff" strokeWidth="1.5" />
            </svg>
            <span
              className="text-sm sm:text-base text-white"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.email") || "mangcoding123@gmail.com"}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Location icon */}
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="w-5 h-5 sm:w-[18px] sm:h-[18px]">
              <path
                d="M10 18s-7-5.5-7-10.5A7 7 0 0110 1a7 7 0 017 7c0 5-7 10.5-7 10.5z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="8" r="2.5" stroke="#fff" strokeWidth="1.5" />
            </svg>
            <span
              className="text-sm sm:text-base text-white"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("footer.address") || "2972 Westheimer Rd. Santa Ana, Illinois 85486"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
