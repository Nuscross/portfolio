import { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";

const Layout = () => {

  const navigation = useNavigation();

  const [isToggle,setIsToggle] = useState(false);
  
  const isPageLoading = navigation.state === 'loading';

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
      {
        isPageLoading ? <Loading /> : 
        <>
          <MobileNavigation isToggle={isToggle} toggleMenu={toggleMenu} />
          <Header toggleMenu={toggleMenu} />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )

}

export default Layout;
