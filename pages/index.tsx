import type { NextPage } from 'next'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyChoose from '../components/WhyChoose'
import Products from '../components/Products'
import Nutrition from '../components/Nutrition'
import Recipes from '../components/Recipes'
import Timeline from '../components/Timeline'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Nutrition />
      <Recipes />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home
