"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

export default function LogoGrid() {
  const { t, isRTL } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Array of logo data with consistent dimensions
  const logos = [
    { name: "JTI", src: "/images/logos/jti.png", width: 180 },
    { name: "dacadoo", src: "/images/logos/dacadoo.png", width: 180 },
    { name: "PDI", src: "/images/logos/pdi.png", width: 180 },
    { name: "Q-DANCE", src: "/images/logos/q-dance.png", width: 180 },
    { name: "GIGATRON", src: "/images/logos/gigatron.png", width: 180 },
    { name: "toolstream", src: "/images/logos/toolstream.png", width: 180 },
    { name: "EQUIVA", src: "/images/logos/equiva.png", width: 180 },
    { name: "WARBA BANK", src: "/images/logos/warba-bank.png", width: 180 },
  ]

  // Use useEffect to handle client-side rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Create a duplicate set of logos for seamless infinite scrolling
  const allLogos = [...logos, ...logos]

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-white" dir="ltr">
      <div className="container mx-auto px-4 mb-4 sm:mb-6" dir={isRTL ? "rtl" : "ltr"}>
        <h2 className="text-center text-base sm:text-lg md:text-xl font-medium text-[#4b5563]">{t("logos.trusted")}</h2>
      </div>

      <div className="logo-slider">
        <div className="logo-slide-track">
          {allLogos.map((logo, i) => (
            <div key={`logo-${i}`} className="logo-slide">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={80}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                priority={i < 8}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .logo-slider {
          background: white;
          height: 100px;
          margin: auto;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .logo-slide-track {
          animation: scroll 30s linear infinite;
          display: flex;
          width: calc(180px * ${allLogos.length});
        }

        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          width: 180px;
          padding: 0 10px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * ${logos.length}));
          }
        }

        /* Responsive adjustments */
        @media (min-width: 640px) {
          .logo-slider {
            height: 110px;
          }
          
          .logo-slide {
            height: 110px;
            width: 200px;
          }
          
          .logo-slide-track {
            width: calc(200px * ${allLogos.length});
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-200px * ${logos.length}));
            }
          }
        }
        
        @media (min-width: 768px) {
          .logo-slider {
            height: 120px;
          }
          
          .logo-slide {
            height: 120px;
            width: 220px;
          }
          
          .logo-slide-track {
            width: calc(220px * ${allLogos.length});
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-220px * ${logos.length}));
            }
          }
        }
        
        @media (min-width: 1024px) {
          .logo-slider {
            height: 130px;
          }
          
          .logo-slide {
            height: 130px;
            width: 240px;
          }
          
          .logo-slide-track {
            width: calc(240px * ${allLogos.length});
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-240px * ${logos.length}));
            }
          }
        }
      `}</style>
    </section>
  )
}
