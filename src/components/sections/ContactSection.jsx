 import { useState } from 'react'

function SuccessMessage({ onReset }) {
  return (
    <div className="max-w-3xl rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 text-center shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
      <h2
        className="text-4xl text-[#1a2233]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Danke für deine Nachricht
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-[#3b4351]">
        Deine Eingabe wurde erfolgreich verarbeitet.
      </p>

      <button
        onClick={onReset}
        className="mt-8 rounded-full border border-[#d6c8c3] bg-[#e8dcda] px-8 py-3 text-lg font-semibold text-[#1f2430] transition hover:bg-[#decdca]"
      >
        Neue Nachricht schreiben
      </button>
    </div>
  )
}

function ContactForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== ''

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!isFormValid) return

    console.log('Formulardaten:', formData)

    setFormData({
      name: '',
      email: '',
      message: '',
    })

    onFormSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-full border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
      />

      <input
        type="email"
        name="email"
        placeholder="E-Mail"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-full border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
      />

      <textarea
        name="message"
        placeholder="Nachricht"
        rows="7"
        value={formData.message}
        onChange={handleChange}
        className="w-full resize-none rounded-[24px] border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
      ></textarea>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`rounded-full px-8 py-3 text-lg font-semibold transition ${
          isFormValid
            ? 'border border-[#d6c8c3] bg-[#e8dcda] text-[#1f2430] hover:bg-[#decdca]'
            : 'cursor-not-allowed border border-stone-200 bg-stone-100 text-stone-400'
        }`}
      >
        Senden
      </button>
    </form>
  )
}

function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

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

      {isSubmitted ? (
        <SuccessMessage onReset={() => setIsSubmitted(false)} />
      ) : (
        <div className="max-w-3xl rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
          <h2 className="text-center text-3xl font-semibold text-[#1f2430]">
            So kannst du mich erreichen
          </h2>

          <ContactForm onFormSubmit={() => setIsSubmitted(true)} />
        </div>
      )}
    </section>
  )
}

export default ContactSection