 function PagePreviewCard({ title, text, buttonText, align = 'left' }) {
  const alignment =
    align === 'right' ? 'md:ml-16' : 'md:mr-16'

  return (
    <article
      className={`rounded-[20px] border border-stone-300 bg-stone-100 shadow-sm p-6 min-h-[180px] ${alignment}`}
    >
      <h3 className="text-xl font-bold text-zinc-900">{title}</h3>

      <p className="mt-4 text-zinc-700 leading-relaxed">{text}</p>

      <button className="mt-6 rounded-full bg-stone-200 px-5 py-3 text-zinc-800 font-medium border border-stone-300 shadow-sm hover:bg-stone-300 transition">
        {buttonText}
      </button>
    </article>
  )
}

export default PagePreviewCard