"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import usePrefersReducedMotion from "@/components/ui/usePrefersReducedMotion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "María G.",
    university: "Ingresó a San Marcos",
    message:
      "Gracias a la academia logré mi ingreso. Los profesores explican claro, los simulacros son reales y el acompañamiento fue constante.",
    badge: "San Marcos",
    accent: "from-[#7ff6f1] to-[#01b8db]",
  },
  {
    name: "Carlos R.",
    university: "Ingresó a UNI",
    message:
      "La plataforma y los materiales fueron clave para mi preparación. Los docentes son top y el sistema es muy práctico.",
    badge: "UNI",
    accent: "from-[#d9fbff] to-[#48d8ea]",
  },
  {
    name: "Lucía P.",
    university: "Ingresó a Villarreal",
    message:
      "Me encantó el acompañamiento y los simulacros. Realmente te preparan para el examen real.",
    badge: "Villarreal",
    accent: "from-[#8ef8f2] to-[#0eb5cf]",
  },
  {
    name: "Jorge M.",
    university: "Ingresó a San Marcos",
    message:
      "La metodología es clara, ordenada y efectiva. Subí muchísimo mi nivel en pocas semanas.",
    badge: "Top ingreso",
    accent: "from-[#7ff6f1] to-[#01b8db]",
  },
  {
    name: "Andrea T.",
    university: "Ingresó a Católica",
    message:
      "Lo que más me ayudó fue el orden del plan de estudio. Cada semana sabía qué reforzar y llegué al examen con mucha más seguridad.",
    badge: "Católica",
    accent: "from-[#d9fbff] to-[#48d8ea]",
  },
  {
    name: "Luis F.",
    university: "Ingresó a UNI",
    message:
      "Los repasos finales y las clases grabadas me ayudaron a corregir errores rápido. Sentí un avance real en matemática y razonamiento.",
    badge: "Alto puntaje",
    accent: "from-[#8ef8f2] to-[#0eb5cf]",
  },
  {
    name: "Camila S.",
    university: "Ingresó a San Marcos",
    message:
      "La atención y el seguimiento marcaron la diferencia. No solo estudias, también sientes que hay un equipo pendiente de tu progreso.",
    badge: "San Marcos",
    accent: "from-[#7ff6f1] to-[#01b8db]",
  },
  {
    name: "Diego A.",
    university: "Ingresó a Villarreal",
    message:
      "Entré mejor preparado gracias a la constancia que te exige la academia. Los simulacros y las correcciones fueron clave para mi ingreso.",
    badge: "Villarreal",
    accent: "from-[#d9fbff] to-[#48d8ea]",
  },
] as const;

export default function Testimonials() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[linear-gradient(180deg,#f2fcff_0%,#ffffff_100%)] py-20 transition-colors dark:bg-[linear-gradient(180deg,#071b2b_0%,#04111d_100%)] sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(46,244,237,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_25%_30%,rgba(1,184,219,0.16),transparent_56%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-950 dark:text-white md:text-4xl">
            Nuestros resultados hablan por nosotros
          </h2>
          <p className="text-base text-gray-600 dark:text-slate-300 sm:text-lg">
            Miles de estudiantes lograron su ingreso gracias a nuestra
            metodología comprobada.
          </p>
        </div>

        <div className="px-2 sm:px-3 lg:px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            grabCursor
            autoplay={
              prefersReducedMotion
                ? false
                : {
                    delay: 5500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.05 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={`${t.name}-${t.badge}`} className="h-auto">
                <div className="group relative flex h-full flex-col rounded-3xl bg-white/82 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:bg-[#081624]/86 dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)] sm:p-7">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition duration-500 group-hover:ring-primary/30" />

                  <span
                    className={`mb-4 inline-block rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-black shadow ${t.accent}`}
                  >
                    {t.badge}
                  </span>

                  <p className="mb-6 line-clamp-4 flex-1 break-words italic leading-relaxed text-gray-700 dark:text-slate-300">
                    {t.message}
                  </p>
                  <div className="mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#7ff6f1] to-[#01b8db]" />
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br font-bold text-black shadow ${t.accent}`}
                    >
                      {t.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <div className="font-semibold text-slate-950 dark:text-white">{t.name}</div>
                      <div className="break-words text-sm text-primary">{t.university}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .testimonials-swiper {
            overflow: hidden;
            padding-top: 0.75rem;
            padding-left: 0.125rem;
            padding-right: 0.125rem;
            padding-bottom: 0.25rem;
          }

          .testimonials-swiper .swiper-slide {
            height: auto;
          }

          .testimonials-swiper .swiper-wrapper {
            align-items: stretch;
          }

          .testimonials-swiper .swiper-pagination {
            position: static;
            margin-top: 1.75rem;
          }

          .testimonials-swiper .swiper-pagination-bullet {
            width: 0.65rem;
            height: 0.65rem;
            background: rgba(1, 184, 219, 0.25);
            opacity: 1;
          }

          .testimonials-swiper .swiper-pagination-bullet-active {
            width: 2.25rem;
            border-radius: 9999px;
            background: #01b8db;
          }
        `}</style>
      </div>
    </section>
  );
}
