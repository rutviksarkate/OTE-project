import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
      <p className="text-xs uppercase tracking-[0.2em] text-bronze">404</p>
      <h1 className="mt-4 font-display text-5xl text-navy">We could not find that page.</h1>
      <Link href="/" className="mt-8 inline-flex text-sm font-semibold underline decoration-bronze">
        Back to the homepage
      </Link>
    </main>
  );
}
