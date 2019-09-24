
const fuelReducer = (state = 200.0, action) => {
    switch (action.type){
        case 'SETFUELPRICE':
            return action.payload
        default:
            return state
    }
}
export default fuelReducer