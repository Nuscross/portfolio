import { createContext, useContext, useState, useEffect } from "react";

const appContext = createContext(); 

export const AppProvider = ({ children }) => {

  const [menuData,setMenuData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const data = await response.json();
      setMenuData(data);
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