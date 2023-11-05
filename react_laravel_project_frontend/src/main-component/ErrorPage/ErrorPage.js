import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import Error from '../../components/404';



const ErrorPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'404'} pagesub={'404'} />
            <Error />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ErrorPage;
