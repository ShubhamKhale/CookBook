import React, { useState } from 'react';
import Logo from '../icons/Logo';
import ProfileIcon from '../icons/ProfileIcon';
import NotificationIcon from '../icons/Notification';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#111214] text-white flex items-center justify-between pr-8 font-montserrat" >
        <Logo width="91px" height="63px" className="mt-3" />  
        <div className="inline-flex justify-between items-center gap-x-12">
            {
              isLogin === true ? (
                <>
                  <ProfileIcon onClick={() => {navigate("/profile")}} width="40px" height="40px" className="cursor-pointer" />
                  <NotificationIcon width="40px" height="40px" className="cursor-pointer" />
                </>
              ) : (         
                <>
                  <p className="cursor-pointer text-xl" onClick={() => {navigate("/login")}}>Login</p>
                  <p className="cursor-pointer text-xl" onClick={() => {navigate("/sign-up")}}>Sign up</p>
                </>
              )
            }
            
        </div>
    </div>  
  )
}
 
export default Navbar