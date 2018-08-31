import { connect } from 'react-redux'
import { compose } from 'recompose'

import Home from './Home'

import { createAsync } from '../../trips/actions'

const mapDispatchToProps = dispatch => ({
  createTrip: () => dispatch(createAsync()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Home)
