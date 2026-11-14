import Link from "next/link";

export default function PageIntro({ eyebrow, title, lede, crumbs }) {
  return (
    <header className="border-b border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 md:pb-16 md:pt-16">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-white/55">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((crumb, index) => (
                <li key={`${crumb.name}-${index}`} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.href && index < crumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight md:text-5xl">{title}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{lede}</p> : null}
      </div>
    </header>
  );
}
