import { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import { Spin as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1180);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1180;
      if (isNowDesktop !== isDesktop) {
        setIsDesktop(isNowDesktop);
        if (isNowDesktop) {
          setOpen(false); // Cerrar el menú hamburguesa si cambiamos a vista de escritorio
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);
  
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