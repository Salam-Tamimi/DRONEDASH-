import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { connect } from "react-redux";
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import { UserStateContext } from "../Contexts/ContextProvider";

const ProfilePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'User Profile'} pagesub={'User Profile'} />
            <Profile />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};


export default ProfilePage;
