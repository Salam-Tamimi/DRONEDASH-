import React, { useState, useEffect } from "react";
import Axios from "axios";
import SectionTitleS2 from "../SectionTitleS2";
import { Link, useNavigate } from "react-router-dom";

const PricingSection = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const maxRetries = 3;
  const delayBetweenRetries = 1000;

  const makeRequestWithRetries = (url, retries = 0) => {
    Axios.get(url)
      .then((response) => {
        if (!Array.isArray(response.data.categories)) {
          setError(new Error("Data is not an array"));
        } else {
          setCategories(response.data.categories);
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
    makeRequestWithRetries("http://127.0.0.1:8000/api/categories");
  }, []);

  const ClickHandler = (categoryId) => {
    // window.scrollTo(10, 0);
    navigate(`/destination/${categoryId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>Error fetching data: {error.message}</h1>;
  }

  return (
    <section className="wpo-pricing-section section-padding" id="drones">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <SectionTitleS2 MainTitle={"Drone Types"} />
          </div>
        </div>
        <div className="wpo-pricing-wrap">
          <div className="row">
            {categories.map((category) => (
              <div className="col col-lg-4 col-md-6 col-12" key={category.id}>
                <div className="wpo-pricing-item">
                  <div className="wpo-pricing-top">
                    <div className="wpo-pricing-img">
                      <img src={`${category.image}`} alt="Drone Image" />
                    </div>
                    <div className="wpo-pricing-text">
                      <h4>{category.name}</h4>
                    </div>
                  </div>
                  <div className="wpo-pricing-bottom">
                    <div className="wpo-pricing-bottom-text">
                      <ul>
                        <li>{category.description}</li>
                      </ul>
                      <Link
                        onClick={() => ClickHandler(category.id)}
                        className="theme-btn"
                        to={`/destination/${category.id}`}
                      >
                        Show more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
