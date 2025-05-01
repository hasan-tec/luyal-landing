import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { LanguageProvider } from "@/context/language-context"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Luyal - Customer Loyalty Programs",
  description: "Build strong customer connections with Luyal loyalty programs",
  icons: {
    icon: "/images/logo-gradient.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${poppins.variable} ${inter.variable} font-poppins`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
