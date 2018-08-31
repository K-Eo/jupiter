import { connect } from 'react-redux'
import { compose } from 'recompose'

import Home from './Home'

import { createAsync, cancelAsync } from '../../trips/actions'

const mapStateToProps = state => state.trips.create

const mapDispatchToProps = dispatch => ({
  createTrip: () => dispatch(createAsync()),
  cancelTrip: id => dispatch(cancelAsync(id)),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home)
