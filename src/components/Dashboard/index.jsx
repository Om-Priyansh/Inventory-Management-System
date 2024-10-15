import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

import ChooseButton from './ChooseButtons';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleAddProduct = () =>{
        navigate("/dashboard/addproduct");
    };

    const handleScanProduct = () => {
        navigate("/dashboard/scanproduct");
    };


    return (
        <>
        
        <div className=" w-full h-full min-h-screen min-w-screen  flex items-center justify-center p-6">
      <div className=" w-full h-full  bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-filter backdrop-blur-md p-8"
      style={{
        height:"100%"
      }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="flex items-center justify-center ">
        <div className='flex space-x-10'>

<button className="bg-white/50 backdrop-blur-lg text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-white/70"
          onClick={handleAddProduct}
          >
            Add Product
          </button>
          <button className="bg-white/50 backdrop-blur-lg text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-white/70"
          onClick={handleScanProduct}
          >
            Scan Product
          </button>

          </div>
        </div>
      </div>                                                                                                    ``
    </div>



        
        </>
    )
};

export default Dashboard;