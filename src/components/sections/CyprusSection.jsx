 import PagePreviewCard from '../cards/PagePreviewCard'
import cyprusCards from '../../data/cyprusCards.json'

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

        <div className="h-1 w-56 bg-[#d6b1a8]"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {cyprusCards.map((card) => (
          <PagePreviewCard
            key={card.id}
            title={card.title}
            text={card.text}
            buttonText={card.buttonText}
            to={card.to}
          />
        ))}
      </div>
    </section>
  )
}

export default CyprusSection