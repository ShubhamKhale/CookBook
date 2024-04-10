import React from "react";
import Navbar from "../components/Navbar";
import StarIcon from "../icons/StartIcon";
import ProfilePic from "../assets/profilePic.png";
import InstagramLogo from "../icons/InstagramLogo";
import FacebookLogo from "../icons/FacebookLogo";
import PinterestLogo from "../icons/PinterestLogo";
import DisplayRecipeCard from "../components/DisplayRecipeCard";
import Footer from "../components/Footer";
import FavouriteRecipeCard from "../components/FavouriteRecipeCard";

const Profile = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="px-40">
        <div className="mt-8 flex items-center justify-between">
          <div className="inline-flex items-center">
            <img
              className="w-48 h-48 object-cover rounded-full"
              src={ProfilePic}
              alt="-"
            />
            <div className="ml-16">
              <p className="font-medium text-4xl">Rhea</p>
              <div className="mt-2 grid grid-cols-5">
                {[...Array(5)].map((_, index) => (
                  <StarIcon width="25px" height="25px" key={index} />
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-x-3">
                <InstagramLogo
                  width="40px"
                  height="40px"
                  className="cursor-pointer"
                />
                <FacebookLogo
                  width="40px"
                  height="40px"
                  className="cursor-pointer"
                />
                <PinterestLogo
                  width="40px"
                  height="40px"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <button className="mb-20 w-fit font-semibold text-2xl bg-[#E4A951] text-black rounded-[10px] p-3 cursor-pointer">
            Edit Profile
          </button>
        </div>

        <p className="mt-8 font-semibold text-xl">
          Hi! i’m Rhea, a food blogger extraordinaire, captures the essence of
          global flavors through tantalizing visuals and vivid storytelling.
          From city markets to hidden gems, Alex's blog is a culinary adventure
          that invites readers to indulge in the art of gastronomy. Savor the
          world one delicious post at a time!
        </p>

        <div className="mt-16 inline-flex items-center space-x-4">
          <div className="w-[161px] border-2 border-[#ABABAB] py-3 ">
            <p className="font-normal text-4xl text-center">268</p>
            <p className="font-normal text-base text-center">LIKES</p>
          </div>
          <div className="w-[161px] border-2 border-[#ABABAB] py-3 ">
            <p className="font-normal text-4xl text-center">149</p>
            <p className="font-normal text-base text-center">FOLLOWERS</p>
          </div>
          <div className="w-[161px] border-2 border-[#ABABAB] px-12 py-3 ">
            <p className="font-normal text-4xl text-center">32</p>
            <p className="font-normal text-base text-center">REVIEWS</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-medium text-4xl">Recipes Posted</p>
          <div className="mt-12 grid grid-cols-4">
            {[...Array(3)].map((_, index) => (
              <DisplayRecipeCard key={index} />
            ))}
          </div>
        </div>
        <div className="mt-12 mb-20">
          <p className="font-medium text-4xl">Favourites</p>
          <div className="mt-12 grid grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <FavouriteRecipeCard key={index} />
            ))}
          </div>
        </div>
      </div>        
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
