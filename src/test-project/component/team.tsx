import React,{useContext} from 'react'
import TeamHeading from './teamHeading'
import TeamCard from './teamCard'
import {DataContext} from '../context/context'

// const url:string = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220905T102352Z&X-Amz-Expires=86400&X-Amz-Signature=401fdb254fcaed3e70c5b05a55c9317936d4612ad020a5baa7b5728f43fac103&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject`;

const Teams:React.FC = () => {
  const {teams} = useContext(DataContext)
  return <div className="bg-navbarBg md:w-9/12 ">
    <TeamHeading/>
    {/* teams card with theri details */}
    <div className="mx-4 my-4 flex flex-wrap">
        {
          teams.map(team => {
            return <TeamCard 
              key={team.id}  
              name={team.name}
              description={team.description}
              image={team.image}
              campaigns_count={team.campaigns_count}
              leads_count={team.leads_count}
              created_at={team.created_at}
              is_archived={team.is_archived}
              is_favorited={team.is_favorited}
            />
          })
        }
    </div>
  </div>
}


export default Teams;