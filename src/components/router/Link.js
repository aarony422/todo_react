import React from 'react'

// Link is a presentational component that specifies the appearance of the link
// based on whether it is active or not. 
export const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
}
