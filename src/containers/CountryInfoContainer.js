import React, { Component } from 'react'
import { connect } from 'react-redux'
import CountryInfo from '../components/CountryInfo'

class CountryInfoContainer extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
  // }

  render() {
    console.log(this.props)
    const {country} = this.props
    return (
      <div>
        {country ? (
          country.isFetching || !country.info ? (
            <p>Loading...</p>
          ) : (
            <CountryInfo name={country.name}
                         capital={country.info.capital}
                         continent={country.info.continent}
                         population={country.info.population}/>
          )
        ) : (
          <p>No country selected</p>
        )}
      </div>
    )
  }
}


const mapStateToProps = state => {
  const country = state.countries.find(c => c.selected)
  return {
    country
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

export default connect(
  mapStateToProps
//   mapDispatchToProps
)(CountryInfoContainer)