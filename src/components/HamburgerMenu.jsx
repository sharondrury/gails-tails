'use client'
import { useState } from "react"
import Hamburger from "hamburger-react";
import List from "./List";
import config from "./config.json"
import Header from "./Header";
import AboutPage from "./About";
import Homepage from "./Homepage";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const { links } = config;
    return (
      <>
        <section className="flex justify-center bg-red-200">
          <div className="w-[500px] relative">
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[500px] bg-orange-200 z-10">
              <div className="p-4">
                <Header />
              </div>
              <div className="absolute top-4 right-4">
                <Hamburger size={24} toggled={open} toggle={setOpen} />
              </div>
            </div>
            {open && (
              <div className="fixed absolute top-0 right-0 w-[250px] h-[500px] text-black bg-[#F38299] dark:text-white ">
                <header className=" p-4 flex items-center justify-end ">
                  <Hamburger size={24} toggled={open} toggle={setOpen} />
                </header>
                <main className="flex items-start justify-start h-screen text-4xl text-center px-6">
                  <List list={links} />
                </main>
              </div>
            )}
            <div className="mt-[100px]">
              <Homepage />
            </div>
            <div className="mt-[800px]">
              <AboutPage />
            </div>
          </div>
        </section>
      </>
    );
}