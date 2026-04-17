"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import {
  Film,
  LoaderCircle,
  Play,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import ModalShell from "@/components/ui/ModalShell";
import SuperSectionHero from "@/components/ui/SuperSectionHero";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { videotecaCursos, type Curso, type Video } from "./videos";

function normalizeText(value: string) {
  return value.toLowerCase();
}

function matchesSearch(curso: Curso, searchTerm: string) {
  const normalizedSearchTerm = normalizeText(searchTerm.trim());

  if (!normalizedSearchTerm) {
    return true;
  }

  return (
    normalizeText(curso.nombre).includes(normalizedSearchTerm) ||
    curso.videos.some((video) => normalizeText(video.titulo).includes(normalizedSearchTerm))
  );
}

function getVisibleVideos(curso: Curso, searchTerm: string) {
  const normalizedSearchTerm = normalizeText(searchTerm.trim());

  if (!normalizedSearchTerm) {
    return curso.videos;
  }

  if (normalizeText(curso.nombre).includes(normalizedSearchTerm)) {
    return curso.videos;
  }

  return curso.videos.filter((video) =>
    normalizeText(video.titulo).includes(normalizedSearchTerm),
  );
}

export default function VideotecaPageClient() {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const validCourses = useMemo(
    () =>
      videotecaCursos
        .map((curso) => ({
          ...curso,
          videos: curso.videos.filter((video) => video.videoId),
        }))
        .filter((curso) => curso.videos.length > 0),
    [],
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCourseId, setActiveCourseId] = useState<number | null>(
    validCourses[0]?.id ?? null,
  );
  const [videoActivo, setVideoActivo] = useState<Video | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const filteredCourses = useMemo(
    () => validCourses.filter((curso) => matchesSearch(curso, searchTerm)),
    [searchTerm, validCourses],
  );

  const cursoActivo =
    filteredCourses.find((course) => course.id === activeCourseId) ??
    filteredCourses[0] ??
    null;

  const visibleVideos = cursoActivo ? getVisibleVideos(cursoActivo, searchTerm) : [];
  const totalVideos = validCourses.reduce(
    (total, curso) => total + curso.videos.length,
    0,
  );

  return (
    <main className="overflow-hidden bg-white">
      <section id="videos" className="relative bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <SuperSectionHero
            badge="Videos organizados por curso"
            titleStart="Nuestra"
            titleAccent="SuperVideoteca"
            description="Explora nuestra videoteca con una navegacion clara por cursos y clases. Cada video aparece en tarjetas ordenadas para que encuentres rapido lo que quieres repasar."
            stats={[
              `${validCourses.length} cursos disponibles`,
              `${totalVideos} clases visibles ahora`,
              "Acceso ilimitado a la videoteca",
            ]}
          />

          <div className="mt-12 flex flex-col gap-8 sm:mt-14 lg:flex-row lg:gap-10">
            <aside className="w-full space-y-4 rounded-3xl border border-[#d8eef3] bg-[#f4fdff] p-5 shadow-xl backdrop-blur-xl lg:sticky lg:top-32 lg:h-[70vh] lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:p-6">
              <div>
                <h2 className="mb-2 flex items-center gap-2 text-xl font-extrabold">
                  Cursos <Sparkles className="h-5 w-5 text-primary" />
                </h2>
                <p className="text-sm leading-6 text-slate-600">
                  Busca y cambia de curso sin cerrar la pantalla actual.
                </p>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Buscar curso o clase</span>
                <div className="relative mt-2">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Ejemplo: química, lenguaje, filosofía"
                    className="min-h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-11 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-primary focus:outline-none"
                  />
                  {searchTerm ? (
                    <button
                      type="button"
                      aria-label="Limpiar búsqueda"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
              </label>

              <p className="rounded-2xl border border-[#d8eef3] bg-white px-4 py-3 text-sm text-slate-600">
                {filteredCourses.length
                  ? `${filteredCourses.length} cursos coinciden con tu búsqueda.`
                  : "No hay coincidencias con ese término."}
              </p>

              {filteredCourses.length ? (
                filteredCourses.map((curso) => {
                  const isActive = cursoActivo?.id === curso.id;
                  const courseVideoCount = getVisibleVideos(curso, searchTerm).length;

                  return (
                    <button
                      type="button"
                      key={curso.id}
                      onClick={() => {
                        setActiveCourseId(curso.id);
                        setVideoActivo(null);
                      }}
                      className={`group flex min-h-11 w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-primary to-[#7ff6f1] text-slate-950 shadow-lg"
                          : "bg-white hover:bg-[#eefbff]"
                      }`}
                    >
                      <span className="break-words">{curso.nombre}</span>
                      <span className="shrink-0 rounded-full bg-white/70 px-2 py-1 text-xs font-bold text-slate-700">
                        {courseVideoCount}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-[#b9dfe8] bg-white px-4 py-5 text-sm leading-6 text-slate-600">
                  <p className="font-semibold text-slate-950">No encontramos resultados.</p>
                  <p className="mt-1">
                    Prueba con el nombre del curso o borra la búsqueda para volver a ver todo el catálogo.
                  </p>
                </div>
              )}
            </aside>

            <section className="relative flex-1">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <h2 className="break-words text-2xl font-extrabold text-slate-950 sm:text-3xl">
                    {cursoActivo ? cursoActivo.nombre : "Sin resultados"}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {cursoActivo
                      ? `${visibleVideos.length} clase${visibleVideos.length === 1 ? "" : "s"} visible${visibleVideos.length === 1 ? "" : "s"}`
                      : "Ajusta tu búsqueda o limpia el filtro para continuar."}
                  </p>
                </div>

                <span className="rounded-full bg-primary/14 px-4 py-1.5 text-sm font-bold text-slate-950">
                  {videoActivo ? `Reproduciendo: ${videoActivo.titulo}` : "Acceso ilimitado"}
                </span>
              </div>

              <div className={`relative ${videoActivo ? "overflow-hidden" : ""}`}>
                <ModalShell
                  open={Boolean(videoActivo)}
                  onClose={() => {
                    setVideoActivo(null);
                    setIsVideoLoading(false);
                  }}
                  titleId="videoteca-player-title"
                  initialFocusRef={closeButtonRef}
                  panelClassName="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-black shadow-2xl"
                >
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => {
                      setVideoActivo(null);
                      setIsVideoLoading(false);
                    }}
                    aria-label="Cerrar reproductor"
                    className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="aspect-video w-full bg-black">
                    <h3 id="videoteca-player-title" className="sr-only">
                      {videoActivo ? `Reproduciendo ${videoActivo.titulo}` : "Reproductor de video"}
                    </h3>

                    {videoActivo ? (
                      <>
                        {isVideoLoading ? (
                          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/85 text-white">
                            <LoaderCircle className="h-6 w-6 animate-spin" />
                            <p className="text-sm text-white/80">
                              Cargando video, espera un momento...
                            </p>
                          </div>
                        ) : null}

                        <iframe
                          src={`https://www.youtube.com/embed/${videoActivo.videoId}?autoplay=1`}
                          title={videoActivo.titulo}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          onLoad={() => setIsVideoLoading(false)}
                        />
                      </>
                    ) : null}
                  </div>
                </ModalShell>

                {cursoActivo ? (
                  visibleVideos.length ? (
                    <div
                      className={`grid gap-5 transition-all duration-500 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8 ${
                        videoActivo ? "blur-md brightness-50" : ""
                      }`}
                    >
                      {visibleVideos.map((video, index) => (
                        <button
                          type="button"
                          key={`${video.id}-${index}`}
                          onClick={() => {
                            setVideoActivo(video);
                            setIsVideoLoading(true);
                          }}
                          className="group relative overflow-hidden rounded-2xl border border-[#d8eef3] bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                          <div className="relative h-44 overflow-hidden">
                            <Image
                              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                              alt={`Miniatura de ${video.titulo}`}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                              <Play className="h-12 w-12 text-white" />
                            </div>
                          </div>

                          <div className="space-y-2 p-4 text-left">
                            <h3 className="break-words font-bold leading-snug text-slate-950 transition group-hover:text-primary">
                              {video.titulo}
                            </h3>
                            <p className="text-xs leading-5 text-gray-500">
                              Pulsa para reproducir. El video se abrirá en un modal y podrás cerrarlo con la tecla Esc o el botón superior.
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-[2rem] border border-dashed border-[#bfdfe8] bg-[#f8fcff] px-6 py-10 text-center">
                      <p className="text-lg font-bold text-slate-950">No hay clases para este filtro</p>
                      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                        Mantuvimos el curso seleccionado, pero ninguna clase coincide con tu búsqueda. Borra el filtro o cambia de curso desde la columna izquierda.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSearchTerm("")}
                        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
                      >
                        Limpiar búsqueda
                      </button>
                    </div>
                  )
                ) : (
                  <div className="rounded-[2rem] border border-dashed border-[#bfdfe8] bg-[#f8fcff] px-6 py-10 text-center">
                    <Film className="mx-auto h-10 w-10 text-primary" />
                    <p className="mt-4 text-lg font-bold text-slate-950">No encontramos cursos con ese término</p>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                      Revisa la palabra escrita o limpia la búsqueda para volver a ver la videoteca completa.
                    </p>
                    <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setSearchTerm("")}
                        className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                      >
                        Ver todos los cursos
                      </button>
                      <a
                        href={buildWhatsAppUrl("Hola, no encontre el contenido que buscaba en la videoteca de SuperAcademy. ¿Podrian orientarme?")}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
                      >
                        Pedir orientacion
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
