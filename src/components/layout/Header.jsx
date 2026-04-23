 function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 pt-4 md:px-6 md:pt-6">
      <div className="rounded-2xl border border-[#d8c7c7] bg-[#eadfdf] px-5 py-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border border-[#c9b0b0] bg-[#d9c3c3]"></div>
            <span className="text-sm font-semibold text-zinc-800 md:text-base">
              Manuela Neidenbach
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-700 md:gap-6">
            <a href="#about" className="transition hover:text-sky-600">
              Start
            </a>
            <a href="#about" className="transition hover:text-sky-600">
              Über mich
            </a>
            <a href="#cyprus" className="transition hover:text-sky-600">
              Zypern
            </a>
            <a href="#contact" className="transition hover:text-sky-600">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header