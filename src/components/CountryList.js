import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountryListItem from './CountryListItem'

export default class CountryList extends Component {
  render() {
    const { countries, onToggle, onSelect } = this.props;
    return (
      <ul>
        {countries.map((country, i) => <CountryListItem onToggle={onToggle}
                                                        onSelect={onSelect}
                                                        country={country}
                                                        key={i} />
        )}
      </ul>
    )
  }
}

CountryList.propTypes = {
  // countries: PropTypes.array.isRequired

}
