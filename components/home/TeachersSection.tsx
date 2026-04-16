"use client";

import Image from "next/image";
import { useState } from "react";

type TeacherAreaId = "matematicas" | "ciencias" | "letras";

type Teacher = {
  name: string;
  image: string;
};

type CourseGroup = {
  name: string;
  summary: string;
  teachers: Teacher[];
};

type TeacherArea = {
  id: TeacherAreaId;
  label: string;
  intro: string;
  courses: CourseGroup[];
};

const names = [
  "Andrea Rivas",
  "Luis Mendoza",
  "Camila Ortega",
  "Diego Salvatierra",
  "Valeria Ponce",
  "Marco Cárdenas",
  "Luciana Palacios",
  "Joaquín Huamán",
  "Mariana Zegarra",
  "Sebastián Ureta",
  "Fernanda Lazo",
  "Álvaro Neyra",
  "Daniela Paredes",
  "Renato Alcázar",
  "Micaela Yupanqui",
  "Franco Villanueva",
  "Natalia Sotelo",
  "Piero Gamarra",
  "Gabriela Rosas",
  "Adrián Castañeda",
  "Ximena Zúñiga",
  "Rodrigo Linares",
  "Paula Jáuregui",
  "Cristian Asto",
];

function createTeachers(offset: number): Teacher[] {
  return Array.from({ length: 6 }, (_, index) => ({
    name: names[(offset + index) % names.length],
    image: "/images/docente-placeholder.svg",
  }));
}

function createCourse(name: string, summary: string, offset: number): CourseGroup {
  return {
    name,
    summary,
    teachers: createTeachers(offset),
  };
}

const teacherAreas: TeacherArea[] = [
  {
    id: "matematicas",
    label: "Matemáticas",
    intro:
      "Una plana docente enfocada en precisión, velocidad y dominio del razonamiento matemático para el examen de admisión.",
    courses: [
      createCourse("Aritmética", "Bases numéricas, problemas y agilidad operativa.", 0),
      createCourse("Álgebra", "Modelación, ecuaciones y estructura simbólica.", 2),
      createCourse("Geometría", "Visualización, teoremas y resolución espacial.", 4),
      createCourse("Habilidad Matemática", "Estrategia, patrones y pensamiento lógico.", 6),
      createCourse("Trigonometría", "Relaciones angulares y aplicaciones clave.", 8),
    ],
  },
  {
    id: "ciencias",
    label: "Ciencias",
    intro:
      "Docentes que convierten conceptos complejos en clases claras, aplicadas y enfocadas en rendimiento sostenido.",
    courses: [
      createCourse("Biología", "Procesos vitales, genética y comprensión integral.", 10),
      createCourse("Física", "Análisis de fenómenos, fórmulas y criterio de solución.", 12),
      createCourse("Química", "Estructura, reacciones y razonamiento científico.", 14),
    ],
  },
  {
    id: "letras",
    label: "Letras",
    intro:
      "Un equipo que fortalece comprensión, interpretación y cultura general con una metodología ordenada y competitiva.",
    courses: [
      createCourse("Habilidad Verbal", "Comprensión, inferencia y lectura estratégica.", 16),
      createCourse("Lenguaje", "Normativa, estructura y dominio expresivo.", 18),
      createCourse("Literatura", "Obras, corrientes y análisis textual.", 20),
      createCourse("Historia del Perú", "Procesos históricos y lectura crítica nacional.", 22),
      createCourse("Historia Universal", "Contextos globales y líneas de tiempo clave.", 1),
      createCourse("Geografía", "Territorio, recursos y organización del espacio.", 3),
      createCourse("Psicología", "Procesos mentales y comportamiento humano.", 5),
      createCourse("Filosofía", "Ideas, autores y argumentación conceptual.", 7),
      createCourse("Economía", "Principios económicos y análisis aplicado.", 9),
      createCourse("Cívica", "Ciudadanía, Estado y organización política.", 11),
    ],
  },
];

export default function TeachersSection() {
  const defaultArea = teacherAreas[0];
  const [activeArea, setActiveArea] = useState<TeacherAreaId>(defaultArea.id);
  const [activeCourse, setActiveCourse] = useState(
    defaultArea.courses[0]?.name ?? "",
  );
  const currentArea =
    teacherAreas.find((area) => area.id === activeArea) ?? defaultArea;
  const currentCourse =
    currentArea.courses.find((course) => course.name === activeCourse) ??
    currentArea.courses[0];

  return (
    <section
      id="docentes"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fdff_0%,#ffffff_42%,#f7fbff_100%)] py-24"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_18%,rgba(1,184,219,0.18),transparent_26%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.12),transparent_24%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-primary shadow-[0_10px_30px_rgba(1,184,219,0.12)]">
            DOCENTES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Docentes por <span className="text-primary">area y curso</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explora nuestra plana docente con una navegacion clara por areas y
            cursos. Cada profesor aparece en tarjetas cuadradas para una lectura
            mas ordenada y directa.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl rounded-[36px] border border-white/70 bg-white/78 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-6">
          <div
            aria-label="Seleccionar área docente"
            className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-[28px] bg-slate-100/90 p-2"
            role="tablist"
          >
            {teacherAreas.map((area) => {
              const isActive = area.id === currentArea.id;

              return (
                <button
                  key={area.id}
                  type="button"
                  role="tab"
                  id={`tab-${area.id}`}
                  aria-controls={`panel-${area.id}`}
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveArea(area.id);
                    setActiveCourse(area.courses[0]?.name ?? "");
                  }}
                  className={`rounded-2xl px-6 py-3 text-sm font-bold transition-all duration-300 md:min-w-[180px] md:text-base ${
                    isActive
                      ? "bg-primary text-slate-950 shadow-[0_16px_40px_rgba(1,184,219,0.22)]"
                      : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {area.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${currentArea.id}`}
            aria-labelledby={`tab-${currentArea.id}`}
            className="mt-8 rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-5 md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  {currentArea.label}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                  Elige el curso y revisa la plana docente
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                {currentArea.intro}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {currentArea.courses.map((course) => {
                const isActive = course.name === currentCourse?.name;

                return (
                  <button
                    key={`${currentArea.id}-${course.name}`}
                    type="button"
                    onClick={() => setActiveCourse(course.name)}
                    className={`rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-slate-950 shadow-[0_14px_30px_rgba(1,184,219,0.2)]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-slate-950"
                    }`}
                  >
                    {course.name}
                  </button>
                );
              })}
            </div>

            {currentCourse ? (
              <section className="mt-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary md:text-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {currentCourse.name}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                  {currentCourse.teachers.map((teacher) => (
                    <article
                      key={`${currentCourse.name}-${teacher.name}`}
                      className="group"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-[28px] border border-[#d6ebf0] bg-[linear-gradient(180deg,#0f55ff_0%,#1834d7_100%)] shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_26px_56px_rgba(15,23,42,0.14)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
                        <div className="absolute right-4 top-4 z-10 rounded-full bg-white/16 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          {currentArea.label}
                        </div>
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08144d]/80 to-transparent" />
                      </div>

                      <div className="px-2 pt-4 text-center">
                        <h5 className="text-lg font-semibold leading-tight text-slate-950 md:text-[1.05rem]">
                          {teacher.name}
                        </h5>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
