function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-6">
      <div className="bg-rose-100 rounded-2xl shadow-sm px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-rose-200 border border-rose-300"></div>
          <span className="font-semibold text-zinc-800">Manuela Neidenbach</span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-zinc-700">
          <a href="#" className="hover:text-teal-700 transition">Start</a>
          <a href="#" className="hover:text-teal-700 transition">Über mich</a>
          <a href="#" className="hover:text-teal-700 transition">Zypern</a>
          <a href="#" className="hover:text-teal-700 transition">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}

export default Header