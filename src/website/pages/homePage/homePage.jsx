import { useState, useEffect, useRef } from 'react'
import Nav from '../../../components/nav/nav'
import Hero from '../../../components/hero/hero'
import AboutPage from '../../../components/about/about'
import PriceList from '../../../components/PriceList'
import Testimonials from '../../../components/testimonials/testimonials'
import ContactUs from '../../../components/contactUs/contactUs'
import Footer from '../../../components/footer/footer'
import arrowUp from '../../../assets/images/arrow-up.svg'
import './homePage.scss'

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollTop(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Nav />
      <main className="bg-[#D9D9D9] pt-[88px]">
        <div className="relative">
          <div
            ref={heroRef}
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
            className="h-auto bg-[#F38299] py-8 scroll-mt-[88px]"
          >
            <PriceList />
          </div>
          <div id="testimonials" className="bg-white h-auto scroll-mt-[88px]">
            <Testimonials />
          </div>
          <div id="contact-us" className="h-auto bg-white scroll-mt-[88px]">
            <ContactUs />
          </div>
        </div>
      </main>
      <Footer />
      <button
        className={`scroll-top-btn${showScrollTop ? ' scroll-top-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <img src={arrowUp} alt="" aria-hidden="true" />
      </button>
    </>
  );
}

export default HomePage
