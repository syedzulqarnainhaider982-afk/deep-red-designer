export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const lookbookData: LookbookItem[] = [
  {
    id: "lb-01",
    title: "The Royal Velvet",
    subtitle: "Bridal Couture Collection",
    category: "Bridal",
    description: "An intricately hand-embellished masterpiece showcasing centuries-old zardozi techniques on premium velvet.",
    image: "/images/royal-velvet-green.jpg",
    featured: true
  },
  {
    id: "lb-02",
    title: "Midnight Silk",
    subtitle: "Luxury Pret",
    category: "Pret",
    description: "Flowing midnight silk with delicate silver threadwork, designed for evening elegance.",
    image: "/images/user-pic-2.jpg",
  },
  {
    id: "lb-03",
    title: "Pearl & Ivory",
    subtitle: "Formal Collection",
    category: "Formal",
    description: "A breathtaking symphony of pearls and ivory embroidery over soft imported chiffon.",
    image: "/images/user-pic-3.jpg",
    featured: true
  },
  {
    id: "lb-04",
    title: "Emerald Mist",
    subtitle: "Festive Wear",
    category: "Festive",
    description: "Vibrant emerald tones fused with contemporary cuts, perfect for grand celebrations.",
    image: "/images/user-pic-4.jpg",
  },
  {
    id: "lb-05",
    title: "Dusk Chiffon",
    subtitle: "Casual Elegance",
    category: "Casual",
    description: "Minimalist luxury that speaks volumes. Soft chiffon designed for effortless daytime grace.",
    image: "/images/formal-new.webp",
  },
  {
    id: "lb-06",
    title: "Bespoke Majesty",
    subtitle: "Custom Stitching",
    category: "Bespoke",
    description: "A completely personalized creation tailored to absolute perfection for our VIP clientele.",
    image: "/images/custom-new.webp",
    featured: true
  }
];
