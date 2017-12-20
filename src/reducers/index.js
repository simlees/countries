import { combineReducers } from 'redux'
import {
  TOGGLE_FAVOURITE_COUNTRY
} from '../actions/constants'

function favouriteCountry(countries = [], action) {
  return countries.map(country => {
    if (country === action.country) {
      return {
        ...country,
        favourite: !country.favourite
      }
    }
    return country
  })
}

function countries(countries = [], action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE_COUNTRY:
      return favouriteCountry(countries, action)
    default:
      return countries
  }
}

const rootReducer = combineReducers({
  countries
});

export default rootReducer