"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import usePrefersReducedMotion from "@/components/ui/usePrefersReducedMotion";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const prefersReducedMotion = usePrefersReducedMotion();
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
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2fcff_0%,#ffffff_100%)] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(46,244,237,0.18),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Nuestros resultados hablan por nosotros
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Miles de estudiantes lograron su ingreso gracias a nuestra
            metodología comprobada.
          </p>
        </div>

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
          className="testimonials-swiper px-1"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div
                  className="group relative flex h-full flex-col rounded-3xl bg-white/82 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition duration-500 group-hover:ring-primary/30" />

                  <div className="absolute -top-5 -left-4 select-none font-serif text-7xl text-primary/18">
                    “
                  </div>

                <span
                  className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold text-black bg-gradient-to-r ${t.accent} shadow`}
                >
                  {t.badge}
                </span>

                <p className="mb-6 flex-1 break-words text-gray-700 italic leading-relaxed line-clamp-4">
                  “{t.message}”
                </p>
                <div className="mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#7ff6f1] to-[#01b8db]" />
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-black bg-gradient-to-br ${t.accent} shadow`}
                  >
                    {t.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <div className="font-semibold">{t.name}</div>
                    <div className="break-words text-sm text-primary">{t.university}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .testimonials-swiper {
            padding-bottom: 0.25rem;
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
