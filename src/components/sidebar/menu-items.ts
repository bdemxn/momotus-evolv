import { BadgeCent, Home, LucideProps, Package, Percent } from "lucide-react";

export type MenuItem = {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export const menuItems: Array<MenuItem> = [
  {
    title: "Comienzo",
    url: "/",
    icon: Home
  },
  {
    title: "Inventario",
    url: "/inventory",
    icon: Package
  },
  {
    title: "Ventas",
    url: "/sales",
    icon: BadgeCent
  },
  {
    title: "Facturación",
    url: "/billing",
    icon: Percent
  }
];