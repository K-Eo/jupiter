import { connect } from 'react-redux'
import { compose } from 'recompose'

import Home from './Home'

import { createAsync } from '../../trips/actions'

const mapStateToProps = state => state.trips.create

const mapDispatchToProps = dispatch => ({
  createTrip: () => dispatch(createAsync()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home)
