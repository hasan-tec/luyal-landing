import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export function HowItWorksFigmaTestimonialSection() {
  const { t, isRTL } = useLanguage();
  const testimonials = [
    {
      name: t("testimonial.name1"),
      role: t("testimonial.role1"),
      text: t("testimonial.text1"),
      img: "/images/image 2.png"
    },
    {
      name: t("testimonial.name2"),
      role: t("testimonial.role2"),
      text: t("testimonial.text1"),
      img: "/images/image 2.png"
    },
    {
      name: t("testimonial.name3"),
      role: t("testimonial.role3"),
      text: t("testimonial.text1"),
      img: "/images/image 2.png"
    }
  ];
  return (
    <section className="w-full flex flex-col items-center bg-white py-[96px]" dir={isRTL ? "rtl" : undefined}>
      <div className="w-full max-w-[1240px] flex flex-col gap-[40px] md:gap-[60px] px-4 md:px-0">
        {/* Header Row */}
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="font-vc-nudge font-medium text-[40px] md:text-[56px] leading-[1.2] md:leading-[67px] tracking-[0.018em] text-[#111827] capitalize" style={{letterSpacing: '-4.4px', textAlign: isRTL ? 'right' : 'left'}}>
            {t("testimonial.heading")}
          </h2>
          <a href="#" className="hidden md:inline-flex items-center font-inter font-medium text-[16px] leading-[24px] text-[#111827] hover:underline transition-all">
            {t("testimonial.viewAll")}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={isRTL ? "mr-1" : "ml-1"}><path d="M10 8l4 4-4 4" stroke="#111827" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="md:hidden flex justify-end mb-4">
          <a href="#" className="inline-flex items-center font-inter font-medium text-[16px] leading-[24px] text-[#111827] hover:underline transition-all">
            {t("testimonial.viewAll")}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={isRTL ? "mr-1" : "ml-1"}><path d="M10 8l4 4-4 4" stroke="#111827" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        {/* Testimonials Row */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full justify-between">
          {(isRTL ? testimonials.slice().reverse() : testimonials).map((testimonial, i) => (
            <div key={i} className="bg-[#F1F1F2] rounded-[24px] flex flex-col gap-6 p-6 md:p-8 w-full md:w-[398px] min-h-[260px] shadow-none border border-transparent">
              {/* Profile */}
              <div className="flex flex-row items-center gap-4 w-full">
                <div className="relative w-12 h-12 rounded-full bg-[#D9D9D9] overflow-hidden flex-shrink-0">
                  <Image src={testimonial.img} alt="Avatar" fill className="object-cover rounded-full" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-vc-nudge font-semibold text-[20px] leading-[28px] tracking-[0.018em] text-[#111827]" style={{ letterSpacing: '-1.8px' }}>{testimonial.name}</span>
                  <span className="font-medium text-[16px] leading-[19px] text-[#4B5563] font-inter">{testimonial.role}</span>
                </div>
              </div>
              <div className="w-full h-px bg-[#D3D3D3]" />
              {/* Testimonial */}
              <div className="flex flex-col gap-3 w-full">
                <span className="font-inter font-medium text-[18px] leading-[34px] text-[#4B5563]">{testimonial.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
