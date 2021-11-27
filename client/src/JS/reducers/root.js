import {combineReducers} from "redux";
import {userReducer} from "./user";
import {productReducer} from "./Product"


export const rootReducer = combineReducers({userReducer,productReducer});