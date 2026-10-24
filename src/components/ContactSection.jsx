import { ArrowUpRight, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const currentYear = new Date().getFullYear()

function ContactSection() {
  return (
    <>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="site-shell contact-inner">
          <div>
            <p className="contact-kicker">Have something in mind?</p>
            <h2 className="contact-title" id="contact-title">Let’s make good work happen.</h2>
            <p className="contact-copy">I’m open to conversations about graduate roles, interesting projects, and opportunities to keep learning with a thoughtful team.</p>
          </div>
          <div className="contact-action"><a className="button-primary" href={`mailto:${portfolio.email}`}><Mail size={15} aria-hidden="true" /> Say hello <ArrowUpRight size={14} aria-hidden="true" /></a></div>
        </div>
      </section>
      <footer className="site-shell site-footer"><span>© {currentYear} {portfolio.name}. Built with care.</span></footer>
    </>
  )
}

export default ContactSection