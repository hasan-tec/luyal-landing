"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ar" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.pricing": "الأسعار",
    "nav.solution": "الحلول",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.getStarted": "ابدأ الآن",

    // Hero
    "hero.announcement1": "برامج الولاء تزيد من مشاركة العملاء بنسبة 5.3%",
    "hero.announcement2": "انضم إلى ندوتنا عبر الإنترنت حول استراتيجيات الاحتفاظ بالعملاء",
    "hero.announcement3": "ميزة جديدة: بطاقات الولاء القابلة للتخصيص متاحة الآن",
    "hero.customer": "برامج",
    "hero.loyalty": "الولاء",
    "hero.programs": "للعملاء",
    "hero.forRetention": "للاحتفاظ بالعملاء",
    "hero.subtitle":
      "بناء علاقات قوية مع العملاء، وتعزيز ولاء العلامة التجارية، وزيادة تكرار الأعمال مع برنامج ولاء رقمي سلس ومجزي",
    "hero.startFree": "ابدأ مجانًا",
    "hero.learnMore": "اعرف المزيد",

    // Logo Slider
    "logos.trusted": "موثوق به من قبل الشركات الرائدة",

    // Language
    "language.switch": "English",

    // Results Section
    "results.title": "محرك الولاء الذي يحقق النتائج",
    "results.seeAll": "مشاهدة جميع قصص النجاح",
    "results.averageOrder": "متوسط قيمة الطلب",
    "results.buyerFrequency": "تكرار المشتري",
    "results.activeUsers": "المستخدمين النشطين",
    "results.limango": "استخدمت ليمانجو برنامج ولاء قائم على الألعاب لتعزيز القيمة العمرية للعميل",
    "results.equiva": "وفرت EQUIVA 68.000 يورو في الأشهر الأولى بعد تقديم الإحالات القائمة على الألعاب",
    "results.dacadoo": "زادت داكادو مشاركة المستخدمين من خلال تقديم ميزات الألعاب على الهاتف المحمول",

    // How It Works Section
    "howitworks.title": "كيف يعمل نظام الولاء لدينا",
    "howitworks.title1": "كيف يعمل نظام الولاء لدينا",
    "howitworks.title2": "",
    "howitworks.badge": "أنشئ بطاقتك",
    "howitworks.heading": "أنشئ بطاقة الولاء الخاصة بك اليوم\nوابدأ في كسب المكافآت\nعلى الفور",
    "howitworks.subheading": "أنشئ وخصص بطاقة الولاء الخاصة بك",
    "howitworks.desc": "سجل في Loyally، اختر البطاقة المثالية لمتجرك، وصممها بسهولة باستخدام قوالبنا الممتعة.",
    "howitworks.cta": "اعرف المزيد",
    "howitworks.cardTitle": "نمو سنوي",
    "howitworks.year1": "سنة 1",
    "howitworks.year2": "سنة 2",
    "howitworks.year3": "سنة 3",
    "howitworks.market1": "سوق أ",
    "howitworks.market2": "سوق ب",
    "howitworks.roi": "عائد الاستثمار",
    "howitworks.roiDesc": "زيادة بنسبة 30% في 3 سنوات",

    // How It Works Share Card Section
    "howitworks.share.badge": "شارك بطاقتك",
    "howitworks.share.heading": "شارك بطاقة الولاء الخاصة بك و\nنمِّ مجتمع عملائك",
    "howitworks.share.subheading": "شارك بطاقة الولاء الخاصة بك",
    "howitworks.share.desc": "أخبر عملاءك عن بطاقتك من خلال مشاركتها عبر الرسائل النصية أو البريد الإلكتروني أو وسائل التواصل الاجتماعي.",
    "howitworks.share.cta": "اعرف المزيد",

    // How It Works Connect Section
    "howitworks.connect.badge": "اتصل وشاهد النتائج",
    "howitworks.connect.heading": "اتصل بالعملاء وشاهد النتائج الفورية",
    "howitworks.connect.subheading": "اتصل ونمِّ بسرعة",
    "howitworks.connect.desc": "سجل في لويال، واختر البطاقة المثالية لمتجرك، وصممها بسهولة باستخدام قوالبنا الممتعة.",
    "howitworks.connect.cta": "اعرف المزيد",

    // How It Works Testimonial Section
    "testimonial.heading": "اختر لويال لتجربة أفضل",
    "testimonial.viewAll": "عرض الكل",
    "testimonial.text1": "هذا الكيت فاق توقعاتي! المكونات متعددة الاستخدامات وتجعل التنفيذ أسهل بكثير.",
    "testimonial.name1": "قائد رقمي",
    "testimonial.role1": "سترى نتائج قابلة للقياس",
    "testimonial.name2": "مبدع",
    "testimonial.role2": "تحب إنشاء تجربة مميزة",
    "testimonial.name3": "مستخدم سعيد",
    "testimonial.role3": "تبحث عن حلول فعالة",

    // FAQ Section
    "faq.heading": "الأسئلة الشائعة",
    "faq.subheading": "كل التفاصيل التي تحتاجها للاستفادة القصوى من لويال",
    "faq.q1": "ما هو لويال، وكيف يمكن أن يفيد عملي؟",
    "faq.q2": "هل يمكن أن يساعد لويال عملي في زيادة المبيعات؟",
    "faq.q3": "هل يمكنني تتبع أداء برنامج الولاء الخاص بي مع لويال؟",
    "faq.q4": "هل يمكنني تخصيص بطاقات الولاء لعملي؟",
    "faq.q5": "هل يمكنني إرسال إشعارات PUSH لعملائي باستخدام لويال؟",
    "faq.q6": "هل يمكن أن يساعد لويال عملي في زيادة قاعدة العملاء؟",
    "faq.q7": "هل لويال سهل الاستخدام؟",

    // Plans Section
    "plans.heading": "خطتك المثالية",
    "plans.subheading": "خيارات ميسورة التكلفة وقابلة للتطوير للجميع.",
    "plans.starter": "المبتدئ",
    "plans.premium": "المميز",
    "plans.included": "ما الذي يتضمنه",
    "plans.price1": "$15",
    "plans.price2": "$30",
    "plans.perMonth": "/شهر",
    "plans.perMonthEn": "/mo",
    "plans.button": "ابدأ الآن",
    "plans.buttonEn": "Get Started",
    "plans.starter.features": [
      "10 جيجابايت تخزين",
      "شهادة SSL",
      "نطاق ترددي غير محدود",
      "مستخدم واحد",
      "دعم عبر البريد الإلكتروني",
      "تجربة مجانية لمدة 7 أيام"
    ],
    "plans.premium.features": [
      "100 جيجابايت تخزين",
      "نطاق مخصص",
      "شهادة SSL",
      "تحليلات متقدمة",
      "مستخدمون غير محدودين",
      "دعم 24/7"
    ],

    // Footer Section
    "footer.tagline": "ابق على اتصال مع لويال – رحلتك نحو المكافآت تبدأ من هنا",
    "footer.pages": "الصفحات",
    "footer.service": "الخدمات",
    "footer.contact": "تواصل",
    "footer.home": "الرئيسية",
    "footer.features": "المميزات",
    "footer.pricing": "الأسعار",
    "footer.faqs": "الأسئلة الشائعة",
    "footer.shopify": "شوبيفاي",
    "footer.wordpress": "ووردبريس",
    "footer.uiux": "تصميم واجهة وتجربة المستخدم",
    "footer.phone": "(406) 555-0120",
    "footer.email": "mangcoding123@gmail.com",
    "footer.address": "2972 شارع ويستهايمر، سانتا آنا، إلينوي 85486",
    "footer.social.facebook": "فيسبوك",
    "footer.social.twitter": "تويتر",
    "footer.social.linkedin": "لينكدإن",
    "footer.social.instagram": "انستغرام",

    // Contact Section
    "contact.heading": "تواصل معنا",
    "contact.subheading": "أي سؤال أو ملاحظة؟ فقط اكتب لنا رسالة!",
    "contact.infoTitle": "معلومات التواصل",
    "contact.infoDesc": "قل شيئًا لبدء محادثة مباشرة!",
    "contact.phone": "+1012 3456 789",
    "contact.email": "demo@gmail.com",
    "contact.address": "132 شارع دارتموث، بوسطن، ماساتشوستس 02156، الولايات المتحدة",
    "contact.firstName": "الاسم الأول",
    "contact.lastName": "اسم العائلة",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.phoneLabel": "رقم الهاتف",
    "contact.subject": "اختر الموضوع؟",
    "contact.subjectOption1": "استفسار عام",
    "contact.subjectOption2": "دعم فني",
    "contact.subjectOption3": "شراكة",
    "contact.subjectOption4": "أخرى",
    "contact.message": "الرسالة",
    "contact.messagePlaceholder": "اكتب رسالتك..",
    "contact.button": "إرسال الرسالة",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.solution": "Solutions",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.announcement1": "Loyalty Programs Increase Customer Engagement by 5.3%",
    "hero.announcement2": "Join our Customer Retention Strategies Webinar",
    "hero.announcement3": "New: Customizable Loyalty Cards Available Now",
    "hero.customer": "CUSTOMER",
    "hero.loyalty": "LOYALTY",
    "hero.programs": "PROGRAMS",
    "hero.forRetention": "FOR RETENTION",
    "hero.subtitle":
      "Build strong customer connections, enhance brand loyalty, and boost repeat business with a seamless digital loyalty program",
    "hero.startFree": "Start For Free",
    "hero.learnMore": "Learn More",

    // Logo Slider
    "logos.trusted": "Trusted by leading companies",

    // Language
    "language.switch": "العربية",

    // Results Section
    "results.title": "Loyalty engine that drives results",
    "results.seeAll": "See all success stories",
    "results.averageOrder": "Average order value",
    "results.buyerFrequency": "Buyer frequency",
    "results.activeUsers": "Active users",
    "results.limango": "limango used a gamified loyalty program to boost customer lifetime value",
    "results.equiva": "EQUIVA saved €68.000 in the first months after introducing gamified referrals",
    "results.dacadoo": "dacadoo increased user engagement by introducing mobile gamification features",

    // How It Works Section
    "howitworks.title": "How Our Loyalty System Works",
    "howitworks.title1": "How Our Loyalty System",
    "howitworks.title2": "Works",
    "howitworks.badge": "Make Your Card",
    "howitworks.heading": "Create Your Loyalty Card Today\nand Start Earning Rewards\nInstantly",
    "howitworks.subheading": "Create and Customize Your Loyalty Card",
    "howitworks.desc": "Sign up for Loyally, pick the perfect card for your store, and design it easily with our fun templates.",
    "howitworks.cta": "Learn More",
    "howitworks.cardTitle": "Annual Growth",
    "howitworks.year1": "Year 1",
    "howitworks.year2": "Year 2",
    "howitworks.year3": "Year 3",
    "howitworks.market1": "Market A",
    "howitworks.market2": "Market B",
    "howitworks.roi": "ROI",
    "howitworks.roiDesc": "+30% in 3 years",

    // How It Works Share Card Section
    "howitworks.share.badge": "Share Your Card",
    "howitworks.share.heading": "Share Your Loyalty Card and\nGrow Your Customer\nCommunity",
    "howitworks.share.subheading": "Share Your Loyalty Card",
    "howitworks.share.desc": "Tell your customers about your card by sharing it through text, email, or social media.",
    "howitworks.share.cta": "Learn More",

    // How It Works Connect Section
    "howitworks.connect.badge": "connect & see result",
    "howitworks.connect.heading": "Connect with Customers and See Instant Results",
    "howitworks.connect.subheading": "Connect and Grow Fast",
    "howitworks.connect.desc": "Sign up for Loyally, pick the perfect card for your store, and design it easily with our fun templates.",
    "howitworks.connect.cta": "Learn More",

    // How It Works Testimonial Section
    "testimonial.heading": "Choose Luyal For A Better Experience",
    "testimonial.viewAll": "View All",
    "testimonial.text1": "This kit exceeded my expectations! The components are versatile and make implementation much easier.",
    "testimonial.name1": "Digital Leader",
    "testimonial.role1": "You Need To See Measurable",
    "testimonial.name2": "Cheator",
    "testimonial.role2": "You Love To create Standout ",
    "testimonial.name3": "Happy User",
    "testimonial.role3": "Looking for effective solutions",

    // FAQ Section
    "faq.heading": "Frequently Asked Questions",
    "faq.subheading": "All the details you need to get the most out of Luyal",
    "faq.q1": "What is Luyal, and how can it benefit my business?",
    "faq.q2": "Can Luyal help my business increase its sales?",
    "faq.q3": "Can I track my loyalty program’s performance with Luyal?",
    "faq.q4": "Can I customize the loyalty cards for my business?",
    "faq.q5": "Can I send PUSH notifications to my customers using Luyal ?",
    "faq.q6": "Can Luyal help my business grow its customer base?",
    "faq.q7": "Is Luyal easy to use?",

    // Plans Section
    "plans.heading": "Your Perfect Plan",
    "plans.subheading": "Affordable and scalable options for everyone.",
    "plans.starter": "STARTER",
    "plans.premium": "PREMIUM",
    "plans.included": "What’s included",
    "plans.price1": "$15",
    "plans.price2": "$30",
    "plans.perMonth": "/mo",
    "plans.button": "Get Started",
    "plans.starter.features": [
      "10GB Storage",
      "SSL Certificate",
      "Unlimited Bandwidth",
      "1 User",
      "Email Support",
      "7 Days Free Trial"
    ],
    "plans.premium.features": [
      "100GB Storage",
      "Custom Domain",
      "SSL Certificate",
      "Advanced Analytics",
      "Unlimited Users",
      "24/7 Support"
    ],

    // Footer Section
    "footer.tagline": "Stay Connected with Luyal – Your Journey to Rewards Starts Here",
    "footer.pages": "Pages",
    "footer.service": "Service",
    "footer.contact": "Contact",
    "footer.home": "Home",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.faqs": "Faqs",
    "footer.shopify": "Shopify",
    "footer.wordpress": "WordPress",
    "footer.uiux": "UI/UX Design",
    "footer.phone": "(406) 555-0120",
    "footer.email": "mangcoding123@gmail.com",
    "footer.address": "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    "footer.social.facebook": "Facebook",
    "footer.social.twitter": "Twitter",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.instagram": "Instagram",

    // Contact Section
    "contact.heading": "Contact Us",
    "contact.subheading": "Any question or remarks? Just write us a message!",
    "contact.infoTitle": "Contact Information",
    "contact.infoDesc": "Say something to start a live chat!",
    "contact.phone": "+1012 3456 789",
    "contact.email": "demo@gmail.com",
    "contact.address": "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone Number",
    "contact.subject": "Select Subject?",
    "contact.subjectOption1": "General Inquiry",
    "contact.subjectOption2": "Technical Support",
    "contact.subjectOption3": "Partnership",
    "contact.subjectOption4": "Other",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Write your message..",
    "contact.button": "Send Message",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar")
  const [isRTL, setIsRTL] = useState(true)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    setIsRTL(lang === "ar")
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
