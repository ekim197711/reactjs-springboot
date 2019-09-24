import React, {useState} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import {BrowserRouter, Route, Redirect, Switch, Link, NavLink} from 'react-router-dom'
import PlanetList from './PlanetList/PlanetList'
import PlanetDetails from './PlanetDetails/PlanetDetails'

import { createStore } from "redux";
import { Provider } from 'react-redux'
import AllReducers from './reducer/AllReducers'
import FuelPrice from './FuelPrice/FuelPrice'
import Login from './Login/Login'

function App() {
    const [shouldshowState, updateShouldShowState] = useState(true)
    const mystore = createStore(AllReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



    return (
        <Provider store={mystore}>
        <BrowserRouter>
            <StyleRoot>
                <div className="App">
                    <div className='navigationTop'>
                        <div className='navItem'>
                            <NavLink to='/planets'>Planets</NavLink>
                        </div>
                        <div className='navItem'>
                            <NavLink activeClassName='mycustomactive'
                                     to='/login'>Login screen</NavLink>
                        </div>
                        <div className='navItem'>
                            <NavLink to='/fuelprice'>Fuel Price</NavLink>
                        </div>
                        <div className='navItem'>
                            <NavLink to='/planetdetails'>PlanetDetails</NavLink>
                        </div>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route path='/planets' exact component={PlanetList}/>
                            <Route path='/planetdetails/:planetid' exact component={PlanetDetails}/>
                            <Route path='/login' exact component={Login}/>
                            <Route path='/fuelprice' exact component={FuelPrice}/>
                            <Redirect from='/' to='/quotes'/>
                            {/*<Route path='/' render={() => <h1>UNKNOWN PATH!!!! Not found try again</h1>}/>*/}
                        </Switch>
                    </div>
                </div>

            </StyleRoot>

        </BrowserRouter>
        </Provider>
    );
}

export default Radium(App);
