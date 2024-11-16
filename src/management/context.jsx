import { createContext, useContext, useState, useEffect } from "react";
import { getMenuList } from "../management/api";

const appContext = createContext(); 

export const AppProvider = ({ children }) => {

  const [menuData,setMenuData] = useState([]);
  const [menuCart,setMenuCart] = useState([]);

  useEffect(()=>{
    fetchMenu();
  },[]);

  useEffect(() => {
    if (menuData.length > 0) {
      updateMenu(menuData);
    }
  },[menuData]);

  // fetch menu data 
  const fetchMenu = async () => {
    try {
      const menuListData = await getMenuList();
      setMenuData(menuListData);
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  // update cart menu
  const updateMenu = (menuData) => {
    const menuCartData = menuData.map((menu,index) => ({
      ...menu,
      amount: 0,
      price: 50+(index * 5),
    }));
    setMenuCart(menuCartData);
  }

  // set category
  const setCategory = new Set(menuData.flatMap(item => item.ingredients));
  const menuCategory = Array.from(setCategory);

  // format price number
  const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  // scroll to div
  const scrollToDiv = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <appContext.Provider value={{ menuCart, menuCategory, formatNumber, scrollToDiv }}>
      {children}
    </appContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(appContext);
}