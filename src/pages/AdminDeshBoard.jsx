import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { addNewPostApiHandle, getBlogs } from '../service/aposAction';
import HeroSection from './Header';
import { RiDeleteBin7Line } from "react-icons/ri";

const AdminDashboard = () => {
  const [rowData, setRowData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setRowData(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const [columnDefs] = useState([
    { headerName: 'Title', field: 'title' },
    { headerName: 'Post content', field: 'comment' },
    { headerName: 'Image Url', field: 'Image' },
    {
      headerName: 'Action',
      cellRenderer: (params) => (
        <button onClick={() => handleDelete(params.data._id)}>
          <RiDeleteBin7Line className='text-2xl'/>
        </button>
      ),
    },
  ]);

  const handleDelete = (id) => {
    console.log('Delete clicked:', id);
    // Handle delete logic here
  };

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost({ ...newPost, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSavePost = async() => {
    const res = await addNewPostApiHandle(newPost)
    console.log(res);
    
    
    // Implement logic to save the post (API call)
    //console.log(newPost);
    setIsModalOpen(false); // Close modal after saving
    setNewPost({ title: '', content: '', image: null });
    setImagePreview(null); // Reset preview
    fetchBlogs()
  };

  return (
    <>
      <HeroSection />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={handleAddPost}
              className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
            >
              Add Post
            </button>
          </div>

          <div className="ag-theme-alpine-dark" style={{ height: '400px', width: '100%' }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={5}
              domLayout="autoHeight"
            />
          </div>
        </div>
      </div>

      {/* Modal for adding new post */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className=" bg-black text-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full p-2 border text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block bg-black text-gray-700">Content</label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2"
              />
              {imagePreview && (
                <div className="mt-4">
                  <img src={imagePreview} alt="Image Preview" className="w-full h-32 object-cover" />
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSavePost}
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Save Post
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
