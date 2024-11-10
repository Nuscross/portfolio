import { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../management/context";
import HeroPage from "../components/HeroPage";

const Menu = () => {

  const { menuData, menuCategory, formatNumber } = useGlobalContext();

  const [menuList,setMenuList] = useState([]);
  const [dataInPage,setDataInPage] = useState([]);
  const [page,setPage] = useState(0);
  const [pageCount,setPageCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const menuRef = useRef(null);

  useEffect(() => {
    const filteredData = selectedCategory === "All" ? menuData : menuData.filter((item) => item.ingredients.includes(selectedCategory));
    const paginate = pagination(filteredData);
    setDataInPage(paginate);
    setMenuList(paginate[page] || []);
  }, [menuData,page,selectedCategory]);

  const changeMenuCategory = (categoryValue) => {
    setSelectedCategory(categoryValue);
    setPage(0);
  }

  const pagination = (menuData) => {
    const coffeePerPage = 6;
    const pages = Math.ceil(menuData.length / coffeePerPage);
    setPageCount(pages);
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
          <div className="menu-category">
            <label>Select Category &nbsp;:&nbsp;</label>
            <select name="category" onChange={(e) => changeMenuCategory(e.target.value)}>
              <option value="All">All Category</option>
              {
                menuCategory && menuCategory.map((category,index) => {
                  return <option key={index} value={category}>{category}</option>
                })
              }
            </select>
          </div>
          <div className="menu-list">
            { menuList ? 
                menuList.map((item) => {
                  const { id, image, title, description } = item;
                  return (
                    <div key={id} className="menu-block">
                      <div className="photo" style={{ backgroundImage: `url(${image})`}}></div>
                      <h3 className="title">{title}</h3>
                      <p className="description">{description}</p>
                      <p className="price">{ formatNumber(1000) } ฿</p>
                      <button type="button" className="btn-third">Add to Cart</button> 
                    </div>
                  )
            })
              : 
              <div className="loading-content">
                <span className="loader"></span>
              </div>
            }
          </div>
        </div>
        { (pageCount && pageCount > 1) &&
          <div className='pagination-container'>
            <button 
              className={`page-btn ${page === 0 && 'hidden'}`}
              onClick={()=>{
                setPage(page - 1);
                scrollToMenu();
              }}
              >
              Prev
            </button>
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
            <button 
              className={`page-btn ${page === pageCount - 1 && 'hidden'}`}
              onClick={()=>{
                setPage(page + 1);
                scrollToMenu();
              }}
              >
              Next
            </button>
          </div> 
        }
      </div>
    </>
  )

}

export default Menu;