import React from "react";
import imageOne from './img/one.svg'
import imageTwo from './img/two.svg'
import imageThree from './img/three.svg'
import imageFour from './img/four.svg'
import imageFive from './img/five.svg'
import imageSix from './img/six.svg'


const Sidebar:React.FC = () => {
  return (
    <div className="w-full bg-sidebarBg fixed bottom-0 md:w-auto md:h-full md:top-0">
      <div className="flex justify-center py-4  md:block md:mt-6 md:space-y-10">

        <a href="##" className="block text-white px-3 text-2xl md:text-3xl hover:text-slate-300">
          <img src={imageOne} />
        </a>

        <a href="##" className="block text-white px-3 text-2xl md:text-3xl hover:text-slate-300">
          <img src={imageTwo} />
          
        </a>

        <a href="##" className="block text-white px-3 text-2xl md:text-3xl md:bg-[#2995DA] md:py-4 hover:text-slate-300">
          <img src={imageThree} />
        </a>

        <a href="##" className="block text-white px-3 text-2xl md:text-3xl hover:text-slate-300">
          <img src={imageFour} />
        </a>

        <a href="##" className="block text-white px-3 text-2xl md:text-3xl hover:text-slate-300">
          <img src={imageFive} />
        </a>

        <a href="##" className="block text-white px-3 text-2xl md:text-3xl md:absolute md:bottom-0 md:pb-6 hover:text-slate-300">
          <img src={imageSix} />
        </a>
      </div>
    </div>
  )
}

export default Sidebar;