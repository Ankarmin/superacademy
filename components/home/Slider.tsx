"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import usePrefersReducedMotion from "@/components/ui/usePrefersReducedMotion";
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
    ctaLabel: "Ver ciclos",
  },
  {
    title: "Ciclos de Ciencias, Matematicas y Letras",
    description: "Entrena por areas con simulacros reales y docentes especializados.",
    image: "/images/hero-2.jpg",
    cta: "/ciclos",
    ctaLabel: "Comparar ciclos",
  },
  {
    title: "Clases grabadas, material gratuito y acompañamiento",
    description: "Accede a nuestra videoteca y recursos exclusivos.",
    image: "/images/hero-3.jpg",
    cta: "/videoteca",
    ctaLabel: "Entrar a videoteca",
  },
];

export default function Slider() {
  const prefersReducedMotion = usePrefersReducedMotion();

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
        autoplay={
          prefersReducedMotion
            ? false
            : {
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        pagination={{ clickable: true }}
        className="h-[560px] sm:h-[620px] md:h-[680px]"
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

                <div className="absolute inset-0 bg-gradient-to-br from-[#effdff]/90 via-[#bff7ff]/72 to-[#01b8db]/78" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.26),transparent_60%)]" />

                <div className="relative z-10 container mx-auto flex h-full items-center px-4 sm:px-6">
                  <div className="w-full max-w-xl space-y-5 rounded-[28px] border border-white/60 bg-white/72 p-5 shadow-[0_0_35px_rgba(1,184,219,.18)] backdrop-blur-md transition-all duration-700 sm:p-7 md:p-10">
                    <span className="inline-block rounded-full bg-primary/14 px-4 py-1 text-xs font-bold tracking-wide text-slate-950 uppercase">
                      Inicio y matrícula
                    </span>

                    <p className="text-sm font-medium text-slate-600">
                      {`Slide ${index + 1} de ${slides.length}. ${prefersReducedMotion ? "Autoplay desactivado por tu preferencia de movimiento reducido." : "Puedes deslizar o usar la paginación para avanzar."}`}
                    </p>

                    <h2
                        className={`text-[2rem] font-extrabold leading-[1.05] text-slate-950 transition-all duration-700 delay-200 sm:text-5xl md:text-6xl ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                      }`}
                    >
                      {isActive && !prefersReducedMotion ? (
                        <Typewriter
                          words={[slide.title]}
                          cursor
                          cursorStyle="|"
                          typeSpeed={38}
                          deleteSpeed={0}
                          delaySpeed={800}
                        />
                      ) : slide.title}
                    </h2>

                    <p
                        className={`text-base text-slate-700 transition-all duration-700 delay-500 sm:text-lg md:text-xl ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.description}
                    </p>

                    <div
                      className={`flex flex-col gap-3 transition-all duration-700 delay-700 sm:flex-row sm:flex-wrap sm:gap-4 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <Link
                        href={slide.cta}
                          className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#7ff6f1] to-[#01b8db] px-6 py-3 font-bold text-slate-950 shadow-[0_0_24px_rgba(46,244,237,.32)] transition-transform duration-300 hover:scale-105 sm:w-auto sm:px-8"
                        >
                          <span className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-[#01b8db] to-[#7ff6f1] transition-transform duration-500 ease-out group-hover:scale-y-100" />
                          <span className="absolute inset-0 rounded-xl bg-[#7ff6f1] opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-35" />
                          <span className="relative z-10">{slide.ctaLabel}</span>
                        </Link>

                      <button
                        type="button"
                        onClick={handleSlideWhatsapp}
                          className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-white/58 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 sm:w-auto sm:px-8"
                        >
                          <span className="absolute inset-0 origin-bottom scale-y-0 bg-primary/14 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                          <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                            Resolver dudas por WhatsApp
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
