import React from "react";
import { useLanguage } from "@/context/language-context";

export function HowItWorksFigmaPlansSection() {
  const { t, isRTL } = useLanguage();
  const starterFeatures = t("plans.starter.features");
  const premiumFeatures = t("plans.premium.features");
  return (
    <section className="w-full flex flex-col items-center bg-[#eaf1fc] py-[96px]" dir={isRTL ? "rtl" : undefined}>
      <div className="w-full max-w-[1240px] flex flex-col items-center gap-[60px] px-4 md:px-0">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-vc-nudge font-medium text-[56px] leading-[1.18] tracking-[0.018em] text-[#111827] text-center" style={{letterSpacing: '-5.4px'}}>{t("plans.heading")}</h2>
          <p className="font-inter font-medium text-[18px] leading-[22px] text-[#4B5563] text-center">{t("plans.subheading")}</p>
        </div>
        {/* Plans Row */}
        <div className="flex flex-col md:flex-row gap-[40px] w-full justify-center">
          {/* Starter Card */}
          <div className="bg-white rounded-[18px] shadow-[0_15px_45px_0_rgba(124,124,124,0.10)] border border-transparent flex flex-col gap-10 p-10 w-full max-w-[370px] min-w-[320px]">
            {/* Badge & Price */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-3">
                <span className="bg-[#627DAF] text-white font-inter font-medium text-xs rounded-full px-3 py-1.5" style={{fontWeight: '300'}}>{t("plans.starter")}</span>
              </div>
              <div className="flex flex-row items-end gap-1">
                <span className="font-inter text-[48px] font-bold text-black leading-[1.1]" style={{fontWeight: '500'}}>{t("plans.price1")}</span>
                <span className="font-inter text-[24px] text-black mb-1">{t("plans.perMonth")}</span>
              </div>
              <span className="font-vc-nudge font-medium text-[16px] leading-[22px] tracking-[0.018em] text-[#111827] mt-2" style={{letterSpacing: '-0.9px'}}>{t("plans.included")}</span>
            </div>
            {/* Features List */}
            <ul className="flex flex-col gap-4 ">
              {(Array.isArray(starterFeatures) ? starterFeatures : []).map((item) => (
                <li key={item} className="flex flex-row items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#627DAF] bg-transparent">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8.5l3 3 5-5" stroke="#627DAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="font-inter font-medium text-[18px] leading-[24px] text-[#4B5563]">{item}</span>
                </li>
              ))}
            </ul>
           
            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-[#627DAF] text-[#627DAF] font-inter font-semibold text-[16px] leading-[22px] rounded-[8px] py-4 mt-4 bg-white hover:bg-[#f3f5f8] transition">
              {isRTL ? t("plans.button") : t("plans.button")}
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M8 6l4 4-4 4" stroke="#627DAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          {/* Business Card */}
          <div className="bg-white rounded-[18px] shadow-[0_15px_45px_0_rgba(124,124,124,0.10)] border border-transparent flex flex-col gap-10 p-10 w-full max-w-[370px] min-w-[320px]">
            {/* Badge & Price */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-3">
                <span className="bg-[#627DAF] text-white font-inter font-medium text-xs rounded-full px-3 py-1.5" style={{fontWeight: '300'}}>{t("plans.premium")}</span>
              </div>
              <div className="flex flex-row items-end gap-1">
                <span className="font-inter text-[48px] font-bold text-black leading-[1.1] " style={{fontWeight: '500'}}>{t("plans.price2")}</span>
                <span className="font-inter text-[24px] text-black mb-1">{t("plans.perMonth")}</span>
              </div>
              <span className="font-vc-nudge font-medium text-[16px] leading-[22px] tracking-[0.018em] text-[#111827] mt-2" style={{letterSpacing: '-0.9px'}}>{t("plans.included")}</span>
            </div>
            {/* Features List */}
            <ul className="flex flex-col gap-4 mt-2">
              {(Array.isArray(premiumFeatures) ? premiumFeatures : []).map((item) => (
                <li key={item} className="flex flex-row items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#627DAF] bg-transparent">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8.5l3 3 5-5" stroke="#627DAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="font-inter font-medium text-[18px] leading-[24px] text-[#4B5563]">{item}</span>
                </li>
              ))}
            </ul>
            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-[#627DAF] text-[#627DAF] font-inter font-semibold text-[16px] leading-[22px] rounded-[8px] py-4 mt-4 bg-white hover:bg-[#f3f5f8] transition">
              {isRTL ? t("plans.button") : t("plans.button")}
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M8 6l4 4-4 4" stroke="#627DAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
