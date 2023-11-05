import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../HomePage'
import AboutPage from '../AboutPage/AboutPage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import ProfilePage from '../ProfilePage';
import DestinationPage from '../DestinationPage/DestinationPage';
import DestinationSinglePage from '../DestinationSinglePage/DestinationSinglePage';
import OrderRecived from '../OrderRecived';
import RoomSinglePage from '../RoomSinglePage';
import SearchResults from '../SearchResults/SearchResults';
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import PricingPage from '../PricingPage/PricingPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ContactPage from '../ContactPage/ContactPage';
import OrderForm from '../../components/order/OrderForm';
import Checkout from '../../components/checkout/index';
import { AuthProvider } from "../Contexts/ContextProvider";
import Google from "../LoginPage/logingoogle";
import PDF from "../../components/Profile/pdf";

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="search-result" element={<SearchResults />} />
            <Route path="room-single/:id" element={<RoomSinglePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="pdf" element={<PDF />} />
            <Route path="order_received" element={<OrderRecived />} />
            {/* <Route path="destination" element={<DestinationPage />} /> */}
            {/* <Route
              path="destination-single/:id"
              element={<DestinationSinglePage />}
            /> */}

            <Route path="destination/:id" element={<DestinationPage />} />
            <Route
              path="destination-single/:id"
              element={<DestinationSinglePage />}
            />

            <Route path="pricing" element={<PricingPage />} />
            <Route path="404" element={<ErrorPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignUpPage />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="/google" component={<Google />} />
            <Route path="order/:itemId" element={<OrderForm />} />
            <Route path="payment/:itemId" element={<Checkout />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;

