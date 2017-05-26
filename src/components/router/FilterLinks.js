import React from 'react'
import { FilterLink } from './FilterLink'

export const FilterLinks = (props) => {
  const {
    store,
    currentVisibilityFilter
  } = props;

  return (
    <div>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        filterName='All'
        store={store}
        currentVisibilityFilter={currentVisibilityFilter}/>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        filterName='Active'
        store={store}
        currentVisibilityFilter={currentVisibilityFilter}/>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        filterName='Completed'
        store={store}
        currentVisibilityFilter={currentVisibilityFilter}/>
    </div>
  )
}

FilterLinks.propTypes = {
  store: React.PropTypes.object.isRequired, // bad! Refactor later?
  currentVisibilityFilter: React.PropTypes.string.isRequired
}
