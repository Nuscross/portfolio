import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({toggleMenu}) => {

  const { amount } = useSelector((state) => state.cart);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <h1>
          coffee<br/>
          <span className="text-[12px]">blend</span>
        </h1>
        <GiHamburgerMenu className="menu-hamburger" onClick={toggleMenu} />
        <div className="nav-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Menu</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
          <NavLink to="/sign-in" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Sign In</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>
            <div className="item-count">{amount}</div>
            <FaCartShopping className="icon-cart" />
          </NavLink>
        </div>
      </div> 
    </header>
  )

}

export default Header;