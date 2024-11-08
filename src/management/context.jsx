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

  return (
    <appContext.Provider value={{ menuData }}>
      {children}
    </appContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(appContext);
}