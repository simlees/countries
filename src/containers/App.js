import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  toggleFavouriteCountry
} from '../actions'
import CountryList from '../components/CountryList'

class App extends Component {

  constructor(props) {
    super(props)
    this.handleToggleFavourite = this.handleToggleFavourite.bind(this)
  }

  handleToggleFavourite(country) {
    this.props.dispatch(toggleFavouriteCountry(country))
  }

  render() {
    const { countries } = this.props
    return (
      <div className="App">
        <CountryList countries={countries}
                     onToggle={this.handleToggleFavourite}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { countries } = state

  return {
    countries
  }
}

export default connect(mapStateToProps)(App)
