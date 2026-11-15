import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "بوتیک نو | فروشگاه پوشاک",
    template: "%s | بوتیک نو",
  },
  description:
    "فروشگاه پوشاک بوتیک نو — مجموعه زنانه، مردانه و اکسسوری با استایل شهری و کیفیت ماندگار.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}