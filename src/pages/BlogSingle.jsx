import { useState, useEffect } from "react";
import { useLoaderData, Navigate, Link } from "react-router-dom";
import { BlogData } from "../data/Blog";
import { FaClock } from "react-icons/fa6";
import HeroPage from "../components/HeroPage";

export const loader = async ({params}) => {
  const { id } = params;
  const data = BlogData.filter((blog) => blog.id == id);
  return { id, data };
}

const BlogSingle = () => {

  const { id, data } = useLoaderData();

  const [blogOther,setOtherContent] = useState([]);
    
  useEffect(() => {
    const BlogOtherFilter = BlogData.filter((item) => item.id != id);
    setOtherContent(BlogOtherFilter);
  },[])
  

  if (!data || data.length === 0) {
    return <Navigate to='/' />;
  }

  const singleBlog = data[0];

  return (
    <>
      <HeroPage title={singleBlog.title} />
      <div className="blog-single">   
        <div className="blog-single-container">
          <div className="block-single-content">
            <h2>{singleBlog.title}</h2>
            <small>
              <FaClock />
              {singleBlog.postDate}
            </small>
            <img alt={singleBlog.title} src={singleBlog.image} />
            <p>{singleBlog.description}</p>
          </div>
          <div className="block-single-other">
            <h3>Other Article</h3>
            { blogOther.map((otherBlog) => {
              const { id, title, shortDescription, image, postDate } = otherBlog;
              return (
                <div key={id} className="other-article">
                  <Link to={`/blog/${id}`} onClick={() => window.scrollTo(0, 0)}>
                    <div className="photo" style={{ backgroundImage: `url(${image})`}} />
                  </Link>
                  <div className="media-body">
                    <Link to={`/blog/${id}`} onClick={() => window.scrollTo(0, 0)}>{title}</Link>
                    <p className="mt-1 font-14">{shortDescription}</p>
                    <small>
                      <FaClock />
                      {postDate}
                    </small>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )

}

export default BlogSingle;