import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "অভ্র টাইপিং শিক্ষক",
  description: "বাংলা টাইপিং শেখার সহজ উপায়",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}
