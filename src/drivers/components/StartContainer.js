import { connect } from 'react-redux'

import Start from './Start'
import { listenOn } from '../actions'

const mapStateToProps = state => state.driver

const mapDispatchToProps = dispatch => ({
  startListen: () => dispatch(listenOn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start)
