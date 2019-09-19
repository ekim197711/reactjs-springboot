import React from 'react';
import './App.css';
import SpaceshipList from './SpaceshipList/SpaceshipList'
import PlanetList from './PlanetList/PlanetList'
function App() {
  return (
    <div className="App">
        <PlanetList/>
        <SpaceshipList myheader='Look at all these spaceships!!!'/>
    </div>

  );
}

export default App;
