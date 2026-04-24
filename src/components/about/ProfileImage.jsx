 import profilbild from '../../assets/manuela.jpeg'

function ProfileImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-[620px]">
        <img
          src={profilbild}
          alt="Manuela Neidenbach"
          className="h-[420px] w-full rounded-[180px] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:h-[520px]"
        />
      </div>
    </div>
  )
}

export default ProfileImage