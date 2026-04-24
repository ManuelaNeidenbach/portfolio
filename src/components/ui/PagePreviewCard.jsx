 import { Link } from 'react-router-dom'

function PagePreviewCard({ title, text, buttonText, to = '/' }) {
  return (
    <article className="rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.08)]">
      <h3
        className="text-3xl text-[#1a2233]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      <p className="mt-5 text-lg leading-relaxed text-[#3b4351]">
        {text}
      </p>

      <Link
        to={to}
        className="mt-8 inline-block rounded-full border border-[#d6c8c3] bg-[#e8dcda] px-6 py-3 text-base font-semibold text-[#1f2430] transition hover:bg-[#decdca]"
      >
        {buttonText}
      </Link>
    </article>
  )
}

export default PagePreviewCard