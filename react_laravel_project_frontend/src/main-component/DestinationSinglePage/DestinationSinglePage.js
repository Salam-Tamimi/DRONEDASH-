import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import DestinationSidebar from "./sidebar";
import Benefits from "./benefits";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/DroneDash__3_-removebg-preview.png";
import rv1 from "../../images/room/r1.jpg";
import rv2 from "../../images/room/r2.jpg";
import Reviews from "./Reviews";

const DestinationSinglePage = (props) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    console.log("tttt")
    Axios.get(`http://127.0.0.1:8000/api/item/${id}`)
      .then((response) => {
        // console.log(response.data)
        setItem(response.data);
        console.log(item)
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>Error fetching data: {error.message}</h1>;
  }

  const SubmitHandler = (itemId) => {
    // window.scrollTo(10, 0);
    navigate(`/order/${itemId}`);
  };

  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} Logo={Logo} />
      <PageTitle pageTitle={item.item.name} pagesub={"destination"} />
      <section className="wpo-destination-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="wpo-destination-single-wrap">
                <div className="wpo-destination-single-content">
                  <img src={item.item.image} alt="" />
                  <div className="wpo-destination-single-content-des">
                    <h2>{item.item.name}</h2>
                    <p>{item.item.description}</p>
                  </div>
                </div>
                <Reviews />
                {/* <Benefits /> */}
              </div>
            </div>
            <DestinationSidebar itemId={item.item.id} />
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default DestinationSinglePage;
