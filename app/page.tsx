"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import LanguageSwitcher from "@/components/language-switcher"
import LogoGrid from "@/components/logo-grid"
import { useLanguage } from "@/context/language-context"
import ResultsSection from "@/components/results-section"
import MobileNav from "@/components/mobile-navbar"
import HowItWorksFigmaSection from "@/components/how-it-works-figma-section"
import { HowItWorksFigmaTestimonialSection } from "@/components/how-it-works-figma-testimonial-section"
import { HowItWorksFigmaPlansSection } from "@/components/how-it-works-figma-plans-section"
import { FaqSection } from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import FooterFigma from "@/components/footer-figma"
import "./hero-styles.css"

export default function Home() {
  const { t, isRTL } = useLanguage()

  // Array of announcement messages
  const announcements = [t("hero.announcement1"), t("hero.announcement2"), t("hero.announcement3")]

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

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

        {/* Mobile Menu - New simplified component */}
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
          <MobileNav />
        </div>
      </header>

      <main className="flex-grow relative overflow-hidden bg-white">
        {/* Figma-like gradient background */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {/* Left blue blur: more oval, less tall, softer */}
          <div
            className="absolute"
            style={{
              left: "-8vw",
              top: "8vh",
              width: "38vw",
              height: "28vw",
              minWidth: 260,
              minHeight: 160,
              maxWidth: 600,
              maxHeight: 400,
              background: "radial-gradient(ellipse 60% 40% at 45% 55%, #7ea1c4 45%, transparent 100%)",
              filter: "blur(60px)",
              opacity: 0.48,
              zIndex: 1,
            }}
          />
          {/* Right blue blur: move it more to the left and down, less top-right */}
          <div
            className="absolute"
            style={{
              right: "10vw", // move away from the edge
              top: "18vh", // move down
              width: "22vw",
              height: "22vw",
              minWidth: 120,
              minHeight: 120,
              maxWidth: 340,
              maxHeight: 340,
              background: "radial-gradient(ellipse 55% 55% at 60% 40%, #7ea1c4 38%, transparent 100%)",
              filter: "blur(38px)",
              opacity: 0.38,
              zIndex: 1,
            }}
          />
        </div>

        <div className="container mx-auto px-4 pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16 relative z-10">
          {/* Pill Highlight - Fixed width and consistent sizing */}
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <div className="pill-container flex items-center px-4 py-2 bg-white border border-[#e5e7eb] rounded-full shadow-sm">
              <Image
                src="/images/sparkling.png"
                alt="Star"
                width={16}
                height={16}
                className={`h-4 w-4 ${isRTL ? "ml-1.5" : "mr-1.5"} flex-shrink-0`}
              />
              <span className="pill-text">{t("hero.announcement1")}</span>
            </div>
          </div>

          {/* Main Heading - Using fixed dimensions and consistent styling */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 w-full max-w-[1200px] mx-auto">
            <h1 className="heading-container">
              <div className="heading-row">
                <span className={`heading-word ${isRTL ? "ml-2" : "mr-2"}`}>{t("hero.customer")}</span>
                <span className="heading-word text-[#5d7ab0]">{t("hero.loyalty")}</span>
                <span className={`heading-word ${isRTL ? "mr-2" : "ml-2"}`}>{t("hero.programs")}</span>
              </div>
              <div className="heading-row mt-2">{t("hero.forRetention")}</div>
            </h1>
          </div>

           {/* Subtitle - Bigger and more prominent */}
           <div className="w-full max-w-[700px] mx-auto text-center mb-6 sm:mb-8">
            <p
              style={{
                fontFamily: "var(--font-primary, Inter, sans-serif)",
                fontSize: "20px",
                lineHeight: 1.5,
                color: "#4b5563",
                fontWeight: 500,
                "@media (minwidth: 768px)": { fontSize: "18px" },
              }}
            >
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Buttons - Fixed dimensions and consistent styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <button className="cta-button primary-cta">
              {t("hero.startFree")}
              <ArrowIcon className={`h-5 w-5 ${isRTL ? "mr-1.5" : "ml-1.5"}`} />
            </button>
            <button className="cta-button secondary-cta">{t("hero.learnMore")}</button>
          </div>
        </div>
      </main>

      {/* Logo Grid Section */}
      <LogoGrid />

      {/* Results Section */}
      <ResultsSection />

      <HowItWorksFigmaSection />
      <HowItWorksFigmaTestimonialSection />
      <HowItWorksFigmaPlansSection />
      <FaqSection />
      <ContactSection />
      <FooterFigma />
    </div>
  )
}
