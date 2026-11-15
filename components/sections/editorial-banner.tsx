import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function EditorialBannerSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-card border-border grid overflow-hidden rounded-2xl border lg:grid-cols-5">
        <div className="relative min-h-64 lg:col-span-3 lg:min-h-[22rem]">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80"
            alt="جزئیات پارچه و دوخت لباس"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
          <p className="text-primary text-xs font-medium tracking-widest uppercase">
            نگاه نزدیک
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
            لایه‌‌لایه برای هوای سرد شهر
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-7">
            پلیورهای نرم، پالتوهای ساختارمند و شال‌هایی که رنگ استایل شما را
            کامل می‌کنند. برای بازدید حضوری یا سفارش، با ما در تماس باشید.
          </p>
          <Button asChild className="mt-6 w-fit">
            <Link href="/contact">هماهنگی بازدید</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}