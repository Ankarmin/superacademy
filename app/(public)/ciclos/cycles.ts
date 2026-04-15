export type CycleProgram = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  audience: string;
  duration: string;
  schedule: string;
  mode: string;
  image: string;
  highlights: readonly string[];
  subjects: readonly string[];
};

export const cyclePrograms: readonly CycleProgram[] = [
  {
    slug: "san-marcos",
    title: "Ciclo San Marcos",
    badge: "Alta demanda",
    description:
      "Programa intensivo para postulantes que buscan una preparacion ordenada, con simulacros y seguimiento semanal.",
    audience: "Postulantes a la UNMSM",
    duration: "16 semanas",
    schedule: "Lunes a sabado",
    mode: "Presencial y virtual",
    image: "/images/hero-1.jpg",
    highlights: [
      "Simulacros tipo admision cada semana.",
      "Acompanamiento academico con reportes de avance.",
      "Material de teoria y practica por curso.",
    ],
    subjects: [
      "Matematica",
      "Lenguaje",
      "Razonamiento matematico",
      "Ciencias",
    ],
  },
  {
    slug: "uni",
    title: "Ciclo UNI",
    badge: "Enfoque tecnico",
    description:
      "Ruta especializada para reforzar resolucion de problemas, velocidad y dominio de cursos clave para la UNI.",
    audience: "Postulantes a la UNI",
    duration: "20 semanas",
    schedule: "Lunes a viernes",
    mode: "Presencial y virtual",
    image: "/images/hero-2.jpg",
    highlights: [
      "Entrenamiento intensivo en matematica y fisica.",
      "Resolucion guiada de problemas de alta dificultad.",
      "Bloques de practica cronometrada.",
    ],
    subjects: ["Algebra", "Geometria", "Fisica", "Quimica"],
  },
  {
    slug: "repaso-intensivo",
    title: "Repaso Intensivo",
    badge: "Ultimas vacantes",
    description:
      "Plan corto de consolidacion para quienes ya cuentan con base y necesitan llegar afinados al examen.",
    audience: "Estudiantes en etapa final de preparacion",
    duration: "8 semanas",
    schedule: "Turnos manana y noche",
    mode: "Virtual en vivo",
    image: "/images/hero-3.jpg",
    highlights: [
      "Prioriza temas de mayor peso en admision.",
      "Repasos de formulas, estrategias y errores frecuentes.",
      "Simulacros finales con retroalimentacion.",
    ],
    subjects: [
      "Repaso general",
      "Simulacros",
      "Estrategia de examen",
      "Refuerzo personalizado",
    ],
  },
];

export const getCycleProgramBySlug = (slug: string) =>
  cyclePrograms.find((program) => program.slug === slug);
