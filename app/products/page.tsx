import type { Metadata } from "next";

import { ProductCatalog } from "@/components/sections/product-catalog";
import {
  categoryLabels,
  type ProductCategory,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "مشاهده مجموعه پوشاک زنانه، مردانه و اکسسوری در بوتیک نو.",
};

function parseCategory(
  value: string | undefined,
): ProductCategory | "all" {
  if (!value) return "all";
  if (value in categoryLabels) return value as ProductCategory;
  return "all";
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const initialCategory = parseCategory(params.category);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          فروشگاه
        </h1>
        <p className="text-muted-foreground mt-3 text-sm leading-7">
          گزینه‌های نمونه برای نمایش ظاهر فروشگاه آنلاین شما. تصاویر از منابع
          عمومی هستند و با عکس‌های واقعی محصولاتتان جایگزین می‌شوند.
        </p>
      </header>

      <div className="mt-10">
        <ProductCatalog
          key={initialCategory}
          initialCategory={initialCategory}
        />
      </div>
    </main>
  );
}