import { connect } from 'react-redux'
import Home from '../components/home-component.jsx'
import { expandCard } from '../actions/home-action.jsx'

const mapStateToProps = (state) => {
  return {
  	jobs: state.homeReducer.jobs,
  	education: state.homeReducer.education,
  	projects: state.homeReducer.projects,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	expandCard: () => {
  		dispatch(expandCard())
  	}

  	}
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer