import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Research from '@/components/sections/Research'
import Publications from '@/components/sections/Publications'
import CV from '@/components/sections/CV'
import Talks from '@/components/sections/Talks'
import Interests from '@/components/sections/Interests'
// CosmicGallery hidden until images are ready — re-add when public/images/ is populated
// import CosmicGallery from '@/components/sections/CosmicGallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Research />
      <Publications />
      <CV />
      <Talks />
      <Interests />
    </main>
  )
}
