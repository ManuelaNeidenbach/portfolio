import './App.css'
import Header from './Header'
import ProfileName from './ProfileName'
import ProfileImage from './ProfileImage'
import AboutText from './AboutText'
import HobbySection from './HobbySection'
import PagePreviewCard from './PagePreviewCard'

function App() {
  return (
    <div className="page">
      <Header />

      <main className="about-page">
        <section className="intro-section">
          <ProfileName />
          <div className="intro-content">
            <AboutText />
            <ProfileImage />
          </div>
        </section>

        <HobbySection />

        <section className="preview-section">
          <PagePreviewCard
            title="Meine Auswanderung"
            text="Hier erzähle ich von unserem Weg nach Zypern, unseren Gründen und unseren Plänen."
          />
          <PagePreviewCard
            title="Kontakt"
            text="Hier kannst du mich erreichen und mehr über meine Projekte erfahren."
          />
        </section>
      </main>
    </div>
  )
}

export default App