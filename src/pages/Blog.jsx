import HeroPage from "../components/HeroPage";
import BlogList from "../components/BlogList";
import { BlogData } from "../data/Blog";

const Blog = () => {

  return (
    <>
      <HeroPage title="Blog" />
      <BlogList BlogData={BlogData} listPage={true} />
    </>
  )

}

export default Blog;