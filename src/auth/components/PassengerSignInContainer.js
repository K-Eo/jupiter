import { compose } from 'recompose'
import { connect } from 'react-redux'

import PassengerSignIn from './PassengerSignIn'
import { driverMode } from '../actions'

const mapDispatchToProps = dispatch => ({
  driverMode: () => dispatch(driverMode()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(PassengerSignIn)
