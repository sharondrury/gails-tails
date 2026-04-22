import Nav from './components/nav/nav'
import Homepage from './components/Homepage'
import AboutPage from './components/About'
import PriceList from './components/PriceList'
import Testimonials from './components/testimonials'
import ContactUs from './components/contactUs/contactUs'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main className="bg-[#D9D9D9] pt-[88px]">
        <div className="w-full max-w-[500px] min-[500px]:max-w-[1000px] mx-auto relative">
          <div id="home" className="h-auto p-4 scroll-mt-[88px]">
            <Homepage />
          </div>
          <div id="about" className="h-auto bg-white p-4 text-gray-700 scroll-mt-[88px]">
            <AboutPage />
          </div>
          <div id="price-list" className="h-auto bg-[#F38299] p-4 scroll-mt-[88px]">
            <PriceList />
          </div>
          <div id="testimonials" className="h-auto p-4 scroll-mt-[88px]">
            <Testimonials />
          </div>
          <div id="contact-us" className="h-auto bg-white scroll-mt-[88px]">
            <ContactUs />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
