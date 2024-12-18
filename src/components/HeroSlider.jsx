import { Link } from "react-router-dom";
import { sliderImage } from "../management/data/Slider.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {

  var settings = {
    arrows: false,
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          { sliderImage.map((slideItem,index)=>{
            const { subTitle, title, description, image, textButton1, textButton2 } = slideItem;
            return (
              <div key={index}>
                <div className="slider-content">
                  <div className="sub-title">{subTitle}</div>
                  <h2 className="title">{title}</h2>
                  <p>{description}</p>
                  <div className="slider-button">
                    <Link to="/cart" className="btn-primary">{textButton1}</Link>
                    <Link to="/menu" className="btn-secondary">{textButton2}</Link>
                  </div>
                </div>
                <div className="slider-overlay"></div>
                <div className="slider-item" style={{ backgroundImage: `url(${image})`}}></div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
    
  )

}

export default HeroSlider;