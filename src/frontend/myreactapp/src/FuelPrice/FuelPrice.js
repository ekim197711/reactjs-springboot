import {useSelector, useDispatch} from "react-redux";
import React from 'react'
import Radium from "radium";
import FuelActions from '../action/FuelActions'

const fuelPrice = React.memo((props) => {
    const fuelprice = useSelector(state => {return state.fuel})
    const mydispatch = useDispatch()
    let thevalue = 500

    const setPrice = (thevalue) => {mydispatch(FuelActions(thevalue))}

    const valueChanged = (myevent) => {
        const newevent = myevent
        // console.log()
        thevalue = newevent.target.value
    }


    return (
        <div>
            Current fuel price: {fuelprice}
            <div>
                <button onClick={setPrice.bind(this, 5555)}>Set price to 5555</button>
                <button onClick={setPrice.bind(this, 2222)}>Set price to 2222</button>
            </div>
        </div>
    )
})

export default fuelPrice