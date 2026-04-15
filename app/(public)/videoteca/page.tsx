import type { Metadata } from "next";
import VideotecaPageClient from "./VideotecaPageClient";

export const metadata: Metadata = {
  title: "Videoteca",
  description:
    "Explora la videoteca de SuperAcademy con clases grabadas, repasos estrategicos y contenidos para reforzar tu preparacion preuniversitaria.",
  alternates: {
    canonical: "/videoteca",
  },
};

export default function VideotecaPage() {
  return <VideotecaPageClient />;
}
