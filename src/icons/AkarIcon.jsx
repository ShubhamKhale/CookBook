import React from "react";
import { twMerge } from "tailwind-merge";

const AkarIcon = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("flex-shrink-0", className)}
      >
        <path
          d="M42.895 19.2204L29.5499 12.9817L23.3112 26.3268"
          stroke="white"
          strokeWidth="2.17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.5508 12.9817L35.2359 28.6488C39.1608 39.4649 33.5746 51.4141 22.7585 55.339L20.8001 56.0496"
          stroke="white"
          strokeWidth="2.17"  
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default AkarIcon;
