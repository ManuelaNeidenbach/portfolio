import { Link, useParams } from 'react-router-dom'

function DetailPage() {
  const { topic } = useParams()

  const content = {
    profil: 'Hier könnten später mehr Informationen über mich stehen.',
    zypern:
      'Hier könnten später ausführliche Inhalte zu meiner Auswanderung nach Zypern stehen.',
    kontakt:
      'Hier könnten später zusätzliche Kontaktinformationen oder häufige Fragen stehen.',
  }

  return (
    <section className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] p-6 shadow-sm md:p-8">
      <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
        Detailseite: {topic}
      </h1>

      <p className="mt-6 leading-relaxed text-zinc-700">
        {content[topic] || 'Für diesen Bereich gibt es aktuell noch keine Inhalte.'}
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-full border border-stone-300 bg-stone-200 px-5 py-3 font-medium text-zinc-800 shadow-sm transition hover:bg-stone-300"
      >
        Zurück zur Startseite
      </Link>
    </section>
  )
}

export default DetailPage