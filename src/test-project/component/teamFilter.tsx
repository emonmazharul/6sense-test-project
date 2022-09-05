import React,{useContext} from 'react'
import { DataContext } from '../context/context'


const TeamFilter:React.FC = () => {
  const {filterAllTeams,filterFavouriteTeams,filterArchiveTeams,filtered_team,filterByInput} = useContext(DataContext);
  return (
    <section className="bg-navbarBg border-t border-t-borderColor">
      <div className="my-6 px-8 flex justify-between">
        <h1 className="text-mainHeadingColor text-2xl md:text-3xl"> <i className="fa-solid fa-people-group"></i> Teams</h1>
        {/* search input  */}
        <div>
          <button className="bg-[#40D2BF] py-2 pl-2 pr-3 text-white text-[12px] font-bold rounded-md md:text-[16px]"> 
          <i className="fa-solid fa-plus mr-1 font-bold md:mr-3"> </i> CREATE NEW TEAM
          </button>
        </div>
      </div>
      {/* filter button and search */}
      <div className="flex flex-col justify-between mt-10 px-8 md:flex-row">
        <div className="space-x-6">
          <button className="text-[14px] font-semibold pb-4 px-5 md:text-[18px]" style={{borderBottom: filtered_team === 'all' ? '4px solid #0083E3' : 'none' }} onClick={filterAllTeams}>All</button>
          <button className="text-[14px] font-semibold pb-5 px-5 md:text-[18px]" style={{borderBottom: filtered_team === 'favorited' ? '4px solid #0083E3' : 'none' }} onClick={filterFavouriteTeams}>Favourite</button>
          <button className="text-[14px] font-semibold pb-4 px-5 md:text-[18px]" style={{borderBottom: filtered_team === 'archived' ? '4px solid #0083E3' : 'none' }} onClick={filterArchiveTeams}>Archived</button>
        </div>
        <div className="mt-5 mb-4 md:my-0">
          <div>
            <i className="fa-solid fa-magnifying-glass text-secondaryHeadingColor mr-1"></i>
            <input 
              type="text" 
              name="search_team" 
              className="pl-2 pb-1 focus:border-b focus:border-b-mainHeadingColor focus:outline-none" 
              placeholder="Search team name" 
              onChange={(e) => filterByInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamFilter;