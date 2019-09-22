import React, {useState, useEffect} from 'react'
import './PlanetList.css'
import Radium from 'radium'

const planetList = React.memo(Radium((props) => {
    const axios = require('axios').default;

    useEffect(() => {
        console.log('Component was mounted!!!')
    }, [])

    useEffect(() => {
        console.log('Component was mounted or UPDATED!!!')
    })

    useEffect(() => {
        return () => {
            console.log('Component was UNMOUNTED!!!')
        }
    }, [])
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

    const updatemyplanets = (newplanets) => {
        console.log("planets: " + JSON.stringify(newplanets))
        fetch('/api/planet', {
            method: 'POST',
            headers: {
                'Accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newplanets)
        }).then((response) => response.json())
            .then((bodydata) => {
                mymodelupdate((prevstate) => {
                    return {planets: [...bodydata]}
                });
            })
    }

    const [headerState, updateHeaderstate] = useState('Planets to go to')
    const textfieldchanged = (myevent) => {
        const inputvalue = myevent.target.value
        console.log("textfield changed: " + inputvalue)
        updateHeaderstate((prevheaderstate) => {
            return inputvalue;
        })
    }


    const clickhandlerPlanet = (id) => {
        const myplanets = [...mymodel.planets]
        const planetindex = myplanets.findIndex(planet => planet.id === id)
        myplanets.splice(planetindex, 1)
        updatemyplanetsAxios(myplanets)
    }

    const mystyle = {

        ':hover': {
            background: 'yellow',
            color: 'orange'
        },
    }

    const myplanets = mymodel.planets.map(planet => {
        let myclasses = 'planet';
        if (planet.localSolarSystem) {
            myclasses = myclasses + ' planetlocal';
        }
        if (planet.habitable) {
            myclasses = myclasses + ' planethabitable';
        }
        return(
            <div className={myclasses}  key={planet.id} style={mystyle}
                 onClick={clickhandlerPlanet.bind(this, planet.id)}>{planet.name}</div>)
        })


    return (
        <div>
            <div>
                <button onClick={getmydataaxios} id="button1">
                    Get My data
                </button>
            </div>
            <div>
                <input type="text" onChange={textfieldchanged} id="headerinputfield1"/>
            </div>
            {headerState}
            {myplanets}
        </div>
    )
}))
export default planetList;
