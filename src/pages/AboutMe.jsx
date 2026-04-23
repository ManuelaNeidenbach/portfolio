 import Profile from '../components/about/Profile'
import CyprusSection from '../components/sections/CyprusSection'
import ContactSection from '../components/sections/ContactSection'

function AboutMe() {
  return (
    <div className="space-y-12 md:space-y-16">
      <Profile />
      <CyprusSection />
      <ContactSection />
    </div>
  )
}

export default AboutMe