import { combineReducers } from 'redux'
import {
  TOGGLE_FAVOURITE_COUNTRY,
  SELECT_COUNTRY
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

function selectCountry(countries = [], action) {
  return countries.map(country => {
    if (country === action.country) {
      return {
        ...country,
        selected: true
      }
    }
    return {
      ...country,
      selected: false
    }
  })
}

function countries(countries = [], action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE_COUNTRY:
      return favouriteCountry(countries, action)
    case SELECT_COUNTRY:
      return selectCountry(countries, action)
    default:
      return countries
  }
}

const rootReducer = combineReducers({
  countries
});

export default rootReducer