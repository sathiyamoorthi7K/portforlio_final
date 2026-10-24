import { ArrowDown, ArrowRight, Code2, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function HeroSection() {
  return (
    <section className="site-shell hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> Final-year computer science student</div>
        <h1 className="hero-title" id="hero-title">Thoughtful code.<br /><em>Useful</em> ideas.</h1>
        <p className="hero-description">{portfolio.intro}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">Explore my work <ArrowRight size={15} aria-hidden="true" /></a>
          <a className="button-secondary" href="#contact">Let’s connect</a>
        </div>
        <p className="hero-note"><ArrowDown size={14} aria-hidden="true" /> Scroll to explore</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit-line" />
        <div className="code-window">
          <div className="window-top"><div className="window-dots"><span /><span /><span /></div><span className="window-label">building with purpose.jsx</span></div>
          <div className="code-body">
            <span className="code-line"><span className="code-key">const</span> <span className="code-name">idea</span> = {'{'}</span>
            <span className="code-line code-indent">curiosity: <span className="code-string">'always'</span>,</span>
            <span className="code-line code-indent">impact: <span className="code-string">'real people'</span>,</span>
            <span className="code-line code-indent">craft: <span className="code-string">'in progress'</span></span>
            <span className="code-line">{'}'}</span>
            <span className="code-line"><span className="code-key">export default</span> idea<span className="code-cursor" /></span>
          </div>
        </div>
        <span className="float-tag float-tag-top"><Sparkles size={14} /> Curious by default</span>
        <span className="float-tag float-tag-bottom"><Code2 size={14} /> Learning by building</span>
      </div>
    </section>
  )
}

export default HeroSection