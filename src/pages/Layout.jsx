import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";

const Layout = () => {

  const [isToggle,setIsToggle] = useState(false);

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isToggle]); 

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  }

  return (
    <>
      <MobileNavigation isToggle={isToggle} toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu} />
      <Outlet />
      <Footer />
    </>
  )

}

export default Layout;
