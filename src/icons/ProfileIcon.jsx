import React from "react";
import { twMerge } from "tailwind-merge";

const ProfileIcon = ({ width, height, className }) => {
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
          d="M25.0003 4.16667C13.4941 4.16667 4.16699 13.4938 4.16699 25C4.16699 36.5063 13.4941 45.8333 25.0003 45.8333C36.5066 45.8333 45.8337 36.5063 45.8337 25C45.8337 13.4938 36.5066 4.16667 25.0003 4.16667Z"
          stroke="white"
          stroke-width="3.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.89844 38.2208C8.89844 38.2208 13.5422 32.2917 25.0005 32.2917C36.4589 32.2917 41.1047 38.2208 41.1047 38.2208M25.0005 25C26.6581 25 28.2478 24.3415 29.4199 23.1694C30.592 21.9973 31.2505 20.4076 31.2505 18.75C31.2505 17.0924 30.592 15.5027 29.4199 14.3306C28.2478 13.1585 26.6581 12.5 25.0005 12.5C23.3429 12.5 21.7532 13.1585 20.5811 14.3306C19.409 15.5027 18.7505 17.0924 18.7505 18.75C18.7505 20.4076 19.409 21.9973 20.5811 23.1694C21.7532 24.3415 23.3429 25 25.0005 25Z"
          stroke="white"
          stroke-width="3.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ProfileIcon;
