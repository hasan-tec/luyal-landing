"use client"

import { useLanguage } from "@/context/language-context"
import { useState } from "react"

export function FaqSection() {
  const { t, isRTL } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="w-full flex flex-col items-center bg-[#eaf1fc] py-10 sm:py-12 md:py-16 lg:py-24 overflow-x-hidden"
      dir={isRTL ? "rtl" : undefined}
    >
      <div className="w-full max-w-[1240px] flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-4">
        {/* Responsive Heading */}
        <div className="flex flex-col items-center gap-2 w-full max-w-full md:max-w-[80%] lg:max-w-[600px]">
          <h2
            className="font-vc-nudge font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#111827] text-center"
            style={{
              letterSpacing: "-0.02em",
              fontWeight: 500,
              fontFamily: "var(--font-primary, Inter, sans-serif)",
            }}
          >
            {t("faq.heading")}
          </h2>
          <p
            className="font-medium text-sm sm:text-base md:text-lg leading-normal text-[#4B5563] text-center"
            style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
          >
            {t("faq.subheading")}
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col w-full max-w-[1024px] gap-1 overflow-x-hidden">
          {faqData.map((item, idx) => (
            <div key={idx} className="border-t last:border-b border-[#9595951A]">
              <div
                onClick={() => toggleFaq(idx)}
                className="flex flex-row items-center justify-between w-full px-1 py-3 sm:py-4 md:py-5 cursor-pointer"
              >
                <span
                  className={`font-medium text-sm sm:text-base md:text-lg leading-normal text-[#111827] opacity-90 flex-grow pr-4 ${
                    isRTL ? "pl-4" : "pr-4"
                  }`}
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {item.q}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === idx ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                    >
                      <path d="M3 9H15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                    >
                      <path d="M9 3V15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M3 9H15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </div>
              {openIndex === idx && (
                <div
                  className="px-1 pb-3 sm:pb-4 md:pb-5 text-xs sm:text-sm md:text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
