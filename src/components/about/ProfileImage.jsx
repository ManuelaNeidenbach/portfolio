 function ProfileImage() {
  return (
    <div className="flex flex-col items-center">
      <div className="group w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
        <div className="flex h-[240px] items-center justify-center rounded-full border border-[#cfaeae] bg-[#dfc6c6] px-6 text-center text-base font-semibold text-zinc-700 shadow-sm transition duration-300 md:h-[280px] lg:h-[340px] lg:grayscale lg:hover:grayscale-0">
          Bild von mir
        </div>
      </div>

      <p className="mt-5 text-xl font-semibold text-zinc-900 md:text-2xl">
        Manuela Neidenbach
      </p>
    </div>
  )
}

export default ProfileImage