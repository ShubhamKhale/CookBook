import React from "react";
import { twMerge } from "tailwind-merge";

const YellowSquare = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 251 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("flex-shrink-0", className)}  
      >
        <rect
          x="19.1597"
          y="-166"
          width="279"
          height="271"
          rx="56"
          transform="rotate(26.3206 19.1597 -166)"
          fill="#EBC76B"
        />
      </svg>
    </>
  );
};

export default YellowSquare;
