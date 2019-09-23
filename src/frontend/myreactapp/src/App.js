import React, {useState} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import {BrowserRouter, Route, Redirect, Switch, Link, NavLink} from 'react-router-dom'
import PlanetList from './PlanetList/PlanetList'
import PlanetDetails from './PlanetDetails/PlanetDetails'

function App() {
    const [shouldshowState, updateShouldShowState] = useState(true)

    return (
        <BrowserRouter>
            <StyleRoot>
                <div className="App">
                    <div className='navigationTop'>
                        <div className='navItem'>
                            <NavLink to='/planets'>Planets</NavLink>
                        </div>
                        <div className='navItem'>
                            <NavLink activeClassName='mycustomactive'
                                     to='/quotes'>Quotes</NavLink>
                        </div>
                        <div className='navItem'>
                            <NavLink to='/asteroids'>Asteroids</NavLink>
                        </div>
                        <div className='navItem'>
                            <NavLink to='/planetdetails'>PlanetDetails</NavLink>
                        </div>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route path='/planets' exact component={PlanetList}/>
                            <Route path='/planetdetails/:planetid' exact component={PlanetDetails}/>
                            <Route path='/quotes' exact render={() => <h1>Quotes</h1>}/>
                            <Route path='/asteroids' exact render={() => <h1>Asteroids!!!</h1>}/>
                            <Redirect from='/' to='/quotes'/>
                            {/*<Route path='/' render={() => <h1>UNKNOWN PATH!!!! Not found try again</h1>}/>*/}
                        </Switch>
                    </div>
                </div>

            </StyleRoot>

        </BrowserRouter>
    );
}

export default Radium(App);
