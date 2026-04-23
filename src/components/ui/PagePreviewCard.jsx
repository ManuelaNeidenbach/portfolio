 function PagePreviewCard({ title, text, buttonText }) {
  return (
    <article className="rounded-[20px] border border-stone-300 bg-stone-100 p-6 shadow-sm transition lg:hover:-translate-y-1 lg:hover:shadow-md">
      <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
        {text}
      </p>

      <button className="mt-6 rounded-full border border-stone-300 bg-stone-200 px-5 py-3 font-medium text-zinc-800 shadow-sm transition hover:bg-stone-300">
        {buttonText}
      </button>
    </article>
  )
}

export default PagePreviewCard