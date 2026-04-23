import { Link } from 'react-router-dom'

function DataGrid({ items, basePath }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`${basePath}/${item.id}`}
          className="rounded-2xl border border-stone-300 bg-stone-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-xl font-bold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-3 text-zinc-700">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default DataGrid