import React, {Component} from 'react'

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }
  handleLinkClick = (route) => {
    // since our property name and variable name are equal, we can use this
    // shorthand
    this.setState({route})
    history.pushState(null, '', route)
  }
  // React's context mechanism
  // expose the types we want available to our child components
  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }
  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
