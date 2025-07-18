import { combineReducers } from "redux";

// reducer import
import countryReducer from "./countryReducer";
import userAuthReducer from './userAuthReducer'

const reducer = combineReducers({
  countries: countryReducer,
  userAuth: userAuthReducer
});

export default reducer;
