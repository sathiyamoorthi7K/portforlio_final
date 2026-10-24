import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../data/portfolio.js'

const navigation = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${portfolio.name}, home`}>
          <span className="brand-mark" aria-hidden="true">{portfolio.initials}</span>
          <span>{portfolio.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader