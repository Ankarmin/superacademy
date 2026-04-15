import type { Metadata } from "next";
import NosotrosPageClient from "./NosotrosPageClient";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce SuperAcademy, academia preuniversitaria en Lima con metodologia moderna, docentes expertos y resultados de ingreso a San Marcos, UNI y Villarreal.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosPage() {
  return <NosotrosPageClient />;
}
