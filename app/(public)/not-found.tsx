import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[var(--page-bg)] px-6 py-24 text-[var(--page-fg)] transition-colors">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white p-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>
        <h1 className="mt-6 text-4xl font-extrabold text-slate-950 dark:text-white md:text-5xl">
          La pagina que buscas no existe
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Revisa la URL o vuelve a una de las secciones principales para seguir
          navegando el sitio.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn-primary px-6 py-3 font-semibold"
          >
            Ir al inicio
          </Link>
          <Link
            href="/ciclos"
            className="btn-secondary px-6 py-3 font-semibold"
          >
            Ver ciclos
          </Link>
        </div>
      </div>
    </div>
  );
}
