import { useState, useEffect } from "react";
import { useGlobalContext } from "../management/context";
import { Link } from "react-router-dom";

const MenuHome = () => {

  const { menuCart } = useGlobalContext();

  const [menuPhoto,setMenuPhoto] = useState([]);

  useEffect(() => {
    if (menuCart && menuCart.length > 0) {
      filterMenuPhoto();
    }
  }, [menuCart]);

  const filterMenuPhoto = () => {
    const menuPhotoFilter = menuCart.filter((item) => item.id >= 14 && item.id <= 17);
    setMenuPhoto(menuPhotoFilter);
  }

  return (
    <div className="section-container h-menu">
      <div className="content-container h-menu-container">
        <div className="h-menu-content">
          <h2 className="title">
            <span>Our</span> Menu
          </h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <Link to="/menu" className="btn-primary mt-[30px]" onClick={() => window.scrollTo(0, 0)}>View Full Menu</Link>
        </div>
        <div className="h-menu-list">
          { menuPhoto.map((item) => {
            const { id, image } = item;
            return (
              <div key={id} className="h-menu-photo" style={{ backgroundImage: `url(${image})` }}></div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default MenuHome;