import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "زنانه",
    href: "/products?category=women",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80",
    alt: "لباس زنانه روزمره",
  },
  {
    title: "مردانه",
    href: "/products?category=men",
    image:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=700&q=80",
    alt: "استایل مردانه شیک",
  },
  {
    title: "اکسسوری",
    href: "/products?category=accessories",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=700&q=80",
    alt: "کیف و اکسسوری",
  },
];

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            دسته‌بندی‌ها
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            مسیر کوتاه به آنچه دنبالش هستید
          </p>
        </div>
        <Link
          href="/products"
          className="text-primary text-sm font-medium hover:underline"
        >
          همه محصولات
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {categories.map((cat, i) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[3/4]"
          >
            <Image
              src={cat.image}
              alt={cat.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute right-4 bottom-4 text-lg font-semibold text-white">
              {cat.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}