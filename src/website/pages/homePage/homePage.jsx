import Nav from '../../../components/nav/nav'
import Hero from '../../../components/hero/hero'
import AboutPage from '../../../components/about/about'
import PriceList from '../../../components/PriceList'
import Testimonials from '../../../components/testimonials'
import ContactUs from '../../../components/contactUs/contactUs'
import './homePage.scss'

const HomePage = () => {
  return (
    <>
      <Nav />
      <main className="bg-[#D9D9D9] pt-[88px]">
        <div className="relative">
          <div
            id="home"
            className="w-full mx-auto max-w-[500px] min-[500px]:max-w-[1000px] h-auto p-4 scroll-mt-[88px]"
          >
            <Hero />
          </div>
          <div
            id="about"
            className="h-auto bg-white p-4 text-gray-700 scroll-mt-[88px]"
          >
            <AboutPage />
          </div>
          <div
            id="price-list"
            className="h-auto bg-[#F38299] p-4 scroll-mt-[88px]"
          >
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
  );
}

export default HomePage
