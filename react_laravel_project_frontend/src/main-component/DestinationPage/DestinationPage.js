import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Logo from '../../images/DroneDash__3_-removebg-preview.png'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Destination2 from '../../components/Destination2';

const DestinationPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Destinations'} pagesub={'Destinations'} />
            <Destination2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default DestinationPage;
