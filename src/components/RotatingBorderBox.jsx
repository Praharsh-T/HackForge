import React from "react";
import "../styles/border-box.css"

const RotatingBorderBox = () => {
    return (
      <div className="relative flex justify-center items-center p-6 w-full max-w-2xl mx-auto">
        <div className="relative w-full p-6 text-center rounded-lg overflow-hidden bg-black">
          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-lg border-animation"></div>
  
          {/* Inner Black Background */}
          <div className="absolute inset-[4px] bg-black rounded-lg"></div>
  
          {/* Text */}
          <h2 className="relative text-pink-400 text-3xl font-bold tracking-wide z-10">
            🚀 Hackathon Began! 💡
          </h2>
        </div>
      </div>
    );
  };
  
  export default RotatingBorderBox;
  