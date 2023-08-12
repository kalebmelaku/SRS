import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Members from './pages/members';
import MemberDet from './pages/memberDet';
import BlogDet from './pages/blogDet';
function App()
{
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
        <Route path="/member" element={<MemberDet />} />
        <Route path="/blog" element={<BlogDet />} />
      </Routes>
    </>
  );
}

export default App;
