import React from 'react'
import chickenPastaImg from '../assets/chicken_pasta.png'

const DisplayRecipeCard = () => {
  return (
    <>
      <div className="rounded-xl border-[1px] border-black w-fit cursor-pointer">
        <img className="rounded-t-xl w-[261px] h-[245px] object-cover"  src={chickenPastaImg} alt="*" />
        <p className="font-medium text-xl text-center py-1">Chicken Pasta</p>
      </div>
    </>  
  )
} 

export default DisplayRecipeCard