 import PagePreviewCard from '../ui/PagePreviewCard'

function CyprusSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1
          className="text-5xl text-[#1a2233] md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meine Auswanderung
        </h1>
        <div className="h-[3px] w-56 bg-[#d6b1a8]"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <PagePreviewCard
          title="Warum Zypern?"
          text="Hier erzähle ich, warum wir diesen Schritt gehen möchten und was uns an Zypern besonders fasziniert."
          buttonText="Mehr lesen"
          to="/details/zypern"
        />
        <PagePreviewCard
          title="Unsere Planung"
          text="Von Gedanken bis zu echten Vorbereitungen – hier dokumentiere ich unseren Weg."
          buttonText="Mehr lesen"
          to="/details/profil"
        />
        <PagePreviewCard
          title="Hoffnungen & Ziele"
          text="Diese Seite zeigt, welche Wünsche, Ziele und Zukunftsbilder wir mit unserer Auswanderung verbinden."
          buttonText="Mehr lesen"
          to="/details/zypern"
        />
        <PagePreviewCard
          title="Unser neuer Lebensabschnitt"
          text="Ein neuer Ort bedeutet neue Chancen, neue Erfahrungen und ein ganz neues Kapitel."
          buttonText="Mehr lesen"
          to="/details/kontakt"
        />
      </div>
    </section>
  )
}

export default CyprusSection