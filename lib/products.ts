export type ProductCategory = "women" | "men" | "accessories" | "new";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  priceLabel: string;
  image: string;
  imageAlt: string;
  badge?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  women: "زنانه",
  men: "مردانه",
  accessories: "اکسسوری",
  new: "تازه‌ها",
};

export const products: Product[] = [
  {
    id: "p1",
    name: "پالتو کرپ زمستانی",
    category: "women",
    priceLabel: "۴٬۹۵۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    imageAlt: "پالتو کره‌ای روی مانکن",
    badge: "جدید",
  },
  {
    id: "p2",
    name: "کت اسپرت مردانه",
    category: "men",
    priceLabel: "۲٬۸۰۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    imageAlt: "کت آبی تیره مردانه",
  },
  {
    id: "p3",
    name: "پلیور کش‌بافت",
    category: "women",
    priceLabel: "۱٬۶۵۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    imageAlt: "پلیور کرم روی صندلی",
  },
  {
    id: "p4",
    name: "شلوار کتان راحتی",
    category: "men",
    priceLabel: "۱٬۴۲۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    imageAlt: "شلوار کرم مردانه",
  },
  {
    id: "p5",
    name: "کیف چرمی دستی",
    category: "accessories",
    priceLabel: "۳٬۲۰۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1548039241-9d4d3084def2?w=800&q=80",
    imageAlt: "کیف چرمی قهوه‌ای",
    badge: "پرفروش",
  },
  {
    id: "p6",
    name: "لباس مجلسی ساتن",
    category: "new",
    priceLabel: "۵٬۴۰۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    imageAlt: "لباس بلند سرخابی",
    badge: "مجموعه پاییز",
  },
  {
    id: "p7",
    name: "شال پشمی",
    category: "accessories",
    priceLabel: "۸۹۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1520903923153-2fc8c1f20400?w=800&q=80",
    imageAlt: "شال خاکستری تا شده",
  },
  {
    id: "p8",
    name: "پیراهن ساده مردانه",
    category: "men",
    priceLabel: "۹۵۰٬۰۰۰ تومان (نمونه)",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    imageAlt: "پیراهن سفید روی میز",
  },
];

export function getFeaturedProducts(limit = 4): Product[] {
  return products.slice(0, limit);
}

export function getProductsByCategory(category: ProductCategory | "all"): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}