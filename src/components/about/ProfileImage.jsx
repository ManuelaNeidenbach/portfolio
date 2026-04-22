function ProfileImage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md h-[420px] rounded-[40px] bg-rose-200 shadow-md border border-rose-300 flex items-center justify-center text-xl font-semibold text-zinc-700">
        Bild von mir
      </div>

      <p className="mt-5 text-xl font-semibold text-zinc-800">
        Manuela Neidenbach
      </p>
    </div>
  )
}

export default ProfileImage