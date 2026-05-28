export type CycleProgram = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  audience: string;
  duration: string;
  mode: string;
  image: string;
  startDate: string;
  monthlyPrice: string;
  contactPhone: string;
  highlights: readonly string[];
  subjects: readonly string[];
};

export const cyclePrograms: readonly CycleProgram[] = [
  {
    slug: "matematicas",
    title: "Ciclo Matematicas",
    badge: "Matricula abierta",
    description:
      "Programa orientado a reforzar el area matematica con una ruta clara por cursos, horario nocturno y seguimiento semanal para sostener tu avance.",
    audience: "Estudiantes que desean reforzar razonamiento y base matematica",
    duration: "5 dias de clase por semana",
    mode: "Turno noche",
    image: "/images/ciclo-mates.webp",
    startDate: "6 de abril",
    monthlyPrice: "S/60",
    contactPhone: "923 806 156",
    highlights: [
      "Simulacros semanales para medir avance real.",
      "Grabaciones de clase para repasar sin perder continuidad.",
      "Examenes de control para reforzar seguimiento y disciplina.",
    ],
    subjects: [
      "Razonamiento matematico",
      "Algebra",
      "Aritmetica",
      "Geometria",
      "Trigonometria",
    ],
  },
  {
    slug: "ciencias",
    title: "Ciclo Ciencias",
    badge: "Matricula abierta",
    description:
      "Programa enfocado en ciencias con una ruta compacta por cursos clave, acompanamiento cercano y evaluaciones de control para sostener tu avance.",
    audience: "Estudiantes que buscan fortalecer base cientifica para el examen de admision",
    duration: "5 dias de clase por semana",
    mode: "Turno noche",
    image: "/images/ciclo-ciencias.svg",
    startDate: "8 de abril",
    monthlyPrice: "S/60",
    contactPhone: "923 806 156",
    highlights: [
      "Clases por bloques para integrar teoria, practica y resolucion guiada.",
      "Simulacros y evaluaciones de control para medir avance por semana.",
      "Material de repaso para reforzar conceptos y mantener continuidad.",
    ],
    subjects: ["Biologia", "Fisica", "Quimica"],
  },
];

export const getCycleProgramBySlug = (slug: string) =>
  cyclePrograms.find((program) => program.slug === slug);
