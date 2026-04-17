import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  description:
    "Consulta los terminos y condiciones base de uso del sitio web y servicios informativos de SuperAcademy.",
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Uso del sitio</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Este sitio presenta información general sobre programas,
                orientación académica y canales de contacto de SuperAcademy. El
                uso del contenido implica aceptación de estas condiciones.
              </p>
            </section>

            <section className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Información comercial</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Horarios, vacantes, precios, promociones y modalidad pueden variar
                según campaña o disponibilidad. La confirmación final se realiza a
                través del equipo de atención.
              </p>
            </section>

            <section className="rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Propiedad intelectual</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Textos, imágenes, recursos y materiales mostrados en este sitio no
                deben ser reproducidos ni distribuidos sin autorización expresa.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
