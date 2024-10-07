function BlogCard({ blog }) {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full  md:w-48"
              src={blog.Image}
              alt={blog.title}
            />
          </div>
  
          {/* Content Section */}
          <div className="p-6">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {blog.category}
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {blog.title}
            </h2>
            <p className="mt-2 text-gray-500">
              {blog.comment}
            </p>
          </div>
        </div>
      </div>
    
    );
  }
  export default BlogCard