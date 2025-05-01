"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { useState, useEffect } from "react"
import Ticker from "react-ticker"

export default function LogoGrid() {
  const { t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  // Array of logo data with consistent dimensions
  const logos = [
    { name: "JTI", src: "/images/logos/jti.png", width: 220 },
    { name: "dacadoo", src: "/images/logos/dacadoo.png", width: 220 },
    { name: "PDI", src: "/images/logos/pdi.png", width: 220 },
    { name: "Q-DANCE", src: "/images/logos/q-dance.png", width: 220 },
    { name: "GIGATRON", src: "/images/logos/gigatron.png", width: 220 },
    { name: "toolstream", src: "/images/logos/toolstream.png", width: 220 },
    { name: "EQUIVA", src: "/images/logos/equiva.png", width: 220 },
    { name: "WARBA BANK", src: "/images/logos/warba-bank.png", width: 220 },
  ]

  // Use useEffect to handle client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Render the ticker only on client-side to avoid hydration issues
  const renderTicker = () => {
    if (!isClient) return null

    return (
      <Ticker speed={3} mode="smooth">
        {({ index }) => (
          <div className="ticker-container">
            {logos.map((logo, i) => (
              <div key={`logo-${i}-${index}`} className="ticker-item">
                <div className="logo-wrapper">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={100}
                    className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    priority={i < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </Ticker>
    )
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-center text-lg md:text-xl font-medium text-[#4b5563]">{t("logos.trusted")}</h2>
      </div>

      <div className="ticker-wrap">{renderTicker()}</div>

      <style jsx global>{`
  .ticker-wrap {
    width: 100%;
    overflow: hidden;
    height: 170px; /* Increased base height */
    padding: 15px 0;
    background-color: white;
    position: relative;
  }

  .ticker-container {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .ticker-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    flex: 0 0 auto;
    min-width: 300px; /* Increased minimum width for larger logos */
    position: relative;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px; /* Slightly increased from 210px */
    height: 140px; /* Increased height for larger logos */
    padding: 0 15px;
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .ticker-wrap {
      height: 140px;
    }
    
    .ticker-item {
      min-width: 260px;
    }
    
    .logo-wrapper {
      width: 220px;
      height: 110px;
    }
  }
  
  @media (max-width: 768px) {
    .ticker-wrap {
      height: 130px;
    }
    
    .ticker-item {
      min-width: 240px;
    }
    
    .logo-wrapper {
      width: 210px;
      height: 100px;
    }
  }
  
  @media (max-width: 480px) {
    .ticker-wrap {
      height: 120px;
    }
    
    .ticker-item {
      min-width: 220px;
    }
    
    .logo-wrapper {
      width: 200px;
      height: 90px;
    }
  }
`}</style>
    </section>
  )
}
