"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Film, LoaderCircle, Play, X } from "lucide-react";
import ModalShell from "@/components/ui/ModalShell";
import SuperSectionHero from "@/components/ui/SuperSectionHero";
import { videotecaCursos, type Video } from "./videos";

const validCourses = videotecaCursos
  .map((curso) => ({
    ...curso,
    videos: curso.videos.filter((video) => video.videoId),
  }))
  .filter((curso) => curso.videos.length > 0);

export default function VideotecaPageClient() {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [activeCourseId, setActiveCourseId] = useState<number | null>(
    validCourses[0]?.id ?? null,
  );
  const [videoActivo, setVideoActivo] = useState<Video | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const cursoActivo =
    validCourses.find((course) => course.id === activeCourseId) ??
    validCourses[0] ??
    null;

  const visibleVideos = cursoActivo?.videos ?? [];

  return (
    <main className="overflow-hidden bg-white transition-colors dark:bg-[#04111d]">
      <section id="videos" className="relative bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20">
        <div className="container mx-auto px-6">
          <SuperSectionHero
            titleStart="Nuestra"
            titleAccent="SuperVideoteca"
            description="Explora nuestra videoteca con una navegacion clara por cursos. Cada video aparece en tarjetas ordenadas para que encuentres rapido lo que quieres repasar."
            stats={[]}
          />

          <div className="mt-12 flex flex-col gap-8 sm:mt-14 lg:flex-row lg:gap-10">
            <aside className="w-full rounded-3xl border border-[#d8eef3] bg-[#f4fdff] p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)] lg:sticky lg:top-32 lg:h-[70vh] lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:p-6">
              <div className="space-y-3">
                {validCourses.map((curso) => {
                  const isActive = cursoActivo?.id === curso.id;

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
                          : "bg-white hover:bg-[#eefbff] dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                      }`}
                    >
                      <span className="break-words">{curso.nombre}</span>
                      <span className="shrink-0 rounded-full bg-white/70 px-2 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-100">
                        {curso.videos.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <section className="relative flex-1">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <h2 className="break-words text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                    {cursoActivo ? cursoActivo.nombre : "Videoteca"}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                    {cursoActivo
                      ? `${visibleVideos.length} clase${visibleVideos.length === 1 ? "" : "s"} disponible${visibleVideos.length === 1 ? "" : "s"}`
                      : "Pronto agregaremos nuevos contenidos a esta sección."}
                  </p>
                </div>

                <span className="rounded-full bg-primary/14 px-4 py-1.5 text-sm font-bold text-slate-950 dark:text-slate-100">
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
                          className="group relative overflow-hidden rounded-2xl border border-[#d8eef3] bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]"
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
                            <h3 className="break-words font-bold leading-snug text-slate-950 transition group-hover:text-primary dark:text-white">
                              {video.titulo}
                            </h3>
                            <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                              Pulsa para reproducir. El video se abrirá en un modal y podrás cerrarlo con la tecla Esc o el botón superior.
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-[2rem] border border-dashed border-[#bfdfe8] bg-[#f8fcff] px-6 py-10 text-center dark:border-white/10 dark:bg-white/5">
                      <p className="text-lg font-bold text-slate-950 dark:text-white">Este curso aún no tiene videos visibles</p>
                      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                        Selecciona otro curso desde la columna izquierda mientras seguimos ampliando esta videoteca.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="rounded-[2rem] border border-dashed border-[#bfdfe8] bg-[#f8fcff] px-6 py-10 text-center dark:border-white/10 dark:bg-white/5">
                    <Film className="mx-auto h-10 w-10 text-primary" />
                    <p className="mt-4 text-lg font-bold text-slate-950 dark:text-white">Pronto publicaremos nuevos videos</p>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                      La videoteca seguirá creciendo con más clases y repasos organizados por curso.
                    </p>
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
