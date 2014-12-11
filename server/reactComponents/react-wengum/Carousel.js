var React = require('react');

var Carousel = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  render: function(){
    return (
      <div className="main">
        <div className="section sub shadow-z-2">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Carousel;