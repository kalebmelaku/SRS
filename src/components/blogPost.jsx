import React from 'react';
import BlogContent from './blogContent';
import { Link } from 'react-router-dom';

function BlogPost()
{
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="mx-4 mt-3 md:max-w-4/5">
                        <BlogContent />
                        <BlogContent />
                        <BlogContent />
                        <Link className='btn bg-orange-500 hover:bg-orange-600 text-center block  text-white w-full py-3 px-4'>VIEW ALL POSTS</Link>
                    </div>
                    <div className="ml-5 mt-3 md:max-w-2/5 px-4 my-4">
                        <form action="">
                            <input className='py-3 px-2 w-full' type="search" name="" id="" placeholder='TYPE TO SEARCH' />
                        </form>

                        <h3 className='font-bold text-2xl my-4'>RECENT POSTS</h3>
                        <div className="border-b">
                            <Link className='mb-2 mt-3 hover:text-orange-500 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                            <p className='py-2 text-sm text-slate-400'>May 23, 2023</p>
                        </div>
                        <div className="border-b">
                            <Link className='mb-2 mt-3 hover:text-orange-500 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                            <p className='py-2 text-sm text-slate-400'>May 23, 2023</p>
                        </div>
                        <div className="border-b">
                            <Link className='mb-2 mt-3 hover:text-orange-500 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                            <p className='py-2 text-sm text-slate-400'>May 23, 2023</p>
                        </div>


                        <h3 className='my-4 font-bold text-2xl'>CATEGORIES</h3>
                        <ul className='list-disc'>
                            <li className='py-2'><Link className='hover:text-orange-500 font-bold text-lg'>Health</Link></li>
                            <li className='py-2'><Link className='hover:text-orange-500 font-bold text-lg'>Nature</Link></li>

                        </ul>

                        {/* <h3 className='my-4 font-bold text-2xl'>TAGS</h3>
                        <div className='grid grid-flow-col auto-cols-min'>
                            <p className="border p-3 m-4">Health</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                            <p className="border p-3 m-4">Nature</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogPost;