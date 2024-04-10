import React from "react";
import Navbar from "./Navbar";
import StartIcon from "../icons/StartIcon";
import chickenPasta from "../assets/chicken_pasta.png";

const RecipeInfo = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="px-40 pt-12">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-3xl font-bold">CHICKEN PASTA</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <StartIcon
                  width="35px"
                  height="35px"
                  key={index}
                  className={`relative right-${index}`}
                />
              ))}
              <p className="ml-2 text-[#E4A951] font-medium text-xl">(146)</p>
            </div>
            <div className="mt-16 grid grid-cols-3">
              <div className="text-center mr-8">
                <p className="font-medium text-4xl">8</p>
                <p className="mt-1 font-medium text-xs">INGREDIENTS</p>
              </div>
              <div className="text-center px-8 border-x-2 border-x-black">
                <p className="font-medium text-4xl">15</p>
                <p className="mt-1 font-medium text-xs">MINUTES</p>
              </div>
              <div className="text-center ml-8">
                <p className="font-medium text-4xl">720</p>
                <p className="mt-1 font-medium text-xs">CALORIES</p>
              </div>
            </div>
            <p className="mt-12 w-fit font-semibold text-2xl bg-[#E4A951] text-black rounded-[10px] px-3 py-1 cursor-pointer">
              NUTRITION 
            </p>  
          </div>
          <div>
            <img
              className="w-[360px] h-[300px] border-2 border-black object-cover"
              src={chickenPasta}
              alt="-"
            />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-x-5">
            <div className="w-[80px] h-[80px]  bg-[#C65C14] text-center rounded-full">
                <p>45g</p>
                <p>PROTEIN</p>
            </div>   
        </div>
      </div>
    </>
  );
};

export default RecipeInfo;
