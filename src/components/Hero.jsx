import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Instant verification for modern fintech
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Your digital identity, verified and iridescent
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            HoloID brings secure, real-time identity verification to your apps with a futuristic, privacy-first approach. Delight users with a seamless onboarding experience.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
            >
              Get started free
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Live demo
            </a>
          </div>

          <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Passkey-ready</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> SOC 2 compliant</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Global coverage</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> 99.99% uptime</li>
          </ul>
        </div>

        <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl shadow-cyan-500/10 sm:h-[520px] lg:h-[600px]">
          <Spline 
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 blur-3xl">
        <div className="h-72 w-[36rem] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20" />
      </div>
    </section>
  );
}
