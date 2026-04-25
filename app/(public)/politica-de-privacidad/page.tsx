import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description:
    "Revisa la politica de privacidad base de SuperAcademy para el tratamiento de datos enviados mediante formularios o WhatsApp.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white transition-colors dark:bg-[#04111d]">
      <section className="bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Politica de Privacidad
          </h1>

          <div className="space-y-6">
            <section className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">Datos recopilados</h2>
              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                Podemos recibir nombre, teléfono y mensajes enviados por canales de
                contacto para responder consultas académicas y comerciales.
              </p>
            </section>

            <section className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">Finalidad</h2>
              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                La información se utiliza para brindar atención, compartir detalle
                de ciclos y dar seguimiento a solicitudes relacionadas con
                matrícula o servicios informativos.
              </p>
            </section>

            <section className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">Conservación</h2>
              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                Los datos se conservan solo durante el tiempo necesario para la
                atención de la consulta o mientras exista una relación comercial o
                académica vigente.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
