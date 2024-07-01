import { useState } from 'react'
import Logo from '../Logo/Logo'
import { Spin as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <Logo />
      <div className='burguer-icon'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={!isOpen ? "menu" : "menu-visible"} >
        <ul>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav >
  );
};

export default Navbar