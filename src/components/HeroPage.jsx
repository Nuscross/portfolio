import image from "../images/bg_3.jpg";

const HeroPage = ({title}) => {

  return (
    <div className="slider-container">
      <div className="slider-content">
        <h2 className="title">{title}</h2>
      </div>
      <div className="slider-overlay"></div>
      <div className="slider-item" style={{ backgroundImage: `url(${image})`}}></div>
    </div>
  )

}

export default HeroPage;