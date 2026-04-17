import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Clock3, MonitorPlay, Users } from "lucide-react";
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
    <main className="bg-white">
      <section className="bg-[linear-gradient(180deg,#e9fcff_0%,#9ef4fb_100%)] py-16 text-slate-950 sm:py-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div>
            <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-primary">
              {program.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
              {program.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              {program.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700">
              <span className="rounded-full border border-white/70 bg-white/45 px-4 py-2">
                {program.audience}
              </span>
              <span className="rounded-full border border-white/70 bg-white/45 px-4 py-2">
                {program.mode}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/75 bg-white/55 p-8 backdrop-blur">
            <div className="space-y-5 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-primary" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>{program.schedule}</span>
              </div>
              <div className="flex items-center gap-3">
                <MonitorPlay className="h-4 w-4 text-primary" />
                <span>{program.mode}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-primary" />
                <span>{program.audience}</span>
              </div>
            </div>

            <Link
              href={buildWhatsAppUrl(`Hola, quiero informacion sobre ${program.title} y el proceso de matricula.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Solicitar informacion
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f2fcff_100%)] py-16 sm:py-20">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-950">
              Lo que incluye este ciclo
            </h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              {program.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#d8eef3] bg-[#f4fdff] p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-950">
              Cursos principales
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {program.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-slate-800"
                >
                  {subject}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
