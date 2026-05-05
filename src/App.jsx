 import { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'

import Header from './components/layout/Header'
import AboutMe from './pages/AboutMe'
import Cyprus from './pages/Cyprus'
import Contact from './pages/Contact'
import DetailPage from './pages/DetailPage'
import Hobbies from './pages/Hobbies'
import Projects from './pages/Projects'

function App() {
  const topRef = useRef(null)
  const { isDark } = useTheme()

  function scrollToTop() {
    topRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={topRef}
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-zinc-950 text-stone-100'
          : 'bg-[#f4f1f0] text-zinc-800'
      }`}
    >
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/cyprus" element={<Cyprus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:topic" element={<DetailPage />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies/:id" element={<DetailPage />} />
          <Route path="/projects/:id" element={<DetailPage />} />
        </Routes>
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold shadow-lg transition ${
          isDark
            ? 'bg-stone-100 text-zinc-900 hover:bg-stone-200'
            : 'bg-[#e8dcda] text-[#1f2430] hover:bg-[#decdca]'
        }`}
        aria-label="Zum Seitenanfang scrollen"
      >
        ↑
      </button>
    </div>
  )
}

export default App