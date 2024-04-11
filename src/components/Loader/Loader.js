import React from "react";
import "./Loader.css"; // Make sure you have this CSS file for additional styling (if needed)

const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src="https://res.cloudinary.com/dxejhgtqt/image/upload/v1712745964/lrmzozqkhhcrfgngxonl.gif"
        alt="Loading..."
        className="loader-image"
      />
    </div>
  );
};

export default Loader;
