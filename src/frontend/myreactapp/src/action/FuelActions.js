const setFuelPrice = (thevalue) =>{
    return {
        type: 'SETFUELPRICE',
        payload: thevalue
    }
}
export default setFuelPrice