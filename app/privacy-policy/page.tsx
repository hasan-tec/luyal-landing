"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import MobileNav from "@/components/mobile-navbar"
import LanguageSwitcher from "@/components/language-switcher"
import Footer from "@/components/footer-figma"
import { useEffect } from "react"

export default function PrivacyPolicy() {
  const { t, isRTL } = useLanguage()

  // Set the document title based on the current language
  useEffect(() => {
    document.title = isRTL ? "سياسة الخصوصية - لويال" : "Privacy Policy - Luyal"
  }, [isRTL])

  return (
    <div className="flex flex-col min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      {/* Navigation - Restructured with 3 sections */}
            <header className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between relative">
          
                      {/* Logo - Left Section */}
                      <div className="flex items-center z-10">
                      <Link
                      href="/"
                      tabIndex={0}
                      aria-label="Home"
                      className={`flex items-center ${isRTL ? "ml-2" : "mr-2"}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                        window.location.href = "/";
                        }
                      }}
                      >
                      <Image
                        src="/images/logo-gradient.png"
                        alt="Luyal Logo"
                        width={40}
                        height={40}
                        className="h-8 w-8 md:h-10 md:w-10"
                        priority
                      />
                      <span className="text-[#111827] text-xl md:text-2xl font-bold ml-2">
                        {isRTL ? "لويال" : "Luyal"}
                      </span>
                      </Link>
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

     {/* Hero Section - Adjusted height and typography */}
     <div className="bg-[#EAF1FC] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#111827] tracking-tight"
            style={{
              fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
              letterSpacing: "-0.02em",
            }}
          >
            {isRTL ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
        </div>
      </div>

      {/* Content Section - Improved typography */}
      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="max-w-4xl mx-auto privacy-policy-section">
          {/* Introduction */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "مقدمة" : "Introduction"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL ? "مرحبًا بك في لويال." : "Welcome to LUYAL."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "تشير كلمة ('نحن'، 'لنا'، أو 'خاصتنا') إلى https://luyal.com (المشار إليها فيما بعد باسم 'الشركة')."
                : "Cal.com ('we', 'us', or 'our') operates https://luyal.com (hereinafter referred to as 'Service')."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "تحدد سياسة الخصوصية هذه كيف نجمع ونستخدم ونكشف المعلومات التي تنتج من استخدامك لخدمتنا."
                : "Our Privacy Policy governs your visit to https://luyal.com, and explains how we collect, safeguard and disclose information that results from your use of our Service."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "نستخدم بياناتك لتقديم وتحسين الخدمة. باستخدام الخدمة، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة. ما لم يتم تحديد خلاف ذلك في سياسة الخصوصية هذه، فإن المصطلحات المستخدمة في سياسة الخصوصية هذه لها نفس المعاني كما في شروطنا وأحكامنا."
                : "We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "تشكل شروطنا وأحكامنا ('الشروط') جزءًا من استخدامك لخدمتنا وبالتزامن مع سياسة الخصوصية هذه تشكل اتفاقك معنا ('الاتفاقية')."
                : "Our Terms and Conditions ('Terms') govern all use of our Service and together with the Privacy Policy constitutes your agreement with us ('Agreement')."}
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "التعريفات" : "Definitions"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              <strong className="font-semibold">{isRTL ? "الخدمة" : "SERVICE"}</strong>{" "}
              {isRTL
                ? "تعني موقع https://luyal.com الذي تديره الشركة."
                : "means the https://luyal.com website operated by Cal.com."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              <strong className="font-semibold">{isRTL ? "البيانات الشخصية" : "PERSONAL DATA"}</strong>{" "}
              {isRTL
                ? "تعني البيانات المتعلقة بشخص حي يمكن التعرف عليه من تلك البيانات (أو من تلك البيانات ومعلومات أخرى في حوزتنا أو من المحتمل أن تكون في حوزتنا)."
                : "means data about a living individual who can be identified from those data (or from those data and other information either in our possession or likely to come into our possession)."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              <strong className="font-semibold">{isRTL ? "بيانات الاستخدام" : "USAGE DATA"}</strong>{" "}
              {isRTL
                ? "تعني البيانات التي يتم جمعها تلقائيًا إما من خلال استخدام الخدمة أو من البنية التحتية للخدمة نفسها (على سبيل المثال، مدة زيارة صفحة ويب)."
                : "means data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit)."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              <strong className="font-semibold">{isRTL ? "ملفات تعريف الارتباط" : "COOKIES"}</strong>{" "}
              {isRTL
                ? "هي ملفات صغيرة مخزنة على جهازك (كمبيوتر أو جهاز محمول)."
                : "are small files stored on your device (computer or mobile device)."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              <strong className="font-semibold">{isRTL ? "مراقب البيانات" : "DATA CONTROLLER"}</strong>{" "}
              {isRTL
                ? "يعني الشخص الطبيعي أو الاعتباري الذي (إما وحده أو بشكل مشترك أو بالاشتراك مع أشخاص آخرين) يحدد الأغراض التي من أجلها والطريقة التي يتم بها معالجة أي بيانات شخصية. لأغراض سياسة الخصوصية هذه، نحن مراقب البيانات لبياناتك الشخصية."
                : "means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              <strong className="font-semibold">
                {isRTL ? "معالجو البيانات (أو مقدمو الخدمة)" : "DATA PROCESSORS (OR SERVICE PROVIDERS)"}
              </strong>{" "}
              {isRTL
                ? "يعني أي شخص طبيعي أو اعتباري يقوم بمعالجة البيانات نيابة عن مراقب البيانات. قد نستخدم خدمات مختلف مقدمي الخدمة من أجل معالجة بياناتك بشكل أكثر فعالية."
                : "means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              <strong className="font-semibold">{isRTL ? "موضوع البيانات" : "DATA SUBJECT"}</strong>{" "}
              {isRTL
                ? "هو أي فرد حي يستخدم خدمتنا ويكون موضوع البيانات الشخصية."
                : "is any living individual who is the subject of Personal Data."}
            </p>
          </section>

          {/* Information Collection and Use */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "جمع المعلومات واستخدامها" : "Information Collection and Use"}
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "نجمع أنواعًا مختلفة من المعلومات لأغراض مختلفة لتوفير وتحسين خدمتنا لك."
                : "We collect several different types of information for various purposes to provide and improve our Service to you."}
            </p>
          </section>

          {/* Types of Data Collected */}
          <section className="mb-10 md:mb-12">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-5 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "أنواع البيانات المجمعة" : "Types of Data Collected"}
            </h3>

            <div className="mb-8">
              <h4
                className="text-xl font-medium mb-3 text-[#111827]"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {isRTL ? "البيانات الشخصية" : "Personal Data"}
              </h4>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "أثناء استخدام خدمتنا، قد نطلب منك تزويدنا بمعلومات تعريف شخصية معينة يمكن استخدامها للاتصال بك أو تحديد هويتك ('البيانات الشخصية'). قد تشمل معلومات التعريف الشخصية، على سبيل المثال لا الحصر:"
                  : "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ('Personal Data'). Personally identifiable information may include, but is not limited to:"}
              </p>
              <ul className="list-disc list-inside text-base text-[#4B5563] mb-4 space-y-2 ml-2">
                <li>{isRTL ? "عنوان البريد الإلكتروني" : "Email address"}</li>
                <li>{isRTL ? "الاسم الأول واسم العائلة" : "First name and last name"}</li>
                <li>{isRTL ? "رقم الهاتف" : "Phone number"}</li>
                <li>
                  {isRTL
                    ? "العنوان، الولاية، المقاطعة، الرمز البريدي، المدينة"
                    : "Address, State, Province, ZIP/Postal code, City"}
                </li>
                <li>{isRTL ? "ملفات تعريف الارتباط وبيانات الاستخدام" : "Cookies and Usage Data"}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4
                className="text-xl font-medium mb-3 text-[#111827]"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {isRTL ? "بيانات الاستخدام" : "Usage Data"}
              </h4>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "قد نجمع أيضًا معلومات حول كيفية وصول واستخدام الخدمة ('بيانات الاستخدام'). قد تتضمن بيانات الاستخدام هذه معلومات مثل عنوان بروتوكول الإنترنت لجهاز الكمبيوتر الخاص بك (مثل عنوان IP)، ونوع المتصفح، وإصدار المتصفح، وصفحات خدمتنا التي تزورها، ووقت وتاريخ زيارتك، والوقت المستغرق في تلك الصفحات، ومعرفات الجهاز الفريدة وبيانات تشخيصية أخرى."
                  : "We may also collect information on how the Service is accessed and used ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."}
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-medium mb-3 text-[#111827]"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {isRTL ? "تتبع بيانات ملفات تعريف الارتباط" : "Tracking Cookies Data"}
              </h4>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتتبع النشاط على خدمتنا ونحتفظ بمعلومات معينة."
                  : "We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information."}
              </p>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "ملفات تعريف الارتباط هي ملفات ذات كمية صغيرة من البيانات والتي قد تتضمن معرفًا فريدًا مجهول الهوية. يتم إرسال ملفات تعريف الارتباط إلى متصفحك من موقع ويب وتخزينها على جهازك. تستخدم تقنيات التتبع أيضًا إشارات وعلامات وبرامج نصية لجمع وتتبع المعلومات وتحسين وتحليل خدمتنا."
                  : "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service."}
              </p>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عندما يتم إرسال ملف تعريف ارتباط. ومع ذلك، إذا كنت لا تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء خدمتنا."
                  : "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."}
              </p>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL ? "أمثلة على ملفات تعريف الارتباط التي نستخدمها:" : "Examples of Cookies we use:"}
              </p>
              <ul className="list-disc list-inside text-base text-[#4B5563] space-y-2 ml-2">
                <li>
                  <strong className="font-semibold">{isRTL ? "ملفات تعريف ارتباط الجلسة:" : "Session Cookies:"}</strong>{" "}
                  {isRTL
                    ? "نستخدم ملفات تعريف ارتباط الجلسة لتشغيل خدمتنا."
                    : "We use Session Cookies to operate our Service."}
                </li>
                <li>
                  <strong className="font-semibold">
                    {isRTL ? "ملفات تعريف ارتباط التفضيلات:" : "Preference Cookies:"}
                  </strong>{" "}
                  {isRTL
                    ? "نستخدم ملفات تعريف ارتباط التفضيلات لتذكر تفضيلاتك وإعدادات مختلفة."
                    : "We use Preference Cookies to remember your preferences and various settings."}
                </li>
                <li>
                  <strong className="font-semibold">
                    {isRTL ? "ملفات تعريف ارتباط الأمان:" : "Security Cookies:"}
                  </strong>{" "}
                  {isRTL
                    ? "نستخدم ملفات تعريف ارتباط الأمان لأغراض أمنية."
                    : "We use Security Cookies for security purposes."}
                </li>
                <li>
                  <strong className="font-semibold">
                    {isRTL ? "ملفات تعريف ارتباط الإعلانات:" : "Advertising Cookies:"}
                  </strong>{" "}
                  {isRTL
                    ? "تُستخدم ملفات تعريف ارتباط الإعلانات لتزويدك بإعلانات قد تكون ذات صلة بك واهتماماتك."
                    : "Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests."}
                </li>
              </ul>
            </div>
          </section>

          {/* Use of Data */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "استخدام البيانات" : "Use of Data"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "تستخدم Cal.com البيانات المجمعة لأغراض مختلفة:"
                : "Cal.com uses the collected data for various purposes:"}
            </p>
            <ul className="list-disc list-inside text-base text-[#4B5563] space-y-2 ml-2">
              <li>{isRTL ? "لتوفير وصيانة خدمتنا" : "To provide and maintain our Service"}</li>
              <li>{isRTL ? "لإخطارك بالتغييرات على خدمتنا" : "To notify you about changes to our Service"}</li>
              <li>
                {isRTL
                  ? "للسماح لك بالمشاركة في الميزات التفاعلية لخدمتنا عندما تختار القيام بذلك"
                  : "To allow you to participate in interactive features of our Service when you choose to do so"}
              </li>
              <li>{isRTL ? "لتقديم رعاية العملاء والدعم" : "To provide customer support"}</li>
              <li>
                {isRTL
                  ? "لجمع تحليلات أو معلومات قيمة بحيث يمكننا تحسين خدمتنا"
                  : "To gather analysis or valuable information so that we can improve our Service"}
              </li>
              <li>{isRTL ? "لمراقبة استخدام خدمتنا" : "To monitor the usage of our Service"}</li>
              <li>
                {isRTL ? "للكشف عن ومنع ومعالجة المشكلات الفنية" : "To detect, prevent and address technical issues"}
              </li>
              <li>
                {isRTL
                  ? "للوفاء بأي غرض آخر تم توفير البيانات له"
                  : "To fulfill any other purpose for which you provide it"}
              </li>
              <li>
                {isRTL
                  ? "للحفاظ على التزاماتنا وإنفاذ حقوقنا الناشئة عن أي عقود مبرمة بينك وبيننا، بما في ذلك الفوترة والتحصيل"
                  : "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection"}
              </li>
              <li>
                {isRTL
                  ? "لتزويدك بإشعارات حول حسابك و/أو اشتراكك، بما في ذلك إشعارات انتهاء الصلاحية والتجديد، وإشعارات البريد الإلكتروني، وما إلى ذلك"
                  : "To provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc."}
              </li>
              <li>
                {isRTL
                  ? "لتزويدك بأخبار ومعلومات عامة حول السلع والخدمات والأحداث الأخرى التي نقدمها والتي تشبه تلك التي اشتريتها بالفعل أو استفسرت عنها ما لم تكن قد اخترت عدم تلقي هذه المعلومات"
                  : "To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information"}
              </li>
              <li>
                {isRTL
                  ? "بأي طريقة أخرى قد نصفها عندما تقدم المعلومات"
                  : "In any other way we may describe when you provide the information"}
              </li>
              <li>{isRTL ? "لأي غرض آخر بموافقتك" : "For any other purpose with your consent"}</li>
            </ul>
          </section>

          {/* Retention of Data */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "الاحتفاظ بالبيانات" : "Retention of Data"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "سنحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضروريًا للأغراض المنصوص عليها في سياسة الخصوصية هذه. سنحتفظ ونستخدم بياناتك الشخصية إلى الحد اللازم للامتثال لالتزاماتنا القانونية (على سبيل المثال، إذا كنا مطالبين بالاحتفاظ ببياناتك للامتثال للقوانين المعمول بها)، وحل النزاعات، وإنفاذ اتفاقياتنا القانونية وسياساتنا."
                : "We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "سنحتفظ أيضًا ببيانات الاستخدام لأغراض التحليل الداخلي. يتم الاحتفاظ ببيانات الاستخدام بشكل عام لفترة زمنية أقصر، إلا عندما تُستخدم هذه البيانات لتعزيز الأمان أو لتحسين وظائف خدمتنا، أو نحن ملزمون قانونًا بالاحتفاظ بهذه البيانات لفترات زمنية أطول."
                : "We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods."}
            </p>
          </section>

          {/* Transfer of Data */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "نقل البيانات" : "Transfer of Data"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "قد يتم نقل معلوماتك، بما في ذلك البيانات الشخصية، إلى - والاحتفاظ بها على - أجهزة كمبيوتر تقع خارج ولايتك أو مقاطعتك أو بلدك أو غيرها من الولايات القضائية الحكومية حيث قد تختلف قوانين حماية البيانات عن تلك الخاصة بولايتك القضائية."
                : "Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "إذا كنت موجودًا خارج الولايات المتحدة واخترت تزويدنا بمعلومات، فيرجى ملاحظة أننا ننقل البيانات، بما في ذلك البيانات الشخصية، إلى الولايات المتحدة ونعالجها هناك."
                : "If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "موافقتك على سياسة الخصوصية هذه، متبوعة بتقديمك لهذه المعلومات، تمثل موافقتك على هذا النقل."
                : "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."}
            </p>
          </section>

          {/* Disclosure of Data */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "الإفصاح عن البيانات" : "Disclosure of Data"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "قد نكشف معلومات شخصية نجمعها، أو تقدمها:"
                : "We may disclose personal information that we collect, or you provide:"}
            </p>

            <div className="mb-6">
              <h4
                className="text-xl font-medium mb-3 text-[#111827]"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {isRTL ? "الإفصاح لإنفاذ القانون" : "Disclosure for Law Enforcement"}
              </h4>
              <p className="text-base text-[#4B5563] leading-relaxed">
                {isRTL
                  ? "في ظل ظروف معينة، قد يُطلب منا الكشف عن بياناتك الشخصية إذا طُلب منا القيام بذلك بموجب القانون أو استجابةً لطلبات صالحة من قبل السلطات العامة."
                  : "Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities."}
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-medium mb-3 text-[#111827]"
                style={{
                  fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                }}
              >
                {isRTL ? "معاملات الأعمال" : "Business Transaction"}
              </h4>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "إذا كنا نحن أو الشركات التابعة لنا متورطين في عملية اندماج أو استحواذ أو بيع أصول، فقد يتم نقل بياناتك الشخصية."
                  : "If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred."}
              </p>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL
                  ? "سنقدم إشعارًا قبل نقل بياناتك الشخصية وتخضع لسياسة خصوصية مختلفة."
                  : "We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy."}
              </p>
              <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
                {isRTL ? "قد نفصح عن معلوماتك أيضًا:" : "We may also disclose your information:"}
              </p>
              <ul className="list-disc list-inside text-base text-[#4B5563] space-y-2 ml-2 mb-4">
                <li>{isRTL ? "إلى الشركات التابعة لنا والشركات الفرعية" : "To our subsidiaries and affiliates"}</li>
                <li>
                  {isRTL
                    ? "للمقاولين ومقدمي الخدمات وغيرهم من الأطراف الثالثة الذين نستخدمهم لدعم أعمالنا"
                    : "To contractors, service providers, and other third parties we use to support our business"}
                </li>
                <li>
                  {isRTL
                    ? "لتحقيق الغرض الذي قدمت المعلومات من أجله"
                    : "To fulfill the purpose for which you provide it"}
                </li>
                <li>
                  {isRTL
                    ? "لغرض تضمين شعار شركتك على موقعنا"
                    : "For the purpose of including your company's logo on our website"}
                </li>
                <li>
                  {isRTL
                    ? "لأي غرض آخر نفصح عنه عندما تقدم المعلومات"
                    : "For any other purpose disclosed by us when you provide the information"}
                </li>
                <li>{isRTL ? "بموافقتك في أي حالات أخرى" : "With your consent in any other cases"}</li>
                <li>
                  {isRTL
                    ? "إذا كنا نعتقد أن الإفصاح ضروري أو مناسب لحماية الحقوق أو الممتلكات أو سلامة الشركة أو عملائنا أو غيرهم"
                    : "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others"}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
