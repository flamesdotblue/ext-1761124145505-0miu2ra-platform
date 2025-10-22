import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 shadow-lg shadow-cyan-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HoloID</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-slate-300 hover:text-white">Features</a>
          <a href="#secure" className="text-sm text-slate-300 hover:text-white">Security</a>
          <a href="#pricing" className="text-sm text-slate-300 hover:text-white">Pricing</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white shadow-sm transition hover:bg-white/10">
          <User className="h-4 w-4" />
          Sign in
        </button>
      </div>
    </header>
  );
}
