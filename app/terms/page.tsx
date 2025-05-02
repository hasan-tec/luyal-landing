"use client"


import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import MobileNav from "@/components/mobile-navbar"
import LanguageSwitcher from "@/components/language-switcher"
import Footer from "@/components/footer-figma"
import { useEffect } from "react"
import "./terms.css"

export default function TermsAndConditions() {
  const { t, isRTL } = useLanguage()

  // Set the document title based on the current language
  useEffect(() => {
    document.title = isRTL ? "الشروط والأحكام - لويال" : "Terms and Conditions - Luyal"
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
            {isRTL ? "الشروط والأحكام" : "Terms and Conditions"}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 flex-grow">
        <div className="max-w-4xl mx-auto terms-section">
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
              {isRTL
                ? "مرحبًا بك في لويال. تحدد هذه الشروط والأحكام ('الشروط') القواعد والأنظمة لاستخدام موقع لويال على الويب (https://luyal.com)."
                : "Welcome to Luyal. These terms and conditions ('Terms') outline the rules and regulations for the use of Luyal's Website (https://luyal.com)."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "من خلال الوصول إلى هذا الموقع، نفترض أنك تقبل هذه الشروط والأحكام. لا تستمر في استخدام لويال إذا كنت لا توافق على أخذ جميع الشروط والأحكام المذكورة في هذه الصفحة."
                : "By accessing this website, we assume you accept these terms and conditions. Do not continue to use Luyal if you do not agree to take all of the terms and conditions stated on this page."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "تنطبق المصطلحات التالية على هذه الشروط والأحكام وبيان الخصوصية وإشعار إخلاء المسؤولية وجميع الاتفاقيات: 'العميل'، 'أنت' و 'الخاص بك' تشير إليك، الشخص الذي يتصفح هذا الموقع ويوافق على شروط وأحكام الشركة. 'الشركة'، 'أنفسنا'، 'نحن'، 'خاصتنا' و 'نحن' تشير إلى شركتنا. 'الطرف'، 'الأطراف'، أو 'نحن'، تشير إلى كل من العميل والشركة."
                : "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 'Client', 'You' and 'Your' refers to you, the person log on this website and compliant to the Company's terms and conditions. 'The Company', 'Ourselves', 'We', 'Our' and 'Us', refers to our Company. 'Party', 'Parties', or 'Us', refers to both the Client and ourselves."}
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "قبول الشروط" : "Acceptance of Terms"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "من خلال إنشاء حساب على لويال أو استخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط. إذا كنت تستخدم خدماتنا نيابة عن شركة أو كيان آخر، فإنك تقر بأن لديك السلطة لإلزام هذا الكيان بهذه الشروط، وفي هذه الحالة، تشير 'أنت' و 'الخاص بك' إلى هذا الكيان."
                : "By creating an account on Luyal or using our services, you agree to be bound by these Terms. If you are using our services on behalf of a company or other entity, you represent that you have the authority to bind that entity to these Terms, in which case 'you' and 'your' will refer to that entity."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بإخطارك بأي تغييرات عن طريق نشر الشروط المحدثة على موقعنا أو عن طريق إرسال إشعار إليك. استمرارك في استخدام الخدمة بعد نشر أي تغييرات يشكل قبولًا لتلك التغييرات."
                : "We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on our website or by sending a notice to you. Your continued use of the Service after any changes are posted constitutes your acceptance of those changes."}
            </p>
          </section>

          {/* User Accounts */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "حسابات المستخدمين" : "User Accounts"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "عندما تنشئ حسابًا معنا، يجب عليك تقديم معلومات دقيقة وكاملة ومحدثة في جميع الأوقات. قد يؤدي عدم القيام بذلك إلى إنهاء حسابك على خدمتنا."
                : "When you create an account with us, you must provide accurate, complete, and up-to-date information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور، بما في ذلك عدم الكشف عن كلمة المرور الخاصة بك لأي طرف ثالث. أنت مسؤول عن جميع الأنشطة والإجراءات التي تتم تحت حسابك."
                : "You are responsible for safeguarding your account and password, including not disclosing your password to any third party. You are responsible for all activities and actions taken under your account."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "يجب عليك إخطارنا فورًا بأي خرق أمني أو استخدام غير مصرح به لحسابك. لن نكون مسؤولين عن أي خسائر أو أضرار ناتجة عن عدم الامتثال لهذا الالتزام الأمني."
                : "You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We will not be liable for any losses or damages caused by your failure to comply with this security obligation."}
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "الملكية الفكرية" : "Intellectual Property"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "الخدمة ومحتواها الأصلي (باستثناء المحتوى الذي يقدمه المستخدمون) والميزات والوظائف هي وستظل الملكية الحصرية للويال وجهات الترخيص التابعة لها."
                : "The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Luyal and its licensors."}
            </p>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "تخضع الخدمة لحقوق الطبع والنشر والعلامات التجارية وحقوق الملكية الأخرى بموجب قوانين الولايات المتحدة والقوانين الأجنبية واتفاقيات المعاهدات الدولية."
                : "The Service is protected by copyright, trademark, and other intellectual property laws under both United States and foreign laws and international conventions."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "لا يجوز لك نسخ أو تعديل أو توزيع أو بيع أو تأجير أي جزء من خدماتنا أو المحتوى المضمن فيها، ولا يجوز لك إجراء هندسة عكسية أو محاولة استخراج شفرة المصدر لأي برنامج نقدمه كجزء من الخدمات، ما لم تكن هذه القيود محظورة بموجب القانون المعمول به أو تسمح بها شروط الترخيص المحددة المرتبطة بوظيفة معينة."
                : "You may not copy, modify, distribute, sell, or lease any part of our services or included content, nor may you reverse engineer or attempt to extract the source code of any software provided as part of the services, unless such restrictions are prohibited by applicable law or permitted by specific licensing terms associated with a particular functionality."}
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "حدود المسؤولية" : "Limitation of Liability"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "إلى أقصى حد يسمح به القانون، لن تكون لويال ومديروها وموظفوها ووكلاؤها وشركاؤها وموردوها مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر، خسارة الأرباح أو البيانات أو الاستخدام أو الشهرة، أو غيرها من الخسائر غير الملموسة، الناتجة عن:"
                : "To the maximum extent permitted by law, Luyal, its directors, employees, agents, partners, and suppliers will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:"}
            </p>
            <ul className="list-disc list-inside text-base text-[#4B5563] mb-4 space-y-2 ml-2">
              <li>
                {isRTL
                  ? "استخدامك أو عدم قدرتك على استخدام خدمتنا"
                  : "Your use of or inability to use our Service"}
              </li>
              <li>
                {isRTL
                  ? "أي تغييرات يتم إجراؤها على الخدمة"
                  : "Any changes made to the Service"}
              </li>
              <li>
                {isRTL
                  ? "الوصول غير المصرح به إلى بياناتك أو تغييرها"
                  : "Unauthorized access to or alteration of your data"}
              </li>
              <li>
                {isRTL
                  ? "تصريحات أو سلوك أي طرف ثالث على الخدمة"
                  : "Statements or conduct of any third party on the Service"}
              </li>
              <li>
                {isRTL ? "أي مسألة أخرى تتعلق بالخدمة" : "Any other matter relating to the Service"}
              </li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "القانون الحاكم" : "Governing Law"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "تخضع هذه الشروط وتفسر وفقًا لقوانين الولايات المتحدة، بغض النظر عن تعارض أحكام القانون."
                : "These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "إن عدم قدرتنا على إنفاذ أي حق أو حكم من هذه الشروط لن يعتبر تنازلاً عن تلك الحقوق. إذا تم اعتبار أي حكم من هذه الشروط غير صالح أو غير قابل للتنفيذ من قبل محكمة، فإن الأحكام المتبقية من هذه الشروط ستظل سارية المفعول."
                : "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect."}
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-10 md:mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "التغييرات على الشروط" : "Changes to Terms"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كانت المراجعة مهمة، فسنقدم إشعارًا قبل 30 يومًا على الأقل قبل أن تصبح أي شروط جديدة سارية المفعول. ما يشكل تغييرًا جوهريًا سيتم تحديده وفقًا لتقديرنا الخاص."
                : "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {isRTL
                ? "من خلال الاستمرار في الوصول إلى خدمتنا أو استخدامها بعد أن تصبح هذه المراجعات سارية المفعول، فإنك توافق على الالتزام بالشروط المنقحة. إذا كنت لا توافق على الشروط الجديدة، فيرجى التوقف عن استخدام الخدمة."
                : "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service."}
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] tracking-tight"
              style={{
                fontFamily: isRTL ? "'Avenir Arabic', sans-serif" : "var(--font-primary, Inter, sans-serif)",
                letterSpacing: "-0.01em",
              }}
            >
              {isRTL ? "اتصل بنا" : "Contact Us"}
            </h2>
            <p className="text-base text-[#4B5563] mb-4 leading-relaxed">
              {isRTL
                ? "إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا."
                : "If you have any questions about these Terms, please contact us."}
            </p>
            <ul className="list-disc list-inside text-base text-[#4B5563] space-y-2 ml-2">
              <li>
                {isRTL ? "عن طريق البريد الإلكتروني: support@luyal.com" : "By email: support@luyal.com"}
              </li>
              <li>
                {isRTL
                  ? "عن طريق زيارة هذه الصفحة على موقعنا: https://luyal.com/contact"
                  : "By visiting this page on our website: https://luyal.com/contact"}
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
