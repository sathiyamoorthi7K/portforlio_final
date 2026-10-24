import { Braces, Database, Wrench } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const icons = [Braces, Database, Wrench]

function SkillsSection() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="site-shell section-block">
        <SectionHeading id="skills-title" kicker="The toolkit" title="Tools I reach for." description="A growing set of languages, frameworks, and ways of working. I value strong fundamentals and enjoy learning the right tool for the job." />
        <div className="skill-groups">
          {portfolio.skills.map((group, index) => {
            const Icon = icons[index]
            return <div className="skill-group" key={group.title}><h3 className="skill-group-title"><Icon size={16} aria-hidden="true" /> {group.title}</h3><div className="skill-list">{group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div></div>
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection