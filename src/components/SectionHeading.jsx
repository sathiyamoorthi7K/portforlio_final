function SectionHeading({ id, kicker, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title" id={id}>{title}</h2>
      </div>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  )
}

export default SectionHeading