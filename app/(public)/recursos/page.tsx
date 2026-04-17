import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Download,
  PlayCircle,
  FileText,
  Sparkles,
  BookOpen,
  GraduationCap,
  Clock,
  AlertCircle,
} from "lucide-react";
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
  ayuda: string;
  cta: string;
  icon: ReactNode;
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
    ayuda: "Te lo compartimos por WhatsApp para enviarte la guía correcta según tu nivel.",
    cta: "Solicitar guía",
    icon: <FileText className="h-5 w-5" />,
    color: "from-[#7ff6f1] to-[#01b8db]",
    image: "/images/hero-1.jpg",
    whatsappMessage: "Hola, quiero solicitar las guias de Matematica de SuperAcademy.",
  },
  {
    id: 2,
    titulo: "Banco de ejercicios",
    descripcion: "Problemas resueltos y propuestos por nivel.",
    tipo: "Online",
    badge: "Uso frecuente",
    disponibilidad: "Disponible ahora",
    ayuda: "Te lo compartimos por WhatsApp para enviarte el banco de ejercicios que mejor encaje con tu nivel.",
    cta: "Solicitar banco",
    icon: <BookOpen className="h-5 w-5" />,
    color: "from-[#d7fbff] to-[#58ddea]",
    image: "/images/hero-1.jpg",
    whatsappMessage: "Hola, quiero solicitar el banco de ejercicios de SuperAcademy.",
  },
  {
    id: 3,
    titulo: "Simulacros de admisión",
    descripcion: "Exámenes por áreas de ciencias, matemáticas y letras.",
    tipo: "PDF",
    badge: "Preparación clave",
    disponibilidad: "Disponible con orientación",
    ayuda: "Te guiamos por WhatsApp para recomendarte el simulacro correcto y evitar enviarte uno que no te sirva.",
    cta: "Pedir simulacro",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-[#9ef4fb] to-[#0eaec8]",
    image: "/images/hero-1.jpg",
    whatsappMessage: "Hola, quiero solicitar los simulacros de admision de SuperAcademy.",
  },
  {
    id: 4,
    titulo: "Planificadores de estudio",
    descripcion: "Plantillas simples para organizar tu tiempo y metas académicas.",
    tipo: "PDF",
    badge: "Organiza tu avance",
    disponibilidad: "Disponible por solicitud",
    ayuda: "Puedes pedir uno base y luego adaptarlo con un asesor según tu horario disponible.",
    cta: "Solicitar planificador",
    icon: <Clock className="h-5 w-5" />,
    color: "from-[#e8fdff] to-[#7eeff4]",
    image: "/images/hero-1.jpg",
    whatsappMessage: "Hola, quiero solicitar un planificador de estudio de SuperAcademy.",
  },
  {
    id: 5,
    titulo: "Clases gratuitas",
    descripcion: "Videos introductorios por curso para avanzar a tu ritmo.",
    tipo: "Video",
    badge: "Listo para ver",
    disponibilidad: "Disponible ahora",
    ayuda: "Te enviamos por WhatsApp el acceso a las clases gratuitas para que empieces sin perder tiempo buscando el enlace correcto.",
    cta: "Solicitar clases",
    icon: <PlayCircle className="h-5 w-5" />,
    color: "from-[#d2fbff] to-[#3cd3e5]",
    image: "/images/hero-1.jpg",
    whatsappMessage: "Hola, quiero solicitar acceso a las clases gratuitas de SuperAcademy.",
  },
  {
    id: 6,
    titulo: "Consejos de estudio",
    descripcion: "Orientación breve para estudiar mejor sin sobrecargarte.",
    tipo: "Ayuda",
    badge: "Contexto útil",
    disponibilidad: "Disponible con acompañamiento",
    ayuda: "Si no sabes por dónde empezar, WhatsApp es el mejor punto de entrada para recibir una recomendación útil.",
    cta: "Pedir recomendación",
    icon: <Sparkles className="h-5 w-5" />,
    color: "from-[#cffff8] to-[#01b8db]",
    image: "/images/hero-1.jpg",
    whatsappMessage: "Hola, quiero recibir consejos y una recomendacion de estudio de SuperAcademy.",
  },
];

function ResourceAction({ recurso }: { recurso: ResourceItem }) {
  const className =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5";

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
  const resourceTypes = new Set(recursos.map((recurso) => recurso.tipo)).size;

  return (
    <main className="overflow-hidden bg-white">
      <section id="recursos" className="relative z-10 bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <SuperSectionHero
            badge="Recursos organizados por utilidad"
            titleStart="Nuestros"
            titleAccent="SuperRecursos"
            description="Explora nuestros recursos con una navegacion clara por tipo de material y acceso. Cada recurso aparece en tarjetas ordenadas para una lectura mas rapida y directa."
            stats={[
              `${recursos.length} recursos disponibles`,
              `${resourceTypes} formatos de apoyo`,
              "Guias, videos y material de refuerzo",
            ]}
          />

          <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10">
            {recursos.map((recurso) => (
              <article
                key={recurso.id}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#d8eef3] bg-white/85 shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={recurso.image}
                    alt={recurso.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${recurso.color} opacity-30`} />
                  <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {recurso.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col space-y-4 p-6 sm:p-7">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${recurso.color} text-black shadow`}>
                    {recurso.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold break-words text-slate-950">{recurso.titulo}</h3>
                    <p className="mt-1 break-words text-sm leading-6 text-gray-600">
                      {recurso.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-slate-900">
                      {recurso.tipo}
                    </span>
                    <span className="rounded-full bg-[#d9fbff] px-3 py-1 text-[#0e7f93]">
                      {recurso.disponibilidad}
                    </span>
                  </div>

                  <div className="rounded-2xl border border-[#d8eef3] bg-[#f8fcff] px-4 py-3 text-sm leading-6 text-slate-600">
                    <p className="font-semibold text-slate-950">Qué esperar</p>
                    <p>{recurso.ayuda}</p>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <ResourceAction recurso={recurso} />
                    <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
                      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      Elegimos una acción distinta según la disponibilidad real del recurso para evitar pasos fallidos.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
