type SuperSectionHeroProps = {
  titleStart: string;
  titleAccent: string;
  description: string;
};

export default function SuperSectionHero({
  titleStart,
  titleAccent,
  description,
}: SuperSectionHeroProps) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {titleStart} <span className="text-primary">{titleAccent}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
