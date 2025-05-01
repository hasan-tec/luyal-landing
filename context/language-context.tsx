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
    "hero.announcement1": "برامج الولاء تزيد من مشاركة العملاء بنس��ة 5.3%",
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
