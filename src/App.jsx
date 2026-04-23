 import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import AboutMe from './pages/AboutMe'
import Cyprus from './pages/Cyprus'
import Contact from './pages/Contact'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1f0] text-zinc-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/cyprus" element={<Cyprus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:topic" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App