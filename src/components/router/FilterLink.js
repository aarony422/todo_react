import {Link} from './Link'
import { connect } from 'react-redux'
import { setVisibilityFilterAction } from '../../lib'

// props of the child prop is passed in as the second parameter
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilterAction(ownProps.filter))
    }
  }
}

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
