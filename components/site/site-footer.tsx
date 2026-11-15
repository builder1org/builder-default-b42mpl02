import Link from "next/link";

import { Logo } from "@/components/site/logo";

const footerLinks = [
  { href: "/products", label: "فروشگاه" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export function SiteFooter() {
  return (
    <footer className="border-border bg-secondary/40 mt-auto border-t">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-7">
            پوشاک منتخب برای هر فصل — کیفیت پارچه، برش دقیق و استایلی که با شما
            می‌ماند. نام و جزئیات برند را هر زمان می‌توانید شخصی‌سازی کنید.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">دسترسی سریع</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">تماس</h2>
          <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-7">
            <li>تهران، [محله و خیابان فروشگاه]</li>
            <li>
              تلفن:{" "}
              <span dir="ltr" className="inline-block">
                [۰۲۱-۰۰۰۰۰۰۰۰]
              </span>
            </li>
            <li>ایمیل: [info@example.com]</li>
            <li>ساعات: شنبه تا پنجشنبه، ۱۰ تا ۲۱</li>
          </ul>
        </div>
      </div>

      <div className="border-border border-t px-4 py-6 text-center sm:px-6">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} بوتیک نو — تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}