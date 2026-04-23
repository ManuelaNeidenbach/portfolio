function ContactSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-zinc-500">
        Kontakt
      </h2>

      <div className="bg-white rounded-3xl p-8 shadow-md max-w-2xl">
        <h3 className="text-2xl font-bold text-center mb-6">
          So kannst du mich erreichen
        </h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-full px-5 py-3"
          />

          <input
            type="email"
            placeholder="E-Mail"
            className="w-full border rounded-full px-5 py-3"
          />

          <textarea
            placeholder="Nachricht"
            rows="6"
            className="w-full border rounded-2xl px-5 py-3"
          ></textarea>

          <button className="bg-teal-700 text-white px-6 py-3 rounded-full">
            Senden
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection