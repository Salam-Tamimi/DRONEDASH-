import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/service'


const WhyChoose = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    

    return(
        <div className="why-choose-section">
            <h3>Why Choose This Service</h3>
            <div className="feature-grids clearfix">
                {Services.slice(0,3).map((service, sitem) => (
                    <div className="grid" key={sitem}>
                        <div className="icon">
                             <i className={`fi ${service.fIcon}`}></i>
                        </div>
                        <div className="hover-icon">
                             <i className={`fi ${service.fIcon}`}></i>
                        </div>
                        <h3><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link></h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose;