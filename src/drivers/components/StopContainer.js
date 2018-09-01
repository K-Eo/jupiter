import { connect } from 'react-redux'

import Stop from './Stop'
import { listenOff } from '../actions'

const mapStateToProps = state => state.driver

const mapDispatchToProps = dispatch => ({
  stopListen: () => dispatch(listenOff()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stop)
