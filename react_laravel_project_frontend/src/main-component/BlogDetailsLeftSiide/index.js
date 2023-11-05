import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Logo from '../../images/DroneDash__2_-removebg-preview.png'
import Newslatter from '../../components/Newslatter/Newslatter';
import BlogSingle from '../../components/BlogDetails'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Footer from '../../components/footer';

const BlogDetailsLeftSiide = () => {

    const { id } = useParams()
    const BlogDetails = blogs.find(item => item.id === id)
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'} />
            <Scrollbar />
            <Newslatter nClass={'section-bg'}/>
            <Footer />
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


