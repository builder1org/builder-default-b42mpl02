import { CategoriesSection } from "@/components/sections/categories-section";
import { EditorialBannerSection } from "@/components/sections/editorial-banner";
import { FeaturedProductsSection } from "@/components/sections/featured-products";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ValuesSection } from "@/components/sections/values-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <EditorialBannerSection />
      <ValuesSection />
      <NewsletterSection />
    </main>
  );
}