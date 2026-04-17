import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, GraduationCap } from "lucide-react";
import SuperSectionHero from "@/components/ui/SuperSectionHero";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cyclePrograms } from "./cycles";

export const metadata: Metadata = {
  title: "Ciclos Preuniversitarios",
  description:
    "Explora los ciclos academicos de SuperAcademy y encuentra el programa que mejor se adapta a tu objetivo universitario.",
  alternates: {
    canonical: "/ciclos",
  },
};

export default function CyclesPage() {
  const durations = cyclePrograms.map((program) => Number.parseInt(program.duration, 10));
  const minDuration = Math.min(...durations);
  const maxDuration = Math.max(...durations);

  return (
    <main className="bg-white">
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <SuperSectionHero
            badge="Ciclos organizados por objetivo"
            titleStart="Nuestros"
            titleAccent="SuperCiclos"
            description="Explora nuestros ciclos preuniversitarios con una estructura clara por objetivo, horarios y modalidad. Cada programa aparece en tarjetas ordenadas para que compares rapido y elijas mejor."
            stats={[
              `${cyclePrograms.length} ciclos disponibles`,
              `${minDuration} a ${maxDuration} semanas de duración`,
              "Ciencias, Matemáticas y Letras",
            ]}
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {cyclePrograms.map((program) => (
              <article
                key={program.slug}
                className="overflow-hidden rounded-3xl border border-[#d8eef3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-56">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#045a69]/65 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
                    {program.badge}
                  </span>
                </div>

                <div className="space-y-6 p-7">
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-950">
                      {program.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2 rounded-2xl bg-[#f8fafc] px-4 py-3">
                      <Clock3 className="h-4 w-4 text-primary" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl bg-[#f8fafc] px-4 py-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      {program.schedule}
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl bg-[#f8fafc] px-4 py-3">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      {program.mode}
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-600">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href={`/ciclos/${program.slug}`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Ver detalle
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={buildWhatsAppUrl(`Hola, quiero informacion sobre ${program.title} de SuperAcademy.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
                    >
                      Consultar este ciclo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
