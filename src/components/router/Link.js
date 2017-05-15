import React, {Component} from 'react'

export class Link extends Component {
  // consume context
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }
  // updating the URL and history
  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to)
  }
  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return <a href="#" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
}
