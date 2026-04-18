"use client";

import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import ModalShell from "@/components/ui/ModalShell";

const whatsappUrl = buildWhatsAppUrl(
  "Hola, quiero informacion sobre el ciclo de Matematicas y su proceso de matricula.",
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
      panelClassName="relative w-full max-w-[680px] overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.28)] transition-colors dark:border-cyan-300/12 dark:bg-[#071523] dark:shadow-[0_30px_120px_rgba(1,8,18,0.68)] sm:rounded-[32px]"
    >
      <h2 id="welcome-modal-title" className="sr-only">
        Modal de bienvenida del ciclo de Matematicas
      </h2>

      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Cerrar ayuda de bienvenida"
        onClick={() => setOpen(false)}
        className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/18 text-white backdrop-blur-md transition hover:bg-slate-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:bg-slate-950/48 dark:hover:bg-slate-950/68 sm:right-4 sm:top-4"
      >
        <FiX className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="relative bg-[linear-gradient(180deg,#eefbff_0%,#d9f8ff_100%)] dark:bg-[linear-gradient(180deg,#082137_0%,#0a2b40_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,246,241,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(1,184,219,0.2),transparent_28%)]" />

        <div className="relative p-4 sm:p-5">
          <div className="overflow-hidden rounded-[24px] border border-white/80 bg-white/60 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-cyan-300/10 dark:bg-white/5 dark:shadow-none">
            <Image
              src="/images/ciclo-mates.jpg"
              alt="Afiche del ciclo de Matematicas"
              width={1600}
              height={1600}
              priority
              className="h-auto max-h-[58dvh] w-full rounded-[18px] object-contain sm:max-h-[64dvh]"
            />
          </div>
        </div>

        <div className="relative border-t border-slate-200/80 bg-white/96 px-5 py-4 transition-colors dark:border-white/10 dark:bg-[#071523]/96 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-black text-slate-950 dark:text-white">
                ¿Necesitas más información?
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Escríbenos y te ayudamos a matricularte rápido.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f38da_0%,#01b8db_55%,#7ff6f1_100%)] px-5 py-3 text-center text-sm font-black text-white shadow-[0_18px_36px_rgba(1,184,219,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(1,184,219,0.3)]"
              >
                Hablar con un asesor
              </a>

              <Link
                href="/ciclos/matematicas"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:border-primary hover:text-primary dark:border-white/12 dark:bg-white/5 dark:text-slate-100 dark:hover:border-cyan-300/28 dark:hover:text-cyan-200"
                onClick={() => setOpen(false)}
              >
                Ver ciclo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ModalShell>
  );
}
