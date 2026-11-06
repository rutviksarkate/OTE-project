import Link from "next/link";

export default function PageIntro({ eyebrow, title, lede, crumbs }) {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-32">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-white/60">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((crumb, index) => (
                <li key={crumb.name} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.href && index < crumbs.length - 1 ? <Link href={crumb.href}>{crumb.name}</Link> : <span className="text-white">{crumb.name}</span>}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-6xl">{title}</h1>
        {lede ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{lede}</p> : null}
      </div>
    </header>
  );
}
