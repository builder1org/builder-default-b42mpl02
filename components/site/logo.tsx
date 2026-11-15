import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col leading-none tracking-tight",
        className,
      )}
    >
      <span className="text-primary text-xl font-semibold md:text-2xl">
        بوتیک نو
      </span>
      <span className="text-muted-foreground mt-1 text-[10px] font-normal tracking-[0.2em] uppercase">
        Boutique No
      </span>
    </Link>
  );
}