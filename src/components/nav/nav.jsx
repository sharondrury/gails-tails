import { useState, useEffect, useRef } from 'react'
import './nav.scss'

const LINKS = [
  { label: 'Home',       target: 'home' },
  { label: 'About',      target: 'about' },
  { label: 'Price List', target: 'price-list' },
  { label: 'Contact Us', target: 'contact-us' },
]

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const navRef = useRef(null)
  const lastScrollY = useRef(0)

  const handleNavClick = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setNavVisible(currentY < lastScrollY.current || currentY < 10)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!navVisible) setMenuOpen(false)
  }, [navVisible])

  return (
    <nav ref={navRef} className={`nav${navVisible ? '' : ' nav--hidden'}`}>
      <a href="#home" className="nav__logo">
        <img src="./src/assets/images/logoOther.svg" alt="Gail's Tails logo" />
      </a>
      <div className="nav__inner">
        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.target}>
              <button
                className="nav__link"
                onClick={() => handleNavClick(link.target)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
