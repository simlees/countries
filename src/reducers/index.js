import { combineReducers } from 'redux'
import {
  TOGGLE_FAVOURITE_COUNTRY,
  SELECT_COUNTRY,
  RECEIVE_COUNTRY
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

function receiveCountry(countries = [], action) {
  return countries.map(country => {
    if (country.name === action.country.name) {
      return {
        ...country,
        // isFetching: false,
        info: {
          capital: action.data[0].capital,
          continent: action.data[0].region,
          population: action.data[0].population
        }
      }
    }
    return country
  })
}

function requestCountry(countries = [], action) {
  return countries.map(country => {
    if (country.name === action.country.name) {
      return {
        ...country,
        isFetching: true
      }
    }
    return country
  })
}

function countries(countries = [], action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE_COUNTRY:
      return favouriteCountry(countries, action)
    case SELECT_COUNTRY:
      return selectCountry(countries, action)
    case RECEIVE_COUNTRY:
      return receiveCountry(countries, action)
    default:
      return countries
  }
}

const rootReducer = combineReducers({
  countries
});

export default rootReducer