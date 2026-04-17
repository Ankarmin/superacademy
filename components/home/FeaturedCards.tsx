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
        "Programas por areas en ciencias, matematicas y letras con docentes expertos, simulacros reales y acompanamiento constante.",
      image: "/images/hero-1.jpg",
      icon: <GraduationCap className="w-5 h-5" />,
      href: "/ciclos",
      accent: "from-[#7ff6f1] to-[#01b8db]",
    },
    {
      badge: "Clases grabadas",
      title: "Videoteca",
      description:
        "Accede a cientos de clases grabadas, repasos estratégicos y seminarios gratuitos disponibles 24/7.",
      image: "/images/hero-1.jpg",
      icon: <Video className="w-5 h-5" />,
      href: "/videoteca",
      accent: "from-[#d9fbff] to-[#48d8ea]",
    },
    {
      badge: "Material exclusivo",
      title: "Recursos",
      description:
        "Material académico descargable, guías premium, exámenes resueltos y bancos de preguntas.",
      image: "/images/hero-1.jpg",
      icon: <BookOpen className="w-5 h-5" />,
      href: "/recursos",
      accent: "from-[#8ef8f2] to-[#0eb5cf]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f2fcff_100%)] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(46,244,237,0.18),transparent_60%)] pointer-events-none" />

      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-cyan-400/50 blur-sm animate-floatSlow" />
      <div className="absolute bottom-20 right-16 h-3 w-3 rounded-full bg-[#7ff6f1]/40 blur-sm animate-floatMedium" />
      <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-primary/35 blur-sm animate-floatFast" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="mb-4 inline-block rounded-full bg-primary/14 px-4 py-1 text-sm font-semibold text-slate-950">
              Accesos rápidos
            </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Todo lo que necesitas para ingresar
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Programas diseñados para maximizar tu rendimiento académico con
            tecnología, estrategia y acompañamiento real. Empieza por la sección
            que resuelve tu duda de hoy.
          </p>
        </div>

        <div className="grid gap-6 perspective-[1200px] sm:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block h-full"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 will-change-transform transform-gpu group-hover:-translate-y-4 group-hover:rotateX-[4deg] group-hover:rotateY-[-3deg] hover:shadow-[0_35px_90px_rgba(0,0,0,0.15)]">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                <div className="relative h-52 overflow-hidden sm:h-56">
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

                <div className="relative flex flex-1 flex-col space-y-4 p-6 sm:p-8">
                  <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="line-clamp-4 break-words text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="relative h-[3px] w-20 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`absolute inset-y-0 left-0 w-full bg-gradient-to-r ${item.accent} -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                    />
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-2 font-bold text-primary transition-all group-hover:gap-3">
                    Abrir sección
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-transparent transition group-hover:ring-primary/30" />

                <div className="absolute -top-24 -right-24 h-60 w-60 bg-primary/16 blur-3xl opacity-0 transition group-hover:opacity-100" />
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
