"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Prepárate para ingresar a la universidad que sueñas",
    description:
      "Programas intensivos, docentes expertos y resultados comprobados.",
    image: "/images/hero-1.jpg",
    cta: "/ciclos",
  },
  {
    title: "Ciclos especiales San Marcos, UNI y Villarreal",
    description: "Entrena con simulacros reales y docentes especializados.",
    image: "/images/hero-2.jpg",
    cta: "/ciclos",
  },
  {
    title: "Clases grabadas, material gratuito y acompañamiento",
    description: "Accede a nuestra videoteca y recursos exclusivos.",
    image: "/images/hero-3.jpg",
    cta: "/videoteca",
  },
];

export default function Slider() {
  const handleSlideWhatsapp = () => {
    const mensaje =
      "Hola, estoy interesado/a en recibir mas informacion sobre sus ciclos.";
    window.open(
      buildWhatsAppUrl(mensaje),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={750}
        loop
        grabCursor
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        className="h-[520px] md:h-[680px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative h-full w-full overflow-hidden">
                {/* Imagen optimizada + zoom GPU-safe */}
                <div
                  className={`absolute inset-0 transition-transform duration-[6000ms] ease-out will-change-transform ${
                    isActive ? "scale-[1.06]" : "scale-100"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlays (sin blur costoso) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#01b8db]/85 via-[#01b8db]/70 to-black/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(1,184,219,0.35),transparent_60%)]" />

                <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                  <div className="max-w-xl space-y-6 bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 shadow-[0_0_35px_rgba(1,184,219,.25)] transition-all duration-700">
                    <span className="text-gray-900 font-bold inline-block px-4 py-1 rounded-full bg-white/50 text-xs tracking-wide uppercase">
                      Super Academy
                    </span>

                    <h2
                      className={`text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight transition-all duration-700 delay-200 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {isActive && (
                        <Typewriter
                          words={[slide.title]}
                          cursor
                          cursorStyle="|"
                          typeSpeed={38}
                          deleteSpeed={0}
                          delaySpeed={800}
                        />
                      )}
                    </h2>

                    <p
                      className={`text-lg md:text-xl text-white/90 transition-all duration-700 delay-500 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <Link
                        href={slide.cta}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-3 font-bold text-black transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#2ef4ed] to-[#01b8db] shadow-[0_0_24px_rgba(46,244,237,.55)]"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#01b8db] to-[#2ef4ed] origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                        <span className="absolute inset-0 rounded-xl blur-lg opacity-30 bg-[#2ef4ed] group-hover:opacity-50 transition-opacity duration-500" />
                        <span className="relative z-10">Ver ciclos</span>
                      </Link>

                      <button
                        type="button"
                        onClick={handleSlideWhatsapp}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-3 font-semibold text-white border border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <span className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                          Escríbenos
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
