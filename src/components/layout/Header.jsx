 import { NavLink } from 'react-router-dom'

function Header() {
  const linkClass = ({ isActive }) =>
    `transition ${
      isActive ? 'text-sky-600 font-semibold' : 'text-zinc-700 hover:text-sky-600'
    }`

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

          <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium md:gap-6">
            <NavLink to="/" className={linkClass}>
              Start
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              Über mich
            </NavLink>
            <NavLink to="/cyprus" className={linkClass}>
              Zypern
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Kontakt
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header