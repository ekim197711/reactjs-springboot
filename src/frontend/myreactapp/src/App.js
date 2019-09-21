import React, {useState} from 'react';
import './App.css';
import SpaceshipList from './SpaceshipList/SpaceshipList'
import PlanetList from './PlanetList/PlanetList'
function App() {
    const [shouldshowState, updateShouldShowState] = useState(true)
    const planetcontent = shouldshowState === true ? (<div> <PlanetList/> </div>) : null ;

    const showPlanetsClickHandler = (myevent) => {
        updateShouldShowState(prevstate => !prevstate)
    }


  return (
    <div className="App">
        <div onClick={showPlanetsClickHandler}>Show planets button!!! {shouldshowState}</div>
        {planetcontent}
    </div>

  );
}

export default App;
