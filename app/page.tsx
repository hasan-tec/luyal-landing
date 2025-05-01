"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import LanguageSwitcher from "@/components/language-switcher"
import LogoGrid from "@/components/logo-grid"
import { useLanguage } from "@/context/language-context"
import ResultsSection from "@/components/results-section"
import HamburgerMenu from "@/components/hamburger-menu"

export default function Home() {
  const { t, isRTL } = useLanguage()

  // Array of announcement messages
  const announcements = [t("hero.announcement1"), t("hero.announcement2"), t("hero.announcement3")]

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  // Custom heading style
  const headingStyle = {
    fontFamily: "'GeistSans'",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "72px",
    lineHeight: "72px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-5.5px",
    textTransform: "uppercase",
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Bar */}
      <div className="w-full bg-[#627daf] text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnnouncementBar messages={announcements} />
        </div>
      </div>

      {/* Navigation - Restructured with 3 sections */}
      <header className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between relative">
        {/* Logo - Left Section */}
        <div className="flex items-center z-10">
          <div className={`${isRTL ? "ml-2" : "mr-2"}`}>
            <Image
              src="/images/logo-gradient.png"
              alt="Luyal Logo"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10"
              priority
            />
          </div>
          <span className="text-[#111827] text-xl md:text-2xl font-bold">{isRTL ? "لويال" : "Luyal"}</span>
        </div>

        {/* Navigation Links - Center Section */}
        <nav className="hidden xl:flex items-center justify-center gap-4 xl:gap-6 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            className="text-[#111827] font-semibold border-b-2 border-[#111827] font-inter text-base leading-6 whitespace-nowrap"
          >
            {t("nav.home")}
          </a>
          <a
            href="#"
            className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
          >
            {t("nav.features")}
          </a>
          <a
            href="#"
            className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
          >
            {t("nav.pricing")}
          </a>
          <a
            href="#"
            className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
          >
            {t("nav.solution")}
          </a>
          <a
            href="#"
            className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
          >
            {t("nav.faq")}
          </a>
          <a
            href="#"
            className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
          >
            {t("nav.contact")}
          </a>
        </nav>

        {/* Right Section - Login, Get Started, Language */}
        <div className="hidden xl:flex items-center gap-4 z-10">
          <LanguageSwitcher />
          <button className="flex items-center text-[#111827] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
              aria-hidden="true"
            >
              <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
              </g>
            </svg>
            {t("nav.login")}
          </button>
          <button className="bg-[#627daf] text-white px-6 py-3 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium whitespace-nowrap">
            {t("nav.getStarted")}
          </button>
        </div>

        {/* Medium screens - Simplified navigation */}
        <div className="hidden md:flex xl:hidden items-center gap-4 z-10">
          <LanguageSwitcher />
          <button className="flex items-center text-[#111827] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
              aria-hidden="true"
            >
              <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
              </g>
            </svg>
            {t("nav.login")}
          </button>
          <button className="bg-[#627daf] text-white px-4 py-2 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium whitespace-nowrap">
            {t("nav.getStarted")}
          </button>
        </div>

        {/* Mobile Menu - Simplified */}
        <div className="md:hidden flex items-center gap-3 z-50">
          <LanguageSwitcher />
          <button className="flex items-center text-[#111827] font-medium text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`}
              aria-hidden="true"
            >
              <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
              </g>
            </svg>
            {t("nav.login")}
          </button>
          <HamburgerMenu />
        </div>
      </header>

      {/* Hero Section with gradient background */}
      <main className="flex-grow relative overflow-hidden bg-white">
        {/* Right gradient */}
        <div
          style={{
            position: "absolute",
            width: "1155px",
            height: "678px",
            left: "582.17px",
            top: "-109px",
            background: "linear-gradient(277.45deg, rgba(126, 161, 196, 0.55) 19.78%, rgba(255, 255, 255, 0.55) 57.1%)",
            opacity: 0.5,
            transform: "rotate(60deg)",
            zIndex: 0,
          }}
        ></div>

        {/* Left gradient */}
        <div
          style={{
            position: "absolute",
            width: "760.84px",
            height: "506.6px",
            left: "-300px",
            top: "200px",
            background:
              "linear-gradient(221.78deg, rgba(126, 161, 196, 0.55) 13.15%, rgba(255, 255, 255, 0.55) 55.27%)",
            opacity: 0.5,
            transform: "rotate(-84deg)",
            zIndex: 0,
          }}
        ></div>

        <div className="container mx-auto px-3 sm:px-4 pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-16 md:pb-20 relative z-10">
          {/* Pill Highlight */}
          <div className="flex justify-center mb-5 sm:mb-8">
            <div className="inline-flex items-center px-3 sm:px-5 py-1.5 sm:py-2 bg-white border border-[#e5e7eb] rounded-full shadow-sm">
              <Image
                src="/images/sparkling.png"
                alt="Star"
                width={16}
                height={16}
                className={`h-4 w-4 sm:h-5 sm:w-5 ${isRTL ? "ml-1.5 sm:ml-2" : "mr-1.5 sm:mr-2"} flex-shrink-0`}
              />
              <span
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {t("hero.announcement1")}
              </span>
            </div>
          </div>

          {/* Main Heading - Improved for consistent display across devices */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 w-full">
            <h1 className="font-bold text-[#111827] leading-tight tracking-tight w-full mx-auto">
              {isRTL ? (
                <>
                  <div className="text-[2rem] xs:text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] inline-flex flex-wrap justify-center">
                    <span className="inline-block ml-2 my-1">{t("hero.customer")}</span>
                    <span className="loyalty-box inline-block my-1 mx-1">
                      <span className="font-bold">{t("hero.loyalty")}</span>
                    </span>
                    <span className="inline-block mr-2 my-1">{t("hero.programs")}</span>
                  </div>
                  <div className="text-[2rem] xs:text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] mt-1 sm:mt-2">
                    {t("hero.forRetention")}
                  </div>
                </>
              ) : (
                <div
                  className="english-heading"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    ...headingStyle,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      width: "100%",
                      fontSize: "72px",
                      lineHeight: "72px",
                      letterSpacing: "-5.5px",
                      textTransform: "uppercase",
                      fontFamily: "'GeistSans'",
                      fontWeight: "bolder",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        margin: "0 8px",
                        fontFamily: "'GeistSans'",
                        fontWeight: "bolder",
                        fontSize: "72px",
                        lineHeight: "72px",
                        letterSpacing: "-5.5px",
                      }}
                    >
                      {t("hero.customer")}
                    </span>
                    <span
                      className="loyalty-box"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 8px",
                        isolation: "isolate",
                        position: "relative",
                        width: "301px",
                        height: "98px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'GeistSans'",
                          fontWeight: "bolder",
                          color: "#5d7ab0",
                          fontSize: "72px",
                          lineHeight: "72px",
                          letterSpacing: "-5.5px",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        {t("hero.loyalty")}
                      </span>
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          border: "1.5px solid #627DAF",
                          zIndex: 0,
                        }}
                      ></span>
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        margin: "0 8px",
                        fontFamily: "'GeistSans'",
                        fontWeight: "bolder",
                        fontSize: "72px",
                        lineHeight: "72px",
                        letterSpacing: "-5.5px",
                      }}
                    >
                      {t("hero.programs")}
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      fontSize: "72px",
                      lineHeight: "72px",
                      letterSpacing: "-5.5px",
                      textTransform: "uppercase",
                      fontFamily: "'GeistSans'",
                      fontWeight: "bolder",
                    }}
                  >
                    {t("hero.forRetention")}
                  </div>
                </div>
              )}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="w-full mx-auto text-center mb-6 sm:mb-8 md:mb-10 px-1 sm:px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4b5563] max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="bg-[#627daf] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-[#5670a0] transition-colors flex items-center font-medium w-full sm:w-auto justify-center text-sm sm:text-base">
              {t("hero.startFree")}
              <ArrowIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${isRTL ? "mr-1.5 sm:mr-2" : "ml-1.5 sm:ml-2"}`} />
            </button>
            <button className="border border-[#e5e7eb] bg-white text-[#111827] px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto text-sm sm:text-base">
              {t("hero.learnMore")}
            </button>
          </div>
        </div>
      </main>

      {/* Logo Grid Section */}
      <LogoGrid />

      {/* Results Section */}
      <ResultsSection />
    </div>
  )
}
