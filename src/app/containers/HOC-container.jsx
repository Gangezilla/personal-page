import { connect } from 'react-redux'
import HOC from '../components/HOC-component.jsx'
//import {  } from '../actions/home-actions.jsx'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	}
}

const HOCContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HOC)

export default HOCContainer