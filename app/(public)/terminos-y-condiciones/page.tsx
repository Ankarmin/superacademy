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
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-extrabold text-slate-950">
          Terminos y condiciones
        </h1>
        <div className="mt-10 space-y-8 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-950">Uso del sitio</h2>
            <p className="mt-3 leading-relaxed">
              Este sitio presenta informacion general sobre programas,
              orientacion academica y canales de contacto de SuperAcademy. El
              uso del contenido implica aceptacion de estas condiciones.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">
              Informacion comercial
            </h2>
            <p className="mt-3 leading-relaxed">
              Horarios, vacantes, precios, promociones y modalidad pueden variar
              segun campana o disponibilidad. La confirmacion final se realiza a
              traves del equipo de atencion.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Propiedad intelectual</h2>
            <p className="mt-3 leading-relaxed">
              Textos, imagenes, recursos y materiales mostrados en este sitio no
              deben ser reproducidos ni distribuidos sin autorizacion expresa.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
