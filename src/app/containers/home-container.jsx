import { connect } from 'react-redux'
import Home from '../components/home-component.jsx'
//import {  } from '../actions/home-actions.jsx'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	}
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer