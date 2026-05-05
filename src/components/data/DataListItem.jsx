 import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function DataListItem({ id, title, description, basePath }) {
  const { isDark } = useTheme()

  return (
    <Link
      to={`${basePath}/${id}`}
      className={`group block rounded-[24px] p-6 transition hover:-translate-y-1 ${
        isDark
          ? 'border border-zinc-700 bg-zinc-900 hover:bg-zinc-800'
          : 'border border-[#ddd4d1] bg-white/70 hover:bg-white'
      }`}
    >
      <h3
        className={`text-3xl transition ${
          isDark ? 'text-white group-hover:text-rose-200' : 'text-[#1a2233] group-hover:text-[#b9978f]'
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      <p className={`mt-3 text-lg leading-relaxed ${isDark ? 'text-zinc-200' : 'text-[#3b4351]'}`}>
        {description}
      </p>
    </Link>
  )
}

export default DataListItem