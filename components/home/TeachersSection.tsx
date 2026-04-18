"use client";

import Image from "next/image";
import { useState } from "react";
import SuperSectionHero from "@/components/ui/SuperSectionHero";

type TeacherAreaId = "matematicas" | "ciencias" | "letras";

type Teacher = {
  name: string;
  image: string;
};

type CourseGroup = {
  name: string;
  teachers: Teacher[];
};

type TeacherArea = {
  id: TeacherAreaId;
  label: string;
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

function createCourse(name: string, offset: number): CourseGroup {
  return {
    name,
    teachers: createTeachers(offset),
  };
}

const teacherAreas: TeacherArea[] = [
  {
    id: "matematicas",
    label: "Matemáticas",
    courses: [
      createCourse("Aritmética", 0),
      createCourse("Álgebra", 2),
      createCourse("Geometría", 4),
      createCourse("Habilidad Matemática", 6),
      createCourse("Trigonometría", 8),
    ],
  },
  {
    id: "ciencias",
    label: "Ciencias",
    courses: [
      createCourse("Biología", 10),
      createCourse("Física", 12),
      createCourse("Química", 14),
    ],
  },
  {
    id: "letras",
    label: "Letras",
    courses: [
      createCourse("Habilidad Verbal", 16),
      createCourse("Lenguaje", 18),
      createCourse("Literatura", 20),
      createCourse("Historia del Perú", 22),
      createCourse("Historia Universal", 1),
      createCourse("Geografía", 3),
      createCourse("Psicología", 5),
      createCourse("Filosofía", 7),
      createCourse("Economía", 9),
      createCourse("Cívica", 11),
    ],
  },
];

export default function TeachersSection() {
  const defaultArea = teacherAreas[0];
  const [activeArea, setActiveArea] = useState<TeacherAreaId>(defaultArea.id);
  const currentArea =
    teacherAreas.find((area) => area.id === activeArea) ?? defaultArea;
  const currentTeacherCount = currentArea.courses.reduce(
    (total, course) => total + course.teachers.length,
    0,
  );

  return (
    <section
      id="docentes"
      className="relative overflow-x-hidden bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_18%,rgba(1,184,219,0.18),transparent_26%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(1,184,219,0.14),transparent_24%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.08),transparent_22%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <SuperSectionHero
          badge="Docentes organizados por área"
          titleStart="Nuestro"
          titleAccent="SuperDocentes"
          description="Explora nuestra plana docente con una navegacion clara por areas y cursos. Cada profesor aparece en tarjetas cuadradas para una lectura mas ordenada y directa."
          stats={[
            `${teacherAreas.length} áreas disponibles`,
            `${currentArea.courses.length} cursos en ${currentArea.label}`,
            `${currentTeacherCount} docentes visibles ahora`,
          ]}
        />

        <div className="mx-auto mt-12 max-w-6xl sm:mt-14">
          <div className="sticky top-[92px] z-40 lg:top-[96px]">
            <div className="rounded-[28px] border border-white/80 bg-white/88 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:border-white/10 dark:bg-[#081624]/88 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-4">
              <div
                aria-label="Seleccionar área docente"
                className="mx-auto flex flex-wrap justify-center gap-2 rounded-[24px] bg-[#eefbff] p-1.5 dark:bg-white/5"
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
                      onClick={() => setActiveArea(area.id)}
                      className={`min-h-11 min-w-[calc(50%-0.25rem)] flex-1 rounded-[20px] px-4 py-2.5 text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-w-[154px] sm:flex-none md:text-base ${
                        isActive
                          ? "bg-primary text-white shadow-[0_16px_40px_rgba(1,184,219,0.22)] scale-[1.01]"
                          : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                    >
                      {area.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            role="tabpanel"
            id={`panel-${currentArea.id}`}
            aria-labelledby={`tab-${currentArea.id}`}
            className="mt-8 space-y-6 sm:space-y-8"
          >
            {currentArea.courses.map((course, index) => (
              <section
                key={`${currentArea.id}-${course.name}`}
                className={`rounded-[30px] border border-slate-200/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] dark:bg-[linear-gradient(180deg,rgba(8,22,36,0.98),rgba(8,22,36,0.92))]"
                    : "bg-[linear-gradient(180deg,rgba(242,252,255,0.98),rgba(233,252,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(11,30,46,0.98),rgba(8,22,36,0.94))]"
                }`}
              >
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-[#bde9f4] bg-[#eefbff] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-primary dark:border-cyan-300/16 dark:bg-cyan-400/10 dark:text-cyan-100">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    <span className="break-words">{course.name}</span>
                  </span>
                  <div className="hidden h-px flex-1 bg-slate-200 dark:bg-white/10 sm:block" />
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-4 gap-y-7 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(190px,1fr))]">
                  {course.teachers.map((teacher) => (
                    <article key={`${course.name}-${teacher.name}`} className="group min-w-0">
                      <div className="relative aspect-square overflow-hidden rounded-[24px] border border-[#d6ebf0] bg-[linear-gradient(180deg,#01b8db_0%,#0c9fb8_100%)] shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_52px_rgba(15,23,42,0.14)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
                        <div className="absolute right-3 top-3 z-10 rounded-full bg-white/16 px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          {currentArea.label}
                        </div>
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          fill
                          sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#045a69]/80 to-transparent" />
                      </div>

                      <div className="px-2 pt-4 text-center">
                        <h5 className="text-base font-semibold leading-tight text-slate-950 dark:text-white md:text-[1.02rem]">
                          {teacher.name}
                        </h5>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
