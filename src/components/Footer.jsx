import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../data/Blog";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6"

const Footer = () => {

  const [blogContent,setBlockContent] = useState([]);
    
  useEffect(() => {
    const BlogFilter = BlogData.filter((item) => item.id >= 1 && item.id <= 2);
    setBlockContent(BlogFilter);
  },[])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="ft-about">
            <div className="ft-title">About Us</div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="social-link">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
          <div className="ft-blog">
            <div className="ft-title">Recent Blog</div>
            { blogContent.map((item)=>{
              const { id, title, shortDescription, image, } = item;
              return (
                <div key={id} className="ft-media">
                  <Link to="/">
                    <div className="photo" style={{ backgroundImage: `url(${image})`}} />
                  </Link>
                  <div className="media-body">
                    <Link to="/">{title}</Link>
                    <p className="mt-1 font-14">{shortDescription}</p>
                  </div>
                </div>
              )
            })}
          </div>   
          <div className="ft-question">
            <div className="ft-title">Have a Questions?</div>
            <div className="ft-media">
              <FaLocationDot className="icon" />
              <div className="media-body">
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
            </div>
            <div className="ft-media">
              <FaPhone className="icon" />
              <div className="media-body">
                <p>+2 392 3929 210</p>
              </div>
            </div>
            <div className="ft-media">
              <FaEnvelope className="icon" />
              <div className="media-body">
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">Copyright &copy; 2024 All rights reserved</div>
      </div>
    </footer>
  )

}

export default Footer;