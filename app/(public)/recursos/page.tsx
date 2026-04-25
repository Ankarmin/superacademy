import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import SuperSectionHero from "@/components/ui/SuperSectionHero";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Recursos Gratuitos",
  description:
    "Accede a materiales gratuitos, guías de estudio, simulacros y recursos educativos para potenciar tu preparación universitaria.",
  alternates: {
    canonical: "/recursos",
  },
};

type ResourceItem = {
  id: number;
  titulo: string;
  descripcion: string;
  tipo: string;
  badge: string;
  disponibilidad: string;
  cta: string;
  color: string;
  image: string;
  whatsappMessage: string;
};

const recursos: ResourceItem[] = [
  {
    id: 1,
    titulo: "Guías de Matemática",
    descripcion: "Material descargable de álgebra, geometría y aritmética.",
    tipo: "PDF",
    badge: "Más solicitado",
    disponibilidad: "Disponible por solicitud",
    cta: "Solicitar guía",
    color: "from-[#7ff6f1] to-[#01b8db]",
    image: "/images/ciclo-mates.webp",
    whatsappMessage: "Hola, quiero solicitar las guias de Matematica de SuperAcademy.",
  },
  {
    id: 2,
    titulo: "Banco de ejercicios",
    descripcion: "Problemas resueltos y propuestos por nivel.",
    tipo: "Online",
    badge: "Uso frecuente",
    disponibilidad: "Disponible ahora",
    cta: "Solicitar banco",
    color: "from-[#d7fbff] to-[#58ddea]",
    image: "/images/ciclo-mates.webp",
    whatsappMessage: "Hola, quiero solicitar el banco de ejercicios de SuperAcademy.",
  },
  {
    id: 3,
    titulo: "Simulacros de admisión",
    descripcion: "Exámenes por áreas de ciencias, matemáticas y letras.",
    tipo: "PDF",
    badge: "Preparación clave",
    disponibilidad: "Disponible con orientación",
    cta: "Pedir simulacro",
    color: "from-[#9ef4fb] to-[#0eaec8]",
    image: "/images/ciclo-mates.webp",
    whatsappMessage: "Hola, quiero solicitar los simulacros de admision de SuperAcademy.",
  },
  {
    id: 4,
    titulo: "Planificadores de estudio",
    descripcion: "Plantillas simples para organizar tu tiempo y metas académicas.",
    tipo: "PDF",
    badge: "Organiza tu avance",
    disponibilidad: "Disponible por solicitud",
    cta: "Solicitar planificador",
    color: "from-[#e8fdff] to-[#7eeff4]",
    image: "/images/ciclo-mates.webp",
    whatsappMessage: "Hola, quiero solicitar un planificador de estudio de SuperAcademy.",
  },
  {
    id: 5,
    titulo: "Clases gratuitas",
    descripcion: "Videos introductorios por curso para avanzar a tu ritmo.",
    tipo: "Video",
    badge: "Listo para ver",
    disponibilidad: "Disponible ahora",
    cta: "Solicitar clases",
    color: "from-[#d2fbff] to-[#3cd3e5]",
    image: "/images/ciclo-mates.webp",
    whatsappMessage: "Hola, quiero solicitar acceso a las clases gratuitas de SuperAcademy.",
  },
  {
    id: 6,
    titulo: "Consejos de estudio",
    descripcion: "Orientación breve para estudiar mejor sin sobrecargarte.",
    tipo: "Ayuda",
    badge: "Contexto útil",
    disponibilidad: "Disponible con acompañamiento",
    cta: "Pedir recomendación",
    color: "from-[#cffff8] to-[#01b8db]",
    image: "/images/ciclo-mates.webp",
    whatsappMessage: "Hola, quiero recibir consejos y una recomendacion de estudio de SuperAcademy.",
  },
];

function ResourceAction({ recurso }: { recurso: ResourceItem }) {
  const className = "btn-primary px-5 py-3 text-center font-semibold";

  return (
    <a
      href={buildWhatsAppUrl(recurso.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {recurso.cta}
      <Download className="h-4 w-4" />
    </a>
  );
}

export default function RecursosPage() {
  return (
    <div className="overflow-hidden bg-white transition-colors dark:bg-[#04111d]">
      <section id="recursos" className="relative z-10 bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20">
        <div className="container mx-auto px-6">
          <SuperSectionHero
            titleStart="Nuestros"
            titleAccent="SuperRecursos"
            description="Explora nuestros recursos con una navegacion clara por tipo de material y acceso. Cada recurso aparece en tarjetas ordenadas para una lectura mas rapida y directa."
            stats={[]}
          />

          <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10">
            {recursos.map((recurso, index) => (
              <article
                key={recurso.id}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#d8eef3] bg-white/85 shadow-xl dark:border-white/10 dark:bg-[#081624]/86 dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={recurso.image}
                    alt={recurso.titulo}
                    fill
                    priority={index === 0}
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${recurso.color} opacity-30`} />
                  <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {recurso.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col space-y-4 p-6 sm:p-7">
                  <div>
                    <h3 className="break-words text-xl font-bold text-slate-950 dark:text-white">{recurso.titulo}</h3>
                    <p className="mt-1 break-words text-sm leading-6 text-gray-600 dark:text-slate-300">
                      {recurso.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-slate-900 dark:text-slate-100">
                      {recurso.tipo}
                    </span>
                    <span className="rounded-full bg-[#d9fbff] px-3 py-1 text-[#0e7f93] dark:bg-cyan-400/10 dark:text-cyan-100">
                      {recurso.disponibilidad}
                    </span>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <ResourceAction recurso={recurso} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
