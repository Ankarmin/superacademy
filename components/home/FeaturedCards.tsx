"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Video, GraduationCap, ArrowRight } from "lucide-react";

export default function FeaturedCards() {
  const items = [
    {
      badge: "Más popular",
      title: "Nuestros Ciclos",
      description:
        "Programas intensivos para San Marcos, UNI y Villarreal con docentes expertos, simulacros reales y acompañamiento constante.",
      image: "/images/hero-1.jpg",
      icon: <GraduationCap className="w-5 h-5" />,
      href: "/ciclos",
      accent: "from-[#2ef4ed] to-[#01b8db]",
    },
    {
      badge: "Clases grabadas",
      title: "Videoteca",
      description:
        "Accede a cientos de clases grabadas, repasos estratégicos y seminarios gratuitos disponibles 24/7.",
      image: "/images/hero-1.jpg",
      icon: <Video className="w-5 h-5" />,
      href: "/videoteca",
      accent: "from-purple-400 to-indigo-500",
    },
    {
      badge: "Material exclusivo",
      title: "Recursos",
      description:
        "Material académico descargable, guías premium, exámenes resueltos y bancos de preguntas.",
      image: "/images/hero-1.jpg",
      icon: <BookOpen className="w-5 h-5" />,
      href: "/recursos",
      accent: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(46,244,237,0.18),transparent_60%)] pointer-events-none" />

      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-cyan-400/50 blur-sm animate-floatSlow" />
      <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-indigo-400/40 blur-sm animate-floatMedium" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-amber-400/40 blur-sm animate-floatFast" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/50 text-gray-900 text-sm font-semibold">
            🚀 Aprende más rápido
          </span>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold mb-4">
            Todo lo que necesitas para ingresar
          </h2>
          <p className="text-gray-600 text-lg">
            Programas diseñados para maximizar tu rendimiento académico con
            tecnología, estrategia y acompañamiento real.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 perspective-[1200px]">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block"
            >
              <div className="relative h-full rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 will-change-transform transform-gpu group-hover:-translate-y-4 group-hover:rotateX-[4deg] group-hover:rotateY-[-3deg] hover:shadow-[0_35px_90px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <span
                    className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold text-black bg-gradient-to-r ${item.accent} shadow-lg animate-floatBadge`}
                  >
                    {item.badge}
                  </span>

                  <div
                    className={`absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.accent} text-black shadow-[0_0_30px_rgba(0,0,0,.35)] group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="relative p-8 space-y-4">
                  <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="relative h-[3px] w-20 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`absolute inset-y-0 left-0 w-full bg-gradient-to-r ${item.accent} -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                    />
                  </div>

                  <div className="flex items-center gap-2 text-primary font-bold mt-3 group-hover:gap-3 transition-all">
                    Explorar
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[28px] ring-1 ring-transparent group-hover:ring-cyan-400/40 transition pointer-events-none" />

                <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-floatSlow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        .animate-floatMedium {
          animation: floatSlow 5s ease-in-out infinite;
        }
        .animate-floatFast {
          animation: floatSlow 3.5s ease-in-out infinite;
        }
        .animate-floatBadge {
          animation: floatBadge 4s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes floatBadge {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
