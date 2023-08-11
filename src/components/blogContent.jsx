import React from 'react';
import Img from '../assets/img/carousalImg.jpg';
import { Link } from 'react-router-dom';
import { AiFillTags } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
function BlogContent()
{
    return (
        <>
            <div className="container border mb-4">
                <img className="max-h-96 w-full" src={Img} alt="" />
                <div className="mx-auto p-8">
                    <h3 className='text-left text-3xl pb-8 text-orange-500 font-bold'>Blog Title</h3>
                    <Link className='text-left text-xl font-bold'>Some representative placeholder content for the Blog.</Link>
                    <ul className='text-sm flex pt-4 border-b pb-4'>
                        <li><p className='text-sm border-0 pr-2 border-r-4'>Name</p></li>
                        <li><p className='text-sm px-2 border-0 border-r-4'>May 12, 2023</p></li>
                        <li><p className='text-sm px-2'>12 comments</p></li>
                    </ul>
                    <div className="desc py-4 border-b">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, facere eaque, officia neque necessitatibus, atque vero veritatis dolorem sed at fuga ullam aperiam! Ipsam, unde ullam! Deleniti tempora vel voluptas esse sed praesentium dolorem sapiente fugit voluptatem atque omnis nisi delectus eaque facilis, ipsum obcaecati unde excepturi, adipisci laudantium commodi?</p>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <div className='flex items-center justify-center'>
                            <AiFillTags className='text-orange-500 mr-2' />
                            <span>Nature, Hiking</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <BsFillShareFill className='text-orange-500 mr-2' />
                            <span>Facebook, Twitter</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogContent;