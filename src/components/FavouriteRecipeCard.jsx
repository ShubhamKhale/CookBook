import React from "react";
import chickenPastaImg from "../assets/chicken_pasta.png";
import StartIcon from "../icons/StartIcon";
import HeartIcon from "../icons/Heart";

const FavouriteRecipeCard = () => {
  return (
    <>
      <div className=" rounded-xl border-[1px] border-black w-fit cursor-pointer">
        <img
          className="rounded-t-xl w-[261px] h-[200px] object-cover"
          src={chickenPastaImg}
          alt="*"
        />
        <div  className="z-55 flex items-center justify-center relative bottom-48 left-52 bg-white w-[40px] h-[40px] rounded-full">
          <HeartIcon className="" width="28px" height="28px" />
        </div>
        <div className="ml-7 -mt-10 ">
          <p className="mt-2 font-medium text-base">Chicken Pasta</p>
          <p className="font-normal italic text-sm">-Thomas Dean</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (   
              <StartIcon width="25px" height="25px" key={index} className={`relative right-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteRecipeCard;
