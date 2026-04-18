import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { publicNavigationLinks } from "./navigation";

const legalLinks = [
  {
    label: "Términos y Condiciones",
    href: "/terminos-y-condiciones",
  },
  {
    label: "Política de Privacidad",
    href: "/politica-de-privacidad",
  },
];

const contactLinks = [
  {
    label: "Escríbenos por WhatsApp",
    href: buildWhatsAppUrl(
      "Hola, quiero informacion sobre ciclos, horarios y proceso de matricula.",
    ),
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d8edf3] bg-white text-slate-700 transition-colors dark:border-white/10 dark:bg-[#071523] dark:text-slate-300">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#78fff0_0%,#01b8db_45%,#7ceff7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(1,184,219,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(1,184,219,0.05),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(1,184,219,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(127,246,241,0.08),transparent_26%)]" />

      <div className="container relative z-10 mx-auto px-6 pt-12 pb-8 sm:pt-14 sm:pb-9 lg:pt-16 lg:pb-10">
        <div className="grid gap-8 border-b border-slate-200/80 pb-8 dark:border-white/10 sm:gap-10 sm:pb-10 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.72fr))] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,1.28fr)_repeat(3,minmax(0,0.78fr))] xl:gap-16">
          <div className="max-w-md space-y-5 lg:max-w-lg lg:pr-6">
            <Link href="/" className="inline-flex max-w-full items-center gap-4">
              <Image
                src="/logo.png"
                alt="SuperAcademy"
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="text-2xl font-black tracking-tight text-primary">
                  {siteConfig.name}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  Academia preuniversitaria
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              Preparacion clara, exigente y bien guiada para estudiantes que
              buscan ingresar con mejor estrategia y mejores resultados.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Ciencias", "Matematicas", "Letras"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[#d7eef4] bg-[#f3fbfe] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-100"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 md:grid-cols-3 lg:contents">
            <div className="min-w-0">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Explorar</h3>
              <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {publicNavigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="break-words text-sm text-slate-600 transition hover:text-primary dark:text-slate-300 dark:hover:text-cyan-200 sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 space-y-8 md:contents">
              <div className="min-w-0">
                <h3 className="text-lg font-black text-slate-950 dark:text-white">Legales</h3>
                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="break-words text-sm text-slate-600 transition hover:text-primary dark:text-slate-300 dark:hover:text-cyan-200 sm:text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-black text-slate-950 dark:text-white">Contáctanos</h3>
                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="break-words text-sm text-slate-600 transition hover:text-primary dark:text-slate-300 dark:hover:text-cyan-200 sm:text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-center text-xs leading-6 text-slate-500 dark:text-slate-400 sm:pt-6 sm:text-sm md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
          <p className="break-words md:max-w-[48%]">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p className="break-words md:max-w-[48%] md:text-right">
            Formacion enfocada en ingreso, disciplina y acompanamiento real.
          </p>
        </div>
      </div>
    </footer>
  );
}
