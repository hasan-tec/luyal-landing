"use client"

import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ResultsSection() {
  const { t, isRTL } = useLanguage()

  // Use the appropriate arrow based on language direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <h2
            className="text-[3.5rem] md:text-[3.5rem] leading-[1.2] font-medium text-[#111827] text-left tracking-[0.018em]"
            style={{
              fontFamily: 'Inter, GeistSans, Arial, sans-serif',
              fontWeight: 500,
              lineHeight: '67.2px',
              letterSpacing: '1.8px',
            }}
          >
            Loyalty engine that drives<br />results
          </h2>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-base font-medium text-[#111827] hover:underline whitespace-nowrap">
            See all success stories <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-stretch">
          {/* First stat card */}
          <div className="bg-[#F1F1F2] rounded-[18px] p-10 flex flex-col items-start w-full max-w-[318px] min-h-[345px] shadow-none border border-transparent">
            <div className="mb-6 w-full text-left">
              <div
                className="text-[56px] font-medium text-[#111827] mb-1"
                style={{letterSpacing: '-2px', lineHeight: '67.2px', fontFamily: 'DM Sans, Inter, Arial, sans-serif'}}
              >
                +41%
              </div>
              <div className="text-[#485563] font-normal text-[16px] leading-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Average order value</div>
            </div>
            <p className="text-[#4B5563] mb-8 text-left w-full text-[16px] leading-6 font-normal" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
              limango used a gamified loyalty<br />program to boost customer<br />lifetime value
            </p>
            <div className="mt-auto flex items-end h-8 w-full">
              <Image
                src="/images/logos/limango.png"
                alt="limango logo"
                width={110}
                height={28}
                className="h-7 w-auto object-contain opacity-100"
              />
            </div>
          </div>

          {/* Second stat card */}
          <div className="bg-[#F1F1F2] rounded-[18px] p-10 flex flex-col items-start w-full max-w-[318px] min-h-[345px] shadow-none border border-transparent">
            <div className="mb-6 w-full text-left">
              <div
                className="text-[56px] font-medium text-[#111827] mb-1"
                style={{letterSpacing: '-2px', lineHeight: '67.2px', fontFamily: 'DM Sans, Inter, Arial, sans-serif'}}
              >
                2x
              </div>
              <div className="text-[#485563] font-normal text-[16px] leading-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Buyer frequency</div>
            </div>
            <p className="text-[#4B5563] mb-8 text-left w-full text-[16px] leading-6 font-normal" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
              EQUIVA saved €68.000 in the<br />first months after introducing<br />gamified referrals
            </p>
            <div className="mt-auto flex items-end h-8 w-full">
              <Image
                src="/images/logos/equiva.png"
                alt="EQUIVA logo"
                width={110}
                height={28}
                className="h-7 w-auto object-contain opacity-100"
              />
            </div>
          </div>

          {/* Third stat card */}
          <div className="bg-[#F1F1F2] rounded-[18px] p-10 flex flex-col items-start w-full max-w-[318px] min-h-[345px] shadow-none border border-transparent">
            <div className="mb-6 w-full text-left">
              <div
                className="text-[56px] font-medium text-[#111827] mb-1"
                style={{letterSpacing: '-2px', lineHeight: '67.2px', fontFamily: 'DM Sans, Inter, Arial, sans-serif'}}
              >
                +62%
              </div>
              <div className="text-[#485563] font-normal text-[16px] leading-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Active users</div>
            </div>
            <p className="text-[#4B5563] mb-8 text-left w-full text-[16px] leading-6 font-normal" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
              dacadoo increased user<br />engagement by introducing<br />mobile gamification features
            </p>
            <div className="mt-auto flex items-end h-8 w-full">
              <Image
                src="/images/logos/dacadoo.png"
                alt="dacadoo logo"
                width={110}
                height={28}
                className="h-7 w-auto object-contain opacity-100"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10 md:hidden">
          <a href="#" className="inline-flex items-center gap-1 text-base font-medium text-[#111827] hover:underline">
            See all success stories <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
