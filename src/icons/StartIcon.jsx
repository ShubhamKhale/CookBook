import React from "react";
import { twMerge } from "tailwind-merge";

const StartIcon = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("flex-shrink-0", className)}
      >
        <path
          d="M16.0004 27.7499L20.0004 24.6666L24.0004 27.7499L22.5004 22.6666L26.2504 19.9999H21.5837L20.0004 14.8333L18.4171 19.9999H13.7504L17.5004 22.6666L16.0004 27.7499ZM12.8171 32.2433L15.5071 23.3599L8.52539 18.3333H17.2187L20.0004 9.10327L22.7837 18.3333H31.4754L24.4937 23.3583L27.1837 32.2433L20.0004 26.7833L12.8171 32.2433Z"
          fill="#E4A951"
        />
      </svg>
    </>
  );
};

export default StartIcon;
