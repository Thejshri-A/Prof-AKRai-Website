import React, { useState } from 'react'
import './Header.css'
import Adidas from '../../assets/adidas.png'
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      {(menuOpened === false && mobile === true) ? (
        <div
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: "5px", }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Adidas} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='home' span={true} smooth={true} activeClass="active">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='academics' span={true} smooth={true}>
              Academic Interests
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='awards' span={true} smooth={true}>
              Awards and Accolades
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='about' span={true} smooth={true}>
              Explore More
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='students' span={true} smooth={true}>
              Papers Published
            </Link></li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='email' span={true} smooth={true}>
              Contact
            </Link></li>
        </ul>
      )}
    </div>
  )
}

export default Header
