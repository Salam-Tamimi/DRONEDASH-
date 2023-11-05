import React from 'react'
import Services from '../../api/service'
import { Link } from 'react-router-dom'


const ServiceSection3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <div className="wpo-service-area-3 section-padding">
            <div className="wpo-service-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-12">
                            <div className="wpo-service-items">
                                {Services.map((service, sitem) => (
                                    <div className="wpo-service-item" key={sitem}>
                                        <i className={`fi ${service.fIcon}`}></i>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection3;