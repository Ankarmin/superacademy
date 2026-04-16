"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Play, PlayCircle, Sparkles, Film } from "lucide-react";
import { videotecaCursos, type Curso, type Video } from "./videos";

export default function VideotecaPageClient() {
  const [cursoActivo, setCursoActivo] = useState<Curso>(videotecaCursos[0]);
  const [videoActivo, setVideoActivo] = useState<Video | null>(null);

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e9fcff_0%,#9ef4fb_100%)] py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,.38),transparent_60%)]" />

        <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-slate-950">
          <h1 className="mb-6 flex items-center justify-center gap-2 text-5xl font-extrabold text-slate-950 md:text-6xl">
            Videoteca <Film className="w-12 h-12 text-gray-900" />
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-slate-700 md:text-xl">
            Aprende a tu ritmo con cientos de clases grabadas por docentes
            expertos.
          </p>

          <a
            href="#videos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-10 py-4 font-bold text-primary shadow-[0_0_30px_rgba(1,184,219,.18)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar videoteca <PlayCircle className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#ccfbff] to-[#7ff6f1] transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </div>

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#7ff6f1]/30 rounded-full blur-3xl" />
      </section>

      <section
        id="videos"
        className="relative bg-white py-24"
      >
        <div className="container mx-auto px-6 flex gap-10">
          <aside className="sticky top-28 h-[70vh] w-72 shrink-0 space-y-4 overflow-y-auto rounded-3xl border border-[#d8eef3] bg-[#f4fdff] p-6 shadow-xl backdrop-blur-xl">
            <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
              Cursos <Sparkles className="w-5 h-5 text-primary" />
            </h2>

            {videotecaCursos.map((curso) => (
              <button
                type="button"
                key={curso.id}
                onClick={() => {
                  setCursoActivo(curso);
                  setVideoActivo(null);
                }}
                className={`cursor-pointer group flex w-full items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  cursoActivo.id === curso.id
                    ? "bg-gradient-to-r from-primary to-[#7ff6f1] text-slate-950 shadow-lg scale-[1.02]"
                    : "bg-white hover:bg-[#eefbff]"
                }`}
              >
                <span>{curso.nombre}</span>
              </button>
            ))}
          </aside>

          <section className="flex-1 relative">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-extrabold">{cursoActivo.nombre}</h2>
                <p className="mt-1 text-sm text-gray-500">
                  {cursoActivo.videos.length} clases disponibles
                </p>
              </div>

              <span className="rounded-full bg-primary/14 px-4 py-1.5 text-sm font-bold text-slate-950">
                Acceso ilimitado
              </span>
            </div>

            <div
              className={`relative min-h-[60vh] max-h-[60vh] pr-4 scrollbar-width-thin ${
                videoActivo ? "overflow-hidden" : "overflow-y-auto"
              }`}
            >
              {videoActivo && (
                <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in">
                  <button
                    type="button"
                    onClick={() => setVideoActivo(null)}
                    className="absolute right-5 top-5 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary/80 text-white text-xl transition hover:bg-primary"
                  >
                    ✕
                  </button>

                  <div className="w-full h-full max-w-6xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoActivo.videoId}?autoplay=1`}
                      title={videoActivo.titulo}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <div
                className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
                  videoActivo ? "blur-md brightness-50 scale-[0.98]" : ""
                }`}
              >
                {cursoActivo.videos.map((video, index) => (
                  <button
                    type="button"
                    key={`${video.id}-${index}`}
                    onClick={() => setVideoActivo(video)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#d8eef3] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={`Miniatura de ${video.titulo}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    <div className="p-4 text-left space-y-1">
                      <h3 className="font-bold leading-snug group-hover:text-primary transition">
                        {video.titulo}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Click para reproducir
                      </p>
                    </div>

                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/40 to-[#7ff6f1]/40 opacity-0 blur-xl transition group-hover:opacity-30" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2fcff_0%,#ffffff_100%)] pb-28 pt-4">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center relative z-10">
          {[
            {
              title: "Acceso 24/7",
              desc: "Estudia cuando quieras desde cualquier dispositivo.",
              icon: "⏰",
            },
            {
              title: "Docentes expertos",
              desc: "Explicaciones claras por profesores especializados.",
              icon: "🎓",
            },
            {
              title: "Material descargable",
              desc: "Guías, PDFs y ejercicios resueltos.",
              icon: "📄",
            },
          ].map((b, i) => (
            <div
              key={i}
                className="relative group rounded-3xl border border-[#d8eef3] bg-white/85 p-10 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>

                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/40 to-[#7ff6f1]/40 opacity-0 blur-xl transition group-hover:opacity-20" />
              </div>
            ))}
          </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#e9fcff_100%)] py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,184,219,.12),transparent_60%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center text-slate-950">
          <h2 className="mb-6 text-4xl font-extrabold text-slate-950">
            Empieza hoy tu preparación 🚀
          </h2>
          <p className="mb-10 text-lg text-slate-700">
            Accede ahora a toda nuestra videoteca y potencia tu rendimiento
            académico.
          </p>

          <Link
            href="/ciclos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-10 py-4 font-bold text-slate-950 shadow-[0_0_32px_rgba(1,184,219,.22)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver ciclos disponibles <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#7ff6f1] to-[#ccfbff] transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>
      </section>
    </main>
  );
}
