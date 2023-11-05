import React from 'react'
import Destinations from '../../api/destination'
import { Link } from 'react-router-dom'
import ins1 from '../../images/instragram/1.jpg'
import ins2 from '../../images/instragram/2.jpg'
import ins3 from '../../images/instragram/3.jpg'
import ins4 from '../../images/instragram/4.jpg'
import ins5 from '../../images/instragram/5.jpg'
import ins6 from '../../images/instragram/6.jpg'

const DestinationSidebar = ({ itemId }) => {
    let isLoggedIn = localStorage.getItem("isLoggedIn", JSON.parse(true));
    console.log(isLoggedIn);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget row">
                    <h2>Benefits of Drones</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>Aerial Surveillance</li>
                        <li style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>Efficient Data Collection</li>
                        <li style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>Safety</li>
                        <li style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>Time and Cost Savings</li>
                        <li style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>Recreational Enjoyment</li>
                    </ul>


                </div>
                <div className="wpo-newsletter-widget widget row">
                    <Link to={isLoggedIn == "true" ? `/order/${itemId}` : '/login'}>
                        <button type="submit" className="theme-btn col-12">
                            Book Now
                        </button>
                    </Link>
                </div>


                <div className="wpo-contact-widget widget row">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan lacus vel facilisis. </p>
                    <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
        

    )
    
}

export default DestinationSidebar;