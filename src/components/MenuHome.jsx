import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuHome = () => {

  const [menuPhoto,setMenuPhoto] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const data = await response.json();
      
      const menuPhotoFilter = data.filter((item) => item.id >= 14 && item.id <= 17);
      setMenuPhoto(menuPhotoFilter);
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="h-menu">
      <div className="h-menu-container">
        <div className="h-menu-content">
          <h2>
            <span>Our</span> Menu
          </h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <Link to="/menu" className="btn-primary mt-[30px]">View Full Menu</Link>
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