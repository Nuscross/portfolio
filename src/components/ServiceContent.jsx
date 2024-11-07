import { ServiceData } from "../data/Service";

const ServiceContent = () => {

  return (
    <div className="section-container service">
      <div className="content-container service-container">
      { ServiceData.map((item,index)=>{
        const { title, description, icon } = item;
        return (
          <div key={index} className="service-item">
            <div className="service-icon">{icon}</div>
            <h3 className="title">{title}</h3>
            <p>{description}</p>         
          </div>
        )
      })}
      </div>
    </div>
  )

}

export default ServiceContent;