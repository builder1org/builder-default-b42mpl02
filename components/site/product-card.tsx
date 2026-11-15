import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  priority?: boolean;
};

export function ProductCard({ product, className, priority }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group bg-card border-border/80 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <Link href="/products" className="block">
        <div className="bg-muted relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
          {product.badge ? (
            <span className="bg-primary text-primary-foreground absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium">
              {product.badge}
            </span>
          ) : null}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold md:text-base">{product.name}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{product.priceLabel}</p>
        </div>
      </Link>
    </article>
  );
}