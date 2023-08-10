import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Footer()
{
    let year = new Date().getFullYear();
    return (
        <>
            <footer className="">
                <div className="text max-w-[1240px] mx-auto">
                    <ul className='text-white text-xl flex'>
                        <li><Link className='text-xl border-0 border-r-2'>FACEBOOK</Link></li>
                        <li><Link className='text-xl border-0 border-r-2'>TWITTER</Link></li>
                        <li><Link className='text-xl border-0 border-r-2'>BEHANCE</Link></li>
                        <li><Link className='text-xl border-0 border-r-2'>LINKEDIN</Link></li>
                        <li><Link className='text-xl'>DRIBBBLE</Link></li>
                    </ul>
                </div>
                <p className='text-white text-center'>Copyright &copy; {year}</p>
            </footer>
        </>
    );
}

export default Footer;