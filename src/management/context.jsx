import { createContext, useContext, useState, useEffect } from "react";
import { getMenuList } from "../management/api";

const appContext = createContext(); 

export const AppProvider = ({ children }) => {

  const [menuData,setMenuData] = useState([]);

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    try {
      const menuListData = await getMenuList();
      setMenuData(menuListData);
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  const setCategory = new Set(menuData.flatMap(item => item.ingredients));
  const menuCategory = Array.from(setCategory);

  const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <appContext.Provider value={{ menuData, menuCategory, formatNumber }}>
      {children}
    </appContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(appContext);
}