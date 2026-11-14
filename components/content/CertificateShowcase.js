import { certificateIssuer, certificateScope, certifications } from "@/data/certifications";

export default function CertificateShowcase() {
  return (
    <div>
      <p className="max-w-3xl text-base leading-relaxed text-steel">
        Issued to OTE Projects FZ LLC by {certificateIssuer}. Certified 24 July 2026. Each certificate expires on 23 July 2029.
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">{certificateScope}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {certifications.map((item) => (
          <article key={item.slug} id={item.slug} className="flex flex-col border border-line bg-white">
            <div className="border-b border-line px-5 py-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{item.short}</p>
                <p className="font-mono text-xs text-steel">{item.number}</p>
              </div>
              <h2 className="mt-3 font-display text-2xl text-navy">{item.standard}</h2>
              <p className="mt-1 text-sm text-steel">{item.text}</p>
            </div>
            <iframe title={`${item.standard} certificate ${item.number}`} src={`${item.pdf}#toolbar=0&navpanes=0`} className="hidden h-[28rem] w-full bg-mist md:block" />
            <div className="mt-auto flex items-center justify-between gap-3 px-5 py-4">
              <p className="text-xs text-steel">Expires {item.expires}</p>
              <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
                Open certificate
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
