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
  scheduleImage: string;
  startDate: string;
  monthlyPrice: string;
  contactPhone: string;
  highlights: readonly string[];
  subjects: readonly string[];
  scheduleItems: readonly {
    day: string;
    subject: string;
    time: string;
  }[];
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
    schedule:
      "Lunes a viernes entre 7:00 p. m. y 10:00 p. m.; los sabados se destinan a simulacros.",
    mode: "Turno noche",
    image: "/images/ciclo-mates.jpg",
    scheduleImage: "/images/horario-ciclo-mates.jpg",
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
    scheduleItems: [
      {
        day: "Lunes",
        subject: "Geometria",
        time: "8:00 p. m. a 10:00 p. m.",
      },
      {
        day: "Martes",
        subject: "Razonamiento matematico",
        time: "7:00 p. m. a 9:00 p. m.",
      },
      {
        day: "Martes",
        subject: "Algebra",
        time: "9:00 p. m. a 10:00 p. m.",
      },
      {
        day: "Miercoles",
        subject: "Trigonometria",
        time: "8:00 p. m. a 10:00 p. m.",
      },
      {
        day: "Jueves",
        subject: "Razonamiento matematico",
        time: "7:00 p. m. a 9:00 p. m.",
      },
      {
        day: "Jueves",
        subject: "Algebra",
        time: "9:00 p. m. a 10:00 p. m.",
      },
      {
        day: "Viernes",
        subject: "Aritmetica",
        time: "7:00 p. m. a 9:00 p. m.",
      },
      {
        day: "Viernes",
        subject: "Examen",
        time: "9:00 p. m. a 10:00 p. m.",
      },
      {
        day: "Sabado",
        subject: "Simulacro semanal",
        time: "Segun programacion",
      },
    ],
  },
];

export const getCycleProgramBySlug = (slug: string) =>
  cyclePrograms.find((program) => program.slug === slug);
