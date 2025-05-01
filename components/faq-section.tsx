import { useLanguage } from "@/context/language-context";
import React from "react";

export function FaqSection() {
  const { t, isRTL } = useLanguage();
  const faqData = [
    { q: t("faq.q1") },
    { q: t("faq.q2") },
    { q: t("faq.q3") },
    { q: t("faq.q4") },
    { q: t("faq.q5") },
    { q: t("faq.q6") },
    { q: t("faq.q7") },
  ];
  return (
    <section className="w-full flex flex-col items-center bg-[#eaf1fc] py-[96px]" dir={isRTL ? "rtl" : undefined}>
      <div className="w-full max-w-[1240px] flex flex-col items-center gap-[60px] px-4 md:px-0">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3" style={{width:392}}>
          <h2 className="font-vc-nudge font-medium text-[56px] leading-[1.18] tracking-[0.018em] w-max text-[#111827] text-center" style={{letterSpacing: '-4.4px'}}>{t("faq.heading")}</h2>
          <p className="font-inter font-medium text-[18px] leading-[22px] w-max text-[#4B5563] text-center">{t("faq.subheading")}</p>
        </div>
        {/* FAQ List */}
        <div className="flex flex-col w-full max-w-[1024px] gap-1">
          {faqData.map((item, idx) => (
            <div key={item.q} style={{letterSpacing: '-4.4px'}} className={`flex flex-row items-center justify-between w-full border-t  ${idx === faqData.length-1 ? 'border-b' : ''} border-[#9595951A] px-0 py-[21px]`}>
              <span className="font-vc-nudge font-semibold text-[18px] leading-[23.4px] tracking-[0.1em] text-[#111827] opacity-90" style={{letterSpacing: '-1.0px'}} >{item.q}</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 3V15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 9H15" stroke="#232525" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}