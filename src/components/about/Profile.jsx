 import ProfileName from './ProfileName'
import AboutText from './AboutText'
import ProfileImage from './ProfileImage'
import HobbySection from './HobbySection'

function Profile() {
  return (
    <section
      id="about"
      className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] shadow-sm p-5 md:p-8 lg:p-10"
    >
      <ProfileName />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
        <AboutText />
        <ProfileImage />
      </div>

      <div className="mt-10">
        <HobbySection />
      </div>
    </section>
  )
}

export default Profile