import { useEffect, useState } from 'react';
import { getBlogs } from '../service/aposAction';
import BlogCard from './BlogCard';
import HeroSection from './Header';

function Blog() {
  const [allBlogs, setBlogs] = useState([]);
  const [ loader , setLoader] = useState(true)


  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setLoader(true)
      console.log(res.data); // Check if this is the correct data structure
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
   
    }
    setLoader(false)
  };

  useEffect(() => {
    console.log("Blog component rendering...");
    fetchBlogs();
  }, []);
   // Add empty dependency array to avoid infinite loop
   if (loader) {
    return (
      <>
      <div className=' flex justify-center items-center'>
        <div className=' text-2xl m-3'>
          Loading data....
        </div>

      </div>
      </>
    )
   }

  
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
