import { connect } from 'react-redux'
import card from '../components/card-component.jsx'
//import {  } from '../actions/home-actions.jsx'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	}
}

const cardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(card)

export default cardContainer