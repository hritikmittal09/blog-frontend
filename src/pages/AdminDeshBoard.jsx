import React, { useState ,useEffect} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
//import 'ag-grid-community/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/styles/ag-grid.css'; // Base styles
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Alpine theme styles
import { getBlogs } from '../service/aposAction';
import HeroSection from './Header';
import { RiDeleteBin7Line } from "react-icons/ri";


const AdminDashboard = () => {

    const [rowData, setRowData] = useState([]);

    const fetchBlogs = async () => {
        try {
          const res = await getBlogs();
          console.log(res.data); // Check if this is the correct data structure
          setRowData(res.data);
          console.log(rowData);
          
        } 
        catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
    
      useEffect(() => {
        console.log( " admin  component rendering...");
        fetchBlogs();
      }, []); // Add empty dependency array to avoid infinite loop
    




 

  
      const [columnDefs] = useState([
        { headerName: 'Title', field: 'title' },
        { headerName: 'Post content', field: 'comment' },
        { headerName: 'Image Url', field: 'Image' },
        {
          headerName: 'Action',
          cellRenderer: (params) => (
            <button
              onClick={() => handleDelete(params.data._id)}
            
            >
            <RiDeleteBin7Line className=' text-2xl'/>
            </button>
          ),
        },
      ]);
    
  const handleDelete = (id) => {
    console.log('delete is clickd' , id );
    
    //const newRowData = rowData.filter((row) => row.id !== id);
    //setRowData(newRowData);
  };

  const handleAddPost = () => {
    // Add post logic here (e.g., show a form for adding new post)
    alert('Add Post button clicked!');
  };

  return (
    <>
    <HeroSection/>
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

        <div
          className="ag-theme-alpine-dark"
          style={{ height: '400px', width: '100%' }}
        >
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
    </>
  );
};

export default AdminDashboard;
