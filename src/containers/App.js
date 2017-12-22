import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  toggleFavouriteCountry,
  selectCountry,
  fetchCountryIfRequired
} from '../actions'
import CountryList from '../components/CountryList'
import CountryInfoContainer from '../containers/CountryInfoContainer'

class App extends Component {

  constructor(props) {
    super(props)
    this.handleToggleFavourite = this.handleToggleFavourite.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleToggleFavourite(country) {
    this.props.dispatch(toggleFavouriteCountry(country))
  }

  handleSelect(country) {
    this.props.dispatch(selectCountry(country))
    this.props.dispatch(fetchCountryIfRequired(country))
  }

  render() {
    const { countries } = this.props
    return (
      <div className="App">
        <CountryList countries={countries}
                     onToggle={this.handleToggleFavourite}
                     onSelect={this.handleSelect}/>
        <CountryInfoContainer />
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
