import React, { Component } from 'react';

const CountryInfo = ({name, capital, continent, population}) => (
  <div className="country-info">
    <h2>{name}</h2>
    <ul>
      <li>Capital: {capital}</li>
      <li>Continent: {continent}</li>
      <li>Population: {population}</li>
    </ul>
  </div>
);

export default CountryInfo