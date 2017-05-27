import React from 'react'

export const FilterLink = ({
  currentVisibilityFilter,
  filter,
  filterName,
  onFilterLinkClick
}) => {
  if (currentVisibilityFilter === filter) {
    return <span>{filterName}</span>
  }
  return (
    <a
      href='#'
      onClick={onFilterLinkClick}
    >
      {filterName}
    </a>
  )
}

FilterLink.propTypes = {
  filter: React.PropTypes.string.isRequired,
  filterName: React.PropTypes.string.isRequired,
  currentVisibilityFilter: React.PropTypes.string.isRequired,
  onFilterLinkClick: React.PropTypes.func.isRequired
}
