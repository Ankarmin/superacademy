import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { publicNavigationLinks } from "./navigation";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300">
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2ef4ed]/30 to-yellow-400/30 opacity-40 blur-2xl group-hover:opacity-70 transition" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 flex items-center gap-2">
              ¿Listo para asegurar tu ingreso? 🚀
            </h3>
            <p className="text-gray-400 max-w-xl">
              Únete hoy a SuperAcademy y prepárate con docentes expertos,
              simulacros reales y acompañamiento continuo.
            </p>
          </div>

          <Link
            href="/ciclos"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black bg-yellow-400 shadow-[0_0_40px_rgba(255,200,0,.6)] hover:scale-105 transition-transform overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver ciclos <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-16 grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2ef4ed] to-[#01b8db] text-black font-extrabold flex items-center justify-center shadow-lg animate-bounce">
              SA
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              SuperAcademy
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Formación preuniversitaria de alto nivel enfocada en resultados
            reales, metodología moderna y acompañamiento constante.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-semibold animate-pulse">
              San Marcos
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-indigo-400/20 text-indigo-300 font-semibold animate-pulse delay-100">
              UNI
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-orange-400/20 text-orange-300 font-semibold animate-pulse delay-200">
              Villarreal
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Explorar</h4>
          <ul className="space-y-3">
            {publicNavigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Legales</h4>

          <ul className="space-y-3">
            {[
              {
                label: "Términos y Condiciones",
                href: "/terminos-y-condiciones",
              },
              {
                label: "Política de Privacidad",
                href: "/politica-de-privacidad",
              },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <span>
            © {new Date().getFullYear()} SuperAcademy. Todos los derechos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
