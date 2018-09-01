import { connect } from 'react-redux'

import TripsList from './TripsList'

const mapStateToProps = state => ({
  trips: Object.values(state.entities.trips),
})

export default connect(mapStateToProps)(TripsList)
