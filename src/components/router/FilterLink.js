import React from 'react'

export const FilterLink = (props) => {
  if (props.currentVisibilityFilter === props.filter) {
    return <span>{props.filterName}</span>
  }
  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        props.store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter
        });
      }}>
      {props.filterName}
    </a>
  )
}

FilterLink.propTypes = {
  filter: React.PropTypes.string.isRequired,
  filterName: React.PropTypes.string.isRequired,
  store: React.PropTypes.object.isRequired, // bad! Refactor later?
  currentVisibilityFilter: React.PropTypes.string.isRequired
}
