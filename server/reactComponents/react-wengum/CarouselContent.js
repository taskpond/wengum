var React = require('react/addons');
var Reflux = require('reflux');
var WengumAction = require('./actions/WengumActions');
var WengumStore = require('./stores/WengumStore');
var _ = require('lodash');

var CarouselContent = React.createClass({

  mixins: [Reflux.ListenerMixin],

  componentDidMount: function() {
    this._initWengum();
    this.listenTo(WengumStore, this._onChange);
  },

  _initWengum: function(){
    /**
     * Pagination circle
     */
    $('.pagination-circle-container li').first().addClass('active');

    /**
     * Carousel Item
     */
    var $container= $('.content-container');
    $container.find('.carousel-content').css('left', '0px');
    $container.find('.carousel-content .carousel-item').first().addClass('active');
    $.each($container.find('.carousel-content .carousel-item'), function(index, item){
      $(item).css('left', index * $container.width() + 'px');
    });
  },
  _onChange: function(cb){
    var $nextItem = null, $nextBG = null, $nextCircle = null;
    var $section = $('.container');
    switch(cb.state){
      case 'click':
        var itemIndex = $(cb.id).index();
        $section.find('.active').toggleClass('active');
        $section.find('[data-index="'+itemIndex+'"]').addClass('active');
        $section.find('.carousel-content').css('left', '-' + $('.carousel-content .active').css('left'));
        break;
      case 'index':
        var itemIndex = cb.index;
        if(_.isEqual($section.find('.active').first().next().index(), -1)){
          itemIndex = 0;
        }
        else{
          ++itemIndex;
        }
        $section.find('.active').toggleClass('active');
        $section.find('[data-index="'+itemIndex+'"]').addClass('active');
        $section.find('.carousel-content').css('left', '-' + $('.carousel-content .active').css('left'));
        break;
    }
  },
  renderChildren: function () {
    var _this = this;
    return React.Children.map(this.props.children, function (child, index) {
      return  <div id={'creation-0' + (index+1)} className="carousel-item" data-index={index}>
                {child}
              </div>
    }.bind(this))
  },
  renderNav: function(){
    var _this = this;
    return React.Children.map(this.props.children, function (child, index) {
      return  <li data-index={index}>
                <a href={'#creation-0' + (++index)} className="circle" onClick={this._onClick}>Page 1</a>
              </li>
    }.bind(this))
  },
  _onClick: function(e){
    e.preventDefault();
    $target = $(e.target);
    if($target.hasClass('carousel-next') || $target.hasClass('next-arrow')){
      WengumAction.goToIndex($('.pagination-circle-container .active').index());
    }
    else if($target.hasClass('circle')){
      WengumAction.goTo($target.attr('href'));
    }
  },
  render: function(){
    return (
      <div className="container">
        <div className="content-container shadow-z-2">
          <div className="carousel">
            <div className="carousel-scroll">
              <div className="carousel-content">
                {this.renderChildren()}
              </div>
            </div>
            <div className="carousel-nav" aria-hidden="true">
              <ul className="pagination-circle-container">
                {this.renderNav()}
              </ul>
              <div className="pagination-button-container">
                <div className="next-container">
                  <a href="#" className="next-button carousel-next" onClick={this._onClick}>
                    <span className="next-arrow" onClick={this._onClick}></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CarouselContent;