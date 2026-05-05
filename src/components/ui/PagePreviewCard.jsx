 import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function PagePreviewCard({ title, text, buttonText, to = '/' }) {
  const { isDark } = useTheme()

  return (
    <article
      className={`rounded-[28px] p-8 transition hover:-translate-y-1 ${
        isDark
          ? 'border border-zinc-700 bg-zinc-900 shadow-[0_16px_30px_rgba(0,0,0,0.35)]'
          : 'border border-[#ddd4d1] bg-[#f8f5f4] shadow-[0_10px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_30px_rgba(0,0,0,0.08)]'
      }`}
    >
      <h3
        className={`text-3xl ${isDark ? 'text-white' : 'text-[#1a2233]'}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      <p className={`mt-5 text-lg leading-relaxed ${isDark ? 'text-zinc-200' : 'text-[#3b4351]'}`}>
        {text}
      </p>

      <Link
        to={to}
        className={`mt-8 inline-block rounded-full px-6 py-3 text-base font-semibold transition ${
          isDark
            ? 'border border-zinc-600 bg-zinc-800 text-white hover:bg-zinc-700'
            : 'border border-[#d6c8c3] bg-[#e8dcda] text-[#1f2430] hover:bg-[#decdca]'
        }`}
      >
        {buttonText}
      </Link>
    </article>
  )
}

export default PagePreviewCard