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
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Menu</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          <NavLink to="/sign-in" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sign In</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <div className="item-count">0</div>
            <FaCartShopping className="icon-cart" />
          </NavLink>
        </div>
      </div> 
    </header>
  )

}

export default Header;