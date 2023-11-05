import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import BrideGrooms from '../../components/BrideGrooms';

const BrideGroomPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Our Planners'} pagesub={'Planners'}/> 
            <BrideGrooms/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BrideGroomPage;
