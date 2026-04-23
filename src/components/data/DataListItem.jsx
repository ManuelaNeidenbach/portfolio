import { Link } from 'react-router-dom'

function DataListItem({ id, title, description, basePath }) {
  return (
    <Link
      to={`${basePath}/${id}`}
      className="block rounded-2xl border border-stone-300 bg-stone-100 p-5 shadow-sm transition hover:bg-stone-200 hover:shadow-md"
    >
      <h3 className="text-xl font-bold text-zinc-900">
        {title}
      </h3>

      <p className="mt-2 text-zinc-700 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}

export default DataListItem