import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-primary text-sm font-medium tracking-wide">
            مجموعه پاییز و زمستان ۱۴۰۴
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            استایل روز،
            <br />
            <span className="text-primary/90">با جزئیات ماندگار</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-lg text-base leading-8">
            از پالتوهای کرپ تا اکسسوری‌های چرمی — در بوتیک نو هر قطعه با دقت
            انتخاب شده تا در خیابان و مهمانی یکدست بدرخشید.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/products">خرید از فروشگاه</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">داستان ما</Link>
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t pt-8 sm:max-w-md">
            <div>
              <dt className="text-muted-foreground text-xs">ارسال</dt>
              <dd className="mt-1 text-sm font-semibold">به سراسر کشور</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs">پارچه</dt>
              <dd className="mt-1 text-sm font-semibold">منتخب و ماندگار</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs">مشاوره</dt>
              <dd className="mt-1 text-sm font-semibold">استایل رایگان</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[28rem] lg:min-h-[36rem]">
          <div className="absolute inset-0 lg:inset-y-8 lg:left-0 lg:w-[calc(100%+3rem)]">
            <Image
              src="https://images.unsplash.com/photo-1483985988350-763728e1935b?w=1200&q=80"
              alt="مدل با لباس زمستانی در فضای شهری"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="from-background/80 pointer-events-none absolute inset-0 bg-gradient-to-l to-transparent lg:via-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}