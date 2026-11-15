import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان بوتیک نو و ارزش‌هایی که پشت هر انتخاب پوشاک است.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            درباره بوتیک نو
          </h1>
          <p className="text-muted-foreground mt-6 text-sm leading-8">
            بوتیک نو از یک اتاق کوچک پر از پارچه شروع شد — جایی که هر روز چند
            برش محدود امتحان می‌شد و فقط آنچه روی تن آدم «درست» به نظر می‌رسید
            می‌ماند. امروز همان رویکرد را در فروشگاه حضوری و آنلاین ادامه
            می‌دهیم: کم‌حجم، باکیفیت، بدون شلوغی ویترین.
          </p>
          <p className="text-muted-foreground mt-4 text-sm leading-8">
            نام فروشگاه، آدرس و جزئیات تماس را می‌توانید هر زمان با اطلاعات
            واقعی کسب‌وکارتان عوض کنید. متن زیر فقط برای نمایش ساختار صفحه است.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "همکاری با تولیدکنندگان داخلی معتبر",
              "شفافیت در جنس پارچه و نگهداری",
              "احترام به زمان مشتری در مشاوره استایل",
            ].map((item) => (
              <li
                key={item}
                className="border-border flex gap-3 border-r-2 border-r-primary pr-4 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6b68758d8?w=900&q=80"
            alt="فضای داخلی فروشگاه لباس"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}