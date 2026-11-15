import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های تماس با بوتیک نو و فرم ارسال پیام.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            تماس با ما
          </h1>
          <p className="text-muted-foreground mt-4 text-sm leading-8">
            برای هماهنگی بازدید، مشاوره استایل یا پیگیری سفارش با ما در ارتباط
            باشید. اطلاعات زیر placeholder هستند — آن‌ها را با آدرس و شماره
            واقعی فروشگاه خود جایگزین کنید.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-3 text-sm">
              <MapPin className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
              <span>تهران، [محله و پلاک فروشگاه]</span>
            </li>
            <li className="flex gap-3 text-sm">
              <Phone className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
              <span dir="ltr" className="inline-block">
                [۰۲۱-۰۰۰۰۰۰۰۰]
              </span>
            </li>
          </ul>

          <div className="bg-muted mt-8 rounded-xl p-5 text-sm leading-7">
            <p className="font-semibold">ساعات کاری</p>
            <p className="text-muted-foreground mt-1">
              شنبه تا پنجشنبه: ۱۰:۰۰ تا ۲۱:۰۰
              <br />
              جمعه: تعطیل (قابل تغییر)
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}