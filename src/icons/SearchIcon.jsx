import React from "react";
import { twMerge } from "tailwind-merge";

const SearchIcon = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("flex-shrink-0", className)}
      >
        <path
          d="M43.7499 43.75L34.702 34.7021M34.702 34.7021C36.2497 33.1544 37.4774 31.317 38.315 29.2949C39.1526 27.2727 39.5837 25.1054 39.5837 22.9167C39.5837 20.7279 39.1526 18.5606 38.315 16.5384C37.4774 14.5163 36.2497 12.6789 34.702 11.1313C33.1543 9.58357 31.317 8.35588 29.2948 7.51828C27.2727 6.68068 25.1054 6.24957 22.9166 6.24957C20.7279 6.24957 18.5605 6.68068 16.5384 7.51828C14.5162 8.35588 12.6789 9.58357 11.1312 11.1313C8.0055 14.2569 6.24951 18.4963 6.24951 22.9167C6.24951 27.3371 8.0055 31.5764 11.1312 34.7021C14.2569 37.8278 18.4962 39.5838 22.9166 39.5838C27.337 39.5838 31.5763 37.8278 34.702 34.7021Z"
          stroke="white"
          stroke-width="3.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default SearchIcon;
