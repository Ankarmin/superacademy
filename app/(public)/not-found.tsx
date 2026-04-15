import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>
        <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
          La pagina que buscas no existe
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Revisa la URL o vuelve a una de las secciones principales para seguir
          navegando el sitio.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-2xl bg-primary px-6 py-3 font-semibold text-slate-950"
          >
            Ir al inicio
          </Link>
          <Link
            href="/ciclos"
            className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white"
          >
            Ver ciclos
          </Link>
        </div>
      </div>
    </main>
  );
}
