 import { useState } from 'react'
import projects from '../data/projects.json'
import DataList from '../components/data/DataList'
import DataGrid from '../components/data/DataGrid'
import GitHubProjects from '../components/projects/GitHubProjects'
import { useTheme } from '../context/ThemeContext'

function Projects() {
  const { isDark } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('updated_at')

  const filteredProjects = projects.filter((project) => {
    const searchText = searchTerm.toLowerCase()

    return (
      project.title.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText)
    )
  })

  return (
    <section className="space-y-12 px-2 py-8 md:px-4 md:py-12">
      <div className="space-y-4">
        <h1
          className={`text-5xl md:text-6xl ${isDark ? 'text-white' : 'text-[#1a2233]'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meine Projekte
        </h1>

        <div className={`h-[3px] w-56 ${isDark ? 'bg-rose-300' : 'bg-[#d6b1a8]'}`}></div>

        <p className={`max-w-3xl text-xl leading-relaxed ${isDark ? 'text-zinc-200' : 'text-[#3b4351]'}`}>
          Hier findest du ausgewählte Arbeiten, Lernprojekte und meine GitHub Repositories.
        </p>
      </div>

      <div className={`rounded-[28px] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)] ${
        isDark ? 'border border-zinc-700 bg-zinc-900' : 'border border-[#ddd4d1] bg-[#f8f5f4]'
      }`}>
        <label className={`block text-lg font-semibold ${isDark ? 'text-white' : 'text-[#1f2430]'}`}>
          Projekte durchsuchen
        </label>

        <input
          type="text"
          placeholder="Suchbegriff eingeben..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="mt-4 w-full rounded-full border border-[#d9cfcc] bg-white px-5 py-4 text-lg text-zinc-900 outline-none transition focus:border-[#b9978f]"
        />

        <p className={`mt-3 text-sm ${isDark ? 'text-zinc-300' : 'text-[#3b4351]'}`}>
          Gefundene Einträge: {filteredProjects.length}
        </p>
      </div>

      <div className={`space-y-6 rounded-[28px] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)] ${
        isDark ? 'border border-zinc-700 bg-zinc-900' : 'border border-[#ddd4d1] bg-[#f8f5f4]'
      }`}>
        <h2
          className={`text-3xl ${isDark ? 'text-white' : 'text-[#1a2233]'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Listenansicht
        </h2>

        <DataList items={filteredProjects} basePath="/projects" />
      </div>

      <div className={`space-y-6 rounded-[28px] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)] ${
        isDark ? 'border border-zinc-700 bg-zinc-900' : 'border border-[#ddd4d1] bg-[#f8f5f4]'
      }`}>
        <h2
          className={`text-3xl ${isDark ? 'text-white' : 'text-[#1a2233]'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Gridansicht
        </h2>

        <DataGrid items={filteredProjects} basePath="/projects" />
      </div>

      <div className={`space-y-6 rounded-[28px] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)] ${
        isDark ? 'border border-zinc-700 bg-zinc-900' : 'border border-[#ddd4d1] bg-[#f8f5f4]'
      }`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2
            className={`text-3xl ${isDark ? 'text-white' : 'text-[#1a2233]'}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            GitHub Repositories
          </h2>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-full border border-[#d9cfcc] bg-white px-5 py-3 text-zinc-900 outline-none"
          >
            <option value="updated_at">zuletzt aktualisiert</option>
            <option value="created_at">Erstellungsdatum</option>
            <option value="name">Name</option>
          </select>
        </div>

        <GitHubProjects username="ManuelaNeidenbach" sortBy={sortBy} />
      </div>
    </section>
  )
}

export default Projects