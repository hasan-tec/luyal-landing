"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ContactSection() {
  const { t, isRTL } = useLanguage()
  const [selectedSubject, setSelectedSubject] = useState("option-0")

  // Subject options from translations
  const subjectOptions = [
    t("contact.subjectOption1"),
    t("contact.subjectOption2"),
    t("contact.subjectOption3"),
    t("contact.subjectOption4"),
  ]

  return (
    <section 
      id="contact"
    className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white contact-section" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-6">
          {/* Heading */}
          <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#011C2A] mb-3 sm:mb-4"
          style={{
            fontFamily: "var(--font-primary, Inter, sans-serif)",
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {t("contact.heading")}
        </h2>
          <p
            className="text-[#4B5563] text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: "var(--font-primary, Inter, sans-serif)",
              fontWeight: 400,
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {t("contact.subheading")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mt-6 sm:mt-8 md:mt-10">
          {/* Contact Information Card */}
          <div
            className="lg:w-[40%] bg-[#627DAF] text-white rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden contact-card"
            style={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              direction: isRTL ? "rtl" : "ltr",
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {/* Background circles */}
            <div
              className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[250px] h-[150px] sm:h-[200px] md:h-[250px] rounded-full bg-[#7289BD] opacity-30"
              style={{ transform: "translate(30%, 30%)" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-[120px] sm:w-[160px] md:w-[200px] h-[120px] sm:h-[160px] md:h-[200px] rounded-full bg-[#7289BD] opacity-20"
              style={{ transform: "translate(10%, 40%)" }}
            ></div>

            <div className="relative z-10">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 md:mb-4"
                style={{
                  fontFamily: "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {t("contact.infoTitle")}
              </h3>
              <p
                className="text-[#F8F9FA] mb-6 sm:mb-8 md:mb-10 lg:mb-12 opacity-90 text-xs sm:text-sm md:text-base"
                style={{
                  fontFamily: "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {t("contact.infoDesc")}
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
                  <div className={isRTL ? "ml-2 sm:ml-3 mt-0.5" : "mr-2 sm:mr-3 mt-0.5"}>
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <p
                    className="text-[#F8F9FA] text-xs sm:text-sm md:text-base"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.phone")}
                  </p>
                </div>

                <div className="flex items-start" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
                  <div className={isRTL ? "ml-2 sm:ml-3 mt-0.5" : "mr-2 sm:mr-3 mt-0.5"}>
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <p
                    className="text-[#F8F9FA] text-xs sm:text-sm md:text-base"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.email")}
                  </p>
                </div>

                <div className="flex items-start" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
                  <div className={isRTL ? "ml-2 sm:ml-3 mt-0.5" : "mr-2 sm:mr-3 mt-0.5"}>
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <p
                    className="text-[#F8F9FA] text-xs sm:text-sm md:text-base"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.address")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[60%] p-1 sm:p-2 md:p-4">
            <form className="space-y-4 sm:space-y-6 md:space-y-8" dir={isRTL ? "rtl" : "ltr"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 form-grid">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm font-medium text-[#4B5563] mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.firstName")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border-b border-[#E0E0E0] pb-1 sm:pb-2 focus:outline-none focus:border-[#627DAF] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs sm:text-sm font-medium text-[#4B5563] mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.lastName")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border-b border-[#E0E0E0] pb-1 sm:pb-2 focus:outline-none focus:border-[#627DAF] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 form-grid">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-[#4B5563] mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-[#E0E0E0] pb-1 sm:pb-2 focus:outline-none focus:border-[#627DAF] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-[#4B5563] mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  >
                    {t("contact.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-b border-[#E0E0E0] pb-1 sm:pb-2 focus:outline-none focus:border-[#627DAF] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                  />
                </div>
              </div>

              <div>
                <p
                  className="block text-xs sm:text-sm font-medium text-[#4B5563] mb-2 sm:mb-3"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {t("contact.subject")}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {subjectOptions.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          id={`subject-${index}`}
                          name="subject"
                          className="sr-only"
                          checked={selectedSubject === `option-${index}`}
                          onChange={() => setSelectedSubject(`option-${index}`)}
                        />
                        <div
                          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center ${
                            selectedSubject === `option-${index}`
                              ? "border-[#000000] bg-white"
                              : "border-[#C9C9C9] bg-white"
                          }`}
                          onClick={() => setSelectedSubject(`option-${index}`)}
                        >
                          {selectedSubject === `option-${index}` && (
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#000000]"></div>
                          )}
                        </div>
                        <label
                          htmlFor={`subject-${index}`}
                          className={
                            isRTL ? "mr-2 text-xs sm:text-sm text-[#4B5563]" : "ml-2 text-xs sm:text-sm text-[#4B5563]"
                          }
                          style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-[#4B5563] mb-1 sm:mb-2"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  placeholder={t("contact.messagePlaceholder")}
                  rows={3}
                  className="w-full border-b border-[#E0E0E0] pb-1 sm:pb-2 focus:outline-none focus:border-[#627DAF] transition-colors resize-none text-sm"
                  style={{ fontFamily: "var(--font-primary, Inter, sans-serif)" }}
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#627DAF] text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#5670A0] transition-colors text-xs sm:text-sm md:text-base"
                  style={{
                    fontFamily: "var(--font-primary, Inter, sans-serif)",
                    fontWeight: 500,
                  }}
                >
                  {t("contact.button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
