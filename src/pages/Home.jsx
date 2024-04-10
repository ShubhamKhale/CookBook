import React from "react";
import Navbar from "../components/Navbar";
import DisplayRecipeCard from "../components/DisplayRecipeCard";
import mainBgImg from "../assets/main-bg.png";
import chickenPastaImg from "../assets/chicken_pasta.png";
import popularRecipeImg from "../assets/popular_recipe_img.png";
import SearchIcon from "../icons/SearchIcon";
import AkarIcon from "../icons/AkarIcon";
import Triangle from "../icons/Triangle";
import RecipeCollectionCard from "../components/RecipeCollectionCard";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="relative">
        <img className="w-screen  transform scale-80" src={mainBgImg} alt="-" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className=" inline-flex items-center mb-[16.5rem]">
            <input
              className="w-[750px] py-1 px-6 bg-gray-200 text-white placeholder-white bg-opacity-20 border border-white rounded-full font-medium text-2xl"
              placeholder="Search for recipes..."
              type="text"
              name="searchbar"
              id="searchbar"
            />
            <SearchIcon
              width="35px"
              height="35px"
              className="relative right-[3.5rem]"
            />
          </div>
          <p className="mr-9 mt-16 relative bottom-[8rem] font-medium leading-tight tracking-wide text-5xl text-center text-white">
            "Cookbook: Sharing the Flavour <br /> of Home, One Recipe at a
            Time."
          </p>
          <div className="mt-8 ">
            <div className="relative right-[30rem] bottom-20 font-medium text-xl text-center leading-6 text-white">
              Click here to add
              <br /> new recipe
              <AkarIcon width="50px" height="50px" className="ml-[4.5rem]" />
              <button className="relative right-16 bottom-6 bg-[#E4A951] text-black hover:opacity-70 rounded-[10px] px-3 py-1 cursor-pointer">
                ADD RECIPE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-40">
        <p className="mt-8 w-fit font-semibold text-4xl bg-[#E4A951] text-black rounded-[10px] px-3 py-1 cursor-pointer">
          WHAT YOU’RE CRAVING
        </p>
        <div className="mt-8 grid grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <DisplayRecipeCard key={index} />
          ))}
        </div>
        <p className="mt-20 w-fit font-semibold text-4xl bg-[#E4A951] text-black rounded-[10px] px-3 py-1 cursor-pointer">
          MORE RECIPES
        </p>
        <div className="mt-8 grid grid-cols-5">
          {[...Array(5)].map((_, index) => (
            <div className="w-fit cursor-pointer" key={index}>
              <img
                className="w-36 h-36 rounded-full"
                src={chickenPastaImg}
                alt="*"
              />
              <p className="font-medium text-2xl text-center">Quick & Easy</p>
            </div>
          ))}
        </div>
        <p className="mt-20 w-fit font-semibold text-4xl bg-[#E4A951] text-black rounded-[10px] px-3 py-1 cursor-pointer">
          COLLECTIONS
        </p>
        <div className="mt-8 grid grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <RecipeCollectionCard key={index} />
          ))}
        </div>
        <div className="mt-24 flex items-center justify-between">
          <div className="w-[50%]">
            <p className="font-medium text-left text-5xl leading-snug pr-[13rem] ">
              The Most Popular Recipes on CookBook
              <br /> Right Now
            </p>
            <p className="mt-4 cursor-pointer flex items-center text-[#C65C14] font-semibold text-lg">
              View Complete Guide{" "}
              <span className="ml-1 mt-[1px]">
                {" "}
                <Triangle width="15px" height="15px" />{" "}
              </span>{" "}
            </p>
          </div>
          <p className="border-[0.5px] border-[#000] mb-6 h-[240px]"></p>
          <div className="w-[50%]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-between"
              >
                <img
                  className="ml-5 w-[200px] h-[100px] object-cover"
                  src={popularRecipeImg}
                  alt="*"
                />
                <p className="ml-5 pr-12 font-semibold leading-none text-2xl">
                  "Garlic bread: A comforting slice of heaven."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Home;
