 import Header from './components/layout/Header'
import ProfileName from './components/about/ProfileName'
import ProfileImage from './components/about/ProfileImage'
import AboutText from './components/about/AboutText'
import HobbySection from './components/about/HobbySection'
import PagePreviewCard from './components/ui/PagePreviewCard'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-zinc-800">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-12">
        <section
          id="about"
          className="bg-white rounded-[28px] border border-stone-300 shadow-sm p-6 md:p-10"
        >
          <ProfileName />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_420px] items-start">
            <AboutText />
            <ProfileImage />
          </div>

          <div className="mt-10">
            <HobbySection />
          </div>
        </section>

        <section
          id="cyprus"
          className="bg-white rounded-[28px] border border-stone-300 shadow-sm p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900">
            Meine Auswanderung
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <PagePreviewCard
              title="Warum Zypern?"
              text="Hier erzähle ich, warum wir diesen Schritt gehen möchten und was uns an Zypern besonders fasziniert."
              buttonText="Mehr lesen"
            />
            <PagePreviewCard
              title="Unsere Planung"
              text="Von Gedanken über Organisation bis zu echten Vorbereitungen – hier dokumentiere ich unseren Weg."
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

        <section
          id="contact"
          className="bg-white rounded-[28px] border border-stone-300 shadow-sm p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900">
            Kontakt
          </h2>

          <div className="mt-8 max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 outline-none focus:border-teal-700"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 outline-none focus:border-teal-700"
            />
            <textarea
              placeholder="Nachricht"
              rows="6"
              className="w-full rounded-[24px] border border-stone-300 bg-stone-50 px-5 py-4 outline-none focus:border-teal-700 resize-none"
            ></textarea>

            <div className="flex justify-center">
              <button className="rounded-full bg-teal-800 px-8 py-3 text-white font-medium shadow hover:bg-teal-900 transition">
                Senden
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App