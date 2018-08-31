import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import DriverSignIn from './DriverSignIn'
import { driverMode } from '../actions'

const mapDispatchToProps = dispatch => ({
  driverMode: () => dispatch(driverMode()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.driverMode()
    },
  })
)(DriverSignIn)
