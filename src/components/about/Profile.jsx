 import ProfileName from './ProfileName'
import AboutText from './AboutText'
import ProfileImage from './ProfileImage'

function Profile() {
  return (
    <section className="px-2 py-8 md:px-4 md:py-12">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-12">
          <ProfileName />
          <AboutText />
        </div>

        <ProfileImage />
      </div>
    </section>
  )
}

export default Profile