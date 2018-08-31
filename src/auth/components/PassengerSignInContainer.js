import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import PassengerSignIn from './PassengerSignIn'
import { passengerMode } from '../actions'

const mapDispatchToProps = dispatch => ({
  passengerMode: () => dispatch(passengerMode()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.passengerMode()
    },
  })
)(PassengerSignIn)
