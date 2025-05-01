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
    <section className="py-16 md:py-24 bg-white contact-section" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="mb-6">
          <h2
            className="text-[2.25rem] md:text-[3.5rem] font-medium text-[#011C2A] mb-4"
            style={{
              fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif",
              letterSpacing: isRTL ? "normal" : "-1.5px",
              lineHeight: "1.1",
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {t("contact.heading")}
          </h2>
          <p
            className="text-[#4B5563] text-base md:text-lg"
            style={{
              fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif",
              fontWeight: 400,
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {t("contact.subheading")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8 md:mt-12">
          {/* Contact Information Card */}
          <div
            className="lg:w-[40%] bg-[#627DAF] text-white rounded-xl p-6 md:p-10 relative overflow-hidden contact-card"
            style={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              direction: isRTL ? "rtl" : "ltr",
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {/* Background circles */}
            <div
              className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-[#7289BD] opacity-30"
              style={{ transform: "translate(30%, 30%)" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#7289BD] opacity-20"
              style={{ transform: "translate(10%, 40%)" }}
            ></div>

            <div className="relative z-10">
              <h3
                className="text-xl md:text-2xl font-medium mb-3 md:mb-4"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif",
                }}
              >
                {t("contact.infoTitle")}
              </h3>
              <p
                className="text-[#F8F9FA] mb-8 md:mb-12 opacity-90 text-sm md:text-base"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif",
                }}
              >
                {t("contact.infoDesc")}
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
                  <div className={isRTL ? "ml-3 md:ml-4 mt-1" : "mr-3 md:mr-4 mt-1"}>
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <p className="text-[#F8F9FA] text-sm md:text-base">{t("contact.phone")}</p>
                </div>

                <div className="flex items-start" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
                  <div className={isRTL ? "ml-3 md:ml-4 mt-1" : "mr-3 md:mr-4 mt-1"}>
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <p className="text-[#F8F9FA] text-sm md:text-base">{t("contact.email")}</p>
                </div>

                <div className="flex items-start" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
                  <div className={isRTL ? "ml-3 md:ml-4 mt-1" : "mr-3 md:mr-4 mt-1"}>
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <p className="text-[#F8F9FA] text-sm md:text-base">{t("contact.address")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[60%] p-2 md:p-4">
            <form className="space-y-6 md:space-y-8" dir={isRTL ? "rtl" : "ltr"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 form-grid">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#4B5563] mb-2">
                    {t("contact.firstName")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border-b border-[#E0E0E0] pb-2 focus:outline-none focus:border-[#627DAF] transition-colors"
                    style={{ fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#4B5563] mb-2">
                    {t("contact.lastName")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border-b border-[#E0E0E0] pb-2 focus:outline-none focus:border-[#627DAF] transition-colors"
                    style={{ fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 form-grid">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4B5563] mb-2">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-[#E0E0E0] pb-2 focus:outline-none focus:border-[#627DAF] transition-colors"
                    style={{ fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#4B5563] mb-2">
                    {t("contact.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-b border-[#E0E0E0] pb-2 focus:outline-none focus:border-[#627DAF] transition-colors"
                    style={{ fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-[#4B5563] mb-3 md:mb-4">{t("contact.subject")}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                          className={`w-4 h-4 md:w-5 md:h-5 rounded-full border flex items-center justify-center ${
                            selectedSubject === `option-${index}`
                              ? "border-[#000000] bg-white"
                              : "border-[#C9C9C9] bg-white"
                          }`}
                          onClick={() => setSelectedSubject(`option-${index}`)}
                        >
                          {selectedSubject === `option-${index}` && (
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#000000]"></div>
                          )}
                        </div>
                        <label
                          htmlFor={`subject-${index}`}
                          className={isRTL ? "mr-2 text-xs md:text-sm text-[#4B5563]" : "ml-2 text-xs md:text-sm text-[#4B5563]"}
                          style={{ fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif" }}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4B5563] mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  placeholder={t("contact.messagePlaceholder")}
                  rows={4}
                  className="w-full border-b border-[#E0E0E0] pb-2 focus:outline-none focus:border-[#627DAF] transition-colors resize-none"
                  style={{ fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif" }}
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#627DAF] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#5670A0] transition-colors text-sm md:text-base"
                  style={{
                    fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "Inter, sans-serif",
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