import React, { Component } from 'react';

const CountryListItem = ({country, onToggle, onSelect}) => (
  <li>
    <span onClick={() => onToggle(country)} className={'favourite-indicator ' + (country.favourite ? 'is-favourite' : '')} />
    <span onClick={() => onSelect(country)} className={'country-name ' + (country.selected ? 'selected' : '')}>{country.name}</span>
  </li>
);

export default CountryListItem