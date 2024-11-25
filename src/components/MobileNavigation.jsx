import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const MobileNavigation = ({isToggle,toggleMenu}) => {

  const { amount } = useSelector((state) => state.cart);

  return (
    <>
      <div className={`mobile-navigation ${isToggle ? "active" : ""}`}>
        <div className="close-toggle">
          <IoClose onClick={toggleMenu} />
        </div>
        <div className="nav-menu">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Menu</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Services</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Blog</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Contact</NavLink>
            <NavLink to="/sign-in" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Sign In</NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>
              <div className="item-count">{amount}</div>
              Cart
            </NavLink>
          </div>
      </div>
      <div className={`mobile-navigation-backdrop ${isToggle ? "active" : ""}`}></div>
    </>
  )
}

export default MobileNavigation;