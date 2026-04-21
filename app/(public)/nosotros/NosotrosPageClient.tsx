import Image from "next/image";
import Link from "next/link";
import AnimatedStatNumber from "./AnimatedStatNumber";

const stats = [
  { value: 8000, label: "Ingresantes", suffix: "+" },
  { value: 95, label: "Satisfacción", suffix: "%" },
  { value: 12, label: "Años", suffix: "+" },
] as const;

const essenceItems = [
  {
    title: "Misión",
    text: "Brindar formación académica de excelencia que permita a nuestros estudiantes alcanzar sus metas universitarias y profesionales.",
    icon: "M",
  },
  {
    title: "Visión",
    text: "Ser la academia líder en preparación preuniversitaria a nivel nacional, reconocida por sus resultados y calidad educativa.",
    icon: "V",
  },
  {
    title: "Valores",
    text: "Compromiso, excelencia, disciplina, responsabilidad y vocación de servicio.",
    icon: "A",
  },
] as const;

const advantageItems = [
  {
    title: "Docentes expertos",
    text: "Profesores especializados en exámenes de admisión.",
    badge: "Docencia",
    icon: "D",
  },
  {
    title: "Simulacros reales",
    text: "Evaluaciones tipo examen universitario.",
    badge: "Evaluación",
    icon: "S",
  },
  {
    title: "Material exclusivo",
    text: "Guías, resúmenes y videoclases.",
    badge: "Recursos",
    icon: "R",
  },
  {
    title: "Acompañamiento",
    text: "Seguimiento personalizado al estudiante.",
    badge: "Seguimiento",
    icon: "A",
  },
] as const;

export default function NosotrosPageClient() {
  return (
    <div className="overflow-hidden bg-white transition-colors dark:bg-[#04111d]">
      <section className="relative bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container relative z-10 mx-auto grid items-center gap-10 px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-14 xl:gap-20">
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Educación moderna,
              <span className="block text-primary">resultados reales</span>
            </h2>

            <p className="mb-5 leading-relaxed text-gray-600 dark:text-slate-300">
              Somos una academia preuniversitaria enfocada en brindar educación
              de alto impacto, con metodologías activas, docentes expertos y
              acompañamiento constante.
            </p>

            <p className="mb-8 leading-relaxed text-gray-600 dark:text-slate-300">
              Nuestro objetivo es fortalecer el rendimiento de cada estudiante
              con rutas claras en ciencias, matematicas y letras para alcanzar
              metas academicas exigentes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-[#d8eef3] bg-[#f4fdff] p-5 text-center shadow transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <div className="text-2xl font-extrabold text-primary group-hover:scale-110 transition">
                    <AnimatedStatNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#c8fbff] to-primary blur-2xl opacity-30 transition group-hover:opacity-50" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ciclo-mates.jpg"
                alt="Estudiantes en clase"
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                width={1000}
                height={1000}
                priority
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1280px) 36vw, (min-width: 1024px) 40vw, (min-width: 640px) 70vw, 92vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,#f2fcff_0%,#ffffff_100%)] py-16 transition-colors dark:bg-[linear-gradient(180deg,#071b2b_0%,#04111d_100%)] sm:py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white md:text-4xl">
              Lo que nos mueve cada día
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {essenceItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-[#d8eef3] bg-white p-8 shadow-lg transition-all hover:-translate-y-3 hover:shadow-2xl dark:border-white/10 dark:bg-[#081624] dark:shadow-[0_18px_56px_rgba(0,0,0,0.22)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8fbff]/40 to-primary/10 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-2xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600 dark:text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 transition-colors dark:bg-[#04111d] sm:py-20">
        <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white md:text-4xl">
              ¿Por qué elegir SuperAcademy?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {advantageItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-[#d8eef3] bg-[#f4fdff] p-7 shadow transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
              >
                <span className="absolute right-4 top-4 rounded-full bg-primary/14 px-3 py-1 text-xs font-semibold text-slate-950 transition group-hover:bg-primary group-hover:text-white">
                  {item.badge}
                </span>

                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-2xl group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-[#7ff6f1] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2fcff_0%,#9ef4fb_100%)] py-16 text-slate-950 dark:bg-[linear-gradient(180deg,#082137_0%,#0a3f59_100%)] dark:text-white sm:py-20 lg:py-24">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full animate-pulse delay-1000" />

        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Tu ingreso empieza aquí
          </h2>

          <p className="mb-10 text-base text-slate-700 dark:text-slate-200 sm:text-lg">
            Da el primer paso hacia tu futuro universitario con nosotros.
          </p>

          <Link
            href="/ciclos"
            className="btn-primary w-full px-8 py-4 text-center font-bold sm:w-auto sm:px-10 sm:py-5"
          >
            Ver ciclos disponibles
          </Link>
        </div>
      </section>
    </div>
  );
}
