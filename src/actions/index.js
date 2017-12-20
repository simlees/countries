import {
  TOGGLE_FAVOURITE_COUNTRY,
  SELECT_COUNTRY,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY
} from './constants'

export function toggleFavouriteCountry(country) {
  return {
    type: TOGGLE_FAVOURITE_COUNTRY,
    country
  }
}

export function selectCountry(country) {
  return {
    type: SELECT_COUNTRY,
    country
  }
}

function requestCountry(country) {
  return {
    type: REQUEST_COUNTRY,
    country
  }
}

function receiveCountry(country, json) {
  return {
    type: RECEIVE_COUNTRY,
    country,
    info: json.data,
    receivedAt: Date.now()
  }
}

function shouldFetchCountry(countries, country) {
  // TODO is countries needed?
  return country.info === undefined;
}

/**
 * It's a Thunk action! Returns a Fn instead of an action, Thunk middleware calls
 * this action and passes in the dispatch and getState methods.
 */
export function fetchCountryIfNeeded(country) {
  return (dispatch, getState) => {
    if (shouldFetchCountry(getState(), country)) {
      return dispatch(fetchCountry(country))
    }
  }
}


// function fetchCountry(country) {
//   return dispatch => {
//     dispatch(requestCountry(country))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }