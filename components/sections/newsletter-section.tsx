import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold">اولین نفر باشید که مجموعه جدید را می‌بینید</h2>
          <p className="mt-3 text-sm leading-7 text-primary-foreground/85">
            ایمیل خود را بگذارید تا از ورود محصولات و تخفیف‌های فصلی باخبر شوید.
            فرم نمایشی است — پس از راه‌اندازی سرویس ایمیل، اتصال دهید.
          </p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            ایمیل
          </label>
          <Input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="ایمیل شما"
            className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/40"
            dir="ltr"
          />
          <Button type="submit" variant="secondary" className="shrink-0">
            عضویت
          </Button>
        </form>
      </div>
    </section>
  );
}