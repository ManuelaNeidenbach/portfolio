 import DataGridItem from './DataGridItem'

function DataGrid({ items, basePath }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <DataGridItem
          key={item.id}
          {...item}
          basePath={basePath}
        />
      ))}
    </div>
  )
}

export default DataGrid