import PagePreviewCard from '../ui/PagePreviewCard'

function CyprusSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-sky-600">
        Meine Auswanderung
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <PagePreviewCard
          title="Warum Zypern?"
          text="Mehr Sonne, neue Chancen und ein freieres Leben."
          buttonText="Mehr lesen"
        />

        <PagePreviewCard
          title="Unsere Planung"
          text="Hier dokumentiere ich unseren Weg nach Zypern."
          buttonText="Mehr lesen"
        />
      </div>
    </section>
  )
}

export default CyprusSection