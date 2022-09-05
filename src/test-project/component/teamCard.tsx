import React from 'react'
import {teamCardType} from './types'
import commentImage from './img/comment.svg'
import teamMsg from './img/team-msg.svg'


const TeamCard:React.FC<teamCardType> = ({image,description,name,campaigns_count,leads_count,created_at}) => {
  return (
    <div className="py-3 md:w-4/12 xl:w-3/12">
      <div className="py-3 mx-2 border border-borderColor rounded-md ">
        <div className="px-3 flex justify-between">
          <div className="flex-grow">
            <div className="flex space-x-2">
              <div className="float-left clear-right">
                <img
                  src={image}
                  alt="comany image"
                  className="pt-1 w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h5 className="text-infoColor">{name}</h5>
                <h3 className="text-secondaryHeadingColor">{created_at}</h3> 
              </div>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-star text-borderColor"></i>
          </div>
        </div>
        <p className="my-4 px-3 pb-4 border-b border-borderColor">
          {description}
        </p>
        <div className="px-3 flex space-x-3">
          <div className="space-x-1">
            <img src={commentImage} alt="comment picture" className="inline"/>
            <span className="text-secondaryHeadingColor text">{campaigns_count}</span>
          </div>
          <div className="space-x-1">
            <img src={teamMsg} alt="team image picture" className="inline"/>
            <span className="text-secondaryHeadingColor">{leads_count}</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default TeamCard;