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
    title: "Ciclo Ciencias",
    badge: "Base cientifica",
    description:
      "Programa enfocado en fortalecer biologia, quimica y fisica con practica guiada y seguimiento constante.",
    audience: "Estudiantes que buscan reforzar el area de ciencias",
    duration: "16 semanas",
    schedule: "Lunes a sabado",
    mode: "Presencial y virtual",
    image: "/images/hero-1.jpg",
    highlights: [
      "Practicas semanales por bloques tematicos.",
      "Acompanamiento academico con reportes de avance.",
      "Material de teoria y ejercicios aplicados por curso.",
    ],
    subjects: [
      "Biologia",
      "Quimica",
      "Fisica",
      "Razonamiento cientifico",
    ],
  },
  {
    slug: "uni",
    title: "Ciclo Matematicas",
    badge: "Razonamiento logico",
    description:
      "Ruta especializada para desarrollar resolucion de problemas, agilidad numerica y dominio de fundamentos matematicos.",
    audience: "Estudiantes enfocados en el area de matematicas",
    duration: "20 semanas",
    schedule: "Lunes a viernes",
    mode: "Presencial y virtual",
    image: "/images/hero-2.jpg",
    highlights: [
      "Entrenamiento intensivo en calculo y razonamiento matematico.",
      "Resolucion guiada de problemas de dificultad progresiva.",
      "Bloques de practica cronometrada.",
    ],
    subjects: ["Aritmetica", "Algebra", "Geometria", "Razonamiento matematico"],
  },
  {
    slug: "repaso-intensivo",
    title: "Ciclo Letras",
    badge: "Comunicacion y analisis",
    description:
      "Plan orientado a desarrollar comprension lectora, analisis verbal y dominio de contenidos humanisticos.",
    audience: "Estudiantes que buscan fortalecer el area de letras",
    duration: "8 semanas",
    schedule: "Turnos manana y noche",
    mode: "Virtual en vivo",
    image: "/images/hero-3.jpg",
    highlights: [
      "Lecturas guiadas y analisis de textos.",
      "Refuerzo de redaccion, lenguaje y cultura general.",
      "Practicas de comprension y argumentacion con retroalimentacion.",
    ],
    subjects: [
      "Lenguaje",
      "Literatura",
      "Historia",
      "Comprension lectora",
    ],
  },
];

export const getCycleProgramBySlug = (slug: string) =>
  cyclePrograms.find((program) => program.slug === slug);
