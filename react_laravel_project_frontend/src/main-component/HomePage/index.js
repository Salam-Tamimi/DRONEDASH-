import React, { Fragment } from 'react';
import About from '../../components/about';
import Destination from '../../components/Destination';
import Footer from '../../components/footer';
import FunFact from '../../components/FunFact';
import Hero from '../../components/hero';
import Navbar from '../../components/Navbar'
import PricingSection from '../../components/PricingSection';
import Scrollbar from '../../components/scrollbar'
import SearchSection from '../../components/SearchSection';
import Testimonial from '../../components/Testimonial';
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import ImageWithParagraph from "./ImageWithParagraph";


const HomePage = () => {
    return (
        <Fragment>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={Logo} />
            <Hero />
            <ImageWithParagraph/>
            <PricingSection />
            {/* <SearchSection /> */}
            {/* <About /> */}
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'} />
            {/* <Destination /> */}
            <Testimonial />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;