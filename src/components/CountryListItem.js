import React, { Component } from 'react';

const CountryListItem = ({country, onToggle}) => (
  <li>
    <span onClick={() => onToggle(country)} className={'favourite-indicator ' + (country.favourite ? 'is-favourite' : '')} />
    {country.name}
  </li>
);

export default CountryListItem