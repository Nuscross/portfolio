import { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../management/context";
import HeroPage from "../components/HeroPage";

const Menu = () => {

  const { menuData } = useGlobalContext();

  const [menuList,setMenuList] = useState([]);
  const [dataInPage,setDataInPage] = useState([]);
  const [page,setPage] = useState(0);

  const menuRef = useRef(null);

  useEffect(() => {
    const paginate = pagination(menuData);
    setDataInPage(paginate);
    setMenuList(paginate[page]);
  }, [menuData,page]);

  const pagination = (menuData) => {
    const coffeePerPage = 6;
    const pages = Math.ceil(menuData.length / coffeePerPage);
    const newCoffee = Array.from({length:pages},(data,index)=>{
      const start = index * coffeePerPage;
      return menuData.slice(start,start + coffeePerPage);
    });
    return newCoffee;
  }

  const handlePage = (index) => {
    setPage(index);
  }

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <>
      <HeroPage title="Our Menu" />
      <div className="section-container menu" ref={menuRef}>
        <div className="content-container menu-container">
          <div className="menu-heading">
            <h2 className="title">
              <span>Discover</span> Our Menu
            </h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
          <div className="menu-list">
            { menuList && menuList.map((item) => {
              const { id, image, title, description } = item;
              return (
                <div key={id} className="menu-block">
                  <div className="photo" style={{ backgroundImage: `url(${image})`}}></div>
                  <h3 className="title">{title}</h3>
                  <p className="description">{description}</p>
                  <p className="price">50 ฿</p>
                  <button type="button" className="btn-third">Add to Cart</button> 
                </div>
              )
            })}
          </div>
        </div>
        <div className='pagination-container'>
          { dataInPage && dataInPage.map((data,index)=>{
            return (
              <button 
                key={index} 
                className={index === page ? 'page-btn active' : 'page-btn'} 
                onClick={()=>{
                  handlePage(index);
                  scrollToMenu();
                }}>
                  {index+1}
              </button>)
          })}
        </div> 
      </div>
    </>
  )

}

export default Menu;