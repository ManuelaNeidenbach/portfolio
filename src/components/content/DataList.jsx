 import DataListItem from './DataListItem'

function DataList({ items, basePath }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <DataListItem
          key={item.id}
          {...item}
          basePath={basePath}
        />
      ))}
    </div>
  )
}

export default DataList