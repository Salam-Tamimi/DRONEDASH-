import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Scrollbar from "../../components/scrollbar";
import { connect } from "react-redux";
import api from "../../api";
import Footer from "../../components/footer";
import Logo from "../../images/DroneDash__2_-removebg-preview.png";
import Rooms from "./rooms";
import RoomDetails from "./RoomDetails";
//import Newslatter from "../../components/Newslatter/Newslatter";

const RoomSinglePage = (props) => {
  const { id } = useParams();

  const productsArray = api();
  const Allproduct = productsArray;

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(Allproduct.filter((Allproduct) => Allproduct.id === Number(id)));
  }, []);

  const item = product[0];

  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} Logo={Logo} />
      <PageTitle pageTitle={item ? item.title : null} pagesub={"Room"} />
      <div className="room-details-section">
        {item ? (
          <div className="room-details-inner">
            <div className="wpo-hotel-details-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="wpo-hotel-details-wrap">
                      <div className="wpo-hotel-details-area">
                        <form className="clearfix">
                          <div className="details-sub">
                            <span>BEDS</span>
                            <h2>{item.bedroom} Double Bed</h2>
                          </div>
                          <div className="details-sub">
                            <span>ROOM SIZE</span>
                            <h2>870 sq ft / {item.sqm} sqm</h2>
                          </div>
                          <div className="details-sub">
                            <span>OCCUPANCY</span>
                            <h2>
                              {item.capacity} adults ({item.Children} children)
                            </h2>
                          </div>
                          <div className="details-sub">
                            <span>Bathroom</span>
                            <h2>{item.bathroom} Shower bath</h2>
                          </div>
                          <div className="details-sub">
                            <h5>
                              Price <span>${item.price}</span> / Night
                            </h5>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Rooms item={item} />
            <RoomDetails />
          </div>
        ) : null}
      </div>
      {/* <Newslatter nClass={"section-bg"} /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

export default connect(mapStateToProps)(RoomSinglePage);
