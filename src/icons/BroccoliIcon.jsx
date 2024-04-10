import React from "react";
import { twMerge } from "tailwind-merge";

const BroccoliIcon = ({ width, height, className }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 300 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("flex-shrink-0", className)}  
      >
        <path
          d="M50.9531 58.0547L20.0859 96.1875C20.0859 96.1875 10.8281 107.789 13.2188 119.25C15.9141 132.047 22.7109 132.82 22.7109 132.82C22.7109 132.82 22.2656 142.758 28.125 151.219C33.9844 159.68 36.7734 163.687 58.0547 170.133C79.336 176.578 117.727 183.82 117.727 183.82L127.617 222.211C127.617 222.211 130.266 231.703 142.055 236.648C153.844 241.594 163.055 240.305 163.055 240.305C163.055 240.305 167.93 253.781 184.125 257.531C198.141 260.789 209.32 253.734 209.32 253.734C209.32 253.734 221.109 260.953 236.297 257.531C253.922 253.57 257.953 242.719 257.953 242.719C257.953 242.719 272.391 241.195 281.883 227.508C291.375 213.82 284.531 198.258 284.531 198.258C284.531 198.258 292.945 185.789 290.602 171.656C288.492 158.859 283.406 154.5 283.406 154.5L252.984 133.266C252.984 133.266 265.898 127.945 270.469 105.141C275.039 82.3359 263.625 70.9453 263.625 70.9453C263.625 70.9453 268.102 58.0781 260.578 46.6172C253.359 35.6016 243.094 40.9219 238.148 35.9766C232.055 29.8828 197.484 26.0859 197.484 26.0859L157.617 59.2031L50.9531 58.0547Z"
          fill="#2F7C31"
        />
        <path
          d="M65.625 19.8046C65.625 19.8046 77.5547 6.72649 93.5625 7.87493C109.57 9.02337 112.477 18.6796 112.477 18.6796C112.477 18.6796 122.297 17.0624 128.461 19.8046C141.07 25.4296 139.734 31.9687 143.555 31.5234C147.375 31.0781 147.375 14.8593 165.188 9.21087C183 3.56243 192.68 12.1406 196.5 11.9062C200.32 11.6718 205.055 7.14837 218.578 11.4609C230.742 15.3515 233.344 23.414 233.906 25.8749C234.562 28.8515 234.562 32.1796 238.172 35.9999C241.781 39.8202 237.914 53.6718 232.734 59.2968C227.555 64.9218 217.453 65.5077 217.453 65.5077C217.453 65.5077 219.82 84.9609 203.648 95.6484C192.281 103.148 180.047 100.195 180.047 100.195C180.047 100.195 166.992 111.492 152.344 106.758C137.695 102.023 136.125 95.9531 144.234 89.1796C152.344 82.4296 155.953 69.3515 146.273 66.8671C136.594 64.3827 126.68 69.1171 123.305 79.7109C119.93 90.3046 119.695 99.539 108.656 107.414C97.6172 115.289 89.5078 112.828 78.4688 115.758C67.4297 118.687 60 128.156 50.7656 128.367C41.5313 128.602 34.3125 121.828 29.5781 122.508C24.8438 123.187 15.1641 125.437 15.1641 125.437C15.1641 125.437 10.875 117.328 13.5938 107.414C16.3125 97.4999 20.1094 96.164 20.1094 96.164C20.1094 96.164 -1.85156 74.9296 18.3281 42.539C36.5625 13.2656 65.625 19.8046 65.625 19.8046ZM186.82 171.633C186.82 171.633 195.375 168.023 201.023 158.344C206.648 148.664 209.578 141.445 218.602 136.711C227.602 131.977 237.75 132.422 250.828 133.102C263.906 133.781 267.211 137.766 270.422 140.977C276.727 147.281 283.5 154.5 283.5 154.5C283.5 154.5 272.461 155.391 266.602 164.414C260.742 173.437 257.133 185.812 257.133 185.812C257.133 185.812 249.258 188.742 240.914 193.242C232.57 197.742 214.102 209.695 201.938 206.531C189.773 203.367 183.469 189.398 183.469 187.828C183.445 186.281 186.82 171.633 186.82 171.633Z"
          fill="#709921"
        />
        <path
          d="M82.8281 191.789C82.2656 193.477 23.5781 259.5 23.5781 259.5C23.5781 259.5 30.6328 270.211 36.8438 275.297C43.0547 280.383 53.1328 287.977 59.5312 289.711C66.4688 291.586 71.8125 293.648 78.0234 285.469C84.2344 277.289 89.0156 266.578 105.961 248.508C122.906 230.437 135.023 219.445 148.547 212.953C162.07 206.461 181.547 201.961 186.633 201.398C191.719 200.836 198.188 200.273 198.188 200.273C198.188 200.273 202.008 192.563 200.719 186.445C199.289 179.625 189.727 176.578 189.727 176.578L141.211 183.633L146.953 181.711C146.953 181.711 144.68 178.359 147.703 174.023C150.328 170.25 162.375 155.672 166.336 150.305C170.297 144.937 178.336 134.531 178.172 132.844C177.891 129.75 170.555 125.789 168.305 124.383C166.055 122.977 161.25 121.008 161.25 121.008L109.336 174.844L106.523 172.312C106.523 172.312 103.148 172.148 101.156 166.945C99.75 163.289 99.1875 152.273 98.0625 142.688C97.3594 136.688 96.9375 129.703 96.9375 129.703C96.9375 129.703 88.7578 126.047 83.3906 126.609C78.0234 127.172 71.8359 133.102 71.8359 133.102L82.8281 191.789Z"
          fill="#9FB525"
        />
        <path
          d="M63.0703 134.789C62.2266 137.039 63.6328 147.211 63.6328 160.734C63.6328 174.258 62.8594 186.797 56.2969 194.859C47.8359 205.289 33.4453 219.961 22.4531 229.828C17.6953 234.094 14.5547 235.758 14.2734 236.883C13.9922 238.008 16.3125 248.273 18.5156 252.68C22.5 260.648 29.8125 267.891 29.8125 267.891C29.8125 267.891 59.1328 234.914 71.5547 222.211C83.9766 209.508 90.7266 201.047 93.5625 203.883C96.375 206.695 87.0234 217.688 80.2969 225.328C70.1484 236.883 41.6953 279.047 41.6953 279.047C41.6953 279.047 43.2656 280.688 46.4531 282.867C49.2656 284.813 51.4687 285.82 51.4687 285.82C51.4687 285.82 66.4688 261.422 87.3516 239.414C108.234 217.406 120.07 207.258 134.461 202.453C148.852 197.648 200.742 186.375 200.742 186.375C200.742 186.375 198.492 178.477 197.086 175.102C195.68 171.727 192.563 167.766 192.563 167.766C192.563 167.766 166.617 174.539 162.094 175.945C157.57 177.352 131.906 180.469 130.781 177.633C129.656 174.82 147.984 151.969 153.352 144.914C158.719 137.859 168.422 124.313 168.422 124.313C168.422 124.313 162.68 120.375 155.625 118.687C148.57 117 146.039 118.406 146.039 118.406C146.039 118.406 128.836 141.539 123.75 148.312C118.664 155.086 108.797 169.758 99.7734 172.289C90.75 174.82 88.5 172.57 87.3516 165.797C86.2266 159.023 83.3906 126.586 83.3906 126.586C83.3906 126.586 74.3672 127.148 70.9688 128.836C67.5703 130.523 63.9141 132.539 63.0703 134.789Z"
          fill="#B7D118"
        />
        <path
          d="M241.313 176.086C241.313 176.086 246.562 166.594 251.086 170.555C255.633 174.516 246.984 187.008 245.133 187.43C243.281 187.852 228.844 183.047 230.953 177.656C233.109 172.266 241.313 176.086 241.313 176.086ZM104.953 80.8361C110.344 80.6486 121.664 69.5861 116.883 63.844C113.016 59.2033 104.953 68.2033 104.953 68.2033C104.953 68.2033 96.4219 59.4143 93.0469 63.6565C88.2422 69.7971 100.992 80.9768 104.953 80.8361ZM74.9063 91.8986C74.9063 91.8986 79.5938 82.2658 84.9609 86.3674C90.3516 90.469 81 104.367 78.1641 105.211C75.3281 106.055 60.0938 97.3361 64.125 91.1721C67.4063 86.2268 74.9063 91.8986 74.9063 91.8986ZM33.6563 83.1096C35.3438 83.3908 47.4141 76.594 43.9922 70.6408C40.5703 64.6877 33.6563 72.2111 33.6563 72.2111C33.6563 72.2111 27.1172 66.4221 24.3047 69.9377C19.7813 75.6096 31.125 82.6877 33.6563 83.1096ZM35.7891 102.68C35.7891 102.68 40.336 93.3283 45.1406 96.8674C49.9688 100.406 41.6016 114.586 40.3125 115.149C39.0469 115.711 22.0078 110.906 25.7109 104.086C28.2891 99.4221 35.7891 102.68 35.7891 102.68ZM185.648 92.133C189.375 90.5158 195.609 77.9065 189.773 75.3518C185.063 73.2893 182.602 80.9768 182.602 80.9768C182.602 80.9768 177.375 76.383 173.789 80.1565C168.281 85.9455 183.398 93.1174 185.648 92.133ZM212.133 43.0783C212.133 43.0783 212.438 37.594 216.656 37.8752C221.297 38.2033 220.688 49.6408 217.148 51.7971C213.609 53.9533 201.938 47.7658 204.586 43.4533C206.273 40.7111 212.438 42.5861 212.133 43.0783Z"
          fill="#2F7C31"
        />
      </svg>
    </>
  );
};

export default BroccoliIcon;
