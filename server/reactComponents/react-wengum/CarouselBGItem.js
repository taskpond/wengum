var React = require('react/addons');
var Reflux = require('reflux');
var WengumStore = require('./stores/WengumStore');
var _ = require('lodash');

var CarouselBGItem = React.createClass({
  mixins: [Reflux.ListenerMixin],

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  componentDidMount: function() {
    this._initWengum();

    this.listenTo(WengumStore, this._onChange);
  },

  /**
   * Carousel Background
   */
  _initWengum: function(){
    var $section = $('.carousel-bg');
    $section.css('left', '0px');
    $section.find('.carousel-bg-item').first().addClass('active');
    $.each($section.find('.carousel-bg-item'), function(index, item){
      $(item).css('left', index * $section.width() + 'px');
    });
  },
  _onChange: function(cb){
    var $nextItem = null, $nextBG = null, $nextCircle = null;
    var $section = $('.carousel-bg');
    switch(cb.state){
      case 'click':
        var itemIndex = $(cb.id).index();
        $section.find('.active').toggleClass('active');
        $section.find('[data-index="'+itemIndex+'"]').addClass('active');

        $section.css('left', '-' + $section.find('.active').css('left'));
        break;
      case 'index':
        var itemIndex = cb.index;
        if(_.isEqual($section.find('.active').next().index(), -1)){
          itemIndex = 0;
        }
        else{
          ++itemIndex;
        }
        $section.find('.active').toggleClass('active');
        $section.find('[data-index="'+itemIndex+'"]').addClass('active');

        $section.css('left', '-' + $section.find('.active').css('left'));
        break;
    }
  },
  renderChildren: function () {
    return React.Children.map(this.props.children, function (child, index) {
      if(child.type === 'img'){
        return  <div className="carousel-bg-item" data-index={index}>
                  {child}
                </div>
      }
    }.bind(this))
  },
  render: function(){
    return (
      <div className="carousel-bg">
        {this.renderChildren()}
      </div>
    );
  }
});

module.exports = CarouselBGItem;