import React from "react";
import "./index.css"; // Make sure you have this CSS file for additional styling (if needed)

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <img
        src='../../../public/WhatsAppVideo2024-04-10at16.09.27_0f5ab656-ezgif.com-video-to-gif-converter.gif'
        alt="Oops Something went wrong!..."
        className="error-image"
      />
    </div>
  );
};

export const NotResults = () => {
  return <h1>No results Found</h1>;
};
