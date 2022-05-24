import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import People from "./data/berlin.json"

function App() {
  return (
    <div className="App">
    {People.map((person, idx)=> {
    return (
      <IdCard
      key={idx}
      lastName={person.firstName}
      firstName={person.lastName}
      country={person.country}
      picture={person.img}
    />)})
     }
     <Greetings lang="de">Ludwig</Greetings>
    </div>
  );
}

export default App;
