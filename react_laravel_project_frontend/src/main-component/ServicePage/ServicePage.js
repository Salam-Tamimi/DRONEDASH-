import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import Newslatter from '../../components/Newslatter/Newslatter';
import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';


const ServicePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection3/> 
            <Newslatter nClass={'section-bg'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ServicePage;
