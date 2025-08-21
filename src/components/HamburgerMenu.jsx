'use client'
import { useState } from "react"
import Hamburger from "hamburger-react";
import List from "./List";
import config from "./config.json"
import Header from "./Header";
import AboutPage from "./About";
import Homepage from "./Homepage";
import PriceList from "./PriceList";
import Testimonials from "./testimonials";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const { links } = config;
    return (
      <>
        <section className="flex justify-center bg-[#D9D9D9] pt-[88px]">
          <div className="w-full max-w-[500px] min-[500px]:max-w-[1000px] relative">
            <div className="nav-background fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] min-[500px]:max-w-[1000px] z-10">
              {/* Mobile: Logo left, hamburger right */}
              <div className="min-[500px]:hidden flex items-center justify-between py-5 px-4">
                <a href="#homepage">
                  <img
                    src="/src/assets/logoOther.svg"
                    alt="Logo"
                    className="w-10 h-10"
                  />
                </a>
                <Hamburger size={24} toggled={open} toggle={setOpen} />
              </div>

              {/* Desktop: Logo left, Header right */}
              <div className="hidden min-[500px]:flex items-center p-4">
                <a href="#homepage">
                  <img
                    src="/src/assets/logoOther.svg"
                    alt="Logo"
                    className="w-10 h-10"
                  />
                </a>
                <Header />
              </div>
            </div>

            {open && (
              <div className="fixed top-0 right-0 w-[250px] h-[500px] text-black bg-[#F38299] dark:text-white z-20 min-[500px]:hidden">
                <header className="p-4 flex items-center justify-end">
                  <Hamburger size={24} toggled={open} toggle={setOpen} />
                </header>
                <main className="flex items-start justify-start h-screen text-4xl text-center px-6">
                  <List links={links} />
                </main>
              </div>
            )}

            <section>
              <div id="homepage" className="h-auto p-4 scroll-mt-[88px]">
                <Homepage />
              </div>
              <div
                id="about"
                className="h-auto bg-white p-4 text-gray-700 scroll-mt-[88px]"
              >
                <AboutPage />
              </div>
              <div
                id="pricelist"
                className="h-auto bg-[#F38299] p-4 scroll-mt-[88px]"
              >
                <PriceList />
              </div>
              <div
                id="testimonials"
                className="h-auto p-4 scroll-mt-[88px]"
              >
                <Testimonials />
              </div>
            </section>
          </div>
        </section>
      </>
    );
}