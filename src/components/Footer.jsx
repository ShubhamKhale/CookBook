import React from 'react';
import InstagramLogo from '../icons/InstagramLogo';
import FacebookLogo from '../icons/FacebookLogo';
import PinterestLogo from '../icons/PinterestLogo';
import TwitterLogo from '../icons/TwitterLogo';
import PumpkinIcon from '../icons/PumpkinIcon';
import BroccoliIcon from '../icons/BroccoliIcon';
import MangoIcon from '../icons/MangoIcon';
import TomatoIcon from '../icons/TomatoIcon';
import BellpepperIcon from '../icons/BellPepperIcon';
import CarrotIcon from '../icons/CarrotIcon';

const Footer = () => {
  return (
    <>
        <div className="px-40 bg-[#ECECEC] overflow-y-hidden">
            <div className="pt-12 flex  justify-between">
                <div className="w-[70%]">  
                    <h3 className="font-semibold text-3xl" >About Us</h3>
                    <p className="mt-6 pr-[21rem] font-normal text-xl">At CookBook, we want to make cooking fun for everyone. We think cooking is important for making people, communities, and the planet healthier and happier. We help home cooks around the world by sharing recipes and cooking tips, so they can support each other.</p>
                </div>  
                <div className="w-[30%]">
                    <p className="mt-4 font-normal text-2xl">LEARN NOW</p>
                    <div className="mt-3 font-normal text-2xl">
                        <p className="underline underline-offset-4">Terms of Service</p>
                        <p className="underline underline-offset-4">Privacy Policy</p>
                    </div>
                    <div className="mt-4 flex items-center gap-x-5">
                        <InstagramLogo width="40px" height="40px" />
                        <FacebookLogo width="40px" height="40px" />
                        <PinterestLogo width="40px" height="40px" />
                        <TwitterLogo width="40px" height="40px" />  
                    </div>
                </div>  
            </div>

            <div className="mt-24 relative top-11 inline-flex items-center justify-center gap-x-12" >
                <PumpkinIcon width="150px" height="150px" />
                <BroccoliIcon width="150px" height="150px" />
                <MangoIcon width="150px" height="150px" />
                <TomatoIcon width="150px" height="150px" />
                <BellpepperIcon width="150px" height="150px" />
                <CarrotIcon width="150px" height="150px" />  
            </div>
        </div>
    </>
  )  
} 

export default Footer