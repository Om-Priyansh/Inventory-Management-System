import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

import ChooseButton from './ChooseButtons';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleAddProduct = () =>{
        navigate("/addproduct");
    };

    const handleScanProduct = () => {
        navigate("/scanproduct");
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
          <ChooseButton />
        </div>
      </div>
    </div>



        
        </>
    )
};

export default Dashboard;