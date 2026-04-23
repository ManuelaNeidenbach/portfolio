 import Header from '../layout/Header'
import Profile from './Profile'
import CyprusSection from '../sections/CyprusSection'
import ContactSection from '../sections/ContactSection'

function AboutMe() {
  return (
    <div className="min-h-screen bg-[#f4f1f0] text-zinc-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-12 md:px-6 md:py-8 lg:space-y-16">
        <Profile />
        <CyprusSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default AboutMe