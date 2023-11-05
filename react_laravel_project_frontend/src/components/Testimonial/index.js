import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../main-component/axios/axios";


function Testimonial() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios
      .get(`/api/reviews`)
      .then((response) => {
        // console.log(response.data);
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);



// const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    return (
        <div className="wpo-testimonial-area"  style={{marginTop: "50px",}}>
            <div className="container row">
                <center>
                <h2>Reviews</h2> <br></br>
              </center>
              <center>
                <div className="wpo-testimonial-wrap col-7">
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                        {reviews.map((review, index) =>(
                                <div className="wpo-testimonial-item" key={index}>
                                    <div className="wpo-testimonial-img"  >
                                        <img src={review.user.image}style={{ width: "120px",margin:"60px"}} alt="" />
                                    </div>
                                    <div className="wpo-testimonial-content">
                                        <p>{review.comment}</p>
                                        <h2>{review.user.name}</h2>
                                        <span>Previous Client</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                </center>
            </div>
        </div>
    )
}

export default Testimonial; 