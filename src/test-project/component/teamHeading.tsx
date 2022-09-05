import React from 'react'

const TeamHeading:React.FC = () => {
  return (
    <div className="px-6 py-6 flex justify-between border-b border-b-borderColor">
      <h1 className="text-xl text-infoColor">All teams</h1>
      <h5 className="text-textColorGrey">Showing 65 out of 65 teams</h5>
    </div>
  );
}

export default TeamHeading;