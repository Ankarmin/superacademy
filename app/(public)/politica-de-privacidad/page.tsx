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
    <main className="bg-white">
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-extrabold text-slate-950">
          Politica de privacidad
        </h1>
        <div className="mt-10 space-y-8 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-950">Datos recopilados</h2>
            <p className="mt-3 leading-relaxed">
              Podemos recibir nombre, telefono y mensajes enviados por canales de
              contacto para responder consultas academicas y comerciales.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Finalidad</h2>
            <p className="mt-3 leading-relaxed">
              La informacion se utiliza para brindar atencion, compartir detalle
              de ciclos y dar seguimiento a solicitudes relacionadas con
              matricula o servicios informativos.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Conservacion</h2>
            <p className="mt-3 leading-relaxed">
              Los datos se conservan solo durante el tiempo necesario para la
              atencion de la consulta o mientras exista una relacion comercial o
              academica vigente.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
