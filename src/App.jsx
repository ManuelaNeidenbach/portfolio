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

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="bg-white/70 rounded-[32px] shadow-md p-8 md:p-12">
          <ProfileName />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
            <AboutText />
            <ProfileImage />
          </div>

          <div className="mt-14">
            <HobbySection />
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <PagePreviewCard
            title="Meine Auswanderung"
            text="Hier teile ich unseren Weg nach Zypern, unsere Gedanken, Herausforderungen und unsere Pläne für die Zukunft."
            buttonText="Mehr dazu"
          />

          <PagePreviewCard
            title="Kontakt"
            text="Hier kannst du mich erreichen, mehr über meine Projekte erfahren oder mir einfach eine Nachricht schreiben."
            buttonText="Kontakt ansehen"
          />
        </section>
      </main>
    </div>
  )
}

export default App