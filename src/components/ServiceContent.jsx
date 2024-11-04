import { Service } from "../data/Service";

const ServiceContent = () => {

  return (
    <div className="service">
      <div className="service-container">
      { Service.map((item,index)=>{
        const { title, description, icon } = item;
        return (
          <div key={index} className="service-item">
            <div className="service-icon">{icon}</div>
            <h2>{title}</h2>
            <p>{description}</p>         
          </div>
        )
      })}
      </div>
    </div>
  )

}

export default ServiceContent;