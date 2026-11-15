import Link from "next/link";

import { ProductCard } from "@/components/site/product-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts(4);

  return (
    <section className="bg-secondary/30 border-border/50 border-y py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              منتخب فصل
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md text-sm leading-7">
              چهار پیشنهاد از تیم استایل بوتیک نو — قیمت‌ها نمونه هستند و پس از
              شخصی‌سازی فروشگاه به‌روز می‌شوند.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/products">مشاهده همه</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}