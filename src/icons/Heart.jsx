import React from "react";
import { twMerge } from "tailwind-merge";

const HeartIcon = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 34 31"
        fill="none"
        className={twMerge("flex-shrink-0", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9997 30.5833L14.583 28.3833C5.99967 20.6 0.333008 15.45 0.333008 9.16667C0.333008 4.01667 4.36634 0 9.49967 0C12.3997 0 15.183 1.35 16.9997 3.46667C18.8163 1.35 21.5997 0 24.4997 0C29.633 0 33.6663 4.01667 33.6663 9.16667C33.6663 15.45 27.9997 20.6 19.4163 28.3833L16.9997 30.5833Z"
          fill="#F24E1E"
        />
      </svg>
    </>
  );
};

export default HeartIcon;
