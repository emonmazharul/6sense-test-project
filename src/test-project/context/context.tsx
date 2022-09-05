import React,{useState} from 'react'
import {mock_data} from '../component/data'
import {mock_data_interface,teamCardType,activityInterface,currentUser} from '../component/types'


interface contextInterface extends mock_data_interface {
  filtered_team:string;
  filterAllTeams: () => void;
  filterFavouriteTeams: () => void;
  filterArchiveTeams: () => void;
  filterByInput:(input:string) => void;
}

export const DataContext = React.createContext<contextInterface>({
  filtered_team:'all',
  teams:[],
  activities:[],
  current_user:{
    id:undefined,
    name:undefined,
    avatar:undefined,
    notifications_count:undefined,
  },
  filterAllTeams : () => {},
  filterFavouriteTeams: () => {},
  filterArchiveTeams: () => {},
  filterByInput:() => {}

});

const ContextParent:React.FC<{children:React.ReactNode}> = ({children}) => {
  const [filtered_team,changeFilter] = useState<string>('all');
  const [teams,setTeam] = useState<teamCardType[]>(mock_data.teams);
  const [activities,setActivities] = useState<activityInterface[]>(mock_data.activities);
  const [current_user,setUser] = useState<currentUser>(mock_data.current_user);

  const filterAllTeams = ():void => {
    setTeam(mock_data.teams);
    changeFilter('all');
  }

  const filterFavouriteTeams = ():void => {
    const favouriteTeams:teamCardType[] = mock_data.teams.filter(team => team.is_favorited);
    setTeam(favouriteTeams)
    changeFilter('favorited')
  }

  const filterArchiveTeams = ():void => {
    const archivedTeams:teamCardType[] = mock_data.teams.filter(team => team.is_archived);
    setTeam(archivedTeams)
    changeFilter('archived')
  }

  const filterByInput = (input:string):void => {

    if(filtered_team == 'all') {
      const cloneTeams:teamCardType[] = mock_data.teams;
      if(input.length === 0) {
        setTeam(cloneTeams);
        return;
      }
      const filteredTeams:teamCardType[] = teams.filter(team => team.name.indexOf(input) !== -1);
      setTeam(filteredTeams);
    }

    if(filtered_team == 'favorited') {
      
      const cloneTeams:teamCardType[] = mock_data.teams.filter(team => team.is_favorited);

      if(input.length === 0) {
        setTeam(cloneTeams);
        return;
      }
      const filteredTeams:teamCardType[] = teams.filter(team => team.name.indexOf(input) !== -1);
      setTeam(filteredTeams);
    }

    if(filtered_team == 'archived') {
      const cloneTeams:teamCardType[] = mock_data.teams.filter(team => team.is_archived);
      if(input.length === 0) {
        setTeam(cloneTeams);
        return;
      }
      const filteredTeams:teamCardType[] = teams.filter(team => team.name.indexOf(input) !== -1);
      // if(filteredTeams.length == 0) {
      //   setTeam(cloneTeams);
      //   return;
      // }
      setTeam(filteredTeams);
    }
  }

  return (
    <DataContext.Provider value={{filtered_team,teams,activities,current_user,filterAllTeams,filterFavouriteTeams,filterArchiveTeams,filterByInput}}>
      {children}
    </DataContext.Provider>
  )
} 


export default ContextParent;