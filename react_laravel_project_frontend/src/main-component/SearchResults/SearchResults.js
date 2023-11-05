import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar';
import { addToCart } from "../../store/actions/action";
import SearchRooms from '../../components/SearchRooms/SearchRooms';
import api from "../../api";
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import Footer from '../../components/footer';

const SearchResults =({ addToCart }) => {

    const productsArray = api();
    
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
      };

    const products = productsArray

    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo}/>
            <PageTitle pageTitle={'Hotel Booking Search'} pagesub={'Search'}/> 
              <section className="wpo-shop-page">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <SearchRooms
                                      addToCartProduct={addToCartProduct}
                                      products={products}
                                  />
                          </div>
                      </div>
                  </div>
              </section>
              <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(SearchResults);