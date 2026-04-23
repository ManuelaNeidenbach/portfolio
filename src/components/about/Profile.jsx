import ProfileName from './ProfileName'
import AboutText from './AboutText'
import ProfileImage from './ProfileImage'
import HobbySection from './HobbySection'

function Profile() {
  return (
    <section className="space-y-8">
      <ProfileName />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <AboutText />
        <ProfileImage />
      </div>

      <HobbySection />
    </section>
  )
}

export default Profile