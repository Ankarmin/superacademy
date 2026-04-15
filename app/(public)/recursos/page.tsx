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
    color: "from-cyan-400 to-emerald-400",
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
    color: "from-violet-400 to-fuchsia-400",
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
    color: "from-orange-400 to-yellow-400",
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
    color: "from-indigo-400 to-sky-400",
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
    color: "from-pink-400 to-rose-400",
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
    color: "from-green-400 to-lime-400",
    image: "/images/hero-1.jpg",
    link: "#",
  },
];

export default function RecursosPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* HERO */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,.25),transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl text-white">
          <h1 className="text-gray-900 text-5xl md:text-6xl font-extrabold mb-6">
            Recursos académicos 📚
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10">
            Guías, simulacros, clases gratuitas y herramientas para potenciar tu
            ingreso universitario.
          </p>

          <a
            href="#recursos"
            className="relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-black bg-yellow-400 shadow-[0_0_40px_rgba(255,200,0,.6)] transition-transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar recursos <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>
      </section>

      {/* GRID */}
      <section id="recursos" className="py-28 relative z-10">
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
                className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm hover:backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 will-change-transform"
              >
                {/* IMAGE */}
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

                {/* CONTENT */}
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
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-semibold">
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

                {/* GLOW */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${recurso.color} opacity-0 group-hover:opacity-20 blur-lg transition`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
              className="relative group rounded-3xl bg-white/80 backdrop-blur-sm hover:backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-10 will-change-transform"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h4 className="font-bold text-lg mb-2">{b.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/40 to-yellow-400/40 opacity-0 group-hover:opacity-20 blur-lg transition" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,.2),transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl text-white">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            ¿Quieres una preparación completa? 🚀
          </h2>
          <p className="opacity-90 mb-10 text-lg text-gray-900">
            Inscríbete en nuestros ciclos y maximiza tus oportunidades de
            ingreso.
          </p>

          <Link
            href="/ciclos"
            className="relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-black bg-yellow-400 shadow-[0_0_40px_rgba(255,200,0,.6)] transition-transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver ciclos disponibles <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </div>
  );
}
