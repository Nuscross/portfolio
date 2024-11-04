import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {

  return (
    <header className="header">
      <div className="header-container">
        <h1>
          coffee<br/>
          <span className="text-[12px]">blend</span>
        </h1>
        <div className="nav-menu">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/cart" className="nav-link">
            <div className="item-count">0</div>
            <FaCartShopping className="icon-cart" />
          </NavLink>
        </div>
      </div> 
    </header>
  )

}

export default Header;