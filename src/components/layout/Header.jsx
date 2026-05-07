 import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Header() {
  const { theme, toggleTheme, isDark } = useTheme()

 const linkClass = ({ isActive }) =>
  `relative pb-1 transition duration-200 ${
    isActive
      ? isDark
        ? 'text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-rose-300'
        : 'text-[#1f2430] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#b9978f]'
      : isDark
        ? 'text-zinc-300 hover:text-white'
        : 'text-[#2f3440] hover:text-[#111827]'
  }`

  return (
    <header className="max-w-[1450px] mx-auto px-4 pt-4 md:px-6 md:pt-6">
      <div
        className={`rounded-[28px] px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition ${
          isDark
            ? 'border border-zinc-700 bg-zinc-900'
            : 'border border-[#d8c7c7] bg-[#eadfdf]'
        }`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full shadow-sm ${
                isDark ? 'bg-zinc-700' : 'bg-[#d7bfbf]'
              }`}
            >
              <span
                className="text-4xl text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MN
              </span>
            </div>

            <span
              className={`text-2xl font-semibold tracking-tight md:text-3xl ${
                isDark ? 'text-white' : 'text-[#1f2430]'
              }`}
            >
              Manuela Neidenbach
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xl font-medium md:gap-10">
            <NavLink to="/" className={linkClass}>Start</NavLink>
            <NavLink to="/about" className={linkClass}>Über mich</NavLink>
            <NavLink to="/cyprus" className={linkClass}>Zypern</NavLink>
            <NavLink to="/hobbies" className={linkClass}>Hobbys</NavLink>
            <NavLink to="/projects" className={linkClass}>Projekte</NavLink>
            <NavLink to="/contact" className={linkClass}>Kontakt</NavLink>
          </nav>

          <button
            onClick={toggleTheme}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              isDark
                ? 'bg-stone-100 text-zinc-900 hover:bg-stone-200'
                : 'bg-[#d7bfbf] text-white hover:bg-[#c9abab]'
            }`}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header