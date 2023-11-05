import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Link, useNavigate,useParams } from "react-router-dom";
import Destinations from "../../api/destination";


const Destination2 = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams()

  const maxRetries = 3;
  const delayBetweenRetries = 1000;

  const makeRequestWithRetries = (url, retries = 0) => {
    Axios.get(url)
      .then((response) => {
        if (!Array.isArray(response.data)) {
          setError(new Error("Data is not an array"));
        } else {
          setItems(response.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status === 429 &&
          retries < maxRetries
        ) {
          setTimeout(() => {
            makeRequestWithRetries(url, retries + 1);
          }, delayBetweenRetries);
        } else {
          setError(err);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    makeRequestWithRetries(`http://127.0.0.1:8000/api/items/${id}`);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>Error fetching data: {error.message}</h1>;
  }
  const ClickHandler = (itemId) => {
    // window.scrollTo(10, 0);
    navigate(`/destination-single/${itemId}`);
  };

  return (
    <div className="wpo-destination-area pt-120">
      <div className="container">
        <div className="destination-wrap">
          <div className="row">
            {items.map((item) => (
              <div className="col-lg-4 col-md-6 col-12" key={item.id} >
                <div className="destination-item" style={{ height: '400px' }}>
                  <div className="destination-img">
                    <img src={item.image} alt="" style={{ height: '250px' }}/>
                  </div>
                  <div className="destination-content">
                    {/* <span className="sub">{item.name}</span> */}
                    <h2>
                      <Link
                        onClick={() => ClickHandler(item.id)}
                        to={`/destination-single/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </h2>

                    {/* <p>{item.description}</p> */}
                    <div className="destination-bottom">
                      <h5>{item.price} JOD</h5>
                      <span>&nbsp; per hour</span>
                      <div className="destination-bottom-right">
                        <ul>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                          </li>
                        </ul>
                        <small>4.5</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination2;
