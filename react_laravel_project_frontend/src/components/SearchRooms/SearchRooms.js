import React from "react";
import { Link } from "react-router-dom";
import SectionTitleS2 from '../SectionTitleS2'

const SearchRooms = ({ products, addToCartProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };


  return (
    <div className="wpo-room-area section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-md-8">
            <SectionTitleS2 MainTitle={'Search Result'} />
          </div>
        </div>
        <div className="room-wrap">
          <div className="row">
            {products.length > 0 &&
              products.slice(0, 6).map((product, pitem) => (
                <div className="col-lg-4 col-md-6 col-12" key={pitem}>
                  <div className="room-item">
                    <div className="room-img">
                      <img src={product.proImg} alt="" />
                    </div>
                    <div className="room-content">
                      <h2><Link onClick={ClickHandler} to={`/room-single/${product.id}`}>{product.title}</Link></h2>
                      <ul>
                        <li><strong>Capacity:</strong> {product.capacity}</li>
                        <li><strong>Max Children:</strong> {product.Children}</li>
                      </ul>
                      <h3>${product.price} <span>/ Night</span></h3>
                      <div className="add-to-cart">
                        <button
                          className="theme-btn mt-3"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Add to Cart"
                          onClick={() => addToCartProduct(product)}
                        >
                          Select this room
                        </button>
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

export default SearchRooms;
