import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Research from '@/components/sections/Research'
import CosmicGallery from '@/components/sections/CosmicGallery'
import Publications from '@/components/sections/Publications'
import CV from '@/components/sections/CV'
import Talks from '@/components/sections/Talks'
import Interests from '@/components/sections/Interests'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Research />
      <CosmicGallery />
      <Publications />
      <CV />
      <Talks />
      <Interests />
    </main>
  )
}
