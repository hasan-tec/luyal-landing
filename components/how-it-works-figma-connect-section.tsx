import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export function HowItWorksFigmaConnectSection() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="w-full flex justify-center bg-[#eaf1fc] py-[64px] md:py-[96px]" dir={isRTL ? "rtl" : undefined}>
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-[80px] md:gap-[338px] px-4 md:px-0">
        {/* Left: Image */}
        <div className="relative flex-shrink-0 w-full max-w-[480px]">
          <Image
            src="/images/unsplash_tgquMvhNLc4.png"
            alt={t("howitworks.connect.heading")}
            width={480}
            height={360}
            className="rounded-[18px] object-cover w-full h-auto"
            priority
          />
        </div>
        {/* Right: Card/Info */}
        <div className={`flex flex-col items-start max-w-[480px] w-full${isRTL ? ' rtl' : ''}`} dir={isRTL ? "rtl" : undefined}>
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#627DAF] inline-block" />
            <span className="font-medium text-[16px] leading-[24px] text-[#111827] tracking-[0.01em]" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.connect.badge")}</span>
          </div>
        
            <h3
            className="font-vc-nudge font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] lg:w-max md:w-full md:break-words tracking-[0.0375em] text-[#111827] mb-2"
            style={{ fontWeight: 500, letterSpacing: '-1.8px', direction: isRTL ? 'rtl' : 'ltr' }}
            >
            {t("howitworks.connect.heading")
                .split("\n")
                .map((line, idx, arr) => (
                <span key={idx}>
                    {line}
                    {idx !== arr.length - 1 && <br />}
                </span>
                ))}
            </h3>

          <div className="font-vc-nudge font-medium text-[16px] leading-[21px] tracking-[0.018em] text-[#111827] mb-2">{t("howitworks.connect.subheading")}</div>
          <p className="font-semibold text-[16px] leading-[21px] text-[#4B5563] mb-8" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.connect.desc")}</p>
          <button className="px-8 py-4 border border-[#E5E7EB] rounded-[8px] bg-white shadow font-semibold text-[16px] leading-[24px] text-[#111827] hover:bg-[#f6fafd] transition" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{t("howitworks.connect.cta")}</button>
        </div>
      </div>
    </section>
  );
}
