import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import PricingSection from '../../components/PricingSection';


const PricingPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'} />
            <PricingSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PricingPage;
