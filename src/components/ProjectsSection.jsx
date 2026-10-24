import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

function ProjectVisual({ project }) {
  return <div className={`project-visual project-visual--${project.visual}`} role="img" aria-label={project.visualLabel}><div className="visual-panel" aria-hidden="true"><span className="visual-line visual-line--short" /><span className="visual-line visual-line--medium" /><span className="visual-accent">{project.number}</span><span className="visual-accent">UI</span><span className="visual-line" /></div></div>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-meta"><span className="project-number">Project {project.number}</span><span>{project.category}</span></div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags" aria-label="Technologies">{project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  )
}

function ProjectsSection() {
  return (
    <section className="site-shell section-block" id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" kicker="Selected work" title="Ideas, made tangible." description="A few projects that show how I think, what I’m learning, and the kind of problems I enjoy exploring." />
      <div className="project-grid">{portfolio.projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div>
    </section>
  )
}

export default ProjectsSection