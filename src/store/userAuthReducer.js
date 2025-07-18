// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  user: null,
};

const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default countryReducers;
