"use client"
import { useLanguage } from "@/context/language-context"

export function HowItWorksFigmaPlansSection() {
  const { t, isRTL } = useLanguage()
  const starterFeatures = t("plans.starter.features")
  const premiumFeatures = t("plans.premium.features")
  return (
    <section
      id="pricing"
      className="w-full flex flex-col items-center bg-[#eaf1fc] py-10 sm:py-16 md:py-20 lg:py-24"
      dir={isRTL ? "rtl" : undefined}
    >
      <div className="w-full max-w-[1240px] flex flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-4">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h2
            className="font-vc-nudge font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#111827] text-center"
            style={{ letterSpacing: "-0.02em", fontWeight: 500 }}
          >
            {t("plans.heading")}
          </h2>
          <p
            className="font-medium text-base sm:text-lg leading-normal text-[#4B5563] text-center"
            style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
          >
            {t("plans.subheading")}
          </p>
        </div>
        {/* Plans Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full justify-center max-w-[800px]">
          {/* Starter Card */}
          <div className="bg-white rounded-[18px] shadow-[0_15px_45px_0_rgba(124,124,124,0.10)] border border-transparent flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 w-full">
            {/* Badge & Price */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-row items-center gap-3">
                <span
                  className="bg-[#627DAF] text-white font-medium text-xs rounded-full px-3 py-1.5"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)", fontWeight: "400" }}
                >
                  {t("plans.starter")}
                </span>
              </div>
              <div className="flex flex-row items-end gap-1">
                <span
                  className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-tight"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {t("plans.price1")}
                </span>
                <span
                  className="text-lg sm:text-xl md:text-2xl text-black mb-1"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {t("plans.perMonth")}
                </span>
              </div>
              <span
                className="font-vc-nudge font-medium text-sm sm:text-base leading-normal text-[#111827] mt-1 sm:mt-2"
                style={{ letterSpacing: "-0.01em" }}
              >
                {t("plans.included")}
              </span>
            </div>
            {/* Features List */}
            <ul className="flex flex-col gap-3 sm:gap-4">
              {(Array.isArray(starterFeatures) ? starterFeatures : []).map((item) => (
                <li key={item} className="flex flex-row items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#627DAF] bg-transparent flex-shrink-0">
                    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                      <path
                        d="M4 8.5l3 3 5-5"
                        stroke="#627DAF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className="font-medium text-sm sm:text-base md:text-lg leading-normal text-[#4B5563]"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className="w-full flex items-center justify-center gap-2 border border-[#627DAF] text-[#627DAF] font-semibold text-sm sm:text-base leading-normal rounded-[8px] py-3 sm:py-4 mt-auto bg-white hover:bg-[#f3f5f8] transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("plans.button")}
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 20 20"
                style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
              >
                <path d="M8 6l4 4-4 4" stroke="#627DAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {/* Business Card */}
          <div className="bg-white rounded-[18px] shadow-[0_15px_45px_0_rgba(124,124,124,0.10)] border border-transparent flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 w-full">
            {/* Badge & Price */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-row items-center gap-3">
                <span
                  className="bg-[#627DAF] text-white font-medium text-xs rounded-full px-3 py-1.5"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)", fontWeight: "400" }}
                >
                  {t("plans.premium")}
                </span>
              </div>
              <div className="flex flex-row items-end gap-1">
                <span
                  className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-tight"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {t("plans.price2")}
                </span>
                <span
                  className="text-lg sm:text-xl md:text-2xl text-black mb-1"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {t("plans.perMonth")}
                </span>
              </div>
              <span
                className="font-vc-nudge font-medium text-sm sm:text-base leading-normal text-[#111827] mt-1 sm:mt-2"
                style={{ letterSpacing: "-0.01em" }}
              >
                {t("plans.included")}
              </span>
            </div>
            {/* Features List */}
            <ul className="flex flex-col gap-3 sm:gap-4">
              {(Array.isArray(premiumFeatures) ? premiumFeatures : []).map((item) => (
                <li key={item} className="flex flex-row items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#627DAF] bg-transparent flex-shrink-0">
                    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                      <path
                        d="M4 8.5l3 3 5-5"
                        stroke="#627DAF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className="font-medium text-sm sm:text-base md:text-lg leading-normal text-[#4B5563]"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* Button */}
            <button
              className="w-full flex items-center justify-center gap-2 border border-[#627DAF] text-[#627DAF] font-semibold text-sm sm:text-base leading-normal rounded-[8px] py-3 sm:py-4 mt-auto bg-white hover:bg-[#f3f5f8] transition"
              style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
            >
              {t("plans.button")}
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 20 20"
                style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
              >
                <path d="M8 6l4 4-4 4" stroke="#627DAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
