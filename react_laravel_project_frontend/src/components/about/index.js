import React from 'react'
import { Link } from 'react-router-dom'
import simg1 from "../../images/room/img-7.jpg";
import simg2 from "../../images/room/img-8.jpg";

const About = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }
    
    return (
      // <section className="wpo-about-section-s2 section-padding">
  <div className="room-details-service">
  <div className="row">
    <div className="room-details-item">
      <div className="row">
        <div className="col-md-5 col-sm-5">
          <div className="room-d-text">
            <div className="room-title">
              <h2>Amenities</h2>
            </div>
            <ul>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  Refrigerator and water
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  Air Conditioner Facilities
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  Fruits are always available
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  2 Sets of nightwear
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  Tables and Chairs
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  2 Elevator Available
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/room-single/1">
                  Room Side Balcony
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-7 col-sm-7">
          <div className="room-d-img">
            <img src={simg1} alt="" style="width: 100%; height: auto;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


                
                /* <div className="col-md-7 col-sm-7">
                  <div className="room-d-img">
                    <img src={simg2} alt="" />
                  </div>
                </div> */
/*                 
                <div className="col-md-5 col-sm-5">
                  <div className="room-d-text2">
                    <div className="room-title">
                      <h2>Room Services</h2>
                    </div>
                    <ul>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          Daily Cleaning
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          Special Swimming Pool
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          Free Parking
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          Free-to-use smartphone{" "}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          Free Wifi
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          2 Elevator Available
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/room-single/1">
                          Room Side Belcony
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */
      //         </div>
      //       </div>
      //     </div>
      //   </div>


      // </section>
    );
}

export default About;