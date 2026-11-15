import { Gem, Ruler, Truck } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "کیفیت پارچه",
    description: "انتخاب الیاف ماندگار و دوخت تمیز در هر قطعه.",
  },
  {
    icon: Ruler,
    title: "سایزبندی دقیق",
    description: "راهنمای سایز شفاف و امکان تنظیم برش در سفارش‌های خاص.",
  },
  {
    icon: Truck,
    title: "ارسال مطمئن",
    description: "بسته‌بندی محکم و هماهنگی زمان تحویل با شما.",
  },
];

export function ValuesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold sm:text-3xl">چرا بوتیک نو؟</h2>
        <p className="text-muted-foreground mt-2 text-sm leading-7">
          فروشگاهی کوچک اما دقیق — تمرکز روی تجربه خرید آرام و انتخاب‌های
          محدود ولی باکیفیت.
        </p>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-3">
        {values.map((item) => (
          <li
            key={item.title}
            className="bg-card border-border rounded-xl border p-6"
          >
            <item.icon className="text-primary size-8" aria-hidden />
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-7">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}