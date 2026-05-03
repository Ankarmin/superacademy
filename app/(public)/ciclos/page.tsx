import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SuperSectionHero from "@/components/ui/SuperSectionHero";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cyclePrograms } from "./cycles";

export const metadata: Metadata = {
  title: "Ciclos",
  description:
    "Consulta los ciclos disponibles de SuperAcademy con informacion de matricula, modalidad y detalle por programa.",
  alternates: {
    canonical: "/ciclos",
  },
};

export default function CyclesPage() {
  return (
    <div className="bg-white transition-colors dark:bg-[#04111d]">
      <section className="bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20">
        <div className="container mx-auto px-6">
          <SuperSectionHero
            titleStart="Nuestros"
            titleAccent="SuperCiclos"
            description="Explora nuestros ciclos en un formato compacto y claro, pensado para crecer sin perder orden cuando agreguemos nuevas opciones."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cyclePrograms.map((program, index) => (
              <article
                key={program.slug}
                className="group overflow-hidden rounded-[1.75rem] border border-[#d8eef3] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
              >
                <div className="relative h-52 overflow-hidden bg-[linear-gradient(180deg,#effdff_0%,#d6f8ff_100%)] p-4 dark:bg-[linear-gradient(180deg,#082137_0%,#0a2b40_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,246,241,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(1,184,219,0.18),transparent_28%)]" />
                  <div className="relative h-full overflow-hidden rounded-[22px] border border-white/80 bg-white/60 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.08)] dark:border-cyan-300/10 dark:bg-white/5 dark:shadow-none">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      priority={index === 0}
                      loading={index < 3 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      sizes="(min-width: 1280px) 28vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 p-6 sm:p-7">
                  <div>
                    <span className="inline-flex rounded-full bg-primary/12 px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
                      {program.badge}
                    </span>

                    <h2 className="mt-4 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-[1.9rem]">
                      {program.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[0.96rem]">
                      {program.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <Link
                      href={`/ciclos/${program.slug}`}
                      className="btn-primary px-5 py-3 font-semibold"
                    >
                      Ver detalle completo
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href={buildWhatsAppUrl(`Hola, quiero informacion sobre ${program.title} y su matricula.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary px-5 py-3 font-semibold"
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
    </div>
  );
}
