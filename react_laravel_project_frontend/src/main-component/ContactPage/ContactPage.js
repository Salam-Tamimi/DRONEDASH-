import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/DroneDash__3_-removebg-preview.png'
import ContactpageSec from '../../components/ContactpageSec/ContactpageSec';


const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <ContactpageSec />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ContactPage;

