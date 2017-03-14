var React = require('react')

var SortBarItems = React.createClass({
      render: function() {
      return (
        <li className={this.props.currentView === this.props.view ? "active" : ""}>
          <a href="#" onClick={() => this.props.viewChanged(this.props.view)}>{this.props.title}</a>
        </li>
      )
    }
  })

module.exports = SortBarItems;
