import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  PlayCircle,
  FileText,
  Sparkles,
  BookOpen,
  GraduationCap,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recursos Gratuitos",
  description:
    "Accede a materiales gratuitos, guías de estudio, simulacros y recursos educativos para potenciar tu preparación universitaria.",
  alternates: {
    canonical: "/recursos",
  },
};

const recursos = [
  {
    id: 1,
    titulo: "Guías de Matemática",
    descripcion: "Material descargable de álgebra, geometría y aritmética.",
    tipo: "PDF",
    badge: "🔥 Más usado",
    cta: "Descargar",
    icon: <FileText className="w-5 h-5" />,
    color: "from-[#7ff6f1] to-[#01b8db]",
    image: "/images/hero-1.jpg",
    link: "#",
  },
  {
    id: 2,
    titulo: "Banco de ejercicios",
    descripcion: "Problemas resueltos y propuestos por nivel.",
    tipo: "Online",
    badge: "⭐ Recomendado",
    cta: "Resolver ahora",
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-[#d7fbff] to-[#58ddea]",
    image: "/images/hero-1.jpg",
    link: "#",
  },
  {
    id: 3,
    titulo: "Simulacros de admisión",
    descripcion: "Exámenes tipo San Marcos, UNI y Villarreal.",
    tipo: "PDF",
    badge: "🏆 Top",
    cta: "Empezar simulacro",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-[#9ef4fb] to-[#0eaec8]",
    image: "/images/hero-1.jpg",
    link: "#",
  },
  {
    id: 4,
    titulo: "Planificadores de estudio",
    descripcion: "Organiza tu tiempo y metas académicas.",
    tipo: "PDF",
    badge: "🗓️ Nuevo",
    cta: "Descargar",
    icon: <Clock className="w-5 h-5" />,
    color: "from-[#e8fdff] to-[#7eeff4]",
    image: "/images/hero-1.jpg",
    link: "#",
  },
  {
    id: 5,
    titulo: "Clases gratuitas",
    descripcion: "Videos introductorios por curso.",
    tipo: "Video",
    badge: "🎥 Popular",
    cta: "Ver ahora",
    icon: <PlayCircle className="w-5 h-5" />,
    color: "from-[#d2fbff] to-[#3cd3e5]",
    image: "/images/hero-1.jpg",
    link: "#",
  },
  {
    id: 6,
    titulo: "Consejos de estudio",
    descripcion: "Técnicas para mejorar tu rendimiento académico.",
    tipo: "Artículo",
    badge: "🧠 Pro tips",
    cta: "Leer",
    icon: <Sparkles className="w-5 h-5" />,
    color: "from-[#cffff8] to-[#01b8db]",
    image: "/images/hero-1.jpg",
    link: "#",
  },
];

export default function RecursosPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e9fcff_0%,#9ef4fb_100%)] py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,.35),transparent_60%)]" />

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center text-slate-950">
          <h1 className="mb-6 text-5xl font-extrabold text-slate-950 md:text-6xl">
            Recursos académicos 📚
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-slate-700 md:text-xl">
            Guías, simulacros, clases gratuitas y herramientas para potenciar tu
            ingreso universitario.
          </p>

          <a
            href="#recursos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-10 py-4 font-bold text-primary shadow-[0_0_32px_rgba(1,184,219,.2)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar recursos <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#ccfbff] to-[#7ff6f1] transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </div>
      </section>

      <section id="recursos" className="relative z-10 bg-white py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gray-900 text-4xl font-extrabold mb-4">
              Material disponible ✨
            </h2>
            <p className="text-gray-600 text-lg">
              Todo lo que necesitas para estudiar mejor, más rápido y con
              resultados reales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recursos.map((recurso) => (
              <a
                key={recurso.id}
                href={recurso.link}
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-[#d8eef3] bg-white/85 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl will-change-transform"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={recurso.image}
                    alt={recurso.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${recurso.color} opacity-0 group-hover:opacity-30 transition`}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-white backdrop-blur">
                    {recurso.badge}
                  </span>
                </div>

                <div className="p-7 space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${recurso.color} text-black shadow group-hover:scale-110 transition`}
                  >
                    {recurso.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{recurso.titulo}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {recurso.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-gray-900 font-semibold">
                      {recurso.tipo}
                    </span>
                      <span className="rounded-full bg-[#d9fbff] px-3 py-1 text-xs font-semibold text-[#0e7f93]">
                        Gratis
                      </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 font-semibold">
                      Actualizado
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 font-semibold text-primary relative overflow-hidden">
                    <span className="relative z-10 text-gray-900">
                      {recurso.cta}
                    </span>
                    <Download className="w-4 h-4 text-gray-900" />
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                </div>

                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${recurso.color} opacity-0 blur-lg transition group-hover:opacity-20`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2fcff_0%,#ffffff_100%)] py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center relative z-10">
          {[
            {
              title: "100% gratuito",
              desc: "Accede sin costo a recursos seleccionados.",
              icon: "🎁",
            },
            {
              title: "Siempre actualizado",
              desc: "Material alineado a los últimos exámenes.",
              icon: "⚡",
            },
            {
              title: "Enfocado en resultados",
              desc: "Diseñado para maximizar tu rendimiento.",
              icon: "🏆",
            },
          ].map((b, i) => (
            <div
              key={i}
                className="relative group rounded-3xl border border-[#d8eef3] bg-white/85 p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl will-change-transform"
              >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h4 className="font-bold text-lg mb-2">{b.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
               <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/40 to-[#7ff6f1]/40 opacity-0 blur-lg transition group-hover:opacity-20" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#e9fcff_100%)] py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,184,219,.12),transparent_60%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center text-slate-950">
          <h2 className="mb-6 text-4xl font-extrabold text-slate-950">
            ¿Quieres una preparación completa? 🚀
          </h2>
          <p className="mb-10 text-lg text-slate-700">
            Inscríbete en nuestros ciclos y maximiza tus oportunidades de
            ingreso.
          </p>

          <Link
            href="/ciclos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-10 py-4 font-bold text-slate-950 shadow-[0_0_32px_rgba(1,184,219,.22)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver ciclos disponibles <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#7ff6f1] to-[#ccfbff] transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
