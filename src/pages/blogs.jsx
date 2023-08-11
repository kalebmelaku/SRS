import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';
import BlogContent from '../components/blogContent';
import SideNav from '../components/sideNav';
import { Link } from 'react-router-dom';
function Blogs()
{
    return (
        <>
            <Navbar />
            <Banner title="RECENT POSTS" subtitle="OUR RECENT BLOG ENTRIES" />
            <div className="max-w-[1240px] px-4 container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="mx-auto mt-3 md:max-w-3/4">
                        <div className="grid grid-cols-2 gap-2">
                            <BlogContent />
                            <BlogContent />
                            <BlogContent />
                        </div>
                        <Link className='btn bg-orange-500 hover:bg-orange-600 text-center block  text-white w-full py-3 px-4 mb-4'>VIEW ALL POSTS</Link>
                    </div>
                    <SideNav />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blogs;