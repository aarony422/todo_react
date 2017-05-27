import React from 'react'
import {Link} from './Link'

// Container Component that provides the data and behavior for Link, the presentational
// component. When FilterLink mounts, it subscribes to the store, and re-renders
// when the store changes. This is because this component actually uses the store's state
// when rendering. We then delegate the rendering to Link.
export class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      // re-render this component only, as opposed to the entire app
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = props.store.getState();
    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() => {
          props.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }}
      >
      {props.children}
      </Link>
    );
  }
}

FilterLink.propTypes = {
  store: React.PropTypes.object.isRequired
}
