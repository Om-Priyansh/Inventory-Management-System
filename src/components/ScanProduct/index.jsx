import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam'; // Import react-webcam
import { useNavigate } from 'react-router-dom';

const ScanProduct = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const navigate = useNavigate();
  const webcamRef = useRef(null); // Reference for webcam

  const handleStartCamera = () => {
    setIsCameraActive(true);
    console.log("Camera started");
  };

  const handleStopCamera = () => {
    setIsCameraActive(false);
    console.log("Camera stopped");
  };

  const handleScanItem = () => {
    // Logic for scanning item (e.g., using a QR code scanner)
    console.log("Scanning item...");
  };

  return (
    <>
      <div className="w-full h-full min-h-screen min-w-screen flex items-center justify-center p-6">
        <div className="w-full h-full bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-filter backdrop-blur-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Scan Product</h1>
          <div className="flex flex-col items-center space-y-4">
            {/* Rectangle for the camera */}
            <div className="relative w-full h-[60vh] flex items-center justify-center bg-purple-400 bg-opacity-20 rounded-lg shadow-md">
              {!isCameraActive ? (
                <button
                  onClick={handleStartCamera}
                  className="absolute bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  Start Camera
                </button>
              ) : (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-full h-full rounded-lg"
                  />
                  <button
                    onClick={handleStopCamera}
                    className="absolute bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded-md transition duration-300 bottom-4 left-1/2 transform -translate-x-1/2"
                  >
                    Stop Camera
                  </button>
                </>
              )}
            </div>

            {/* Scan Item button */}
            <button
              onClick={handleScanItem}
              className="w-full bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Scan Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanProduct;
