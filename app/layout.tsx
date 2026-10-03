import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { profile, certifications } from "@/content/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

const description = `${profile.name} — ${profile.roles.join(", ")}. ${certifications.length} industry certifications across Linux, networking, security, and cloud.`

export const metadata: Metadata = {
  metadataBase: new URL("https://merlinlcb.com"),
  title: `${profile.name} | ${profile.roles[0]}`,
  description,
  openGraph: {
    title: `${profile.name} | ${profile.roles[0]}`,
    description,
    url: "https://merlinlcb.com",
    images: ["/me.png"],
    type: "profile",
  },
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
