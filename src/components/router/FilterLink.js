import React from 'react'
import {Link} from './Link'

// Container Component that provides the data and behavior for Link, the presentational
// component. When FilterLink mounts, it subscribes to the store, and re-renders
// when the store changes. This is because this component actually uses the store's state
// when rendering. We then delegate the rendering to Link.
export class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() => {
          store.dispatch({
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

// Define context types that will be received from parent
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
