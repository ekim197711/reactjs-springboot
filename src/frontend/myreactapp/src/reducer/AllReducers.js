import {combineReducers} from "redux";
import LoginReducer from './LoginReducer'
import FuelReducer from './FuelReducer'

const allReducers = combineReducers({
    login:  LoginReducer,
    fuel:   FuelReducer
})
export default allReducers;