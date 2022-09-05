import React,{useContext} from 'react'
import {DataContext} from '../context/context'
import {activityInterface} from './types'

const Activity:React.FC = () => {
  const {activities} = useContext(DataContext);
  return  <div className="pb-10 md:w-3/12 md:pb-0 md:max-w-[350px]">
    <div className="bg-navbarBg">
      <div className="py-3 pl-5 pr-3 space-y-7 md:space-y-0 xl:space-y-4">
        <ActivityHeading/>
        {
          activities.map(activity => <ActivityCard 
            key={activity.id} 
            person={activity.person} 
            action={activity.action} 
            created_at={activity.created_at}
            target={activity.target}
          /> 
          )
        }
      </div>
    </div>
  </div>
}

const ActivityHeading:React.FC = () => {
  return <div className="pt-6 pb-7 pl-5 border-b border-borderColor">
    <h1>Activity</h1>
  </div>
}


const ActivityCard:React.FC<activityInterface> = ({action,person,target,created_at}) => {
  const action_split_index:number = action.indexOf('_');
  const action_part_one:string = action.slice(0,action_split_index);
  const action_part_two:string = action.slice(action_split_index+1, );

  return <div className="flex space-x-3 mb-2">
    <img id="five" src={person.avatar} className="w-8 h-8 mt-3 rounded-full"/>
    <div className="pr-3">
      <h3 className="text-secondaryHeadingColor"> 
        <span className="text-sidebarBg">{person.name} </span> 
         {action_part_one} <span className="text-sidebarBg">{target}</span> {action_part_two}
      </h3>
      <h5 className="text-mainHeadingColor">{created_at}</h5>
    </div>
  </div>
}

export default Activity;