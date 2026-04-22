 function ProfileImage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[420px] h-[300px] md:h-[340px] rounded-full bg-[#dfc6c6] border border-[#cfaeae] shadow-sm flex items-center justify-center text-lg font-semibold text-zinc-700 text-center px-6">
        Bild von mir
      </div>

      <p className="mt-5 text-2xl font-semibold text-zinc-900">
        Manuela Neidenbach
      </p>
    </div>
  )
}

export default ProfileImage