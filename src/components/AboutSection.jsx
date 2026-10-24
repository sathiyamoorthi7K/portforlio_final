import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const facts = [
  ['Focus', 'Full-stack development'],
  ['Based in', 'Your city'],
  ['Currently', 'Finishing my degree'],
  ['Looking for', 'Graduate opportunities'],
]

function AboutSection() {
  return (
    <section className="site-shell section-block" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" kicker="A little about me" title="Curious mind, practical maker." description="I care about building software that feels considered, works reliably, and makes someone’s day a little easier." />
      <div className="about-grid">
        <div className="about-copy">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="about-aside" aria-label="A few details">
          {facts.map(([label, value]) => <div className="fact-item" key={label}><span className="fact-label">{label}</span><span className="fact-value">{value}</span></div>)}
        </div>
      </div>
    </section>
  )
}

export default AboutSection