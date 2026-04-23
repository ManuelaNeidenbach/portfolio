 import PagePreviewCard from '../ui/PagePreviewCard'

function CyprusSection() {
  return (
    <section
      id="cyprus"
      className="rounded-[24px] border-4 border-sky-500 bg-[#f7f4f3] p-5 shadow-sm md:p-8 lg:p-10"
    >
      <h2 className="text-center text-3xl font-bold text-sky-600 md:text-4xl">
        Meine Auswanderung
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <PagePreviewCard
          title="Warum Zypern?"
          text="Hier erzähle ich, warum wir diesen Schritt gehen möchten und was uns an Zypern besonders fasziniert."
          buttonText="Mehr lesen"
        />
        <PagePreviewCard
          title="Unsere Planung"
          text="Von Gedanken bis zu echten Vorbereitungen – hier dokumentiere ich unseren Weg."
          buttonText="Mehr lesen"
        />
        <PagePreviewCard
          title="Hoffnungen & Ziele"
          text="Diese Seite zeigt, welche Wünsche, Ziele und Zukunftsbilder wir mit unserer Auswanderung verbinden."
          buttonText="Mehr lesen"
        />
        <PagePreviewCard
          title="Unser neuer Lebensabschnitt"
          text="Ein neuer Ort bedeutet auch neue Chancen, neue Erfahrungen und ein ganz neues Kapitel für unsere Familie."
          buttonText="Mehr lesen"
        />
      </div>
    </section>
  )
}

export default CyprusSection