import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar'
import Services from '../../api/service'
import Footer from '../../components/footer';
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import Newslatter from '../../components/Newslatter/Newslatter';
import ServiceSidebar from './sidebar';
import Categorys from './category';
import WhyChoose from './WhyChoose';


const ServiceSinglePage = (props) => {
    const { id } = useParams()

    const serviceDetails = Services.find(item => item.id === id)


    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service'} />
            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12">
                            <div className="service-single-content">
                                <div className="service-single-img">
                                    <img src={serviceDetails.ssImg} alt="" />
                                </div>
                                <h2>{serviceDetails.title}</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                                <WhyChoose/>
                                <Categorys/>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section >
            <Newslatter nClass={'section-bg'}/>
            <Footer />
            <Scrollbar />
        </Fragment >
    )
};
export default ServiceSinglePage;
