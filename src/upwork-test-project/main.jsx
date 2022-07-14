import React, {useState} from "react";
import Card from './card';
import Form from './Form'
import Content from "./content";
const bg_colors = ['yellow', 'green', 'grey'];

function Main() {
  const [data,inserData] = useState([]);
  function addData(new_data) {
    inserData(data.concat(new_data))
    // don nothing
  }
  return <div className="main">
      <Card backgroundColor="blue">
        <Form addData={addData}/>
      </Card> 
      {
        data.map( ({name,surename,age,gender,email,subscribe,favouriteColor}) => ( 
        <Card backgroundColor={bg_colors[Math.floor(Math.random() * bg_colors.length) ]} key={Math.random()}>
          <Content 
            name={name}
            surename={surename}
            age={age}
            gender={gender}
            email={email}
            subscribe={subscribe}
            favouriteColor={favouriteColor}
          />
        </Card>
        ))
      }
  </div>
}


export default Main;