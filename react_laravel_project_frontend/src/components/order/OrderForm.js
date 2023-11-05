import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../../store/actions/order";
import axios from "../../main-component/axios/axios";
import { useNavigate, useParams } from "react-router-dom";
import "./order.css";
import Header from "../header/index";
import Footer from "../../components/footer/index";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from '../../components/Navbar';
import Logo from "../../images/DroneDash__3_-removebg-preview.png";



////////////////////////////////////////////////////////////////////////////////////////////////////////////
const OrderForm = (props) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  //It allows you to access the URL parameters, specifically the itemId from the URL.

  const dispatch = useDispatch();
  //used for accessing the dispatch function from Redux, which is typically used to dispatch actions to update the Redux store.

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: "",
    item_id: "",
    date: "",
    time: "",
    phone: "",
    location: "",
    notes: "",
    totalPrice: "",
    editing: false,
  });
  const user_id = localStorage.getItem("user_id");
  formData.user_id = user_id;
  formData.item_id = itemId;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleEditingChange = (event) => {
    const isChecked = event.target.checked;
    const editingValue = isChecked;
    const editingTotalPriceAdjustment = isChecked ? 20 : 0;
    console.log(editingTotalPriceAdjustment);
    const newTotalPrice = parseFloat(item.item.price) + editingTotalPriceAdjustment;
    console.log(newTotalPrice);
    item.item.price = newTotalPrice;
    console.log(item.item.price)
    // Update the form data
    setFormData((prevData) => ({
      ...prevData,
      editing: editingValue,
      totalPrice: newTotalPrice,
    }));
    // If the checkbox is unchecked, and the editingValue is false, revert to the previous total price
    if (!editingValue) {
      item.item.price = newTotalPrice - 20;
      console.log(item.item.price)


      setFormData((prevData) => ({
        ...prevData,
        totalPrice: parseFloat(prevData.totalPrice) - 20,
      }));
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = async (param) => {
    param.preventDefault();
    //prevents the default form submission behavior, which would cause a page refresh.

    try {
      console.log(formData);
      //////////////////////////////
      const csrfResponse = await axios.get("/get-csrf-token");
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common["XSRF-TOKEN"] = csrfToken;
      const response = await axios.post("/api/order", {
        user_id: formData.user_id,
        phone: formData.phone,
        item_id: formData.item_id,
        date: formData.date,
        location: formData.location,
        time: formData.time,
        notes: formData.notes,
        editing: formData.editing,
        totalPrice: formData.totalPrice
      });
      /////////////////////////////
      dispatch(addOrder(response.data.order));
      console.log("Order created successfully:", response.data);
      // Redirect to the payment page after successful submission
      navigate(`/payment/${itemId}`);
    } catch (error) {
      console.error("Error creating order:", error);
    }

  };

  const getItem = async () => {
    await axios.get(`http://127.0.0.1:8000/api/item/${itemId}`)
      .then((response) => {
        setItem(response.data);
        console.log("testt")
        console.log(item.item.price);
      })
      .catch((err) => {
      });
  }
  useEffect(() => {
    getItem();
  }, [itemId]);


  //   Making an Order Creation Request:

  // The code then makes an asynchronous POST request to create an order by sending the formData to the "/api/order" endpoint using Axios.
  //  The response from the server is stored in the response variable.
  // Dispatching the Order:
  // After a successful order creation, the code dispatches the order data to the Redux store using the dispatch function. 
  // This is typically used to update the state in your Redux store so that the new order is available throughout the application.
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
      <PageTitle pageTitle="Order" pagesub={"Order Form"} />
      {/* Include your Header, Navbar, and PageTitle components here */}
      <div className="centered-box">
        <div className="box">
          <div id="booking" className="section">
            <div className="section-center">
              <div className="container">
                <div className="row">
                  <div className="booking-form">
                    <div className="form-header">
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="hidden"
                          name="user_id"
                          // value={formData.user_id}
                          value={user_id}

                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="hidden"
                          name="item_id"
                          // value={formData.item_id}
                          value={itemId}

                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label><h4>Date:</h4></label>
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label><h4>Time:</h4></label>
                        <input
                          className="form-control"
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label><h4>Location:</h4></label>
                        <input
                          className="form-control"
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label><h4>Phone:</h4></label>
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label><h4>Notes:</h4></label>
                        <textarea
                          className="form-control"
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label><h4>Total Price:</h4></label>
                        <input
                          className="form-control"
                          type="text"
                          name="totalPrice"
                          // value={formData.totalPrice}
                          value={item ? item.item.price : ""}

                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form group">
                        <label><h4>Editing Video:</h4></label>
                        <input
                          type="checkbox"
                          name="editing"
                          checked={formData.editing}
                          onChange={handleEditingChange}
                        />
                      </div>
                      <div className="form-btn">
                        <center>
                          <button className="theme-btn " type="submit">
                            Proceed to checkout
                          </button>
                        </center>
                        <br>
                        </br>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* Include your Footer component here */} <Footer />
    </div >
  );
};

export default OrderForm;
