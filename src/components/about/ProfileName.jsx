 import { useTheme } from '../../context/ThemeContext'

function ProfileName() {
  const { isDark } = useTheme()

  return (
    <div className="space-y-6">
      <h1
        className={`text-6xl leading-none md:text-7xl ${
          isDark ? 'text-white' : 'text-[#1a2233]'
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Über mich
      </h1>

      <div className={`h-[3px] w-56 ${isDark ? 'bg-rose-300' : 'bg-[#d6b1a8]'}`}></div>
    </div>
  )
}

export default ProfileName