import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto y Matricula",
  description:
    "Contacta con SuperAcademy para resolver dudas sobre ciclos, horarios, modalidad de estudio y proceso de matricula.",
  alternates: {
    canonical: "/contacto",
  },
};

const contactMessage =
  "Hola, quiero informacion sobre los ciclos y el proceso de matricula de SuperAcademy.";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-white to-slate-50">
      <section className="container mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.28)] md:p-14">
          <span className="rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
            Contacto directo
          </span>
          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Estamos listos para ayudarte a elegir el mejor ciclo
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Si necesitas orientacion sobre admision, horarios o modalidad,
            puedes escribirnos por WhatsApp y responderemos con el siguiente
            paso recomendado.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-bold">WhatsApp</h2>
              <p className="mt-2 text-sm text-slate-300">
                Atencion rapida para consultas y matricula.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-bold">Telefono</h2>
              <p className="mt-2 text-sm text-slate-300">
                +{WHATSAPP_PHONE_NUMBER}
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Clock3 className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-bold">Horario</h2>
              <p className="mt-2 text-sm text-slate-300">
                Lunes a sabado de 8:00 a.m. a 8:00 p.m.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(contactMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Abrir WhatsApp
            </a>
            <Link
              href="/ciclos"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Ver ciclos disponibles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
