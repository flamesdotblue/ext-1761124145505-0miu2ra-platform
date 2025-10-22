export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} HoloID. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Docs</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
