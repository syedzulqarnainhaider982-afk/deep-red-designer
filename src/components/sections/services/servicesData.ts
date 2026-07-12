import { Scissors, Crown, Sparkles, Globe, LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const servicesData: ServiceItem[] = [
  {
    id: "bespoke",
    num: "01",
    title: "Bespoke Atelier",
    desc: "Custom creations designed around the client's personality, measurements, and vision.",
    icon: Scissors,
  },
  {
    id: "bridal",
    num: "02",
    title: "Bridal Couture Experience",
    desc: "A private bridal journey with personalized consultation, styling, and craftsmanship.",
    icon: Crown,
  },
  {
    id: "restoration",
    num: "03",
    title: "Luxury Restoration",
    desc: "Refining and perfecting existing luxury garments with expert craftsmanship.",
    icon: Sparkles,
  },
  {
    id: "delivery",
    num: "04",
    title: "Premium Delivery",
    desc: "Secure and luxurious delivery across Pakistan and internationally.",
    icon: Globe,
  },
];
