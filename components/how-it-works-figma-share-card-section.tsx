import Image from "next/image";
import { useLanguage } from "@/context/language-context";

export function HowItWorksFigmaShareCardSection() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="w-full flex justify-center bg-[#eaf1fc] py-[64px] md:py-[96px]" dir={isRTL ? "rtl" : undefined}>
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-[80px] md:gap-[212px] px-4 md:px-0">
        {/* Left: Card/Info */}
        <div className={`flex flex-col items-start max-w-[480px] w-full${isRTL ? ' rtl' : ''}`} dir={isRTL ? "rtl" : undefined}>
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#627DAF] inline-block" />
            <span className="font-medium text-[16px] leading-[24px] text-[#232b38] tracking-[0.01em]" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.share.badge")}</span>
          </div>
          <h3 className="font-vc-nudge font-medium text-[48px] leading-[58px] lg:w-max md:w-full md:break-words tracking-[0.0375em] text-[#232b38] mb-2" style={{ fontWeight: 500, letterSpacing: '-2.8px', direction: isRTL ? 'rtl' : 'ltr'}}>{t("howitworks.share.heading").split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}</h3>
          <div className="font-vc-nudge font-medium text-[16px] leading-[21px] tracking-[0.018em] text-[#232b38] mb-2">{t("howitworks.share.subheading")}</div>
          <p className="font-semibold text-[16px] leading-[21px] text-[#4B5563] mb-8" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.share.desc")}</p>
          <button className="px-8 py-4 border border-[#E5E7EB] rounded-[18px] bg-white shadow font-semibold text-[16px] leading-[24px] text-[#232b38] hover:bg-[#f6fafd] transition" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.share.cta")}</button>
        </div>
        {/* Right: Image */}
        <div className="relative flex-shrink-0 w-full max-w-[480px]">
          <Image
            src="/images/unsplash_TOaE3Td9F8M (1).png"
            alt="Share Loyalty Card"
            width={480}
            height={360}
            className="rounded-[20px] object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
