import React from "react";
import "./index.css"; // Make sure you have this CSS file for additional styling (if needed)

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <img
        src="https://res.cloudinary.com/dxejhgtqt/image/upload/v1712819259/bvu69mtyhvjoyoolwad9.gif"
        alt="Oops Something went wrong!..."
        className="error-image"
      />
    </div>
  );
};

export const NotResults = () => {
  return <h1>No results Found</h1>;
};
