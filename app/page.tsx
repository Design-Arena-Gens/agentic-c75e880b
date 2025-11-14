export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Hello ??
        </h1>
        <p className="mt-6 text-lg leading-7 text-gray-300">
          Your app is live-ready. Built with Next.js 14 + Tailwind CSS.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Next.js Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-sky-300 hover:text-sky-200"
          >
            Tailwind Docs ?
          </a>
        </div>
      </div>
    </main>
  );
}
