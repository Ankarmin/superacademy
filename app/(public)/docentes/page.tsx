import type { Metadata } from "next";
import TeachersSection from "@/components/home/TeachersSection";

export const metadata: Metadata = {
  title: "Docentes",
  description:
    "Conoce la plana docente de SuperAcademy organizada por areas y cursos para una exploracion mas clara.",
  alternates: {
    canonical: "/docentes",
  },
};

export default function DocentesPage() {
  return (
    <main>
      <TeachersSection />
    </main>
  );
}
