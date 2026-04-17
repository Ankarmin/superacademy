"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import ModalShell from "@/components/ui/ModalShell";

const whatsappUrl = buildWhatsAppUrl(
  "Hola, quiero informacion sobre matricula, ciclos y horarios de SuperAcademy.",
);

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ModalShell
      open={open}
      onClose={() => setOpen(false)}
      titleId="welcome-modal-title"
      initialFocusRef={closeButtonRef}
      panelClassName="relative max-h-[calc(100dvh-2rem)] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-white/15 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.34)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[32px]"
    >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Cerrar ayuda de bienvenida"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/18 text-2xl text-white backdrop-blur-md transition hover:bg-slate-950/30"
        >
          ×
        </button>

        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(145deg,#dffcff_0%,#8ff3fb_42%,#01b8db_100%)] px-5 py-6 text-slate-950 sm:px-6 sm:py-8 md:px-10 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_30%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/85 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#045a69] shadow-[0_10px_24px_rgba(4,90,105,0.12)] backdrop-blur-sm">
                  Orientación de matrícula
                </div>

                <div className="mt-6 flex items-center gap-3 sm:gap-4">
                  <Image
                    src="/logo.png"
                    alt="SuperAcademy"
                    width={64}
                    height={64}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  />
                  <div>
                    <p className="text-xl font-black tracking-tight text-primary sm:text-2xl">
                      SuperAcademy
                    </p>
                    <p className="text-sm text-slate-800">
                      Acompañamiento claro para tu próximo ingreso
                    </p>
                  </div>
                </div>

                <h2
                  id="welcome-modal-title"
                  className="mt-8 max-w-md text-3xl font-black uppercase leading-[0.94] text-slate-950 sm:text-4xl md:text-6xl"
                >
                  <span className="text-slate-950">Elige tu ciclo</span>
                  <span className="mt-2 block text-[#045a69] normal-case sm:text-4xl md:text-5xl">
                    con ayuda real
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-6 text-slate-800 sm:text-base sm:leading-7 md:text-lg">
                  Si aún no sabes qué programa te conviene, te guiamos según tu meta,
                  disponibilidad y modalidad preferida.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-slate-900 sm:auto-rows-fr sm:grid-cols-3">
                <div className="flex min-h-[88px] items-center justify-center rounded-2xl border border-white/80 bg-white/68 px-5 py-4 text-center font-semibold leading-snug shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                  Te orientamos en menos de 5 minutos
                </div>
                <div className="flex min-h-[88px] items-center justify-center rounded-2xl border border-white/80 bg-white/68 px-5 py-4 text-center font-semibold leading-snug shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                  Revisamos horarios y modalidad contigo
                </div>
                <div className="flex min-h-[88px] items-center justify-center rounded-2xl border border-white/80 bg-white/68 px-5 py-4 text-center font-semibold leading-snug shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                  Resolvemos dudas antes de matricularte
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-slate-50">
            <div className="relative min-h-[260px] overflow-hidden border-b border-slate-200/80 bg-slate-950 sm:min-h-[320px]">
              <Image
                src="/images/hero-1.jpg"
                alt="Estudiantes preparándose en SuperAcademy"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,184,219,0.08),rgba(4,90,105,0.72))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">
                  Guía rápida
                </p>
                <p className="mt-3 text-lg font-bold leading-tight sm:text-xl">
                  Antes de escribirnos, puedes revisar ciclos, videoteca y recursos sin perder el contexto.
                </p>
              </div>
            </div>

            <div className="space-y-5 px-6 py-6 md:px-8 md:py-7">
              <div>
                <p className="text-2xl font-black text-slate-950">
                  ¿Prefieres hablar ahora o seguir revisando?
                </p>
                <p className="mt-2 max-w-lg text-base leading-7 text-slate-600">
                  Tú eliges el siguiente paso. No enviamos ningún dato hasta que abras WhatsApp o visites la sección que te interesa.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#01b8db_0%,#7ff6f1_100%)] px-6 py-4 text-center text-base font-black text-slate-950 shadow-[0_16px_40px_rgba(1,184,219,0.22)] transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Hablar con un asesor
                </a>

                <Link
                  href="/ciclos"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center text-base font-bold text-slate-950 transition hover:border-primary hover:text-primary sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  Ver ciclos primero
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-base font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 sm:w-auto"
                >
                  Seguir explorando
                </button>
              </div>
            </div>
          </div>
        </div>
    </ModalShell>
  );
}
