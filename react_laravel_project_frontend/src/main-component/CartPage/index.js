import React, { Fragment } from "react";
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";

import Logo from '../../images/DroneDash__2_-removebg-preview.png'

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="product-2">Room type</th>
                          <th className="pr">Capacity</th>
                          <th className="ptice">Quantity</th>
                          <th className="stock">Check - in</th>
                          <th className="stock">Check - out</th>
                          <th className="stock">Night</th>
                          <th className="stock">Gross Total</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <tr key={crt}>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">{catItem.title}</li>
                                </ul>
                              </td>
                              <td className="ptice">{catItem.capacity} adult</td>
                              <td className="ptice">{catItem.qty}</td>
                              <td className="stock">December 23, 2022 </td>
                              <td className="stock">December 25, 2022 </td>
                              <td className="stock">
                                <Grid className="quantity cart-plus-minus">
                                  <Button
                                    className="dec qtybutton"
                                    onClick={() =>
                                      props.decrementQuantity(catItem.id)
                                    }
                                  >
                                    -
                                  </Button>
                                  <input value={catItem.qty} type="text" 
                                  />
                                  <Button
                                    className="inc qtybutton"
                                    onClick={() =>
                                      props.incrementQuantity(catItem.id)
                                    }
                                  >
                                    +
                                  </Button>
                                </Grid>
                              </td>
                              <td className="stock">${catItem.qty * catItem.price}</td>
                              <td className="action">
                                <ul>
                                  <li
                                    className="w-btn"
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                  >
                                    <i className="fi ti-trash"></i>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/search-result"
                        >
                          Add Another{" "}
                        </Link>
                      </li>
                      <li>
                        <button type="submit">Update Cart</button>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-product-list">
                    <ul>
                      <li>
                        Total Room<span>( {carts.length} )</span>
                      </li>
                      <li>
                        Sub Price<span>${totalPrice(carts)}</span>
                      </li>
                      <li>
                        Vat<span>$0</span>
                      </li>
                      <li>
                        Eco Tax<span>$0</span>
                      </li>
                      <li>
                        Delivery Charge<span>$0</span>
                      </li>
                      <li className="cart-b">
                        Total Price<span>${totalPrice(carts)}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/checkout"
                        >
                          Proceed to Checkout{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);
