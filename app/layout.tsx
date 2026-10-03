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

// GitHub Pages can't send security headers, so the policy is delivered as a <meta> tag.
// Next's static export relies on inline scripts, hence 'unsafe-inline' for scripts.
// If you add images from a new site, add its origin to img-src.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.credly.com https://github-readme-stats-sigma-five.vercel.app",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ")

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && <meta httpEquiv="Content-Security-Policy" content={csp} />}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
