import { connect } from 'react-redux'
import { compose } from 'recompose'

import Settings from './Settings'
import { logoutAsync } from '../../auth/actions'

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAsync()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Settings)
