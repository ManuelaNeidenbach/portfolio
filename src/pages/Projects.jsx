import projects from '../data/projects.json'
import DataList from '../components/data/DataList'
import DataGrid from '../components/data/DataGrid'

function Projects() {
  return (
    <section className="space-y-10">
      <div className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
          Meine Projekte
        </h1>
        <p className="mt-4 text-zinc-700">
          Hier zeige ich meine Projekte einmal als Liste und einmal als Grid.
        </p>
      </div>

      <div className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-zinc-900">Listenansicht</h2>
        <div className="mt-6">
          <DataList items={projects} basePath="/projects" />
        </div>
      </div>

      <div className="rounded-[24px] border border-stone-300 bg-[#f7f4f3] p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-zinc-900">Gridansicht</h2>
        <div className="mt-6">
          <DataGrid items={projects} basePath="/projects" />
        </div>
      </div>
    </section>
  )
}

export default Projects