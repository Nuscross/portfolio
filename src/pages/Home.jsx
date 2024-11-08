import { useState, useEffect } from "react";
import { BlogData } from "../management/data/Blog";
import HeroSlider from "../components/HeroSlider";
import AboutContent from "../components/AboutContent";
import ServiceContent from "../components/ServiceContent";
import BlogList from "../components/BlogList";
import MenuHome from "../components/MenuHome";

const Home = () => {

  const [blogContent,setBlockContent] = useState([]);
    
  useEffect(() => {
    const BlogFilter = BlogData.filter((item) => item.id >= 1 && item.id <= 4);
    setBlockContent(BlogFilter);
  },[])

  return (
    <>
      <HeroSlider />
      <AboutContent />
      <MenuHome />
      <ServiceContent />
      <BlogList BlogData={blogContent} listPage={false} />
    </>
  )
  
}

export default Home;