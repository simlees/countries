import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import initialState from '../initialState';
import App from './App'

const store = configureStore(initialState);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
