import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MemberDetail from '../components/memberDetail';

function MemberDet()
{
    useEffect(() =>
    {
        document.title = 'Members'
    })
    return (
        <>
            <Navbar />
            <MemberDetail/>
            <Footer />
        </>
    );
}

export default MemberDet;