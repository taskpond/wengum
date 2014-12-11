var React = require('react/addons');

var CarouselItem = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  renderChildren: function () {
    var _this = this;
    return React.Children.map(this.props.children, function (child, index) {
      return  <div>
                <h3 dangerouslySetInnerHTML={{__html: _this.props.header}} />
                {child}
              </div>
    }.bind(this))
  },
  render: function(){
    return (
      <div className="carousel-item-content">
        {this.renderChildren()}
      </div>
    );
  }
});

module.exports = CarouselItem;