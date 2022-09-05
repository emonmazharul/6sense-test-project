import React,{useContext} from 'react'
import {DataContext} from '../context/context'
import notifictionImage from './img/notification.svg'

const Navbar = () => {
  const {current_user} = useContext(DataContext);
  return (
    <nav className="bg-navbarBg flex justify-between">  
      <div className="flex">
        <a href="##" className="block text-navColorOne px-8 py-5 border-r border-r-borderColor">
          NARWHAL
        </a>
        <a href="##" className="block text-navColorTwo px-8 py-5">Teams</a>
      </div>

      <div className="mr-8 py-5">
        <div className="hidden md:inline-block mr-2">
          <img src={notifictionImage} alt="notification" className="inline-block  w-8 h-8"/>
          <span className="text-infoColor">Hello, {current_user.name}</span>
        </div>
        <div className="md:inline-block">
          <img src={current_user.avatar} alt="profile picture" className="inline rounded-full w-8 h-8"/>
          <i className="fa-solid fa-angle-down text-infoColor text-[15px]"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;