import Image from "next/image";
import { HowItWorksFigmaShareCardSection } from "./how-it-works-figma-share-card-section";
import { HowItWorksFigmaConnectSection } from "./how-it-works-figma-connect-section";
import { useLanguage } from "@/context/language-context";

export default function HowItWorksFigmaSection() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="w-full bg-[#eaf1fc] py-[64px] md:py-[96px] flex flex-col items-center" dir={isRTL ? "rtl" : undefined}>
      <h2
        className="text-[#232b38] text-center font-vc-nudge font-medium text-[56px]  leading-[67px] tracking-[0.032em] mb-[64px]"
        style={{fontWeight: '500', letterSpacing: '-4.4px', direction: isRTL ? 'rtl' : 'ltr'}}>
        {isRTL ? t("howitworks.title") : (<><span>{t("howitworks.title1")}</span><br /><span>{t("howitworks.title2")}</span></>)}
      </h2>
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-start md:items-center gap-[80px] md:gap-[168px] px-4 md:px-0">
        {/* Left: Image with floating cards */}
        <div className="relative flex-shrink-0 w-full max-w-[480px]">
          <Image
            src="/images/unsplash_TOaE3Td9F8M.png"
            alt="Loyalty Card Mobile"
            width={480}
            height={360}
            className="rounded-[20px] object-cover w-full h-auto"
            priority
          />
          {/* Top floating card */}
          <div className="absolute left-[32px] top-[24px] bg-white rounded-[12px] shadow-lg border border-[#e5e7eb] px-6 py-4 flex flex-col items-center w-[180px] z-10">
            <span className="text-xs text-[#232b38] font-semibold mb-2">{t("howitworks.cardTitle")}</span>
            <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="28" width="16" height="20" rx="2" fill="#7EA1C4"/>
              <rect x="24" y="12" width="16" height="36" rx="2" fill="#B6C6E3"/>
              <rect x="48" y="6" width="16" height="42" rx="2" fill="#7EA1C4"/>
              <rect x="72" y="16" width="16" height="32" rx="2" fill="#B6C6E3"/>
              <rect x="96" y="2" width="16" height="46" rx="2" fill="#7EA1C4"/>
            </svg>
            <div className="flex w-full justify-between mt-2 text-[11px] text-[#7b8fa6]">
              <span>{t("howitworks.year1")}</span>
              <span>{t("howitworks.year2")}</span>
              <span>{t("howitworks.year3")}</span>
            </div>
            <div className="flex flex-row gap-2 mt-2 w-full justify-start">
              <span className="w-2 h-2 rounded-full bg-[#7EA1C4] inline-block"></span>
              <span className="text-xs text-[#232b38]">{t("howitworks.market1")}</span>
              <span className="w-2 h-2 rounded-full bg-[#B6C6E3] inline-block ml-2"></span>
              <span className="text-xs text-[#232b38]">{t("howitworks.market2")}</span>
            </div>
          </div>
          {/* Bottom floating card */}
          <div className="absolute left-[24px] bottom-[24px] bg-white rounded-[12px] shadow-lg border border-[#e5e7eb] px-4 py-3 flex items-center w-[140px] z-10">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M2 22C8 10 18 2 46 14" stroke="#7EA1C4" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#7EA1C4] leading-tight">{t("howitworks.roi")}</span>
              <span className="text-[11px] text-[#7b8fa6]">{t("howitworks.roiDesc")}</span>
            </div>
          </div>
        </div>
        {/* Right: Text content */}
        <div className={`flex flex-col items-start max-w-[480px] w-full mt-12 md:mt-0${isRTL ? ' rtl' : ''}`} dir={isRTL ? "rtl" : undefined}>
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#7EA1C4] inline-block" />
            <span className="font-medium text-[16px] leading-[24px] text-[#232b38] tracking-[0.01em]" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.badge")}</span>
          </div>
          <h3 className="font-vc-nudge font-medium text-[48px] leading-[58px] w-max tracking-[0.0375em] text-[#232b38] mb-4" style={{ fontWeight: 500, letterSpacing: '-2.8px', direction: isRTL ? 'rtl' : 'ltr'}}>
            {t("howitworks.heading").split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h3>
          <div className="font-vc-nudge font-medium text-[16px] leading-[21px] tracking-[0.018em] text-[#232b38] mb-2">{t("howitworks.subheading")}</div>
          <p className="font-semibold text-[16px] leading-[21px] text-[#4B5563] mb-8" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.desc")}</p>
          <button className="px-8 py-4 border border-[#E5E7EB] rounded-[8px] bg-white shadow font-semibold text-[16px] leading-[24px] text-[#232b38] hover:bg-[#f6fafd] transition" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.cta")}</button>
        </div>
      </div>
      <HowItWorksFigmaShareCardSection />
      {/* Figma Connect Section */}
      <HowItWorksFigmaConnectSection />
    </section>
  );
}
