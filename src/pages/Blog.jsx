import { useEffect, useState } from 'react';
import { getBlogs } from '../service/aposAction';
import BlogCard from './BlogCard';
import HeroSection from './Header';

function Blog() {
  const [allBlogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      console.log(res.data); // Check if this is the correct data structure
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    console.log("Blog component rendering...");
    fetchBlogs();
  }, []); // Add empty dependency array to avoid infinite loop

  return (
    
    
    <div className='flex flex-col gap-5 justify-center items-center my-auto mt-10' >
      <h1 className=' text-2xl'>My Blogs</h1>
      {allBlogs.length > 0 ? (
        allBlogs.map((blog, index) => (
            <BlogCard blog = {blog} key={index}/>

         
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}

export default Blog;
