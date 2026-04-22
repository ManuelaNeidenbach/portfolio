 function PagePreviewCard({ title, text, buttonText }) {
  return (
    <article className="bg-stone-50 rounded-[24px] border border-stone-200 p-6 shadow-sm min-h-[220px] flex flex-col">
      <h3 className="text-2xl font-bold text-zinc-900">
        {title}
      </h3>

      <p className="mt-4 text-zinc-700 leading-relaxed flex-1">
        {text}
      </p>

      <button className="mt-6 self-start rounded-full bg-teal-800 px-5 py-3 text-white font-medium shadow hover:bg-teal-900 transition">
        {buttonText}
      </button>
    </article>
  )
}

export default PagePreviewCard