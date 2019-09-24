import React, {useState, useEffect} from 'react'
import './PlanetList.css'
import Radium from 'radium'
import {NavLink, withRouter} from 'react-router-dom'
import {useSelector} from "react-redux";
const planetList = React.memo(Radium((props) => {
    console.log(props)
    const loginstate = useSelector(state => {return state.login})
    const axios = require('axios').default;

    const [mymodel, mymodelupdate] = useState({
        planets: [
            {id: -1, name: 'Dummy  planet', localSolarSystem: true, habitable: true}
        ]
    })
    const getmydataaxios = () => {
        axios.get('/api/planet')
            .then((bodydata) => {
                console.log("Axios data: " + JSON.stringify(bodydata))
                mymodelupdate((prevstate) => {
                    return {planets: [...bodydata.data]}
                });
            })
    }

    const updatemyplanetsAxios = (newplanets) => {
        console.log("planets: " + JSON.stringify(newplanets))
        axios.post('/api/planet',
            newplanets
        ).then((bodydata) => {
            mymodelupdate((prevstate) => {
                return {planets: [...bodydata.data]}
            });
        })
    }

    const clickhandlerPlanet = (id) => {
        console.log("Clickhandler push route to planetdetails... with id: " + id)
        props.history.push({
            pathname: '/planetdetails/' + id,
            search: 'page=2&pagesize=10&filter=msomething',
            hash: '#bookmarkhalfwaydownonpage'
        })
    }

    const mystyle = {
        ':hover': {
            background: 'yellow',
            color: 'orange'
        }
    }

    const myplanets = mymodel.planets.map(planet => {
        let myclasses = 'planet';
        if (planet.localSolarSystem) {
            myclasses = myclasses + ' planetlocal';
        }
        if (planet.habitable) {
            myclasses = myclasses + ' planethabitable';
        }
        return (

            <div className={myclasses} key={planet.id} style={mystyle}
                 onClick={clickhandlerPlanet.bind(this, planet.id)}>
                {/*<NavLink to={'/planetdetails/' + planet.id}>*/}
                    {planet.name}
                {/*</NavLink>*/}
            </div>

        )

    })

    const planetcontent = loginstate === true ?(<div>WE ARE LOGGED IN
            <div>
                <button onClick={getmydataaxios} id="button1">
                    Get My data
                </button>
            </div>

            <div className='planets'>
                {myplanets}
            </div>
    </div>)
        : (<div>WE ARE NOT LOGGED IN</div>)
    //          : (<div> SORRY LOGIN BEFORE WATCHING THE PLANET INFO</div>)


    return (<div>
        {planetcontent}

    </div>)
}))
export default withRouter(planetList);
