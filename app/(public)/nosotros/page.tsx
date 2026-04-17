import type { Metadata } from "next";
import NosotrosPageClient from "./NosotrosPageClient";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce SuperAcademy, academia preuniversitaria en Lima con metodologia moderna, docentes expertos y acompanamiento por areas en ciencias, matematicas y letras.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosPage() {
  return <NosotrosPageClient />;
}
