import React from 'react';
import NavBar from '../components/navbar';
import Carousal from '../components/carousal';
import BlogPost from '../components/blogPost';
import Footer from '../components/footer';


function Home()
{
    return (
        <>
            <NavBar page= "home" />
            <Carousal />
            <div className='max-w-[1240px] mx-auto p-4'>
                <BlogPost />
            </div>
            
            <Footer/>
        </>
    );
}

export default Home;