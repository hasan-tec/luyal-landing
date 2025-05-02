"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export function HowItWorksFigmaTestimonialSection() {
  const { t, isRTL } = useLanguage()
  const testimonials = [
    {
      name: t("testimonial.name1"),
      role: t("testimonial.role1"),
      text: t("testimonial.text1"),
      img: "/images/image 2.png",
    },
    {
      name: t("testimonial.name2"),
      role: t("testimonial.role2"),
      text: t("testimonial.text1"),
      img: "/images/image 2.png",
    },
    {
      name: t("testimonial.name3"),
      role: t("testimonial.role3"),
      text: t("testimonial.text1"),
      img: "/images/image 2.png",
    },
  ]
  return (
    <section
      className="w-full flex flex-col items-center bg-white py-10 sm:py-16 md:py-20 lg:py-24"
      dir={isRTL ? "rtl" : undefined}
    >
      <div className="w-full max-w-[1240px] flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-4">
        {/* Header Row */}
        <div className="flex flex-row justify-between items-center w-full">
          <h2
            className="font-vc-nudge font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#111827] capitalize"
            style={{
              letterSpacing: "-0.02em",
              textAlign: isRTL ? "right" : "left",
              fontWeight: 500,
            }}
          >
            {t("testimonial.heading")}
          </h2>
          <a
            href="#"
            className="hidden md:inline-flex items-center font-medium text-base text-[#111827] hover:underline transition-all"
            style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
          >
            {t("testimonial.viewAll")}
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className={isRTL ? "mr-1" : "ml-1"}
              style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
            >
              <path
                d="M10 8l4 4-4 4"
                stroke="#111827"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="md:hidden flex justify-end mb-2">
          <a
            href="#"
            className="inline-flex items-center font-medium text-sm sm:text-base text-[#111827] hover:underline transition-all"
            style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
          >
            {t("testimonial.viewAll")}
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className={isRTL ? "mr-1" : "ml-1"}
              style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
            >
              <path
                d="M10 8l4 4-4 4"
                stroke="#111827"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        {/* Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {(isRTL ? testimonials.slice().reverse() : testimonials).map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#F1F1F2] rounded-[16px] sm:rounded-[24px] flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 w-full h-full shadow-none border border-transparent"
            >
              {/* Profile */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 w-full">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D9D9D9] overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.img || "/placeholder.svg"}
                    alt="Avatar"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-vc-nudge font-semibold text-base sm:text-lg md:text-xl leading-tight text-[#111827]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    className="font-medium text-sm sm:text-base leading-normal text-[#4B5563]"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {testimonial.role}
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-[#D3D3D3]" />
              {/* Testimonial */}
              <div className="flex flex-col w-full">
                <span
                  className="font-medium text-sm sm:text-base md:text-lg leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {testimonial.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
