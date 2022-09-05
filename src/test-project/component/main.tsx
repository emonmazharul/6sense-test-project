import React from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';
import TeamFilter from './teamFilter';
import Activity from './activity';
import Teams from './team'

const Main:React.FC = () => {
  return <div>
    {/* sidebar */}
    <Sidebar/>
    {/* rest of content on left side */}
    <div id="left_side" className="md:ml-16">
      <Navbar/>
      <TeamFilter/>
      {/* team info and deatilas */}
      <section className="mx-6 my-10">
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-3 sm:space-y-0 xl:justify-around">
          <Teams/>
          <Activity/>
        </div>
      </section>
    </div>

  </div>
}

export default Main;