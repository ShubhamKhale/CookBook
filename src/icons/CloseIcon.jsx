import React from "react";
import { twMerge } from "tailwind-merge";

const CloseIcon = ({ width, height, className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 48 48"
        className={twMerge("flex-shrink-0", className)}
      >
        <path
          fill="#F44336"
          d="M21.5 4.5H26.501V43.5H21.5z"
          transform="rotate(45.001 24 24)"
        ></path>
        <path
          fill="#F44336"
          d="M21.5 4.5H26.5V43.501H21.5z"
          transform="rotate(135.008 24 24)"
        ></path>
      </svg>
    </>
  );
};

export default CloseIcon;
