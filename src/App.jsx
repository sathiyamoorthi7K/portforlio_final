import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import EducationSection from './components/EducationSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import SkillsSection from './components/SkillsSection.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
