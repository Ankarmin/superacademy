type SuperSectionHeroProps = {
  titleStart: string;
  titleAccent: string;
  description: string;
  stats: readonly string[];
};

export default function SuperSectionHero({
  titleStart,
  titleAccent,
  description,
  stats,
}: SuperSectionHeroProps) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {titleStart} <span className="text-primary">{titleAccent}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
        {description}
      </p>

      {stats.length ? (
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          {stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-[#d8eef3] bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            >
              {stat}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
