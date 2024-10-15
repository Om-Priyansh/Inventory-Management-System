import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import "./index.css";

const ChooseButton = () => {
    const navigate = useNavigate();

    const handleAddProduct = () =>{
        navigate("/addproduct");
    };

    const handleScanProduct = () => {
        navigate("/scanproduct");
    };

return(
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
          )
}

export default ChooseButton;