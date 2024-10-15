import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./index.css";

const AddProduct = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [cost, setCost] = useState('');
  const navigate = useNavigate();

  const handleGenerateQR = () => {
    // Logic for generating QR code
    console.log("Generating QR code...");
  };

  return (
    <>
      <div className="w-full h-full min-h-screen min-w-screen flex items-center justify-center p-6">
        <div className="w-full h-full bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-filter backdrop-blur-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Product</h1>
          <form className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="itemName" className="block text-sm font-medium mb-2">Item Name</label>
                <input
                  id="itemName"
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Item Name"
                  required
                />
              </div>
              <div>
              <label htmlFor="cost" className="block text-sm font-medium mb-2">Cost</label>
                <input
                  id="cost"
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Cost"
                  required
                />
                
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Category"
                  required
                />
              </div>
              <div>
                <label htmlFor="purchaseDate" className="block text-sm font-medium mb-2">Purchase Date</label>
                <input
                  id="purchaseDate"
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Description"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleGenerateQR}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Generate QR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
