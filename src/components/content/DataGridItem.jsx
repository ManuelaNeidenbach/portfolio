 import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function DataGridItem({ id, title, description, basePath }) {
  const { isDark } = useTheme()

  return (
    <Link
      to={`${basePath}/${id}`}
      className={`group flex min-h-[240px] flex-col justify-between rounded-[28px] p-7 transition hover:-translate-y-2 ${
        isDark
          ? 'border border-zinc-700 bg-zinc-900 hover:bg-zinc-800'
          : 'border border-[#ddd4d1] bg-white/70 hover:bg-white'
      }`}
    >
      <div>
        <div className={`mb-6 h-12 w-12 rounded-full ${isDark ? 'bg-rose-300' : 'bg-[#d7bfbf]'}`}></div>

        <h3
          className={`text-3xl transition ${
            isDark ? 'text-white group-hover:text-rose-200' : 'text-[#1a2233] group-hover:text-[#b9978f]'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <p className={`mt-4 text-lg leading-relaxed ${isDark ? 'text-zinc-200' : 'text-[#3b4351]'}`}>
          {description}
        </p>
      </div>

      <span className={`mt-6 text-sm font-semibold uppercase tracking-[0.2em] ${
        isDark ? 'text-rose-200' : 'text-[#b9978f]'
      }`}>
        Mehr lesen
      </span>
    </Link>
  )
}

export default DataGridItem