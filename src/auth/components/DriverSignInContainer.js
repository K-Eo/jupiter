import { compose } from 'recompose'
import { connect } from 'react-redux'

import DriverSignIn from './DriverSignIn'
import { passengerMode } from '../actions'

const mapDispatchToProps = dispatch => ({
  passengerMode: () => dispatch(passengerMode()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(DriverSignIn)
