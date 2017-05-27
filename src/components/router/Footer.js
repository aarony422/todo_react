import React from 'react'
import { FilterLink } from './FilterLink'

export const Footer = ({
  currentVisibilityFilter,
  onFilterLinkClick
}) => {
  return (
    <div>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        filterName='All'
        onFilterLinkClick={() => onFilterLinkClick('SHOW_ALL')}
        currentVisibilityFilter={currentVisibilityFilter}/>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        filterName='Active'
        onFilterLinkClick={() => onFilterLinkClick('SHOW_ACTIVE')}
        currentVisibilityFilter={currentVisibilityFilter}/>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        filterName='Completed'
        onFilterLinkClick={() => onFilterLinkClick('SHOW_COMPLETED')}
        currentVisibilityFilter={currentVisibilityFilter}/>
    </div>
  )
}

Footer.propTypes = {
  onFilterLinkClick: React.PropTypes.func.isRequired, // bad! Refactor later?
  currentVisibilityFilter: React.PropTypes.string.isRequired
}
