import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import RecentListing from "./components/RecentListing"
import RecentSales from "./components/RecentSales"
import Testimonials from "./components/Testimonials"
import WhyUs from "./components/WhyUs"

const App = () => {
  return (
    <main className="antiliased overflow-y-hidden">
    <Hero/>
    <About/>
    <RecentListing/>
    <RecentSales/>
    <WhyUs/>
    <Testimonials/>
    <Contact/>
    </main>
  )
}

export default App