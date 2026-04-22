 function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-6">
      <div className="bg-[#eadfdf] border border-[#d8c7c7] rounded-2xl shadow-sm px-5 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#d9c3c3] border border-[#c9b0b0]"></div>
          <span className="font-semibold text-zinc-800 text-sm md:text-base">
            Manuela Neidenbach
          </span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-zinc-700">
          <a href="#about" className="hover:text-sky-600 transition">
            Start
          </a>
          <a href="#about" className="hover:text-sky-600 transition">
            Über mich
          </a>
          <a href="#cyprus" className="hover:text-sky-600 transition">
            Zypern
          </a>
          <a href="#contact" className="hover:text-sky-600 transition">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header