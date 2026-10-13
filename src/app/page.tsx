const PRINCIPLES = [
  'Every fact shows where it came from and when it was last checked.',
  'Missing information is shown as “unavailable”, never estimated.',
  'A route existing does not mean it is cheap, liquid or fast.',
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Corridor Finder</h1>
      <p className="mt-3 text-lg text-slate-700">
        Which Stellar anchors and payment rails actually connect one country to another?
      </p>

      <p
        role="status"
        className="mt-8 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
      >
        Foundation phase: corridor search is not built yet and no data is shown. Follow progress in
        the{' '}
        <a
          className="underline"
          href="https://github.com/corridor-finder/corridor-finder"
          rel="noreferrer"
        >
          project repository
        </a>
        .
      </p>

      <h2 className="mt-10 text-xl font-medium">Our rules</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
        {PRINCIPLES.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </main>
  );
}
