import { useLanguage } from "@/context/language-context";
import React, { useState } from "react";

export function FaqSection() {
  const { t, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full flex flex-col items-center bg-[#eaf1fc] py-12 md:py-16 lg:py-[96px] overflow-x-hidden"
      dir={isRTL ? "rtl" : undefined}
    >
      <div className="w-full max-w-[1240px] flex flex-col items-center gap-8 md:gap-10 lg:gap-[60px] px-4 md:px-6 lg:px-0">
        {/* Responsive Heading */}
        <div className="flex flex-col items-center gap-2 md:gap-3 w-full max-w-full md:max-w-[80%] lg:max-w-[600px]">
          <h2
            className="font-vc-nudge font-medium text-[2rem] xs:text-[2.5rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[56px] leading-[1.15] text-[#111827] text-center break-words"
            style={{
              letterSpacing: isRTL ? "normal" : "-2.5px",
              wordBreak: "break-word",
              fontWeight: 500,
            }}
          >
            {t("faq.heading")}
          </h2>
          <p className="font-inter font-medium text-[15px] xs:text-[16px] md:text-[18px] leading-[1.5] md:leading-[22px] text-[#4B5563] text-center">
            {t("faq.subheading")}
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col w-full max-w-[1024px] gap-1 overflow-x-hidden">
          {faqData.map((item, idx) => (
            <div key={idx} className="border-t last:border-b border-[#9595951A]">
              <div
                onClick={() => toggleFaq(idx)}
                className="flex flex-row items-center justify-between w-full px-1 py-4 md:py-5 lg:py-[21px] cursor-pointer"
              >
                <span
                  className={`font-vc-nudge font-semibold text-[16px] md:text-[18px] leading-[1.3] text-[#111827] opacity-90 flex-grow truncate ${
                    isRTL ? "pl-4 md:pl-4" : "pr-4 md:pr-4"
                  }`}
                  style={{ letterSpacing: isRTL ? "normal" : "-0.5px" }}
                >
                  {item.q}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === idx ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9H15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3V15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M3 9H15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </div>
              {openIndex === idx && (
                <div className="px-1 pb-4 md:pb-5 font-inter text-[14px] md:text-[16px] leading-[1.6] text-[#4B5563]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}