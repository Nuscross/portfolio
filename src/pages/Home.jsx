import { useState, useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import AboutContent from "../components/AboutContent";
import ServiceContent from "../components/ServiceContent";

const Home = () => {

  // const [product,setProduct] = useState([]);

  // useEffect(()=>{
  //   fetchData();
  // },[])

  // const fetchData = () => {
  //   fetch('https://api.sampleapis.com/coffee/hot')
  //   .then(res=>res.json())
  //   .then(json=>setProduct(json))
  // }

  return (
    <>
      {/* { product.map((item,index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <img alt="" src={item.image} style={{height:200}} />
          </div>
        )
      })} */}
      <HeroSlider />
      <AboutContent />
      <ServiceContent />
    </>
  )
  
}

export default Home;