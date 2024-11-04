import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import imageBlog1 from "../images/image_1.jpg";
import imageBlog2 from "../images/image_2.jpg";

const Footer = () => {

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
            <div className="ft-media">
              <a href="#">
                <img alt="" src={imageBlog1} className="photo" />
              </a>
              <div className="media-body">
                <a href="#">Even the all-powerful Pointing has no control about</a>
              </div>
            </div>
            <div className="ft-media">
              <a href="#">
                <img alt="" src={imageBlog2} className="photo" />
              </a>
              <div className="media-body">
                <a href="#">Even the all-powerful Pointing has no control about</a>
              </div>
            </div>
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