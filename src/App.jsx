// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react'
import HamburgerMenu from './components/HamburgerMenu';
import './App.css'

function App() {
  // const [isActiveCross, setIsActiveCross] = useState(false);

  return (
    <>
      <div>
        {/* <Hamburger toggled={isActiveCross} toggle={setIsActiveCross}/>
        <FontAwesomeIcon icon={faXmark} /> */}
        <HamburgerMenu/>
      </div>
    </>
  )
}

export default App
