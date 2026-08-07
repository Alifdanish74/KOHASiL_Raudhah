// File: src/data/navigation.ts
import { SECTION_IDS } from "@/lib/constants";

export interface NavItem {
  label: string;
  href: string;
  icon: string; // Lucide icon name for mobile nav
}

export const desktopNavItems: NavItem[] = [
  { label: "Hubungi", href: "/#hubungi", icon: "PhoneCall" },
  { label: "Syarat", href: "/syarat", icon: "FileText" },
  { label: "Laman Utama", href: "/#utama", icon: "Home" },
  { label: "Langgan", href: "/#pakej", icon: "Star" },
  { label: "Soalan", href: "/#soalan", icon: "HelpCircle" },
];

export const mobileNavItems: NavItem[] = [
  { label: "Hubungi", href: "/#hubungi", icon: "PhoneCall" },
  { label: "Syarat", href: "/syarat", icon: "FileText" },
  { label: "Laman Utama", href: "/#utama", icon: "Home" },
  { label: "Langgan", href: "/#pakej", icon: "Star" },
  { label: "Soalan", href: "/#soalan", icon: "HelpCircle" },
];
