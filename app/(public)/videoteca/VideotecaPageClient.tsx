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
    <main className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,.2),transparent_60%)]" />

        <div className="flex flex-col items-center relative z-10 container mx-auto px-6 text-center max-w-4xl text-white">
          <h1 className="flex items-center justify-center gap-2 text-gray-900 text-5xl md:text-6xl font-extrabold mb-6">
            Videoteca <Film className="w-12 h-12 text-gray-900" />
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10">
            Aprende a tu ritmo con cientos de clases grabadas por docentes
            expertos.
          </p>

          <a
            href="#videos"
            className="relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-black bg-yellow-400 shadow-[0_0_40px_rgba(255,200,0,.6)] transition-transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar videoteca <PlayCircle className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl" />
      </section>

      <section
        id="videos"
        className="py-24 relative bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6 flex gap-10">
          <aside className="w-72 shrink-0 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-6 space-y-4 overflow-y-auto h-[70vh] sticky top-28">
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
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-[1.02]"
                    : "hover:bg-gray-100"
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
                <p className="text-sm text-gray-500 mt-1">
                  {cursoActivo.videos.length} clases disponibles
                </p>
              </div>

              <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-primary/50 text-gray-900">
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
                    className="cursor-pointer absolute top-5 right-5 z-40 bg-primary/80 hover:bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition"
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
                    className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 bg-white hover:-translate-y-2 hover:shadow-2xl"
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

                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/40 to-yellow-400/40 opacity-0 group-hover:opacity-30 blur-xl transition" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative pb-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
              className="relative group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-10"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>

              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/40 to-yellow-400/40 opacity-0 group-hover:opacity-20 blur-xl transition" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,.2),transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl text-white">
          <h2 className="text-gray-900 text-4xl font-extrabold mb-6">
            Empieza hoy tu preparación 🚀
          </h2>
          <p className="text-gray-900 mb-10 text-lg">
            Accede ahora a toda nuestra videoteca y potencia tu rendimiento
            académico.
          </p>

          <Link
            href="/ciclos"
            className="relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-black bg-yellow-400 shadow-[0_0_40px_rgba(255,200,0,.6)] transition-transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver ciclos disponibles <Sparkles className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  );
}
