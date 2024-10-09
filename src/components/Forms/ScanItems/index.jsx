import "./index.css";
import React, { useRef, useState } from 'react';

const ScanItems = () => {
  const videoRef = useRef(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);

  const startWebcam = async (event) => {
    event.preventDefault(); // Prevent page reload
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsWebcamOn(true); // Webcam is on
    } catch (error) {
      console.error("Error accessing the webcam: ", error);
    }
  };

  const stopWebcam = (event) => {
    event.preventDefault(); // Prevent page reload
    let stream = videoRef.current.srcObject;
    let tracks = stream?.getTracks();

    tracks?.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    setIsWebcamOn(false); // Webcam is off
  };

  return (
    <>
      <form className="form col-md-12 mt-5">
        <div className="form-group">
          <div className="cameraRectangle col-md-12">
            {/* Conditionally render button or keep the video hidden */}
            
            {/* Pre-render the video element but hide it when webcam is off */}
            <video
              ref={videoRef}
            //   style={{ width: '100%', height: '300px', display: isWebcamOn ? 'block' : 'none' }}
            className="col-md-12"
            />
          </div>
          {!isWebcamOn && (
              <button
                className="btn-info btn col-md-12"
                onClick={startWebcam}
              >
                Start Camera
              </button>
            )}
        </div>

        {/* "Scan Item" button also stops the webcam */}
        <button
          type="submit"
          className="mt-4 btn-primary btn-block form-control btn"
          onClick={stopWebcam}
        >
          Scan Item
        </button>
      </form>
    </>
  );
};

export default ScanItems;
