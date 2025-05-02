"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import MobileNav from "@/components/mobile-navbar"
import LanguageSwitcher from "@/components/language-switcher"
import Footer from "@/components/footer-figma"
import { useEffect } from "react"
import "./about-us.css"

export default function AboutUs() {
  const { t, isRTL } = useLanguage()

  // Set the document title based on the current language
  useEffect(() => {
    document.title = isRTL ? "من نحن - لويال" : "About Us - Luyal"
  }, [isRTL])

  return (
    <div className="flex flex-col min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
       {/* Header */}
            {/* Navigation - Restructured with 3 sections */}
                  <header className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between relative">
                    {/* Logo - Left Section */}
                    <div className="flex items-center z-10">
                      <div className={`${isRTL ? "ml-2" : "mr-2"}`}>
                        <Image
                          src="/images/logo-gradient.png"
                          alt="Luyal Logo"
                          width={40}
                          height={40}
                          className="h-8 w-8 md:h-10 md:w-10"
                          priority
                        />
                      </div>
                      <span className="text-[#111827] text-xl md:text-2xl font-bold">{isRTL ? "لويال" : "Luyal"}</span>
                    </div>
            
                    {/* Navigation Links - Center Section */}
                    <nav className="hidden xl:flex items-center justify-center gap-4 xl:gap-6 absolute left-1/2 transform -translate-x-1/2">
                      <a
                        href="#"
                        className="text-[#111827] font-semibold border-b-2 border-[#111827] font-inter text-base leading-6 whitespace-nowrap"
                      >
                        {t("nav.home")}
                      </a>
                      <a
                        href="#features"
                        className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
                      >
                        {t("nav.features")}
                      </a>
                      <a
                        href="#pricing"
                        className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
                      >
                        {t("nav.pricing")}
                      </a>
                      <a
                        href="#howitworks"
                        className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
                      >
                        {t("nav.solution")}
                      </a>
                      <a
                        href="#faq"
                        className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
                      >
                        {t("nav.faq")}
                      </a>
                      <a
                        href="#contact"
                        className="text-[#4b5563] hover:text-[#111827] font-semibold font-inter text-base leading-6 whitespace-nowrap"
                      >
                        {t("nav.contact")}
                      </a>
                    </nav>
            
                    {/* Right Section - Login, Get Started, Language */}
                    <div className="hidden xl:flex items-center gap-4 z-10">
                      <LanguageSwitcher />
                      <button className="flex items-center text-[#111827] font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
                          aria-hidden="true"
                        >
                          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                            <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                          </g>
                        </svg>
                        {t("nav.login")}
                      </button>
                      <button className="bg-[#627daf] text-white px-6 py-3 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium whitespace-nowrap">
                        {t("nav.getStarted")}
                      </button>
                    </div>
            
                    {/* Medium screens - Simplified navigation */}
                    <div className="hidden md:flex xl:hidden items-center gap-4 z-10">
                      <LanguageSwitcher />
                      <button className="flex items-center text-[#111827] font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
                          aria-hidden="true"
                        >
                          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                            <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                          </g>
                        </svg>
                        {t("nav.login")}
                      </button>
                      <button className="bg-[#627daf] text-white px-4 py-2 rounded-md hover:bg-[#627daf]/90 transition-colors font-medium whitespace-nowrap">
                        {t("nav.getStarted")}
                      </button>
                    </div>
            
                    {/* Mobile Menu - New simplified component */}
                    <div className="md:hidden flex items-center gap-3 z-50">
                      <LanguageSwitcher />
                      <button className="flex items-center text-[#111827] font-medium text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`}
                          aria-hidden="true"
                        >
                          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                            <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                          </g>
                        </svg>
                        {t("nav.login")}
                      </button>
                      <MobileNav />
                    </div>
                  </header>

      {/* Hero Section */}
      <div className="bg-[#EAF1FC] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#111827] tracking-tight"
            style={{
              fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
              letterSpacing: "-0.02em",
            }}
          >
            {isRTL ? "من نحن" : "About Us"}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="max-w-4xl mx-auto about-us-section">
          {/* Company Overview */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "نظرة عامة على الشركة" : "Company Overview"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "لويال هي شركة رائدة في مجال برامج الولاء الرقمية، تأسست في عام 2018 بهدف مساعدة الشركات على بناء علاقات أقوى مع عملائها."
                : "Luyal is a leading provider of digital loyalty programs, founded in 2018 with the mission of helping businesses build stronger relationships with their customers."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "نحن نقدم منصة سهلة الاستخدام تمكن الشركات من إنشاء وإدارة برامج الولاء المخصصة التي تعزز مشاركة العملاء وتزيد من معدلات الاحتفاظ بهم وتدفع المبيعات المتكررة."
                : "We provide an easy-to-use platform that enables businesses to create and manage customized loyalty programs that enhance customer engagement, increase retention rates, and drive repeat sales."}
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "مهمتنا" : "Our Mission"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "مهمتنا هي تمكين الشركات من جميع الأحجام من بناء علاقات أقوى وأكثر ديمومة مع عملائها من خلال برامج الولاء المبتكرة والفعالة."
                : "Our mission is to empower businesses of all sizes to build stronger, more lasting relationships with their customers through innovative and effective loyalty programs."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "نحن نؤمن بأن الولاء الحقيقي يأتي من تجارب العملاء الاستثنائية، ونحن ملتزمون بمساعدة الشركات على تقديم هذه التجارب من خلال حلولنا."
                : "We believe that true loyalty comes from exceptional customer experiences, and we are committed to helping businesses deliver these experiences through our solutions."}
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "رؤيتنا" : "Our Vision"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "نتطلع إلى عالم تكون فيه كل تفاعل بين الشركات وعملائها فرصة لبناء الولاء وتعزيز العلاقات طويلة الأمد."
                : "We envision a world where every interaction between businesses and their customers is an opportunity to build loyalty and foster long-term relationships."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "هدفنا هو أن نصبح الشريك المفضل عالميًا للشركات التي تسعى إلى تعزيز ولاء العملاء وزيادة قيمة العميل مدى الحياة."
                : "Our goal is to become the globally preferred partner for businesses seeking to enhance customer loyalty and increase customer lifetime value."}
            </p>
          </section>

          {/* Our Team */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "فريقنا" : "Our Team"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "يتكون فريقنا من خبراء متحمسين في مجالات تجربة العملاء وتسويق الولاء وتطوير البرمجيات وتحليلات البيانات."
                : "Our team consists of passionate experts in customer experience, loyalty marketing, software development, and data analytics."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "نحن نجمع بين المعرفة العميقة بالصناعة والخبرة التقنية لتقديم حلول مبتكرة تلبي الاحتياجات المتطورة لعملائنا."
                : "We combine deep industry knowledge with technical expertise to deliver innovative solutions that meet the evolving needs of our clients."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Team member cards would go here in a real implementation */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-[#EAF1FC] rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-1">{isRTL ? "سارة أحمد" : "Sarah Ahmed"}</h3>
                <p className="text-sm text-[#4B5563]">{isRTL ? "المؤسس والرئيس التنفيذي" : "Founder & CEO"}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-[#EAF1FC] rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-1">{isRTL ? "محمد علي" : "Michael Lee"}</h3>
                <p className="text-sm text-[#4B5563]">{isRTL ? "مدير التكنولوجيا" : "CTO"}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-[#EAF1FC] rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-1">{isRTL ? "ليلى خان" : "Leila Khan"}</h3>
                <p className="text-sm text-[#4B5563]">{isRTL ? "مدير التسويق" : "Marketing Director"}</p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "قيمنا" : "Our Values"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#627DAF]">
                  {isRTL ? "التركيز على العميل" : "Customer Focus"}
                </h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "نضع عملاءنا في قلب كل ما نقوم به، ونسعى جاهدين لتجاوز توقعاتهم."
                    : "We put our customers at the heart of everything we do, striving to exceed their expectations."}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#627DAF]">{isRTL ? "الابتكار" : "Innovation"}</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "نحن نتبنى التفكير الإبداعي ونسعى باستمرار لتطوير حلول جديدة ومبتكرة."
                    : "We embrace creative thinking and continuously seek to develop new and innovative solutions."}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#627DAF]">{isRTL ? "النزاهة" : "Integrity"}</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "نحن نعمل بأعلى مستويات الأخلاق والشفافية في جميع تعاملاتنا."
                    : "We operate with the highest levels of ethics and transparency in all our dealings."}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#627DAF]">{isRTL ? "التعاون" : "Collaboration"}</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "نحن نؤمن بقوة العمل الجماعي ونعزز بيئة تعاونية داخل فريقنا ومع شركائنا."
                    : "We believe in the power of teamwork and foster a collaborative environment within our team and with our partners."}
                </p>
              </div>
            </div>
          </section>

          {/* Our History */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "تاريخنا" : "Our History"}
            </h2>
            <div className="relative border-l-2 border-[#627DAF] pl-6 ml-3">
              <div className="mb-8 relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 bg-[#627DAF] rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">2018</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "تأسست لويال بهدف إحداث ثورة في طريقة تفاعل الشركات مع عملائها."
                    : "Luyal was founded with the goal of revolutionizing how businesses interact with their customers."}
                </p>
              </div>
              <div className="mb-8 relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 bg-[#627DAF] rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">2019</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "أطلقنا النسخة الأولى من منصة لويال، مع التركيز على سهولة الاستخدام والتخصيص."
                    : "We launched the first version of the Luyal platform, focusing on ease of use and customization."}
                </p>
              </div>
              <div className="mb-8 relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 bg-[#627DAF] rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">2021</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "توسعنا إلى أسواق جديدة وأضفنا ميزات متقدمة مثل التحليلات المتقدمة وتكامل وسائل التواصل الاجتماعي."
                    : "We expanded into new markets and added advanced features such as advanced analytics and social media integration."}
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 bg-[#627DAF] rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-base text-[#4B5563]">
                  {isRTL
                    ? "أطلقنا حلول الولاء القائمة على الألعاب، مما أدى إلى زيادة مشاركة العملاء بنسبة 40% لعملائنا."
                    : "We launched gamification-based loyalty solutions, resulting in a 40% increase in customer engagement for our clients."}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
