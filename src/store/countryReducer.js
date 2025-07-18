// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  countries: [],
  continents: [],
  selectedcontinent: "all",
  filteredCountries: [],
  limit: 10,
};

const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case actionTypes.INC_LIMIT:
      return {
        ...state,
        limit: state.limit + 10,
      };

    case actionTypes.SET_CONTINENTS:
      return {
        ...state,
        continents: action.payload,
      };

    case actionTypes.SET_SELECTED_CONTINENT:
      return {
        ...state,
        selectedcontinent: action.payload,
      };

    case actionTypes.SET_FILTERED_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };

    default:
      return state;
  }
};

export default countryReducers;
