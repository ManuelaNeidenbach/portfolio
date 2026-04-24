 import { Link } from 'react-router-dom'

function DataListItem({ id, title, description, basePath }) {
  return (
    <Link
      to={`${basePath}/${id}`}
      className="group block rounded-[24px] border border-[#ddd4d1] bg-white/70 p-6 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
    >
      <h3
        className="text-3xl text-[#1a2233] transition group-hover:text-[#b9978f]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      <p className="mt-3 text-lg leading-relaxed text-[#3b4351]">
        {description}
      </p>
    </Link>
  )
}

export default DataListItem