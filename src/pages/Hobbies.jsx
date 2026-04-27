 import { useState } from 'react'
import hobbies from '../data/hobbies.json'
import DataList from '../components/data/DataList'
import DataGrid from '../components/data/DataGrid'

function Hobbies() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredHobbies = hobbies.filter((hobby) => {
    const searchText = searchTerm.toLowerCase()

    return (
      hobby.title.toLowerCase().includes(searchText) ||
      hobby.description.toLowerCase().includes(searchText)
    )
  })

  return (
    <section className="space-y-12 px-2 py-8 md:px-4 md:py-12">
      <div className="space-y-4">
        <h1
          className="text-5xl text-[#1a2233] md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meine Hobbys
        </h1>

        <div className="h-[3px] w-56 bg-[#d6b1a8]"></div>

        <p className="max-w-3xl text-xl leading-relaxed text-[#3b4351]">
          Hier zeige ich meine Interessen einmal als Liste und einmal als Grid.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
        <label className="block text-lg font-semibold text-[#1f2430]">
          Hobbys durchsuchen
        </label>

        <input
          type="text"
          placeholder="Suchbegriff eingeben..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="mt-4 w-full rounded-full border border-[#d9cfcc] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#b9978f]"
        />

        <p className="mt-3 text-sm text-[#3b4351]">
          Gefundene Einträge: {filteredHobbies.length}
        </p>
      </div>

      <div className="space-y-6 rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
        <h2
          className="text-3xl text-[#1a2233]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Listenansicht
        </h2>

        <DataList items={filteredHobbies} basePath="/hobbies" />
      </div>

      <div className="space-y-6 rounded-[28px] border border-[#ddd4d1] bg-[#f8f5f4] p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
        <h2
          className="text-3xl text-[#1a2233]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Gridansicht
        </h2>

        <DataGrid items={filteredHobbies} basePath="/hobbies" />
      </div>
    </section>
  )
}

export default Hobbies