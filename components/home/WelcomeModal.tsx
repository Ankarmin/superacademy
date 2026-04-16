"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const whatsappUrl = buildWhatsAppUrl(
  "Hola, quiero informacion sobre matricula, ciclos y horarios de SuperAcademy.",
);

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-title"
        className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/15 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.34)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar modal de bienvenida"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/18 text-2xl text-white backdrop-blur-md transition hover:bg-slate-950/30"
        >
          ×
        </button>

        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(145deg,#dffcff_0%,#8ff3fb_42%,#01b8db_100%)] px-6 py-8 text-slate-950 md:px-10 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_30%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-slate-950 backdrop-blur-sm">
                  Matriculas 2026 abiertas
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="SuperAcademy"
                    width={54}
                    height={54}
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
                      SuperAcademy
                    </p>
                    <p className="text-sm text-slate-700/85">
                      Acompanamiento real para tu ingreso
                    </p>
                  </div>
                </div>

                <h2
                  id="welcome-modal-title"
                  className="mt-8 max-w-md text-4xl font-black uppercase leading-[0.92] text-white md:text-6xl"
                >
                  <span className="text-slate-950">Matriculate</span>
                  <span className="mt-2 block text-[#ffffff] normal-case md:text-5xl">
                    hoy
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-slate-800 md:text-lg">
                  Te ayudamos a elegir el ciclo ideal, resolver horarios y empezar
                  tu preparacion con docentes especializados.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-slate-950 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/70 bg-white/45 px-4 py-3 backdrop-blur-sm">
                  Ciclos intensivos
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/45 px-4 py-3 backdrop-blur-sm">
                  Docentes expertos
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/45 px-4 py-3 backdrop-blur-sm">
                  Asesoria inmediata
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-slate-50">
            <div className="relative min-h-[320px] overflow-hidden border-b border-slate-200/80 bg-slate-950">
              <Image
                src="/images/hero-1.jpg"
                alt="Estudiantes preparandose en SuperAcademy"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,184,219,0.08),rgba(4,90,105,0.72))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#9efaf5]">
                  Bienvenido
                </p>
                <p className="mt-3 text-xl font-bold leading-tight">
                  Empieza tu camino de admision con una orientacion clara desde hoy.
                </p>
              </div>
            </div>

            <div className="space-y-5 px-6 py-6 md:px-8 md:py-7">
              <div>
                <p className="text-2xl font-black text-slate-950">
                  Necesitas mas informacion?
                </p>
                <p className="mt-2 max-w-lg text-base leading-7 text-slate-600">
                  Escríbenos y te ayudamos a elegir el mejor ciclo segun tu meta,
                  disponibilidad y nivel actual.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#01b8db_0%,#7ff6f1_100%)] px-6 py-4 text-base font-black text-slate-950 shadow-[0_16px_40px_rgba(1,184,219,0.22)] transition hover:-translate-y-0.5"
                >
                  Hablar con un asesor
                </a>

                <Link
                  href="/ciclos"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-950 transition hover:border-primary hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Ver ciclos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
