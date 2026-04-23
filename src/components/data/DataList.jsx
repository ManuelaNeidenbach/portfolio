import { Link } from 'react-router-dom'

function DataList({ items, basePath }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`${basePath}/${item.id}`}
          className="block rounded-2xl border border-stone-300 bg-stone-100 p-5 shadow-sm transition hover:bg-stone-200"
        >
          <h3 className="text-xl font-bold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-2 text-zinc-700">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default DataList