 function ContactSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1
          className="text-5xl text-[#1a2233] md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kontakt
        </h1>
        <div className="h-[3px] w-56 bg-[#d6b1a8]"></div>
      </div>

      <div className="max-w-3xl rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
        <h2 className="text-center text-3xl font-semibold text-[#1f2430]">
          So kannst du mich erreichen
        </h2>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-full border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
          />

          <input
            type="email"
            placeholder="E-Mail"
            className="w-full rounded-full border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
          />

          <textarea
            placeholder="Nachricht"
            rows="7"
            className="w-full resize-none rounded-[24px] border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
          ></textarea>

          <button className="rounded-full border border-[#d6c8c3] bg-[#e8dcda] px-8 py-3 text-lg font-semibold text-[#1f2430] transition hover:bg-[#decdca]">
            Senden
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection