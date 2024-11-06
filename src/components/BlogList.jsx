import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";

const BlogList = ({BlogData,listPage}) => {

  return (
    <div className={`blog ${listPage ? "pb-30" : ""}`}>
      <div className="blog-container">
        <div className="blog-heading">
          <h2>Recent from blog</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className={`blog-list ${listPage ? "list-page" : ""}`}>
          { BlogData.map((blogList) => {
            const { id, title, shortDescription, image, postDate } = blogList;
            return (
              <div key={id} className={`${listPage ? "block-item" : ""}`}>
                <Link to={`/blog/${id}`} onClick={() => window.scrollTo(0, 0)}>
                  <div className="photo" style={{ backgroundImage: `url(${image})`}}></div>
                </Link>
                <h3>
                  <Link to={`/blog/${id}`} onClick={() => window.scrollTo(0, 0)}>{title}</Link>
                </h3>
                <p>{shortDescription}</p>
                <small>
                  <FaClock />
                  {postDate}
                </small>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

}

export default BlogList;