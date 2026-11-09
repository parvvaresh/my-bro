import { useReveal } from '../lib/useReveal'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import CareerTimeline from '../components/CareerTimeline'
import Expertise from '../components/Expertise'
import Education from '../components/Education'
import ExecutiveExperience from '../components/ExecutiveExperience'
import TeachingExperience from '../components/TeachingExperience'
import Research from '../components/Research'
import Publications from '../components/Publications'
import Patent from '../components/Patent'
import Honors from '../components/Honors'
import Activities from '../components/Activities'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'
import Backdrop from '../components/ui/Backdrop'

export default function Home() {
  useReveal()

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerTimeline />
        <Expertise />
        <Education />
        <ExecutiveExperience />
        <TeachingExperience />
        <Research />
        <Publications />
        <Patent />
        <Honors />
        <Activities />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
