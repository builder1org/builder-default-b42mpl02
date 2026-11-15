"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/site/product-card";
import {
  categoryLabels,
  products,
  type ProductCategory,
} from "@/lib/products";
import { cn } from "@/lib/utils";

const filters: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "همه" },
  { key: "women", label: categoryLabels.women },
  { key: "men", label: categoryLabels.men },
  { key: "accessories", label: categoryLabels.accessories },
  { key: "new", label: categoryLabels.new },
];

type ProductCatalogProps = {
  initialCategory?: ProductCategory | "all";
};

export function ProductCatalog({
  initialCategory = "all",
}: ProductCatalogProps) {
  const [active, setActive] = useState<ProductCategory | "all">(initialCategory);

  const visible = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="فیلتر دسته محصول"
      >
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            role="tab"
            aria-selected={active === filter.key}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter.key
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border bg-card text-foreground hover:bg-secondary",
            )}
            onClick={() => setActive(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="text-muted-foreground mt-6 text-sm">
        {visible.length} محصول نمایشی
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}