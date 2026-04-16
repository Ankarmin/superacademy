import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, GraduationCap } from "lucide-react";
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
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e9fcff_0%,#9ef4fb_100%)] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_58%)]" />
        <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center text-slate-950">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold backdrop-blur">
            <GraduationCap className="h-4 w-4" />
            Programas activos
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-slate-950 md:text-6xl">
            Ciclos listos para convertir preparacion en ingreso
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-700 md:text-xl">
            Cada ciclo esta pensado para una meta concreta, con horarios claros,
            seguimiento y materiales alineados a examenes reales.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-3">
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
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    {program.schedule}
                  </div>
                  <div className="flex items-center gap-2">
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

                <Link
                  href={`/ciclos/${program.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                >
                  Ver detalle
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>
    </main>
  );
}
