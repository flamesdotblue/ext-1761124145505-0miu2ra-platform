import { Shield, CreditCard, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Bank-grade security',
    description:
      'End-to-end encryption, device attestation, and hardware-bound keys keep identities secure.',
    icon: Shield,
    id: 'secure',
  },
  {
    title: 'Frictionless KYC',
    description:
      'Verify users in seconds with document scan, liveness, and sanctions checks built-in.',
    icon: CreditCard,
    id: 'kyc',
  },
  {
    title: 'Beautiful by default',
    description:
      'Drop-in components with a futuristic aesthetic that matches your brand out of the box.',
    icon: Sparkles,
    id: 'ui',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to verify with confidence
          </h2>
          <p className="mt-3 text-slate-300">
            Powerful APIs, gorgeous UI, and enterprise-grade security in one streamlined platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 shadow-md shadow-cyan-500/30">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.description}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-cyan-300/90 group-hover:text-cyan-200">
                Learn more →
              </div>
            </article>
          ))}
        </div>

        <div id="pricing" className="mt-14 grid items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Simple, usage-based pricing</h3>
            <p className="mt-2 text-sm text-slate-300">
              Get started free with 500 verifications. Scale on-demand with transparent per-check pricing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
            >
              Start for free
            </a>
            <a
              href="#contact-sales"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
