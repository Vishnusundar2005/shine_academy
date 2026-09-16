import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Work_Sans } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shinetuitionacademy.in"),
  title: "Shine Tuition Academy — ONLINE, OFFLINE COACHING TOII–XII",
  description:
    "Personalised coaching for school students from 2nd to 12th standard. Improve marks, confidence and consistency with small batches and weekly progress tracking.",
  authors: [{ name: "Shine Tuition Academy" }],
  icons: {
    icon: "/assets/shine-logo-BS6jSxsV.jpg",
    apple: "/assets/shine-logo-BS6jSxsV.jpg",
  },
  openGraph: {
    title: "Shine Tuition Academy — ONLINE, OFFLINE COACHING TOII–XII",
    description:
      "Personalised coaching for school students from 2nd to 12th standard. Improve marks, confidence and consistency with small batches and weekly progress tracking.",
    url: "https://shinetuitionacademy.lovable.app/",
    siteName: "Shine Tuition Academy",
    images: [
      {
        url: "/assets/shine-logo-BS6jSxsV.jpg",
        width: 800,
        height: 600,
        alt: "Shine Tuition Academy Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shine Tuition Academy — ONLINE, OFFLINE COACHING TOII–XII",
    description:
      "Personalised coaching for school students from 2nd to 12th standard. Improve marks, confidence and consistency with small batches and weekly progress tracking.",
    images: ["/assets/shine-logo-BS6jSxsV.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#063b3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${workSans.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased selection:bg-teal-soft selection:text-ink">
        {children}
      </body>
    </html>
  );
}
