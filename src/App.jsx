import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Stack from './components/Stack.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import ScrollBar from './components/ScrollBar.jsx'
import { profile } from './data.js'

export default function App() {
  return (
    <>
      <ScrollBar />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-6 pb-12 text-sm text-mute sm:px-10">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
