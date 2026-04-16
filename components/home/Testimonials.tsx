"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2fcff_0%,#ffffff_100%)] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(46,244,237,0.18),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Nuestros resultados hablan por nosotros
          </h2>
          <p className="text-gray-600 text-lg">
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
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div
                  className="group relative h-full rounded-3xl bg-white/82 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
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

                <p className="text-gray-700 leading-relaxed mb-6 italic line-clamp-4">
                  “{t.message}”
                </p>
                <div className="mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#7ff6f1] to-[#01b8db]" />
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-black bg-gradient-to-br ${t.accent} shadow`}
                  >
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-primary">{t.university}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
