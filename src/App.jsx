 import Header from './components/layout/Header'
import ProfileName from './components/about/ProfileName'
import ProfileImage from './components/about/ProfileImage'
import AboutText from './components/about/AboutText'
import HobbySection from './components/about/HobbySection'
import PagePreviewCard from './components/ui/PagePreviewCard'

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1f0] text-zinc-800">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-16">
        <section
          id="about"
          className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] shadow-sm p-6 md:p-10"
        >
          <ProfileName />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_430px] items-start">
            <AboutText />
            <ProfileImage />
          </div>

          <div className="mt-10">
            <HobbySection />
          </div>
        </section>

        <section
          id="cyprus"
          className="rounded-[24px] border-4 border-sky-500 bg-[#f7f4f3] shadow-sm p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-600">
            Meine Auswanderung
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PagePreviewCard
              title="Warum Zypern?"
              text="Hier erzähle ich, warum wir diesen Schritt gehen möchten und was uns an Zypern besonders fasziniert."
              buttonText="Mehr lesen"
            />
            <PagePreviewCard
              title="Unsere Planung"
              text="Von Gedanken bis zu echten Vorbereitungen – hier dokumentiere ich unseren Weg."
              buttonText="Mehr lesen"
              align="right"
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
              align="right"
            />
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] shadow-sm p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-500 mb-6">
            Kontakt
          </h2>

          <div className="rounded-[20px] border border-stone-300 bg-[#f7f4f3] shadow-sm p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-zinc-900">
              So kannst du mich erreichen
            </h3>

            <div className="mt-10 max-w-2xl mx-auto space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-center outline-none focus:border-teal-700"
              />

              <input
                type="email"
                placeholder="E-Mail"
                className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-center outline-none focus:border-teal-700"
              />

              <textarea
                placeholder="Nachricht"
                rows="7"
                className="w-full rounded-[20px] border border-stone-300 bg-stone-50 px-5 py-4 outline-none focus:border-teal-700 resize-none"
              ></textarea>

              <div className="flex justify-center pt-2">
                <button className="rounded-full bg-stone-200 px-8 py-3 text-zinc-800 font-medium border border-stone-300 shadow-sm hover:bg-stone-300 transition">
                  Senden
                </button>
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-stone-100 border border-stone-200 px-5 py-4 text-sm text-zinc-600 max-w-xs">
              Links zu anderen Seiten etc
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App