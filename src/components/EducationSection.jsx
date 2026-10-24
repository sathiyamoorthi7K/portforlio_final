import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

function EducationSection() {
  const { education } = portfolio

  return (
    <section className="site-shell section-block" id="education" aria-labelledby="education-title">
      <SectionHeading id="education-title" kicker="The foundation" title="Learning that compounds." />
      <div className="education-layout">
        <p className="education-note">A strong foundation in computer science, paired with the habit of learning by doing.</p>
        <div className="education-list"><article className="education-item"><span className="education-date">{education.date}</span><div><h3 className="education-degree">{education.degree}</h3><p className="education-school">{education.school}</p><p className="education-detail">{education.detail}</p></div></article></div>
      </div>
    </section>
  )
}

export default EducationSection