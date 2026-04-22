function PagePreviewCard({ title, text, buttonText }) {
  return (
    <article className="bg-white rounded-[28px] p-8 shadow-md border border-stone-200">
      <h3 className="text-2xl font-bold text-zinc-900">{title}</h3>

      <p className="mt-4 text-zinc-700 leading-relaxed">
        {text}
      </p>

      <button className="mt-6 inline-flex items-center rounded-2xl bg-teal-700 px-5 py-3 text-white font-medium shadow hover:bg-teal-800 transition">
        {buttonText}
      </button>
    </article>
  )
}

export default PagePreviewCard