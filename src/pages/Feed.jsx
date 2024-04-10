import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HamburgerIcon from "../icons/HamburgerIcon";
import FavouriteRecipeCard from "../components/FavouriteRecipeCard";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import CloseIcon from "../icons/CloseIcon";
     
const Feed = () => {
  const [isMenuIconHover, setIsMenuIconHover] = useState(false);
  const [isMenuIconClick, setIsMenuIconClick] = useState(false);

  // temporary filter lists 
  const cuisineOptions = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Mediterranean', 'American', 'Continental'];
  const dietaryPreferenceOptions = ['Vegetarian', 'Non-Veg', 'Vegan', 'Gluten-Free', 'Keto', 'Low-Carb'];
  const mealTypeOptions = ['Breakfast', 'Lunch', 'Snacks', 'Appetizers', 'Soups', 'Dinner', 'Deserts'];
  const difficultyLevelOptions = ['Easy', 'Intermediate', 'Hard'];
  const cookingTimeOptions = ['Quick (Under 30 mins)', 'Moderate (30-60 mins)', 'Long (over 60 mins)'];
  const allergiesOptions = ['Nuts', 'Dairy', 'Soy', 'Shellfish', 'Other'];
  const specialDietsoptions = ['Diabetic-friendly', 'Weight loss', 'Heart-friendly'];

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="flex">
        {/* filter sidebar  */}   
        {isMenuIconClick ? (
          <div className="pl-2 pt-8 h-fit border-r border-r-black border-b border-b-black">   
            <div className="flex items-center justify-between mr-2">
              <p className=" font-semibold text-xl">Filters</p>
              <div className="cursor-pointer" onClick={() => {setIsMenuIconClick(!isMenuIconClick)}}>
                <CloseIcon  width="24px" height="24px" />
              </div>
            </div>
            <div className="mt-3">   
              <Collapse collapseTitle="Cuisine" items={cuisineOptions} />   
              <Collapse className="mt-12" collapseTitle="Dietary Preference" items={dietaryPreferenceOptions} />   
              <Collapse className="mt-12" collapseTitle="Meal Type" items={mealTypeOptions} />   
              <Collapse className="mt-12" collapseTitle="Difficulty Level" items={difficultyLevelOptions} />   
              <Collapse className="mt-12" collapseTitle="Cooking Time" items={cookingTimeOptions} />   
              <Collapse className="mt-12" collapseTitle="Allergies" items={allergiesOptions} />   
              <Collapse className="my-12" collapseTitle="Special Diets" items={specialDietsoptions} />   
            </div>  
          </div>  
        ) : (   
          <div
            className="h-fit ml-6 mt-4"
            onClick={() => setIsMenuIconClick(!isMenuIconClick)}      
            onMouseEnter={() => setIsMenuIconHover(true)}
            onMouseLeave={() => setIsMenuIconHover(false)}
          >
            <HamburgerIcon
              className=" cursor-pointer"
              width="35px"
              height="35px"
            />
            {/* {isMenuIconHover && (
              <div className="absolute w-[100px] bg-sky-300 text-black p-1 rounded text-xs -mt-10 ml-10">
                Click to apply filter
              </div>
            )} */}
          </div>
        )}

        <div>
          <div className={`${isMenuIconClick ? 'mx-4' : 'ml-28'} pt-8 grid grid-cols-4 gap-16`}>
            {[...Array(16)].map((_, index) => (
              <FavouriteRecipeCard key={index} />
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center space-x-6">
            <div className="text-center font-semibold text-xl bg-black text-white py-2 px-3 rounded-lg cursor-pointer">
              1
            </div>
            <div className="text-center  font-semibold text-xl text-black py-2 px-3 rounded-lg cursor-pointer">
              2
            </div>
            <div className="text-center  font-semibold text-xl text-black py-2 px-3 rounded-lg cursor-pointer">
              3
            </div>
            <div className="text-center  font-semibold text-xl text-black py-2 px-3 rounded-lg cursor-pointer">
              4
            </div>
            <div className="text-center  font-semibold text-xl text-black py-2 px-3 rounded-lg cursor-pointer">
              5
            </div>
            <button className="border-[#ACACAC] text-black text-xl py-2 px-3 rounded-lg cursor-pointer">
              Next &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default Feed;
