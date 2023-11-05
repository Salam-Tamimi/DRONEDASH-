import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../checkout/checkout.css";
import { CLIENT_ID } from "../../Config/config";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/index";
import Footer from "../../components/footer/index";
import { useParams } from "react-router-dom";
import Axios from "axios";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from '../../components/Navbar';
import Logo from '../../images/logo2.png';
import throttle from "lodash/throttle";
import Swal from "sweetalert2";


const Checkout = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tPrice, setPrice] = useState(0);
    const user_id = localStorage.getItem("user_id");
    // formData.user_id = user_id;

    const { itemId } = useParams();
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("creditCard");

    const getItem = async (itemId) => {
        // console.log(itemId);
        // console.log(itemId);
        await Axios.get(`http://127.0.0.1:8000/api/item/${itemId}`)
            .then((response) => {
                setItem(response.data);
                item.order.forEach((order) => {
                    if (order.item_id == itemId && order.user_id == user_id) {
                        setPrice(order.totalPrice);
                        console.log(order.totalPrice);
                        console.log(order.totalPrice);
                    }
                });

                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }

    const throttledGetItem = throttle(getItem, 1000);

    useEffect(() => {
        throttledGetItem(itemId);
    }, [itemId]);

    // creates a PayPal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "Sunflower",
                        amount: {
                            currency_code: "USD",
                            value: "20",
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    // capture likely error
    const onError = (error) => {
        setErrorMessage("An Error occurred with your payment");
    };

    useEffect(() => {
        if (success) {
            // alert("Payment successful!!");
            BtnClick();
            console.log("Order successful. Your order ID is:", orderID);
        }
    }, [success, orderID]);

    const showPayPalButtons = selectedPaymentMethod === "paypal";
    const BtnClick = () => {
        Swal.fire({
            icon: "success",
            title: "Your Book Submitted Successfully!",
        }).then((result) => {
            navigate('/');
        });
    }

    return (
        <div>
            <Header />
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle="Checkout" pagesub={"payment"} />



            <section className="content header">
                <div className="container">
                    {item ? ( // Conditionally render when item is available
                        <div className="details shadow">
                            <div className="details__item">
                                <div className="item__image">
                                    <img
                                        height='400'
                                        width='600'
                                        className="iphone"
                                        src={item.category.image}
                                        alt=""
                                    />
                                </div>
                                <div className="item__details">
                                    <h2>{item.category.name}</h2>
                                    
                                    <h4>{item.item.name}</h4>
                                    <div className="item__title"></div>
                                    <div className="item__price"></div>
                                    <div className="item__description">
                                        {item.item.description}
                                    </div>
                                    {/* <h3>{tPrice && tPrice}</h3> */}
                                    <h3>{item.item.price}</h3>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Render a loading message or handle the loading state as you prefer
                        loading ? <p>Loading...</p> : (
                            error ? <p>Error: {error.message}</p> : null
                        )
                    )}

                    <div className="discount"></div>
                    <div className="container">
                        <div className="payment">
                            <center><h1 style={{ marginTop: '50px', marginBottom: '20px' }}>Payment Method</h1></center>
                            <div className="payment__types">
                                <div className="payment__type payment__type--paypal">
                                    <button onClick={BtnClick} style={{ background: 'none', color: 'black', border: 'none' }}>
                                        <i className="icon icon-paypal">Cash</i>
                                    </button>
                                </div>

                                <div
                                    className={`payment__type payment__type--paypal ${showPayPalButtons ? "active" : ""
                                        }`}
                                    onClick={() => setSelectedPaymentMethod("paypal")}
                                >
                                    <Link>
                                        <i className="icon icon-paypal">Paypal</i>
                                        {showPayPalButtons && (
                                            <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                                                <PayPalButtons
                                                    style={{ layout: "vertical" }}
                                                    createOrder={createOrder}
                                                    onApprove={onApprove}
                                                    onError={onError}
                                                />
                                            </PayPalScriptProvider>
                                        )}
                                    </Link>
                                </div>
                            </div>

                            <div className="payment__info">
                                {selectedPaymentMethod === "creditCard" && (
                                    <div className="payment__cc">
                                        {/* Personal Information Form */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Checkout;
