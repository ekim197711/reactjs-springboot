import React, {useState, useEffect} from 'react'

const planetList = React.memo( (props) => {


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




    const [mymodel, mymodelupdate] = useState({planets: [
            {id: 0, name: 'Jupiter'},
            {id: 1, name: 'Mars'},
            {id: 2, name: 'Pluto'},
            {id: 3, name: 'Saturn'},
            {id: 4, name: 'Earth'},
            {id: 5, name: 'Venus'},
            {id: 6, name: 'Mecury'},
        ]})
    const [headerState, updateHeaderstate] = useState('Planets to go to')
    const textfieldchanged = (myevent) => {
        const inputvalue = myevent.target.value
        console.log("textfield changed: " + inputvalue)
        updateHeaderstate((prevheaderstate) =>{
            return inputvalue;
        })
    }

    const clickhandlerPlanet = (id) => {
        mymodelupdate((prevstate) => {
            const myplanets = [...prevstate.planets]
            const planetindex = myplanets.findIndex(planet => planet.id === id)
            myplanets.splice(planetindex, 1)
            return {planets: myplanets}
        })
    }

    const myplanets = mymodel.planets.map(planet => (<div key={planet.id}
                                         onClick={clickhandlerPlanet.bind(this, planet.id)}>{planet.name}</div>))


    return (
        <div>
            <input type="text" onChange={textfieldchanged} id="headerinputfield1"/>
            {headerState}
            { myplanets }
        </div>
    )
})
export default planetList;
