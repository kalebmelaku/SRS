import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BlogDetail from '../components/blogDetail';
import Banner from '../components/banner';

function BlogDet()
{
    useEffect(() =>
    {
        document.title = 'Blogs';
    });
    return (
        <>
            <Navbar />
            <Banner title="BLOG DETAIL" subtitle="TITLE OF THE BLOG"/>
            <BlogDetail/>
            <Footer />
        </>
    );
}

export default BlogDet;