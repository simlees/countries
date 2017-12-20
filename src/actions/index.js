import {
  TOGGLE_FAVOURITE_COUNTRY
} from './constants'

export function toggleFavouriteCountry(country) {
  return {
    type: TOGGLE_FAVOURITE_COUNTRY,
    country
  }
}