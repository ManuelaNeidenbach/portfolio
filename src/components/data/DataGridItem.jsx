 import { Link } from 'react-router-dom'

function DataGridItem({ id, title, description, basePath }) {
  return (
    <Link
      to={`${basePath}/${id}`}
      className="group flex min-h-[240px] flex-col justify-between rounded-[28px] border border-[#ddd4d1] bg-white/70 p-7 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-2 hover:bg-white hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
    >
      <div>
        <div className="mb-6 h-12 w-12 rounded-full bg-[#d7bfbf]"></div>

        <h3
          className="text-3xl text-[#1a2233] transition group-hover:text-[#b9978f]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-[#3b4351]">
          {description}
        </p>
      </div>

      <span className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b9978f]">
        Mehr lesen
      </span>
    </Link>
  )
}

export default DataGridItem