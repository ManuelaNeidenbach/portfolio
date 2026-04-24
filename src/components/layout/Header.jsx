 import { NavLink } from 'react-router-dom'

function Header() {
  const linkClass = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? 'text-[#1f2430] font-semibold'
        : 'text-[#2f3440] hover:text-[#111827]'
    }`

  return (
    <header className="max-w-[1450px] mx-auto px-4 pt-4 md:px-6 md:pt-6">
      <div className="rounded-[28px] border border-[#d8c7c7] bg-[#eadfdf] px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#ceb3b3] bg-[#d7bfbf] text-white shadow-sm">
              <span
                className="text-4xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MN
              </span>
            </div>

            <span
              className="text-2xl font-semibold tracking-tight text-[#1f2430] md:text-3xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Manuela Neidenbach
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xl font-medium md:gap-10">
            <NavLink to="/" className={linkClass}>
              Start
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              Über mich
            </NavLink>
            <NavLink to="/cyprus" className={linkClass}>
              Zypern
            </NavLink>
            <NavLink to="/hobbies" className={linkClass}>
              Hobbys
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projekte
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