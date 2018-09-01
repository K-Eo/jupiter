import { connect } from 'react-redux'

import Trip from './Trip'

const mapStateToProps = (state, ownProps) => state.entities.trips[ownProps.id]

export default connect(mapStateToProps)(Trip)
