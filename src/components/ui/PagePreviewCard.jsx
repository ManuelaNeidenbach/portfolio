function PagePreviewCard({ title, text }) {
  return (
    <article className="preview-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default PagePreviewCard