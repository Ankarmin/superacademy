"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type AnimatedCountProps = {
  end: number;
  duration?: number;
  delay?: number;
  separator?: string;
  suffix?: string;
  enableScrollSpy?: boolean;
  scrollSpyOnce?: boolean;
};

function AnimatedCount({
  end,
  duration = 5.2,
  delay = 0,
  separator = ",",
  suffix,
  enableScrollSpy,
  scrollSpyOnce,
}: AnimatedCountProps) {
  return (
    <CountUp
      end={end}
      duration={duration}
      delay={delay}
      separator={separator}
      suffix={suffix}
      enableScrollSpy={enableScrollSpy}
      scrollSpyOnce={scrollSpyOnce}
    >
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
}

export default function NosotrosPageClient() {
  return (
    <main className="bg-white overflow-hidden">
      <section className="relative py-28 bg-gradient-to-br from-primary via-primary/90 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_60%)] animate-pulse pointer-events-none" />

        <div className="absolute top-16 left-8 hidden md:flex flex-col gap-4 animate-floatSlow">
          <span className="text-gray-900 px-4 py-2 rounded-full bg-white/50 backdrop-blur text-sm font-semibold">
            <AnimatedCount end={12} duration={5.2} delay={0.2} suffix="+" />{" "}
            años de experiencia
          </span>
          <span className="text-gray-900 px-4 py-2 rounded-full bg-white/50 backdrop-blur text-sm font-semibold">
            <AnimatedCount end={8000} duration={5.2} delay={0.2} suffix="+" />{" "}
            ingresantes
          </span>
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <span className="text-gray-900 inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/50 backdrop-blur text-sm font-semibold tracking-wide animate-bounceSlow">
            🎓 Educación que transforma futuros
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Formamos ingresantes
            <span className="block text-gray-900">que hacen historia</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-10">
            Más de una década preparando estudiantes que ingresan a las mejores
            universidades del Perú.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/ciclos"
              className="group relative inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 hover:text-white">Ver ciclos</span>
            </Link>

            <Link
              href="/contacto"
              className="px-8 py-4 rounded-xl border border-white/50 hover:bg-white hover:text-primary transition font-semibold"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/50 text-gray-900 text-sm font-semibold">
              Nuestra historia
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Educación moderna,
              <span className="block text-primary">resultados reales</span>
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Somos una academia preuniversitaria enfocada en brindar educación
              de alto impacto, con metodologías activas, docentes expertos y
              acompañamiento constante.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro objetivo es maximizar las probabilidades de ingreso a
              universidades como San Marcos, UNI, Villarreal y otras
              instituciones de prestigio.
            </p>

            <motion.div
              className="grid grid-cols-3 gap-6 mt-10"
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
              initial={{ opacity: 0, y: 50 }}
            >
              {[
                { value: 8000, label: "Ingresantes", suffix: "+" },
                { value: 95, label: "Satisfacción", suffix: "%" },
                { value: 12, label: "Años", suffix: "+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-5 shadow hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                >
                  <div className="text-2xl font-extrabold text-primary group-hover:scale-110 transition">
                    <AnimatedCount
                      end={stat.value}
                      duration={5.2}
                      delay={0.2 * i}
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-300 to-primary blur-2xl opacity-30 group-hover:opacity-50 transition" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-1.jpg"
                alt="Estudiantes en clase"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1000}
                height={1000}
              />

              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-primary text-gray-900 text-sm font-semibold shadow animate-floatSlow">
                🎓 Metodología activa
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-primary/50 text-gray-900 text-sm font-semibold">
              Nuestra esencia
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Lo que nos mueve cada día
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Misión",
                text: "Brindar formación académica de excelencia que permita a nuestros estudiantes alcanzar sus metas universitarias y profesionales.",
                icon: "🎯",
              },
              {
                title: "Visión",
                text: "Ser la academia líder en preparación preuniversitaria a nivel nacional, reconocida por sus resultados y calidad educativa.",
                icon: "🚀",
              },
              {
                title: "Valores",
                text: "Compromiso, excelencia, disciplina, responsabilidad y vocación de servicio.",
                icon: "💎",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-primary/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-2xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-cyan-300/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-primary/50 text-gray-900 text-sm font-semibold">
              Nuestra ventaja
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              ¿Por qué elegir SuperAcademy?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Docentes expertos",
                text: "Profesores especializados en exámenes de admisión.",
                badge: "Top teachers",
                icon: "👨‍🏫",
              },
              {
                title: "Simulacros reales",
                text: "Evaluaciones tipo examen universitario.",
                badge: "Real test",
                icon: "📝",
              },
              {
                title: "Material exclusivo",
                text: "Guías, resúmenes y videoclases.",
                badge: "Premium",
                icon: "📚",
              },
              {
                title: "Acompañamiento",
                text: "Seguimiento personalizado al estudiante.",
                badge: "1 a 1",
                icon: "🤝",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-7 shadow hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-primary/50 text-gray-900 font-semibold group-hover:bg-primary group-hover:text-white transition">
                  {item.badge}
                </span>

                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-2xl group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-gradient-to-br from-primary to-cyan-500 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full animate-pulse delay-1000" />

        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <span className="text-gray-900 inline-block mb-4 px-5 py-2 rounded-full bg-white/50 backdrop-blur text-sm font-semibold">
            🚀 Empieza hoy mismo
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Tu ingreso empieza aquí
          </h2>

          <p className="opacity-90 mb-10 text-lg">
            Da el primer paso hacia tu futuro universitario con nosotros.
          </p>

          <Link
            href="/ciclos"
            className="group relative inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 hover:text-white">
              Ver ciclos disponibles
            </span>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-bounceSlow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </main>
  );
}
