import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Clock3, Users } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cyclePrograms, getCycleProgramBySlug } from "../cycles";

type CicloPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cyclePrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: CicloPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getCycleProgramBySlug(slug);

  if (!program) {
    return {
      title: "Ciclo no encontrado",
    };
  }

  return {
    title: program.title,
    description: program.description,
    alternates: {
      canonical: `/ciclos/${slug}`,
    },
  };
}

export default async function CicloPage({ params }: CicloPageProps) {
  const { slug } = await params;
  const program = getCycleProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="bg-white transition-colors dark:bg-[#04111d]">
      <section className="bg-[linear-gradient(180deg,#e9fcff_0%,#9ef4fb_100%)] py-16 text-slate-950 dark:bg-[linear-gradient(180deg,#082137_0%,#0a3f59_100%)] dark:text-white sm:py-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div>
            <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-primary dark:bg-white/10 dark:text-cyan-100">
              {program.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
              {program.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              {program.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700 dark:text-slate-200">
              <span className="rounded-full border border-white/70 bg-white/45 px-4 py-2 dark:border-white/10 dark:bg-white/10">
                Inicio {program.startDate}
              </span>
              <span className="rounded-full border border-white/70 bg-white/45 px-4 py-2 dark:border-white/10 dark:bg-white/10">
                Mensualidad {program.monthlyPrice}
              </span>
              <span className="rounded-full border border-white/70 bg-white/45 px-4 py-2 dark:border-white/10 dark:bg-white/10">
                {program.mode}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/75 bg-white/55 p-8 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="space-y-5 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-primary" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>{program.audience}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-primary" />
                <span>Contacto: {program.contactPhone}</span>
              </div>
            </div>

            <Link
              href={buildWhatsAppUrl(`Hola, quiero informacion sobre ${program.title} y el proceso de matricula.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8 px-6 py-3 font-semibold"
            >
              Solicitar informacion
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f2fcff_100%)] py-16 transition-colors dark:bg-[linear-gradient(180deg,#04111d_0%,#071b2b_100%)] sm:py-20">
        <div className="container mx-auto px-6">
          <article className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">
              Lo que incluye este ciclo
            </h2>
            <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              {program.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-black text-slate-950 dark:text-white">
              Cursos principales
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {program.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-100"
                >
                  {subject}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="container mx-auto mt-8 grid gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="overflow-hidden rounded-3xl border border-[#d8eef3] bg-white shadow-sm dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]">
            <Image
              src={program.image}
              alt={`Afiche de ${program.title}`}
              width={1600}
              height={1600}
              className="h-auto w-full object-cover"
            />
          </article>

          <article className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">
              Resumen rapido
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Inicio
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{program.startDate}</p>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Mensualidad
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{program.monthlyPrice}</p>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Contacto
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{program.contactPhone}</p>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Modalidad
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{program.mode}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
