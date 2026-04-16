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
    label: "Ubica nuestras sedes",
    href: "/contacto",
  },
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
    <footer className="relative overflow-hidden border-t border-[#d8edf3] bg-white text-slate-700">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#78fff0_0%,#01b8db_45%,#7ceff7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(1,184,219,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(1,184,219,0.05),transparent_28%)]" />

      <div className="container relative z-10 mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 border-b border-slate-200/80 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div className="max-w-md space-y-5">
            <Link href="/" className="inline-flex items-center gap-4">
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
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500">
                  Academia preuniversitaria
                </p>
              </div>
            </Link>

            <p className="text-base leading-8 text-slate-600">
              Preparacion clara, exigente y bien guiada para estudiantes que
              buscan ingresar con mejor estrategia y mejores resultados.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "San Marcos",
                "UNI",
                "Villarreal",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[#d7eef4] bg-[#f3fbfe] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-950">Explorar</h3>
            <ul className="mt-5 space-y-3">
              {publicNavigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-600 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-950">Legales</h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-600 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-950">Contáctanos</h3>
            <ul className="mt-5 space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="text-base text-slate-600 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>Formacion enfocada en ingreso, disciplina y acompanamiento real.</p>
        </div>
      </div>
    </footer>
  );
}
