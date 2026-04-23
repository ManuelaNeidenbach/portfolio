function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] p-5 shadow-sm md:p-8 lg:p-10"
    >
      <h2 className="mb-6 text-3xl font-bold text-zinc-500 md:text-4xl">
        Kontakt
      </h2>

      <div className="rounded-[20px] border border-stone-300 bg-[#f7f4f3] p-5 shadow-sm md:p-8">
        <h3 className="text-center text-2xl font-bold text-zinc-900 md:text-3xl">
          So kannst du mich erreichen
        </h3>

        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-center text-sm outline-none transition focus:border-teal-700 md:text-base"
          />

          <input
            type="email"
            placeholder="E-Mail"
            className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-center text-sm outline-none transition focus:border-teal-700 md:text-base"
          />

          <textarea
            placeholder="Nachricht"
            rows="7"
            className="w-full resize-none rounded-[20px] border border-stone-300 bg-stone-50 px-5 py-4 text-sm outline-none transition focus:border-teal-700 md:text-base"
          ></textarea>

          <div className="flex justify-center pt-2">
            <button className="rounded-full border border-stone-300 bg-stone-200 px-8 py-3 font-medium text-zinc-800 shadow-sm transition hover:bg-stone-300 lg:hover:scale-105">
              Senden
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection