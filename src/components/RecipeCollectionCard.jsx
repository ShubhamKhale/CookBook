import React from 'react'
import collectionImg from "../assets/collection_image.png";

const RecipeCollectionCard = () => {
  return (
    <>  
        <div className="cursor-pointer w-fit h-[345px] rounded-xl shadow-md">
            <img className="w-[361px] h-[345px] rounded-xl object-cover " src={collectionImg} alt="*" />
            <div className="relative  bottom-8 w-[361px] rounded-b-xl  pl-3 pb-1 text-white font-medium text-2xl" style={{ boxShadow: 'inset -10px -15px 25px #000000' }}>COLLECTION</div>
        </div>  
    </>
  )
}                       

export default RecipeCollectionCard