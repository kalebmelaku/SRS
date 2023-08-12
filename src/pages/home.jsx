import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
import Carousal from '../components/carousal';
import BlogPost from '../components/blogPost';
import Footer from '../components/footer';


function Home()
{
    useEffect(() =>
    {
        document.title = 'Home';
    })
    return (
        <>
            <NavBar/>
            <Carousal />
            <div className='max-w-[1240px] mx-auto p-4'>
                <BlogPost />
            </div>
            
            <Footer/>
        </>
    );
}

export default Home;