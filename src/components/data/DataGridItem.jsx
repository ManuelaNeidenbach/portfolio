import { Link } from 'react-router-dom'

function DataGridItem({ id, title, description, basePath }) {
  return (
    <Link
      to={`${basePath}/${id}`}
      className="block rounded-2xl border border-stone-300 bg-stone-100 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-stone-50 hover:shadow-md"
    >
      <h3 className="text-xl font-bold text-zinc-900">
        {title}
      </h3>

      <p className="mt-3 text-zinc-700 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}

export default DataGridItem