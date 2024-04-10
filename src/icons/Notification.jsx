import React from "react";
import { twMerge } from "tailwind-merge";

const Notification = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 38 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("flex-shrink-0", className)}
      >
        <path
          d="M37.0681 29.6758C35.9841 27.8086 34.3727 22.5254 34.3727 15.625C34.3727 11.481 32.7265 7.50671 29.7963 4.57646C26.866 1.6462 22.8917 0 18.7477 0C14.6037 0 10.6294 1.6462 7.69919 4.57646C4.76894 7.50671 3.12274 11.481 3.12274 15.625C3.12274 22.5273 1.50945 27.8086 0.42547 29.6758C0.148655 30.1505 0.00190487 30.6898 1.84198e-05 31.2393C-0.00186803 31.7888 0.141176 32.3291 0.414726 32.8056C0.688276 33.2822 1.08266 33.6783 1.5581 33.9538C2.03354 34.2293 2.57323 34.3746 3.12274 34.375H11.0934C11.4539 36.139 12.4126 37.7243 13.8074 38.8628C15.2021 40.0014 16.9473 40.6232 18.7477 40.6232C20.5482 40.6232 22.2934 40.0014 23.6881 38.8628C25.0828 37.7243 26.0415 36.139 26.402 34.375H34.3727C34.9221 34.3743 35.4615 34.2287 35.9367 33.9531C36.4119 33.6774 36.806 33.2813 37.0793 32.8048C37.3526 32.3283 37.4955 31.7881 37.4935 31.2388C37.4915 30.6894 37.3448 30.1503 37.0681 29.6758ZM18.7477 37.5C17.7786 37.4997 16.8334 37.199 16.0423 36.6394C15.2511 36.0798 14.6528 35.2887 14.3298 34.375H23.1657C22.8427 35.2887 22.2444 36.0798 21.4532 36.6394C20.662 37.199 19.7168 37.4997 18.7477 37.5ZM3.12274 31.25C4.62664 28.6641 6.24774 22.6719 6.24774 15.625C6.24774 12.3098 7.5647 9.13037 9.9089 6.78617C12.2531 4.44196 15.4325 3.125 18.7477 3.125C22.0629 3.125 25.2424 4.44196 27.5866 6.78617C29.9308 9.13037 31.2477 12.3098 31.2477 15.625C31.2477 22.666 32.8649 28.6582 34.3727 31.25H3.12274Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default Notification;
